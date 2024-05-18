import { useState, useRef, useEffect } from "react";
import { YStack, View, Text, Input } from "tamagui";

const InputCode = ({
	onSubmit = (s: string) => {},
	reset = () => {},
	onChange = (s: string) => {},
}: {
	onSubmit: (s: string) => void;
	reset: () => void;
	onChange: (s: string) => void;
}) => {
	const [code, setCode] = useState(["", "", "", ""]);
	const firstRef = useRef(null);
	const secondRef = useRef(null);
	const thirdRef = useRef(null);
	const fourthRef = useRef(null);

	const refs = [firstRef, secondRef, thirdRef, fourthRef];

	const switchInput = (index: number) => {
		if (index < refs.length) {
			const nextRef = refs[index];
			if (nextRef?.current) {
				(nextRef.current as HTMLElement).focus();
			}
		}
	};

	useEffect(() => {
		const joinedCode = code.join("");
		if (joinedCode.length === 4) {
			onSubmit(joinedCode);
		} else {
			reset();
		}
		onChange(joinedCode);
	}, [code, onSubmit, reset, onChange]);

	return (
		<View
			flexDirection="row"
			gap="$4"
			justifyContent="center"
			alignItems="center"
		>
			{refs.map((ref, index) => (
				<Input
					key={index}
					fontSize="$6"
					width="$6"
					height="$6"
					borderRadius="$2"
					textAlign="center"
					maxLength={1}
					keyboardType="numeric"
					autoFocus={index === 0}
					ref={ref}
					focusStyle={{
						borderColor: "#16C59B",
						borderWidth: 2,
					}}
					onChange={(e: any) => {
						const newText = e.nativeEvent.text;
						setCode((prevCode) => {
							const newCode = [...prevCode];
							newCode[index] = newText;
							return newCode;
						});
						if (newText) {
							switchInput(index + 1);
						} else {
							switchInput(index - 1);
						}
					}}
				/>
			))}
		</View>
	);
};

export default InputCode;
