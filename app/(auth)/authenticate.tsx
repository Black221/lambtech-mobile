import { useEffect, useState } from "react";
import { View, YStack, Text, Button, XStack } from "tamagui";
import InputCode from "@/components/InputCode";
import { Alert } from "react-native";
import FeatherIcon from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Authenticate = () => {
	const navigation = useNavigation();
	const onSubmit = (code: string) => {
		console.log(code);
		setCode(code);
		setActiveBtn(true);
	};

	const [code, setCode] = useState("");
	const [activeBtn, setActiveBtn] = useState(false);

	const [canResend, setCanResend] = useState(false);
	const [timer, setTimer] = useState(30);
	useEffect(() => {
		if (timer > 0) {
			setTimeout(() => {
				setTimer(timer - 1);
			}, 1000);
		} else {
			setCanResend(true);
		}
	}, [timer]);

	useEffect(() => {
		if (code.length === 4) {
			setActiveBtn(true);
		} else {
			setActiveBtn(false);
		}
	}, [code]);

	const resetCode = () => {
		setCode("");
		setActiveBtn(false);
	};

	function resendCode() {
		if (!canResend) return;
		else {
			setCanResend(false);
			setTimer(30);
		}
	}

	return (
		<YStack
			h={"100%"}
			paddingVertical={"$10"}
			paddingHorizontal={"$4"}
			gap={"$8"}
		>
			<XStack alignItems="center" gap={"$4"}>
				<FeatherIcon
					name="arrow-left"
					size={32}
					onPress={navigation.goBack}
				/>
				<Text fontSize={32}>Vérification</Text>
			</XStack>

			<XStack>
				<Text fontSize={20} textAlign="center">
					Veuillez saisir le code à 4 chiffres envoyé par message
				</Text>
			</XStack>

			<InputCode
				onSubmit={onSubmit}
				reset={resetCode}
				onChange={setCode}
			/>

			<View>
				<Button
					backgroundColor={activeBtn ? "#16C59B" : "lightgray"}
					color={activeBtn ? "white" : "gray"}
					fontSize={18}
					fontWeight={"bold"}
					disabled={!activeBtn}
					onPress={() => {
						Alert.alert("Clicked", "Something's been clicked");
					}}
				>
					Continuer
				</Button>

				<View py={"$3"}>
					{canResend ? (
						<TouchableOpacity onPress={resendCode}>
							<Text
								fontSize={14}
								color={"black"}
								textAlign="center"
							>
								Renvoyer le code
							</Text>
						</TouchableOpacity>
					) : (
						<Text textAlign="center" fontSize={14} color={"black"}>
							Renvoyer le code dans {timer} secondes
						</Text>
					)}
				</View>
			</View>
		</YStack>
	);
};

export default Authenticate;
