import React, {useState} from 'react'
import { Pressable, Text, Image, View, TextInput, ScrollView, Modal, Alert } from 'react-native'
import { checkflow, prev_btn, webflow1, webflow2, webflow3, paymth1, paymth2, load,  } from '../../assets/images'

function Checkout(props) {
    const [displayStt, setDisplayStt] = useState(0);

    const slideAction = (str) => {
        switch (str) {
            case 'chkflow1':
                setDisplayStt(1)
                break;
            case 'chkflow2':
                setDisplayStt(2)
                break;
            case 'chkflow3':
                setDisplayStt(3)
                break;
            case 'chkflow4':
                props.visibleAction(false);
                setDisplayStt(0)
                break;
            case 'chkflow5':
                setDisplayStt(0)
                break;
            default:
                break;
        }
    }

    const prev_btnAction = () => {
        if(displayStt > 0 || displayStt <= 5){
            setDisplayStt(displayStt - 1);
        } 
        if(displayStt === 0){
            props.visibleAction(false);
            setDisplayStt(0)
        }
    }

    if (!props.visible) {
        return;
    }
    return (
        <Modal animationType="fade" transparent={true} visible={props.visible} onRequestClose={() => {
            props.visibleAction(!props.visible);
            }}>
                <ScrollView className="w-flex">
                <View>
                {
                    displayStt === 0 ? (
                        <View className="w-full bg-[#000000b8] items-center">
                            <Pressable className="absolute top-[77px] left-[71px]" onPress={() => prev_btnAction()}>
                                <Image source={prev_btn}></Image>
                            </Pressable>
                            <View>
                                <Image source={checkflow} className="m-auto mt-[75px] "></Image>
                                <View className="w-[829px] rounded-[10px] mt-[49px] mb-[98px] bg-white">
                                    <View className="pl-[51px] pr-[45px] pt-[49px] pb-[31px]">
                                        <View className="pb-[28px]">
                                            {/* <Text className="text-[20px] leading-[27px] text-[#acacac] font-[600]">Checkout</Text> */}
                                            <Text className="text-[20px] leading-[27px] text-[#acacac] font-[600]">{props.visible}</Text>
                                        </View>
                                        <View className="pb-[20px]">
                                            <TextInput multiline={true} className="w-[729px] rounded-[10px] pl-[20px] bg-[#f5f5f5] h-[50px]" placeholder='Full Name'></TextInput>
                                        </View>
                                        <View className="pb-[35px] flex flex-row">
                                            <TextInput className="rounded-[10px] pl-[20px] bg-[#f5f5f5] w-[230px]" placeholder='Phone'></TextInput>
                                            <Pressable className="ml-[15px] w-[109.5px] h-[50px] bg-[#b2ba21] rounded-[7px] justify-center items-center">
                                                <Text className="text-white">Verify</Text>
                                            </Pressable>
                                            <TextInput className="ml-[20px] w-[230px] rounded-[10px] pl-[20px] bg-[#f5f5f5]" placeholder='OTP'></TextInput>
                                            <Pressable className="w-[109.5px] h-[50px] ml-[15px] bg-[#b2ba21]  rounded-[7px] justify-center items-center">
                                                <Text className="text-white">Submit</Text>
                                            </Pressable>
                                        </View>
                                        <View className="pb-[35px]">
                                            <TextInput className="w-[729px] h-[89px] pl-[20px] pt-[12px] bg-[#f5f5f5] rounded-[10px] text-[20px] leading-[27px] text-[#acacac] font-[600]"></TextInput>
                                        </View>
                                        <View className="pb-[28px]">
                                            <Text className="text-[20px] leading-[27px] text-[#acacac] font-[600]">Coupon Code</Text>
                                        </View>
                                        <View className="pb-[35px] flex flex-row">
                                            <TextInput className="rounded-[10px] pl-[20px] bg-[#f5f5f5] w-[488px] h-[50px]" placeholder='Biteheist2019'></TextInput>
                                            <Pressable className="ml-[60px] w-[185px] h-[50px] bg-[#b2ba21] rounded-[7px] justify-center items-center">
                                                <Text className="text-white">Submit Code</Text>
                                            </Pressable>
                                        </View>
                                        <View className="pb-[33px]">
                                            <Text className="text-[20px] leading-[27px] text-[#acacac] font-[600]">Tip</Text>
                                        </View>
                                        <View className="pb-[40px] flex flex-row items-center">
                                            <Pressable className="w-[100px] h-[56px] bg-[#b2ba21] rounded-[7px] justify-center items-center">
                                                <Text className="text-white">15%</Text>
                                            </Pressable>
                                            <Pressable className="ml-[25px] w-[100px] h-[56px] bg-[#b2ba21] rounded-[7px] justify-center items-center">
                                                <Text className="text-white">20%</Text>
                                            </Pressable>
                                            <Pressable className="ml-[25px] w-[100px] h-[56px] bg-[#b2ba21] rounded-[7px] justify-center items-center">
                                                <Text className="text-white">25%</Text>
                                            </Pressable>
                                            <Text className="ml-[43px] text-[#acacac] ">$</Text>
                                            <View className="ml-[9px]">
                                                <TextInput className="w-[321px] h-[50px] pl-[20px] pt-[15px] bg-[#f5f5f5] rounded-[8px] text-[20px] leading-[27px] text-[#acacac] font-[600]"></TextInput>
                                            </View>
                                        </View>
                                        <View className="ml-[218px] justify-center">
                                            <Pressable className="w-[291px] h-[50px] bg-[#b2ba21] rounded-[7px] justify-center items-center" onPress={() => slideAction('chkflow1')}>
                                                <Text className="text-white">PROCEED TO PAYMENT</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ) : displayStt === 1 ? (
                        <View className="w-full bg-[#000000b8] items-center">
                            <Pressable className="absolute top-[77px] left-[71px]" onPress={() => prev_btnAction()}>
                                <Image source={prev_btn}></Image>
                            </Pressable>
                            <View>
                                <Image source={webflow1} className="m-auto mt-[75px] "></Image>
                                <View className="w-[829px] rounded-[10px] mt-[46px] mb-[98px] bg-white">
                                    <View className="pl-[50px] pt-[50px] pr-[144px] pb-[60px]">
                                        <View className="pb-[41px]">
                                            <Text className="text-[20px] leading-[27px] text-[#acacac] font-[600]">Order Details</Text>
                                        </View>
                                        <View className="ml-[92px] divide-solid divide-y divide-[#E7E7E7]">
                                            <View className="flex flex-row pb-[8px] justify-between">
                                                <View className="">
                                                    <Text className="text-[16px] leading-[22px] text-[#acacac]">Items</Text>
                                                </View>
                                                <View className="pl-[101px]">
                                                    <Text className="text-[16px] leading-[22px] text-[#acacac]">Quantity</Text>
                                                </View>
                                                {/* <View className="pl-[120px]"> */}
                                                <View>
                                                    <Text className="text-[16px] leading-[22px] text-[#acacac]">Price</Text>
                                                </View>
                                            </View>
                                            <View className="flex flex-row p-[16px] justify-between">
                                                <View className="flex w-[170px]">
                                                    <View><Text className="text-[16px] font-[500] leading-[22px] text-[#5a5a5a]">Jumber Burger</Text></View>
                                                    <View><Text className="text-[12px] font-[400] leading-[16px] text-[#5a5a5a]">- Roll</Text></View>
                                                    <View><Text className="text-[12px] font-[400] leading-[16px] text-[#5a5a5a]">- Tomato Cucumber Salad</Text></View>
                                                    <View><Text className="text-[12px] font-[400] leading-[16px] text-[#5a5a5a]">- Drink 2</Text></View>
                                                </View>
                                                <View>
                                                    <Text className="text-[23px] font-[600] leading-[31px] text-[#5a5a5a]">3</Text>
                                                </View>
                                                <View>
                                                    <Text className="text-[23px] font-[600] leading-[31px] text-[#5a5a5a]">$6.99</Text>
                                                </View>
                                            </View>
                                            <View className="flex flex-row p-[16px] justify-between">
                                                <View className="flex  w-[170px]">
                                                    <View><Text className="text-[16px] font-[500] leading-[22px] text-[#5a5a5a]">Jumber Burger</Text></View>
                                                </View>
                                                <View>
                                                    <Text className="text-[23px] font-[600] leading-[31px] text-[#5a5a5a]">3</Text>
                                                </View>
                                                <View>
                                                    <Text className="text-[23px] font-[600] leading-[31px] text-[#5a5a5a]">$6.99</Text>
                                                </View>
                                            </View>
                                            <View className="flex flex-row p-[10px] justify-between">
                                                <View>
                                                    <Text className="text-[16px] leading-[22px] text-[#5a5a5a]">Subtotal</Text>
                                                </View>
                                                <View>
                                                    <Text className="text-[16px] leading-[22px] text-[#5a5a5a]">$3.25</Text>
                                                </View>
                                            </View>
                                            <View className="flex flex-row p-[10px] justify-between">
                                                <View>
                                                    <Text className="text-[16px] leading-[22px] text-[#5a5a5a]">Tax</Text>
                                                </View>
                                                <View>
                                                    <Text className="text-[16px] leading-[22px] text-[#5a5a5a]">$0.25</Text>
                                                </View>
                                            </View>
                                            <View className="flex flex-row p-[10px] justify-between">
                                                <View>
                                                    <Text className="text-[16px] leading-[22px] text-[#5a5a5a]">Fees</Text>
                                                </View>
                                                <View>
                                                    <Text className="text-[16px] leading-[22px] text-[#5a5a5a]">$0.25</Text>
                                                </View>
                                            </View>
                                            <View className="flex p-[10px] justify-between">
                                                <View className="flex flex-row pl-[20px] justify-between">
                                                    <View>
                                                        <Text className="text-[16px] leading-[22px] text-[#5a5a5a]">Online Ordering</Text>
                                                    </View>
                                                    <View>
                                                        <Text className="text-[16px] leading-[22px] text-[#5a5a5a]">$0.25</Text>
                                                    </View>
                                                </View>
                                                <View className="flex flex-row pl-[20px] justify-between">
                                                    <View>
                                                        <Text className="text-[16px] leading-[22px] text-[#5a5a5a]">Tip</Text>
                                                    </View>
                                                    <View>
                                                        <Text className="text-[16px] leading-[22px] text-[#5a5a5a]">$0.00</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View className="flex flex-row p-[5] mb-[36px] justify-between">
                                                <View>
                                                    <Text className="text-[16px] leading-[22px] text-[#5a5a5a]">Total</Text>
                                                </View>
                                                <View>
                                                    <Text className="text-[16px] leading-[22px] text-[#5a5a5a]">$10.24</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View className="justify-center ml-[205px] w-[316px] mb-[50px]">
                                            <View className="justify-center pb-[4px] mb-[45px]">
                                                <Text className="text-[20px] leading-[27px] text-[#5a5a5a] text-center">Payment</Text>
                                            </View>
                                            <View className="flex flex-row m-auto">
                                                <Image source={paymth1} className={""}></Image>
                                                <Image source={paymth2} className={"mx-[41px]"}></Image>
                                            </View>
                                        </View>
                                        <View className="ml-[170px]">
                                            <Pressable className="w-[387px] h-[70px] px-[50px] py-[20px] bg-[#b2ba21]"  onPress={() => slideAction('chkflow2')}>
                                                <Text className="text-[22px] leading-[30px] font-[700] text-white">SEND LINK VIA MESSAGE</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ) : displayStt === 2 ? (
                        <View className="w-full bg-[#000000b8] items-center">
                            <Pressable className="absolute top-[77px] left-[71px]" onPress={() => prev_btnAction()}>
                                <Image source={prev_btn}></Image>
                            </Pressable>
                            <Image source={webflow1} className="m-auto mt-[75px] "></Image>
                            <View className="w-[829px] rounded-[10px] mt-[46px] mb-[98px] bg-white">
                                <View className="pl-[50px] pt-[50px] pr-[144px] pb-[60px]">
                                    <View>
                                        <Text className="text-[20px] font-[600px] leading-[27px] text-[#ACACAC]">Order Details</Text>
                                    </View>
                                    <View className="ml-[92px] divide-solid divide-y divide-[#E7E7E7]">
                                        <View className="flex flex-row pb-[8px] justify-between">
                                            <View className="">
                                                <Text className="text-[16px] leading-[22px] text-[#acacac]">Items</Text>
                                            </View>
                                            <View className="pl-[101px]">
                                                <Text className="text-[16px] leading-[22px] text-[#acacac]">Quantity</Text>
                                            </View>
                                            {/* <View className="pl-[120px]"> */}
                                            <View>
                                                <Text className="text-[16px] leading-[22px] text-[#acacac]">Price</Text>
                                            </View>
                                        </View>
                                        <View className="flex flex-row p-[16px] justify-between">
                                            <View className="flex w-[170px]">
                                                <View><Text className="text-[16px] font-[500] leading-[22px] text-[#5a5a5a]">Jumber Burger</Text></View>
                                                <View><Text className="text-[12px] font-[400] leading-[16px] text-[#5a5a5a]">- Roll</Text></View>
                                                <View><Text className="text-[12px] font-[400] leading-[16px] text-[#5a5a5a]">- Tomato Cucumber Salad</Text></View>
                                                <View><Text className="text-[12px] font-[400] leading-[16px] text-[#5a5a5a]">- Drink 2</Text></View>
                                            </View>
                                            <View>
                                                <Text className="text-[23px] font-[600] leading-[31px] text-[#5a5a5a]">3</Text>
                                            </View>
                                            <View>
                                                <Text className="text-[23px] font-[600] leading-[31px] text-[#b2ba21]">$6.99</Text>
                                            </View>
                                        </View>
                                        <View className="flex flex-row p-[16px] justify-between">
                                            <View className="flex  w-[170px]">
                                                <View><Text className="text-[16px] font-[500] leading-[22px] text-[#5a5a5a]">Jumber Burger</Text></View>
                                            </View>
                                            <View>
                                                <Text className="text-[23px] font-[600] leading-[31px] text-[#5a5a5a]">3</Text>
                                            </View>
                                            <View>
                                                <Text className="text-[23px] font-[600] leading-[31px] text-[#b2ba21]">$6.99</Text>
                                            </View>
                                        </View>
                                        <View className="flex flex-row p-[15] mb-[36px] justify-between">
                                            <View>
                                                <Text className="text-[16px] leading-[22px] text-[#5a5a5a]">Total</Text>
                                            </View>
                                            <View>
                                                <Text className="text-[23px] leading-[31px] text-[#b2ba21]">$10.24</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View className="mb-[114px]">
                                        <Text className="text-[20px] font-[600px] leading-[27px] text-[#ACACAC]">Payments</Text>
                                    </View>
                                    <View className="pl-[170px]">
                                        <Pressable className="flex flex-row bg-[#b2ba21] w-[386px] h-[70px] items-center" onPress={() => slideAction('chkflow3')}>
                                            <Image source={load} className="ml-[40px]"></Image>
                                            <Text className="text-[22px] leading-[30px] font-[700] text-white pl-[10px]">PAYMENT IN PROGRESS</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ) : displayStt === 3 ? (
                        <View className="w-full bg-[#000000b8] items-center">
                            <Pressable className="absolute top-[77px] left-[71px]" onPress={() => prev_btnAction()}>
                                <Image source={prev_btn}></Image>
                            </Pressable>    
                            <Image source={webflow3} className="m-auto mt-[75px] "></Image>
                            <View className="w-[829px] rounded-[10px] mt-[46px] bg-white">
                                <View className="pl-[119px] pt-[44px] pr-[120px] pb-[50px]">
                                    <View className="mb-[5px]">
                                        <Text className="text-[24px] leading-[33px] font-[700] text-[#b2ba21] text-center">
                                            Johndoe, Your order has been placed successfully
                                        </Text>
                                    </View>
                                    <View className="mb-[25px]">
                                        <Text className="text-[16px] leading-[22px] font-[500] text-[#313131] text-center">Check your order details below</Text>
                                    </View>
                                    <View className="mb-[41px]">
                                        <Text className="text-[20px] leading-[27px] font-[600] text-[#acacac] text-center">Order Details</Text>
                                    </View>
                                    <View className="px-[24px] divide-solid divide-y divide-[#E7E7E7]">
                                        <View className="flex flex-row pb-[8px] justify-between">
                                            <View className="">
                                                <Text className="text-[16px] leading-[22px] text-[#acacac]">Items</Text>
                                            </View>
                                            <View>
                                                <Text className="text-[16px] leading-[22px] text-[#acacac]">Price</Text>
                                            </View>
                                        </View>
                                        <View className="flex flex-row p-[16px] justify-between">
                                            <View className="flex w-[170px]">
                                                <View><Text className="text-[16px] font-[500] leading-[22px] text-[#5a5a5a]">Jumber Burger</Text></View>
                                                <View><Text className="text-[12px] font-[400] leading-[16px] text-[#5a5a5a]">- Roll</Text></View>
                                                <View><Text className="text-[12px] font-[400] leading-[16px] text-[#5a5a5a]">- Tomato Cucumber Salad</Text></View>
                                                <View><Text className="text-[12px] font-[400] leading-[16px] text-[#5a5a5a]">- Drink 2</Text></View>
                                            </View>
                                            <View>
                                                <Text className="text-[16px] leading-[22px] text-[#b2ba21]">$6.99</Text>
                                            </View>
                                        </View>
                                        <View className="flex flex-row p-[16px] justify-between">
                                            <View className="flex  w-[170px]">
                                                <View><Text className="text-[16px] font-[500] leading-[22px] text-[#5a5a5a]">Jumber Burger</Text></View>
                                            </View>
                                            <View>
                                                <Text className="text-[16px] leading-[22px] text-[#b2ba21]">$6.99</Text>
                                            </View>
                                        </View>
                                        <View className="flex flex-row p-[10px] justify-between">
                                            <View>
                                                <Text className="text-[16px] leading-[22px] text-[#5a5a5a]">Subtotal</Text>
                                            </View>
                                            <View>
                                                <Text className="text-[16px] leading-[22px] text-[#b2ba21]">$10.24</Text>
                                            </View>
                                        </View>
                                        <View className="flex flex-row p-[10px] justify-between">
                                            <View>
                                                <Text className="text-[16px] leading-[22px] text-[#5a5a5a]">Tax</Text>
                                            </View>
                                            <View>
                                                <Text className="text-[16px] leading-[22px] text-[#b2ba21]">$1.65</Text>
                                            </View>
                                        </View>
                                        <View className="flex flex-row p-[5] mb-[36px] justify-between">
                                            <View>
                                                <Text className="text-[16px] leading-[22px] text-[#5a5a5a]">Total</Text>
                                            </View>
                                            <View>
                                                <Text className="text-[16px] leading-[22px] text-[#b2ba21]">$11.89</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View className="flex flex-row pt-[76px] pb-[140px]">
                                <Pressable className="w-[221px] h-[70px] rounded-[7px] bg-[#b2ba21] justify-center items-center"  onPress={() => slideAction('chkflow4')}>
                                    <Text className="text-[22px] leading-[30px] font-[700px] text-white text-center">I'M DONE</Text>
                                </Pressable>
                                <Pressable className="ml-[30px] w-[380px] h-[70px] rounded-[7px] bg-[#b2ba21] justify-center items-center"  onPress={() => slideAction('chkflow5')}>
                                    <Text className="text-[22px] leading-[30px] font-[700px] text-white text-center">PLACE ANOTHER ORDER</Text>   
                                </Pressable>
                            </View>
                        </View>
                    ) : ""
                }
                </View>
            </ScrollView>
        </Modal>
    )
}

export default Checkout