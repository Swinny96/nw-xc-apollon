import Grid from '@mui/material/Grid';
import PortingNumber from './PortingNumber';
import PortingDetails from './PortingDetails';
import PortingTable from './PortingTable';

function PortingPage () {
    return (
        <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={6}>
                <PortingNumber />
            </Grid>
            <Grid item xs={6}>
                <PortingDetails />
            </Grid>
            <Grid item xs={12}>
                <PortingTable />
            </Grid>
        </Grid>
    );
}

export default PortingPage;