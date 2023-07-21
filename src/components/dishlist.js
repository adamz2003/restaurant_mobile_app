import React, { useState, useEffect, useContext } from 'react'
import { View, Modal, ScrollView, Text, TouchableOpacity, Pressable, Image, TextInput, Alert } from 'react-native';
import { dish1, prev, chk_fal, chk_tru } from '../assets/images';
import { DataContext } from '../context/dataContext';
import { FilterContext } from '../context/filterContext';
import { dishArrays, sideList, drinkList } from '../utils/dishData';
import SearchEngin from '../utils/searchEngin';
import Counter from './include/counter';

function Dishlist(props) {
    const { dishlist, orderlist, setOrderlist } = useContext(DataContext);
    const { searchword } = useContext(FilterContext)
    const [modalDetailVisible, setDetailModalVisible] = useState(false);
    const [_dishlist, setDishs] = useState(dishlist);
    const [ selDish, setSelDish ] = useState({});

    const text = "(Max 3)"

    const gotoStart = () => {
        setDetailModalVisible(false)
    }

    const filterengin = (props) => {
        var filterType = 'dish' + (props.dishIndex % 5 + 1);
        var midtmp = []
        dishlist.forEach((ele,idx) => {
            if(ele.type === filterType){
                midtmp.push(ele);
            }
        })

        if(searchword === "") {
            return midtmp;
        } else {
            return SearchEngin(midtmp, ['title','price', 'description', 'type'], searchword)
        }
    }

    const openAddCartModal = (ele) => {
        setSelDish(ele)
        setDetailModalVisible(true);
    }

    const closeAddCartmodal = () => {
        setOrderlist((prev) => [...prev, selDish])
        setDetailModalVisible(false)
    }

    useEffect(()=>{
        setDishs(filterengin(props))
    }, [props,searchword]);
    

    return (
        <ScrollView>
            <View className="flex flex-row flex-wrap">
                {
                    _dishlist.map((ele, idx) =>
                        <View key={idx} className="w-[25vw] animate-fadeIn">
                            <View  className="px-[1.8vw] py-[1.8vh]">
                                <TouchableOpacity onPress={() => openAddCartModal(ele)}>
                                    <View className="pb-[1.3vh]">
                                        <Image source={ele.img} className="w-full h-[17vw] rounded-[1.6vh]" resizeMode="contain" />
                                    </View>
                                    <View>
                                        <View className="flex flex-row items-center w-full justify-between pb-[0.8vh]">
                                            <Text className="text-[1.8vh] leading-[2.5vh] text-[#222222]">{ele.title}</Text>
                                            <Text className="text-[1.8vh] leading-[2.5vh] text-[#b2ba21]">{ele.price}</Text>
                                        </View>
                                        <Text className="w-full text-left text-[#ACACAC] leading-[1.7vh] text-[1.6vh]">
                                            {ele.description}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }

                <Modal animationType="slide" transparent={true} visible={modalDetailVisible} onRequestClose={() => {
                    setDetailModalVisible(!modalDetailVisible);
                }}>

                    <ScrollView className="w-full flex">
                        <View className="w-full bg-[#000] bg-[#000000d9] items-center">
                            <View className="absolute top-[7.7vh] left-[7.1vh]">
                                <Pressable className="w-[6.4vh] h-[6.4vh] rounded-full bg-white justify-center items-center" onPress={gotoStart}>
                                    <Image source={prev} className="w-[3.2vh] h-[3.2vh]" resizeMode="contain"></Image>
                                </Pressable>
                            </View>

                            <View className="justify-between w-[60.68vw] mt-[6.07vw] bg-[#fff] px-[3.66vw] py-[2.56vw] divide-solid divide-y divide-[#243c5a]">
                                <View>
                                    <View className="flex flex-row justify-between ">
                                        <View className="mr-[2.56vw]">
                                            <Image source={dish1} className="h-[16.1vw] w-[20.5vw]" resizeMode='contain'></Image>
                                        </View>
                                        <View className="w-[30.16vw] justify-center ">
                                            <Text className="text-[2.12vw] leading-7 font-blod pb-[1.17vw]">Stream Wontons Long Title</Text>
                                            <Text className="text-[1.17vw] font-[1.61vw] leading-[1.61vw]">Extra-thin corn tostada chips made fresh daily, Served with fresh salsa. Extra thin corn tostada chips made fresh daily. Served with fresh salsa</Text>
                                        </View>
                                    </View>

                                    <View className="flex flex-row h-[4.61vw] w-[53.68vw] justify-between">
                                        <View className="flex flex-row w-[13.01vw] justify-between">
                                            <Counter size="lg"></Counter>
                                        </View>
                                        <View className="w-[12.37vw]">
                                            <Text className="text-[3.37vw] text-[#5A5A5A] leading-[4.61vw] font-[700]">$6.99</Text>
                                        </View>
                                    </View>

                                    <View className="flex">
                                        <View className="pb-[1.6vw]">
                                            <View className="pb-[1.17vw]">
                                                <Text className="text-[1.17vw] font-[700] leading-[1.61VW] text-[#222222]">Select Size</Text>
                                            </View>
                                            <View>
                                                <TextInput className="bg-[#F5F5F5] rounded-[10px] w-[53.68vw] h-[3.66vw] px-[1.17vw]"></TextInput>
                                            </View>
                                        </View>
                                        <View className="pb-[2.2vw]">
                                            <View className="pb-[1.17vw]">
                                                <Text className="text-[1.17vw] font-[700] leading-[1.61VW] text-[#222222] ">Select Cone Type</Text>
                                            </View>
                                            <View>
                                                <TextInput className="bg-[#F5F5F5] rounded-[10px] w-[53.68vw] h-[3.66vw] px-[1.17vw]"></TextInput>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                <View>
                                    <View>
                                        <View className="mt-[2.2vw] static">
                                            <Text className="text-[1.17vw] text-[#222] font-[700]">Mix-ins</Text>
                                            <View className="h-[2px] w-[25px] bg-[#b2ba21] absolute bottom-[-5px] left-0"></View>
                                        </View>
                                        <View className="mt-[1.24vw]">
                                            {
                                                sideList.map((side, sidx) =>
                                                    <View className="flex flex-row justify-between py-[0.73vw]" key={sidx}>
                                                        <View className="flex flex-row justify-center">
                                                            <Pressable>
                                                                <Image source={(sidx === 0 ? chk_tru : chk_fal)}></Image>
                                                            </Pressable>
                                                            <Text className="pl-[0.95vw] text-[1.17vw]">{side.title}</Text>
                                                        </View>
                                                        <Counter size="xs"></Counter>
                                                    </View>
                                                )
                                            }
                                        </View>
                                    </View>

                                    <View className="mt-[3.07vw]">
                                        <View><Text className="text-[1.17vw] text-[#222] font-[700]">Special Instructions</Text></View>
                                        <View>
                                            <TextInput editable multiline={true} numberOfLines={5} h={5} className="w-[53.68vw] h-[12.66vw] bg-[#f5f5f5] mt-[0.81vw] rounded-[10px] p-[1.17vw]" style={{textAlignVertical: 'top'}}></TextInput>
                                        </View>
                                    </View> 
                                </View>
                            </View>

                            <Pressable className="w-full h-[4.39vw] mt-[4.39vw] bg-[#b2ba21] justify-center" onPress={() => closeAddCartmodal()}>
                                <Text className="text-center text-white leading-[2.7vw] text-[1.98vw]">Add to Cart</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </Modal>
            </View>
        </ScrollView>
    )
}

export default Dishlist;