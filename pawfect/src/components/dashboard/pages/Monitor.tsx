import { ReactElement } from 'react';
import { Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import Image from '../../../components/base/Image';

type monitorInfoProps = {
  image?: string;
  title: string;
  on: string;
  off: string;
};

const MonitorInfo = ({ image, title, on, off }: monitorInfoProps): ReactElement => {
  return (
    <Card
      sx={(theme) => ({
        boxShadow: theme.shadows[4],
        width: 1,
        height: 'auto',
      })}
    >
      <CardMedia
        sx={{
          maxWidth: 70,
          maxHeight: 70,
        }}
      >
        <Image src={`${image}`} width={1} height={1} />
      </CardMedia>
      <CardContent
        sx={{
          flex: '1 1 auto',
          padding: 0,
          ':last-child': {
            paddingBottom: 0,
          },
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">
          <Typography variant="subtitle1" component="p" minWidth={100} color="text.primary">
            {title}
          </Typography>
            <Button variant="contained" color="primary">
          <Typography variant="body2" component="p" color="text.primary">
            {on}
          </Typography>
            </Button>
            <Button variant="contained" color="secondary">
            <Typography variant="body2" component="p" color="text.primary">
                {off}
            </Typography>
            </Button>
        </Stack>
        
      </CardContent>
    </Card>
  );
};

export default MonitorInfo;
