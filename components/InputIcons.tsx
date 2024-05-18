import useDebouncedValue from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import { XStack, Input } from "tamagui";

const InputIcons = (
	icons: { left: JSX.Element | null; right: JSX.Element | null },
	data: string,
	getData: (value: string) => void
) => {
	const debounced = useDebouncedValue(data, 500);

	useEffect(() => {
		getData(debounced);
	}, [debounced]);

	return (
		<XStack
			paddingHorizontal={"$3"}
			paddingVertical={"$2.5"}
			space={"$3"}
			alignItems="center"
			backgroundColor={"white"}
		>
			{icons.left}
			<Input
				placeholder="Message"
				flex={1}
				value={data}
				onChange={(e) => getData(e.nativeEvent.text)}
			/>
			{icons.right}
		</XStack>
	);
};

export default InputIcons;
