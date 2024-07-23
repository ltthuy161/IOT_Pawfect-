import Grid from '@mui/material/Unstable_Grid2';
import { Stack } from '@mui/material';
import { ReactElement } from 'react';

import SaleInfoCards from '../../components/dashboard/Info/SaleInfoCards';
import Revenue from '../../components/dashboard/Info/Revenue';
import Camera from '../../components/dashboard/Info/Camera';
import { drawerWidth } from '../../layouts/main-layout';
import HumidInfoCards from '../../components/dashboard/Info/HumidityInfoCards';

const Sales = (): ReactElement => {
  return (
    <Grid
      container
      component="main"
      columns={12}
      spacing={3.75}
      flexGrow={1}
      pt={4.375}
      pr={1.875}
      pb={0}
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        pl: { xs: 3.75, lg: 0 },
      }}
    >
      <Grid xs={12}>
        <SaleInfoCards />
      </Grid>
      <Grid xs={12} md={8}>
        <Revenue />
      </Grid>
      <Grid xs={12} md={4}>
        
        <Stack
          direction={{ xs: 'column', sm: 'row', lg: 'column' }}
          gap={3.75}
          height={1}
          width={1}
        >
          <HumidInfoCards />
          <Stack
            direction={{ xs: 'column', sm: 'row', lg: 'column' }}
            gap={3.75}
            height={1}
            width={1}
          >

            <Camera />
          
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Sales;
