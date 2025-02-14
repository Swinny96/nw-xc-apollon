import { styled } from '@mui/material/styles';
import { Card, CardContent, Divider, Stack, Typography, Paper } from '@mui/material/';
import { Business, Work } from '@mui/icons-material/';

const Contents = styled(Card)(({ theme }) => ({
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

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    p: 2,
    width: '100%',
    boxShadow: 'none',
}));


function PortingDetails () {
    return (
        <Contents variant='outlined' sx={{ height: '100%' }}>
            <Content>
                <Stack width={'100%'} spacing={1}>
                    <Typography variant="body1" component="h2" color={'black'}>Details</Typography>
                    <Divider sx={{ width: '100%', margin: '0', backgroundColor: 'rgba(0, 0, 0, 0.12)' }} />
                </Stack>
                <Stack width={'100%'} spacing={0}>
                    <Item sx={{ my: 1, mx: 'auto', p: 2, margin: 0, borderRadius: "4px 0", borderBottom: 'none' }} variant="outlined">
                        <Stack spacing={2} direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="textSecondary">Owner</Typography>
                            <Stack direction={'row'} spacing={1} alignItems="center">
                                <Business fontSize="small" />
                                <Typography variant="body1">D137 QSC Hamburg</Typography>
                            </Stack>
                        </Stack>
                    </Item>
                    <Item sx={{ my: 1, mx: 'auto', p: 2, margin: 0, borderRadius: "0 4px" }} variant="outlined">
                        <Stack spacing={2} direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="textSecondary">Current Owner</Typography>
                            <Stack direction={'row'} spacing={1} alignItems="center">
                                <Work fontSize="small" />
                                <Typography variant="body1">D201 1&1 Telecom GmbH</Typography>
                            </Stack>
                        </Stack>
                    </Item>
                </Stack>
            </Content>
        </Contents>
    );
}

export default PortingDetails;