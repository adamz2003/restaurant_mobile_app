import React, {useEffect, useState} from 'react'
import { TouchableHighlight , View, Text, Alert, Image } from 'react-native'
import { plus_lg, plus_xs, minus_xs, minus_lg} from '../../assets/images'

function Counter(props) {
    const [cartCnt, setCartCnt] = useState(0);

    const minus = () => {
        if(cartCnt > 0){
            setCartCnt(cartCnt-1)
        } else {
            Alert.alert('Min is 0')
        }
    }

    const pluse = () => {
        if(cartCnt < 3){
            setCartCnt(cartCnt+1)
        } else {
            Alert.alert('Max is 3')
        }
    }

    return(
        <View className="flex flex-row justify-center">
            <TouchableHighlight  onPress={minus} className="justify-center">
                <Image source={props.size === 'lg' ? minus_lg : minus_xs}></Image>
            </TouchableHighlight >
            <View className={(props.size === 'lg' ? 'mx-[39px]' : (props.size === 'xs' ? 'mx-[1.64vw]' : 'mx-[23px]')) + " justify-center"}>
                <Text className={props.size === 'lg' ? 'text-[1.64vw] leading-[34px]' : (props.size === 'xs' ? 'text-[18px] leading-[1.64vw]' : 'text-[23px] leading-[31px]')}>{cartCnt}</Text>
            </View>
            <TouchableHighlight  onPress={pluse} className="justify-center">
                <Image source={props.size === 'lg' ? plus_lg : plus_xs}></Image>
            </TouchableHighlight >
        </View>
    )
}

export default Counter