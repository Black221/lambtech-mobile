import { useState, useEffect } from 'react';
import { Button } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';

interface BtnProps {
    label: string,
    disabled: boolean,
    action: () => void
}

const Btn = ({label, disabled , action} : BtnProps) => {    
    
    const btnStyle = {
        padding: "0",
        borderRadius: "$6",
        height: "$5",
        color: "white",
        fontSize: "$6",
        fontWeight: "700",
    }

    const [active, setActive] = useState(!disabled);
    useEffect(() => {
        setActive(!disabled);
    }, [disabled])
    

    return (
        //@ts-ignore
        <Button disabled={!active} bg={!active ? "gray" : "white"} {...btnStyle} onPress={ action } >
            {active && <LinearGradient
                borderRadius={ "$6" }
                position='absolute'
                width={"100%"} height={"100%"}
                colors={['#61E3FF', '#6764FF']}
                start={[1, 0]}
                end={[1, 1]}
            />}
            { label }
        </Button>
    )

}

export default Btn;