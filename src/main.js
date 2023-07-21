import React, { useState, useRef, useEffect, useContext, useMemo } from 'react';
import { View, Text, Image, TextInput, Pressable, Button, ImageBackground, ScrollView, Alert, Dimensions } from 'react-native';
import { logo, union, search, basket } from './assets/images';

import DishList from './components/dishlist'
import CartModal from './components/modals/cartModal';
import Checkout from './components/modals/checkout';
import { DataContext } from './context/dataContext';
import { FilterContext } from './context/filterContext';

const deltaMenu = ['PASTA', 'CHICKEN SANDWICHES', 'APPETIZERS', 'SOUP AND SALADS', 'PIZZA', 'PASTA', 'CHICKEN SANDWICHES', 'APPETIZERS', 'SOUP AND SALADS', 'PIZZA']

function Main({ navigation }) {
    const { setSearchwrod } = useContext(FilterContext)
    const { orderlist } = useContext(DataContext)
    const scrollViewRef = useRef(null);
    const [cartModalVisible, setCartModalVisible] = useState(false);
    const [chkoutModalVisible, setChkoutModalVisible] = useState(false);
    const [scrollMenulist, setScrollMenulist] = useState(deltaMenu.concat(deltaMenu.concat(deltaMenu.concat(deltaMenu))))
    const gotoStart = () => {
        navigation.navigate('Home')
    }
    const [selCateTitle, setSelCateTitle] = useState(null);

    const counts = useMemo(() => {
        return orderlist.length
    }, [orderlist])

    const handleItemClick = (index) => {
        const screenWidth = Dimensions.get('window').width;
        const scrollX = index * screenWidth / 100 * 15 - screenWidth / 2 + screenWidth / 100 * 15 / 2;

        scrollViewRef.current.scrollTo({ x: scrollX, y: 0, animated: true });
        setSelCateTitle(index);
    };

    useEffect(() => {
        handleItemClick(20)
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <View className="flex flex-row py-[1.6vh] px-[6.2vh] bg-white">
                <View className="w-1/3">
                    <Pressable onPress={gotoStart}>
                        <Image className="h-[8.7vh] w-[12vh]" resizeMode="contain" source={logo}></Image>
                    </Pressable>
                </View>
                <View className="w-1/3">
                    <Text className="text-[2.8vh] self-center m-auto">Hello there 😄</Text>
                </View>
                <View className="flex flex-row items-stretch w-1/3">
                    <View className="flex flex-row self-center m-auto h-[5vh] static">
                        <TextInput placeholder='Search' onChangeText={(e) => { setSearchwrod(e) }} className="focus:border-solid rounded-[10px] focus:border-2 focus:boder-radius-[5px] focus:border-[#869198] w-[19vw] bg-[#f5f5f5] pl-[2vh]"></TextInput>
                        <Pressable className="absolute top-[1.6vh] right-[2.3vh]">
                            <Image source={search} className="h-[1.8vh] w-[1.8vh]" resizeMode="contain"></Image>
                        </Pressable>
                    </View>
                    <View className="flex flex-row self-center m-auto items-stretch">
                        <Text className="self-center m-auto pr-[2.22vh] pl-[2.77vh] leading-[3.1vh] text-[2.7vh]">Cart</Text>
                        <Pressable className="self-center m-auto" onPress={() => setCartModalVisible(true)}>
                            <Image source={basket} className="w-[4.9vh] h-[4.821vh] pr-[5.8vh] self-center m-auto">
                            </Image>
                            {
                                counts === 0 ? (
                                    <View>

                                    </View>
                                ) :
                                    (
                                        <View className={"absolute h-[3.5vh] w-[3.5vh] bg-[#b2ba21] rounded-full border-solid border-[3px] border-[#fff] items-center bottom-[-1.7vh] right-[-1.7vh]"}>
                                            <Text className="text-[1.9vh] leading-[2.3vh] text-white text-center m-auto">{counts}</Text>
                                        </View>
                                    )
                            }
                        </Pressable>
                        <CartModal visible={cartModalVisible} visibleAction={setCartModalVisible} chkAction={setChkoutModalVisible}></CartModal>
                    </View>
                </View>
            </View>

            <View>
                <ImageBackground source={union} className="h-[12.7vh] w-full" resizeMode='cover'>
                    <ScrollView ref={scrollViewRef} showsHorizontalScrollIndicator={false} className="flex flex-row h-[9vh] overflow-hidden" horizontal alwaysBounceHorizontal={true} snapToAlignment={'center'}>
                        {
                            scrollMenulist.map((ele, idx) =>
                                <View className="w-[15vw] justify-center pb-[10px]" key={idx}>
                                    <Pressable onPress={() => { handleItemClick(idx) }}>
                                        <Text className={"text-[2.5vh] leading-[2.7vh] font-[700] text-center text-[#C2C8CB] text-" + (selCateTitle === idx ? "white" : "")}>{ele}</Text>
                                    </Pressable>
                                </View>
                            )
                        }
                    </ScrollView>
                </ImageBackground>
            </View>

            <DishList dishIndex={selCateTitle} ></DishList>
            <Checkout visible={chkoutModalVisible} visibleAction={setChkoutModalVisible}></Checkout>
        </View >
    )
}

export default Main