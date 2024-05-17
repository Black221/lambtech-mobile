import { View, Text, Image, XStack, YStack } from "tamagui";
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import { useEffect, useRef, useState } from "react";
import { Button } from "react-native";


export const DisplayImage = (props: any) => {

    const { uri, title, description, styles } = props;

    return (
        <YStack style={styles && styles.container ? styles.container : {

        }} overflow="hidden" alignItems="center">
            <Image style={styles && styles.media ? styles.media : {
                width: 200,
                height: 200,

            }} source={
                uri ? {uri} : require("@assets/splash.png")
            } />
            <View style={styles && styles.info ?  styles.info : {
                display: "hidden"
            }}>
                {title && <Text>{title}</Text>}
                {description && <Text>{description}</Text>}
            </View>
        </YStack>
    )
}


export const DisplayVideo = (props: any) => {

    const { uri, title, description, styles } = props;

    const video = useRef<any>(null);
    const [status, setStatus] = useState<AVPlaybackStatus>();
  
    return (
        <View style={styles ? styles.container : {}}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={styles.buttons}>
                <Button
                    title={status ? 'Pause' : 'Play'}
                    onPress={() =>
                        status ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View>
            <View style={styles.info}>
                {title && <Text>{title}</Text>}
                {description && <Text>{description}</Text>}
            </View>
        </View>
    )
}

export const DisplayAudio = (props: any) => {

    return (
        <View>

        </View>
    )
}


export const DisplayMultiMedia = ({
    media,
    styles
}: {
    media: any[],
    styles?: any
}) => {

    const [images, setImages] = useState<any[]>([]);
    const [videos, setVideos] = useState<any[]>([]);
    const [audios, setAudios] = useState<any[]>([]);
    const [others, setOthers] = useState<any[]>([]);

    const [currentMedia, setCurrentMedia] = useState<any>(null);
    const [nextMedia, setNextMedia] = useState<any>(null);

    useEffect(() => {
        setImages(media.filter(m => m.type === "image"));
        setVideos(media.filter(m => m.type === "video"));
        setAudios(media.filter(m => m.type === "audio"));
        setOthers(media.filter(m => m.type === "other"));

        if (media.filter(m => m.type === "image").length > 0) {
            setCurrentMedia(media.filter(m => m.type === "image")[0]);
        } else if (media.filter(m => m.type === "video").length > 0) {
            setCurrentMedia(media.filter(m => m.type === "video")[0]);
        } else if (media.filter(m => m.type === "audio").length > 0) {
            setCurrentMedia(media.filter(m => m.type === "audio")[0]);
        } else if (media.filter(m => m.type === "other").length > 0) {
            setCurrentMedia(media.filter(m => m.type === "other")[0]);
        }

        setNextMedia(media.filter(m => m !== currentMedia)[0]);

    }, [media]);

    return (
        <XStack overflow={"hidden"} w={"100%"} justifyContent="space-around" >
            <View width={"45%"}>
                { currentMedia && currentMedia.type === "image" && <DisplayImage {...currentMedia} styles={styles} /> }
                { currentMedia && currentMedia.type === "video" && <DisplayVideo {...currentMedia} styles={styles} /> }
                { currentMedia && currentMedia.type === "audio" && <DisplayAudio {...currentMedia} styles={styles} /> }
                { currentMedia && currentMedia.type === "other" && <DisplayImage {...currentMedia} styles={styles} /> }
            </View>
            <View width={"45%"} opacity={0.4} position="relative"  alignItems="center" justifyContent="center">

                <Text position="absolute" fontSize={40} fontWeight={"bold"} zIndex={10} color={"black"} opacity={1}>+{media.length - 1}</Text>

                { nextMedia && nextMedia.type === "image" && <DisplayImage {...nextMedia} styles={styles} /> }
                { nextMedia && nextMedia.type === "video" && <DisplayVideo {...nextMedia} styles={styles} /> }
                { nextMedia && nextMedia.type === "audio" && <DisplayAudio {...nextMedia} styles={styles} /> }
                { nextMedia && nextMedia.type === "other" && <DisplayImage {...nextMedia} styles={styles} /> }
            </View>
        </XStack>
    )
}


export const RenderMedia = ({
    media,
    styles
}: {
    media: {type: string, uri: string},
    styles?: any
}) : any => {

    if (media.type === "image") {
        return <DisplayImage {...media} styles={styles} />
    } else if (media.type === "video")  {
        return <DisplayVideo {...media} styles={styles} />
    } else if (media.type === "audio") {
        return <DisplayAudio {...media} styles={styles} />
    } else {
        return <Text> Other </Text>
    }
}