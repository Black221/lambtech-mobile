// components/LanguageSwitcher.tsx
import React, { useState } from "react";
import {
	View,
	Text,
	Modal,
	TouchableOpacity,
	StyleSheet,
	FlatList,
} from "react-native";
import I18n from "../i18n";

interface LanguageSwitcherProps {
	onLanguageChange: (language: string) => void;
}

const languages = [
	{ label: "English", value: "en" },
	{ label: "Français", value: "fr" },
	// Add more languages here
];

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
	onLanguageChange,
}) => {
	const [selectedLanguage, setSelectedLanguage] = useState(I18n.locale);
	const [modalVisible, setModalVisible] = useState(false);

	const handleLanguageChange = (language: string) => {
		I18n.locale = language;
		setSelectedLanguage(language);
		onLanguageChange(language);
		setModalVisible(false);
	};

	return (
		<View style={styles.container}>
			<Text>{I18n.t("select_language")}</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => setModalVisible(true)}
			>
				<Text style={styles.buttonText}>
					{
						languages.find(
							(lang) => lang.value === selectedLanguage
						)?.label
					}
				</Text>
			</TouchableOpacity>
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => setModalVisible(false)}
			>
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						<FlatList
							data={languages}
							keyExtractor={(item) => item.value}
							renderItem={({ item }) => (
								<TouchableOpacity
									style={styles.modalItem}
									onPress={() =>
										handleLanguageChange(item.value)
									}
								>
									<Text style={styles.modalItemText}>
										{item.label}
									</Text>
								</TouchableOpacity>
							)}
						/>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 20,
	},
	button: {
		padding: 10,
		backgroundColor: "#ddd",
		borderRadius: 5,
		marginTop: 10,
	},
	buttonText: {
		textAlign: "center",
	},
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	modalContent: {
		width: 300,
		backgroundColor: "white",
		borderRadius: 10,
		padding: 20,
	},
	modalItem: {
		padding: 10,
	},
	modalItemText: {
		fontSize: 18,
	},
});

export default LanguageSwitcher;
