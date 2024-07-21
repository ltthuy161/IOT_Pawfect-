import food from '../assets/info/food.png';
import water from '../assets/info/water.png';

interface SaleInfoData {
  id: number;
  image: string;
  title: string;
  sales: number;
  increment: number;
  date: string;
}

export const saleInfoData: SaleInfoData[] = [
  {
    id: 1,
    image: water,
    title: 'Water',
    sales: 230220,
    increment: 55,
    date: 'July 2024',
  },
  {
    id: 2,
    image: food,
    title: 'Food',
    sales: 2300,
    increment: 210,
    date: 'July 2024',
  },
];
