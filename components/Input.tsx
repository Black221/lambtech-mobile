import useDebounce from "@/hooks/useDebounce";
import { useState, useEffect } from "react";
import { TextInput, KeyboardType, TextInputProps } from "react-native";
import { View } from "react-native-animatable";

export default function Input({
	getValue,
	placeholder,
	keyboardType = "default",
	debounceValue = 500,
	...rest
}: {
	getValue: (value: string) => void;
	placeholder: string;
	debounceValue?: number;
	keyboardType?: KeyboardType;
} & TextInputProps) {
	const [value, setValue] = useState<string>("");
	const debouncedValue = useDebounce(value, debounceValue);

	// Use useEffect to call getValue only when debouncedValue changes
	useEffect(() => {
		getValue(debouncedValue);
	}, [debouncedValue]);

	return (
		<View
			style={{
				flexDirection: "row",
				width: "90%",
				height: 50,
				borderWidth: 1,
				borderColor: "#16C59B",
				borderRadius: 10,
				justifyContent: "center",
				alignItems: "center",
				marginVertical: 6,
			}}
		>
			<TextInput
				keyboardType={keyboardType}
				style={{
					width: "100%",
					height: "100%",
					textAlign: "left",
					paddingHorizontal: 10,
				}}
				onChange={(e) => setValue(e.nativeEvent.text)}
				placeholder={placeholder}
				value={value}
				{...rest}
			/>
		</View>
	);
}
