import humidity from '../assets/info/humidity.png';
import temperature from '../assets/info/cold.png';

interface HumidInfoData {
    id: number;
    image: string;
    title: string;
    value: number;
    date: string;
}

export const HumidInfoData: HumidInfoData[] = [
    {
        id: 1,
        image: humidity,
        title: 'Humidity (%)',
        value: 54,
        date: 'July 2024',
    },
    {
        id: 2,
        image: temperature,
        title: 'Temperature (°C)',
        value: 23,
        date: 'July 2024',
    },
];
