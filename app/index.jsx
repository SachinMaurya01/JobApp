import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
    Nearbyjobs,
    Popularjobs,
    ScreenHeaderBtn,
    Welcome,
} from "../components";

const index = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%" />
                ),
                headerRight: () => (
                    // <TouchableOpacity onPress={() =>{  }}>
                        <ScreenHeaderBtn iconUrl={images.profile} dimensions="100%" handlePress={()=>{router.push("/profile");}} />
                    // </TouchableOpacity>
                )
            }} />

            <ScrollView>
                <View style={{
                    flex: 1, padding: SIZES.medium,
                }}>
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                console.log(searchTerm);
                                router.push(`/search/${searchTerm}`)
                            }
                        }} />
                    {/* <Popularjobs /> */}
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default index