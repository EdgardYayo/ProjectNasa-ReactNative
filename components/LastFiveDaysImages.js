import { ScrollView, Text, View, StyleSheet } from "react-native";
import PostImages from "./PostImages";


export default function LastFiveDaysImages({ last5DaysNasaData }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Last 5 Days</Text>
            <ScrollView style={styles.content}>
                { last5DaysNasaData?.map((item, index) => (
                    <PostImages
                      key={`post-image-${item.title}-${index}`}
                      title={item.title}
                      date={item.date}
                      url={item.url}
                      explanation={item.explanation}
                    />
                ))}
            </ScrollView>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,

    },

    title: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 18,

    },

    content: {
        paddingHorizontal: 24,
    }


})