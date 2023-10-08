import { Image, Text, View, StyleSheet, Button } from "react-native";



export default function TodayImage({ nasaData }) {
    

    return (
        <View style={styles.container}>
            <Image style={styles.nasaImage} source={{ uri: nasaData?.url }}/>
            <Text style={styles.title}>{nasaData?.title}</Text>
            <Text style={styles.date}>{nasaData?.date}</Text>
            <View style={styles.btnContainer}>
                <Button 
                  title="View" 
                  color="#0B3D91"
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#777",
        marginVertical: 16,
        marginHorizontal: 24,
        borderRadius: 32,
        padding: 16,
    },

    nasaImage: {
        width: "100%",
        height: 200,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 32,
    },

    btnContainer: {
        alignItems: 'flex-end',
    },

    title: {
        color: "white",
        fontSize: 20,
        marginVertical: 12,
        fontWeight: 'bold',
    },

    date: {
        color: "white",
        fontSize: 16,

    }
})