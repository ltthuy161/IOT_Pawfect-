import { Stack } from '@mui/material';
import { HumidInfoData } from '../../../data/humid-info-data';
import HumidInfo from './HumidityInfo';

const LaserInfoCards = () => {
    return (
        <Stack direction={{ xs: 'column', sm: 'row', md: 'column' }}>
            <Stack direction={{ sm: 'row' }} justifyContent={{ sm: 'space-between' }} gap={4.75}>
                {HumidInfoData.map((saleInfoDataItem) => (
                    <HumidInfo
                        key={saleInfoDataItem.id}
                        title={saleInfoDataItem.title}
                        image={saleInfoDataItem.image}
                        value={saleInfoDataItem.value}
                        date={saleInfoDataItem.date}
                    />
                ))}
            </Stack>
        </Stack>
    );
};

export default LaserInfoCards;
