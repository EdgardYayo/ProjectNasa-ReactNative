import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Detail() {

    const { params: { title, date, url, explanation } } = useRoute();
    console.log(title, url, date, explanation);


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={{ uri: url }} style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <ScrollView style={styles.explanationContainer}>
                    <Text style={styles.explanation}>{explanation}</Text>
                </ScrollView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#ccc'
    },

    content: {
        backgroundColor: 'white',
        borderRadius: 32,
        marginVertical: 24,
        padding: 16,
        flex: 1,
        shadowColor: 'black',
        elevation: 10
    },

    title: {
       fontSize: 22,
       fontWeight: 'bold',
       marginBottom: 16 
    },

    image: {
        width: '100%',
        height: '55%',
        borderColor: 'blue',
        borderRadius: 32,
        borderWidth: 3,
        marginBottom: 16
    },

    date: {
        fontSize: 16,
    },

    explanationContainer: {
        marginVertical: 16,
    },

    explanation: {
        fontSize: 16,
        fontFamily: 'monospace',
    }
})