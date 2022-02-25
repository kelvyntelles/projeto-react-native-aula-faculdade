import { View, Text } from "react-native";

export default function Result(props) {
    return (
        <View>
            <Text>
                {props.Result}
            </Text>
        </View>
    );
}