import { YStack, Text, View, XStack, ScrollView } from 'tamagui'

import Track from '../components/Track'
import ServiceDisplay from '../components/ServiceDisplay'
import Status from '../components/Status'
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import Container from '../components/Container'
import Cover from './components/Cover';
import LocationDeliverer from '../components/LocationDeliverer';

const Home = ({ navigation } : any) => {



    return (
        <ScrollView backgroundColor={'$gray2'} >

			<Cover />

			<View space="$2" paddingHorizontal={"$2"}>

				<Container icon={<Ionicons name="pricetags-outline" size={24} color="black" />}
							title="Livraison express"
					>
						<View width={"$8"} height={'$8'} borderRadius={"$12"} backgroundColor={"white"} ></View>
						<View width={"$8"} height={'$8'} borderRadius={"$12"} backgroundColor={"white"} ></View>
						<View width={"$8"} height={'$8'} borderRadius={"$12"} backgroundColor={"white"} ></View>
						<View width={"$8"} height={'$8'} borderRadius={"$12"} backgroundColor={"white"} ></View>
						<View width={"$8"} height={'$8'} borderRadius={"$12"} backgroundColor={"white"} ></View>
				</Container>

				<Container icon={<Ionicons name="ios-timer-outline" size={24} color="black" />}
						title="Dernière commande"
				>
					<YStack backgroundColor={"white"} paddingVertical="$2" borderRadius={"$2"} space="$2" marginVertical={"$2"} >
						<ServiceDisplay icon={"shipping-fast"} title='yobanté' extra={
							<Status status="En cours" />
						}  />
						<Track location={[]} />
						<XStack space="$2" marginHorizontal={"$2"} alignItems='center' justifyContent='space-between'>
							<XStack space="$2" alignItems='flex-end'>
								<Text fontSize={"$5"} fontWeight={"800"}>Prix:</Text>
								<Text fontSize={"$7"} fontWeight={"400"}>20$</Text>
							</XStack>
							<XStack space="$0" alignItems='center' justifyContent='flex-end'>
								<Text fontSize={"$2"} fontWeight={"800"} col={"#64A4FF"}>détails</Text>
								<Ionicons name="chevron-forward-outline" size={20} color="#64A4FF" />
							</XStack>
						</XStack>
					</YStack>
				</Container>

				<Container icon={<MaterialCommunityIcons name="map-marker-star-outline" size={24} color="black" />}
						title="Lieux favoris"
				>
					<LocationDeliverer region="Cocody" address="Cité des arts" count={2} timer={10} />
					<LocationDeliverer region="Cocody" address="Cité des arts" count={2} timer={10} />
					<LocationDeliverer region="Cocody" address="Cité des arts" count={2} timer={10} />
				</Container>
				<View h={80}></View>
			</View>
    	</ScrollView>

    )
}

export default Home