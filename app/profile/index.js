import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { Stack, useRouter } from "expo-router";
import { ScreenHeaderBtn, NearbyJobCard } from '../../components'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { COLORS, icons, images, SIZES } from "../../constants";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const index = () => {
    const router = useRouter();
    const [Skills, setSkills] = useState(["HTML", "CSS", "Javascript", "React", "Node.js", "Typescript", "MongoDB", "Redis", "SQL", "C++"])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen options={{
                // headerShown:false,
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn
                        iconUrl={icons.left}
                        dimension='60%'
                        style={{ color: 'black', backgroundColor: 'black', padding: 5 }}
                        handlePress={() => router.back()}
                    />
                ),
            }} />

            <View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                    <Image
                        source={images.profile}
                        style={{ height: 200, width: 200, borderRadius: 100 }}
                        resizeMode="contain"
                    />
                    <Text style={{ marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>Sachin</Text>
                </View>
            </View>

            <View style={{ borderBlockColor: 'black', padding: 14, width: '96%', marginHorizontal: 'auto', marginTop: 20, borderRadius: 5, gap: 15, backgroundColor: 'rgb(228 228 244)' }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Entypo name="mail" size={24} color="black" />
                        <TextInput
                            style={{ fontSize: 18 }}
                            value="Sachin123@gmail.com"
                            // onChangeText={(text) => { setSearchTerm(text) }}
                            placeholder="Enter you email address"
                        />
                        {/* <Text style={{ fontSize: 18 }}>Sachin123@gmail.com</Text> */}
                    </View>
                    <View>
                        <MaterialIcons name="arrow-forward-ios" size={22} color="black" />
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <FontAwesome6 name="location-dot" size={24} color="black" />
                        <Text style={{ fontSize: 18 }}>Faridabad, Haryana</Text>
                    </View>
                    <View>
                        <MaterialIcons name="arrow-forward-ios" size={22} color="black" />
                    </View>
                </View>


                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Entypo name="mail" size={24} color="black" />
                        <Text style={{ fontSize: 18 }}>Sachin123@gmail.com</Text>
                    </View>
                    <View>
                        <MaterialIcons name="arrow-forward-ios" size={22} color="black" />
                    </View>
                </View>
            </View>

            <View style={{ borderBlockColor: 'black', padding: 14, width: '96%', marginHorizontal: 'auto', marginTop: 20, borderRadius: 5, gap: 15, backgroundColor: 'rgb(228 228 244)' }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <AntDesign name="profile" size={22} color="black" />
                        <Text style={{ fontSize: 18 }}>Software Developer</Text>
                    </View>
                    <View>
                        <MaterialIcons name="arrow-forward-ios" size={22} color="black" />
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <FontAwesome5 name="address-card" size={22} color="black" />
                        <View style={{ borderWidth: 1, padding: 10, width: '96%', borderRadius: 2, flexDirection: 'row', flexWrap: 'wrap', gap: 10, alignItems: 'flex-start', }}>
                            {
                                Skills.map((data, index) => (
                                    <View style={{ flex: 1, gap: 5, flexDirection: 'row', padding: 5, backgroundColor: 'rgba(255,119,84,1.00)', justifyContent: 'center', borderRadius: 50, width: 'auto' }} key={index}>
                                        <Text>{data}</Text>
                                        <AntDesign name="closecircle" size={22} color="black" />
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default index