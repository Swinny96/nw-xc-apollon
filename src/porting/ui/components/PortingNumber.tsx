import { styled } from '@mui/material/styles';
import { Button, Card, CardContent, Divider, Stack, TextField, Typography } from '@mui/material/';
import { SitemarkIcon } from '../../../components/CustomIcons';

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
    gap: theme.spacing(4),
    margin: 'auto',
}));


function PortingNumber () {
    return (
        <Item variant='outlined'>
            <Content>
                <SitemarkIcon />
                <Stack width={'100%'} spacing={1}>
                    <Typography variant="body1" component="h2" color={'black'}>Phone Number</Typography>
                    <Divider sx={{ width: '100%', margin: '0', backgroundColor: 'rgba(0, 0, 0, 0.12)' }} />
                </Stack>
                <TextField id="phone-number" label="Phone Number" variant='outlined' fullWidth />
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    sx={{ textTransform: 'none', boxShadow: 'none' }}
                    >
                    Submit
                </Button>
            </Content>
        </Item>
    );
}

export default PortingNumber;