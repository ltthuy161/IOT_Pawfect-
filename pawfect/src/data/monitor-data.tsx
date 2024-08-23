import food from '../assets/info/food.png';
import water from '../assets/info/water.png';

interface MonitorInfoData {
  id: number;
  image: string;
  title: string;
  on: string;
  off: string;
}

export const monitorInfoData: MonitorInfoData[] = [
  {
    id: 1,
    image: food,
    title: 'Food',
    on: 'On',
    off: 'Off',
  },
  {
    id: 2,
    image: water,
    title: 'Water',
    on: 'On',
    off: 'Off',
  },
];
