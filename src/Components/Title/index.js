import { View, Text } from "react-native";
import { Container } from "./styled";

export default function Title() {
    return (
        <View styles={styles.container}>
            <Text>Algo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#eee',
      marginTop: 0,
      fontSize: 28, 
    },
  });