import { Stack } from '@mui/material';
import { monitorInfoData } from '../../../data/monitor-data';
import MonitorInfo from './Monitor';

const MonitorInfoCards = () => {
  return (
    <Stack direction={{ sm: 'row' }} justifyContent={{ sm: 'space-between' }} gap={3.75}>
      {monitorInfoData.map((laserInfoDataItem) => (
        <MonitorInfo
            key={laserInfoDataItem.id}
            title={laserInfoDataItem.title}
            image={laserInfoDataItem.image}
            on={laserInfoDataItem.on}
            off={laserInfoDataItem.off}
        />
      ))}
    </Stack>
  );
};

export default MonitorInfoCards;
