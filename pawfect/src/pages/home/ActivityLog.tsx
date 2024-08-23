import Grid from '@mui/material/Unstable_Grid2';
import { ReactElement } from 'react';

import SaleInfoCards from '../../components/dashboard/Info/SaleInfoCards';
import MonitorInfoCards from '../../components/dashboard/pages/MonitorCards';
import { drawerWidth } from '../../layouts/main-layout';


const ActivityLog = (): ReactElement => {
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
        
        <Grid xs={12}>
          <MonitorInfoCards />
        </Grid>
      </Grid>
    );
  };

export default ActivityLog;
