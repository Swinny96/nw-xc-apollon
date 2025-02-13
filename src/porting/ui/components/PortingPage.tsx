import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography } from '@mui/material/';
import Grid from '@mui/material/Grid';
import PortingNumber from './PortingNumber';

const Item = styled(Card)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Content = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
}));


function PortingPage () {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <PortingNumber />
            </Grid>
            <Grid item xs={6}>
                <Item variant='outlined'>
                    <Content>
                        <Typography variant="h5" component="h2">xs=6</Typography>
                    </Content>
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Item variant='outlined'>
                    <Content>
                        <Typography variant="h5" component="h2">xs=12</Typography>
                    </Content>
                </Item>
            </Grid>
        </Grid>
    );
}

export default PortingPage;