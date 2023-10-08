import { Button, Text, View, StyleSheet } from "react-native";


export default function PostImages({ title, date }) {


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
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
        backgroundColor: '#ccc',
        borderRadius: 20,
        marginBottom: 12,
        padding: 16,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12,
    },

    date: {
        fontStyle: 'italic',
        fontSize: 16,
    },

    btnContainer: {
        alignItems: 'flex-end'
    }


})