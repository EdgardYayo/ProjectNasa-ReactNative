import { View, StyleSheet } from "react-native"
import Header from "./Header";
import fetchApi from "../utils/fetch";
import { useEffect, useState } from "react";
import TodayImage from "./TodayImage";
import { format, sub } from "date-fns";
import LastFiveDaysImages from "./LastFiveDaysImages";


export default function Home() {

    const [nasaData, setNasaData] = useState(undefined);
    const [last5DaysNasaData, setLast5DaysNasaData] = useState([]);

    useEffect(() => {
        const loadTodaysImages = async () => {
            try {
                const data = await fetchApi();
                setNasaData(data);
            } catch (error) {
                console.log(error);
                setNasaData(undefined);
            }
        };

        const loadLast5DaysImages = async () => {
            try {
                const date = new Date();
                const today = format(date, 'yyyy-MM-dd');
                const fiveDaysAgoDate = format(sub(date, { days: 5 }), 'yyyy-MM-dd');
                const last5DaysData = await fetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${today}`)
                setLast5DaysNasaData(last5DaysData);
            } catch (error) {
                console.log(error);
            }
        }

        loadTodaysImages().catch(null);
        loadLast5DaysImages().catch(null);
    }, [])

    return (
        <View style={styles.container}>
            <Header />
            <TodayImage
              nasaData={nasaData} 
            />
            <LastFiveDaysImages 
              last5DaysNasaData={last5DaysNasaData}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B3D91',
        paddingHorizontal: 16,
    }
})