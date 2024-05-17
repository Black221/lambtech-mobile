
import { useState } from "react";
import { View, Text } from "tamagui"

export const TextDescription = ({
    text,
    styles
}: {
    styles?: {container: any; text: any, more: any},
    text: string
}) => {

    const [showMore, setShowMore] = useState<boolean>(false);

    return (
        <View style={styles && styles.container ? styles.container : {
            padding: 20
        }}>
            <Text style={styles ?  styles.text : {}}>
                {showMore ? text : text.slice(0, 120)}

                {text.length > 120 && <Text 
                    style={styles && styles.more ?  (
                        showMore ? styles.more.active : styles.more.inactive
                    ) : (
                        showMore ? {
                            color: "blue"
                        } : {
                            color: "black"
                        }
                    )}
                    onPress={() => {
                        setShowMore(!showMore)
                    }}> {showMore ? "Afficher moins" : "... Afficher plus"}
                </Text>}
            </Text>
            
        </View>
    )
}