import { useEffect, useState } from "react";
import { View, YStack, Text, Button } from "tamagui";
import InputCode from "../components/InputCode";
import Btn from "../components/Btn";
import { Link } from "@react-navigation/native";

const Authenticate = ({
	navigation,
	route,
}: {
	navigation: any;
	route: any;
}) => {
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

	return (
		<YStack
			space={"$6"}
			h={"100%"}
			paddingVertical={"$4"}
			paddingHorizontal={"$2"}
		>
			<YStack justifyContent="center" alignItems="center">
				<Text fontSize={28}>Entrer le code de</Text>
				<Text fontSize={28}>validation</Text>
				<Text>Entrez les 4 chiffres que nous avons envoyés via le</Text>
				<Text>Numéro de téléphone {route.params.phone}</Text>
			</YStack>

			<InputCode onSubmit={onSubmit} reset={resetCode} />

			<View space="$3">
				{canResend ? (
					<Button>
						<Text fontSize={18} color={"black"}>
							Renvoyer le code
						</Text>
					</Button>
				) : (
					<Text textAlign="center" fontSize={14} color={"black"}>
						Renvoyer le code dans {timer} secondes
					</Text>
				)}
				<Btn
					label="Valider"
					disabled={!activeBtn}
					action={() => {
						console.log("code: ", code);
						navigation.navigate("TabScreen");
					}}
				/>
			</View>
		</YStack>
	);
};

export default Authenticate;
