import React from 'react';
import { Text, View, ImageBackground, Image, Pressable } from 'react-native';
import { mainLogo, bgimg } from './assets/images'

function Start({navigation}) {
    const gotoLogin = () => {
        navigation.navigate('Login')
    }
    return(
        <View className="flex-1">
            <ImageBackground source={bgimg} className="flex-1 w-full static">
                <View className="w-full h-[32.6vh] mt-[12.2vh] items-center justify-center bg-white opacity-90">
                    <Image source={mainLogo} className="w-[35.6vh] h-[26vh]"></Image>
                </View>
                <Pressable className="bg-[#b2ba21] w-full items-center justify-center absolute h-[12vh] bottom-[5vh]" onPress={gotoLogin}>
                    <Text className="text-[4vh] tracking-[0.1vh] leading-[5.4vh] font-[600] text-[#fff]">{"TAP TO START >"}</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export default Start;