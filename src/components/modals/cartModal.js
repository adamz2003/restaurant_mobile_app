import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image, Pressable, Modal, Alert, ScrollView } from 'react-native';
import { down, cls_btn } from '../../assets/images';
import Counter from '../include/counter';
import { DataContext } from '../../context/dataContext';

function CartModal(props) {
    const { orderlist, setOrderlist } = useContext(DataContext)
    const [showMoreCart, setShowMoreCart] = useState(false)
    const [showOrderlist, setShowOrderlist] = useState(orderlist)

    useEffect(() => {
        setShowOrderlist(orderlist)
    }, [orderlist])

    const delfunc = (idx) => {
        setOrderlist((prev) => [
            ...prev.slice(0, idx), 
            ...prev.slice(idx + 1)
        ])
    }

    return (
        <View>
            <Modal animationType="fade" transparent={true} visible={props.visible} onRequestClose={() => {
                props.visibleAction(!props.visible);
            }}>
                <ScrollView className={"w-[630px] bg-white rounded-[10px] h-fit m-auto top-[10.642vh] right-[-2.45vh] min-h-[572px] mr-[60px]"}>
                    <View className="static pt-[38px] pr-[42px] pl-[43px] pb-[35px]">
                        <View><Text className="text-[25px] font-[700]">Your Cart</Text></View>
                        {
                            showOrderlist.length === 0 ? (
                                <View className="justify-center items-center h-[400px]">
                                    <Text className="text-[#ACACAC] font-[700] text-[40px] leading-[56px] my-[120px]">Your Cart don't exists!</Text>
                                    {/* <Pressable className="bg-[#B2BA21] rounded-[7px] w-[234px] h-[50px] justify-center items-center" onPress={()=> { props.visibleAction(false); props.chkAction(true); }}>
                                        <Text className="text-[16px] font-[700] text-[#fff] leading-[22px]">Add Cart</Text>
                                    </Pressable> */}
                                </View>
                            ) : (
                                <View>
                                    <View className="divide-solid divide-y divide-[#E7E7E7]">
                                        <View className="flex flex-row static">
                                            <View className="pl-[20px]"><Text className="text-[16px] text-[#ACACAC]">items</Text></View>
                                            <View className="pl-[243px]"><Text className="text-[16px] text-[#ACACAC]">quantity</Text></View>
                                            <View className="pl-[95px]"><Text className="text-[16px] text-[#ACACAC]">price</Text></View>
                                        </View>

                                        {
                                            showOrderlist.map((ele, idx) =>
                                                <View className="flex flex-row" key={idx}>
                                                    <View className="flex flex-row p-[10px]">
                                                        <View className="pr-[22px]">
                                                            <Image className="w-[57px] h-[45px]" source={ele.img}></Image>
                                                        </View>
                                                        <View className="w-[146px]">
                                                            <View className="pb-[6px]"><Text className="text-[16px] leading-[22px]">{ele.title}</Text></View>
                                                            <View className="pb-[5px]"><Text className="text-[12px] leading-[16px]">{"- " + (true ? "Roll" : "No Roll")}</Text></View>
                                                            <View className="pb-[5px]"><Text className="text-[12px] leading-[16px]">{"- " + "ele.side"}</Text></View>
                                                            <View className="pb-[5px]"><Text className="text-[12px] leading-[16px]">{"- " + "ele.drink"}</Text></View>
                                                        </View>
                                                    </View>
                                                    <View className="pl-[43px] pt-[13px]">
                                                        <Counter size="md"></Counter>
                                                    </View>
                                                    <View className="pl-[55px] pt-[9px]"><Text className="text-[23px] font-[600] text-[#b2ba21]">{ele.price}</Text></View>
                                                    <View className="flex justify-center ml-auto"><Pressable onPress={() => delfunc(idx)}><Image className="w-[14px] h-[14px]" source={cls_btn}></Image></Pressable></View>
                                                </View>
                                            )
                                        }
                                        <View className="flex flex-row justify-between pt-[11px] pb-[11px]">
                                            <View><Text>Subtotal</Text></View>
                                            <View><Text className="text-[#b2ba21]">$3.25</Text></View>
                                        </View>
                                        <View className="flex flex-row justify-between pt-[11px] pb-[11px]" >
                                            <View><Text>Tax</Text></View>
                                            <View><Text className="text-[#b2ba21]">0.25</Text></View>
                                        </View>
                                        <View className="flex flex-row justify-between pt-[11px] pb-[11px] ">
                                            <View>
                                                <Text>Fees</Text>
                                                <Pressable className="absolute left-[59px] bottom-[0px]" onPress={() => { setShowMoreCart(!showMoreCart) }}>
                                                    <Image source={down}></Image>
                                                </Pressable>
                                            </View>
                                            <View><Text className="text-[#b2ba21]">0.25</Text></View>
                                        </View>
                                        <View className={"flex" + (showMoreCart ? "" : "hidden")} >
                                            <View className="flex flex-row justify-between pt-[13px]">
                                                <Text>Online Ordering</Text>
                                                <Text className="text-[#b2ba21]">$0.35</Text>
                                            </View>
                                            <View className="flex flex-row justify-between py-[10px]">
                                                <Text>Tip</Text>
                                                <Text className="text-[#b2ba21]">$0.0</Text>
                                            </View>
                                        </View>
                                        <View className="flex flex-row justify-between pt-[25px]">
                                            <Pressable className="w-[205px] h-[50px] justify-center items-center rounded-7px" onPress={() => { props.visibleAction(false); props.chkAction(true); }}>
                                                <Text className="bg-[#b2ba21] w-[234px] leading-[22px] py-[14px] text-white text-[16px] text-center">CHECKOUT</Text>
                                            </Pressable>
                                            <View className="pl-[24px] pr-[23px] pb-[9px]">
                                                <Text className="text-[#b2ba21] text-[23px] leading-[31px] py-[10px]">$10.14</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        }

                    </View>
                </ScrollView>
            </Modal>
        </View>
    )
}

export default CartModal