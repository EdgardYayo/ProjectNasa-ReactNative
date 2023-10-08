import { Image, Text, View, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>Explore</Text>
            </View>
            <View style={styles.rightContainer}>
                <Image
                  style={styles.image}
                  source={require("../assets/logo_nasa.png")}
                 />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },

    title: {
        fontSize: 20,
        color: 'white'
    },

    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },

    image: {
        width: 60,
        height: 60,
    }


})