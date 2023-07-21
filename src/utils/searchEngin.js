import { Alert } from "react-native";

export default function SearchEngin(data, filtField, searchword) {
    var result = [];
    data.forEach((ele, idx) => {
        for (var index = 0; index < filtField.length; index++) {
            const element = filtField[index];
            if(JSON.stringify(ele[element]).toLowerCase().indexOf(searchword.toLowerCase()) !== -1) {
                result.push(ele)
                break;
            }
        }
    });

    return result
}