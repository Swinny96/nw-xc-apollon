import { styled } from '@mui/material/styles';
import { Card } from '@mui/material/';
import Grid from '@mui/material/Grid';

const Item = styled(Card)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function PortingPage () {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Item>xs=6</Item>
            </Grid>
            <Grid item xs={6}>
                <Item>xs=6</Item>
            </Grid>
            <Grid item xs={12}>
                <Item>xs=12</Item>
            </Grid>
        </Grid>
    );
}

export default PortingPage;