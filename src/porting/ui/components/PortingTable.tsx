import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card, CardContent, Divider, Stack, Typography, tableCellClasses, Box, Chip } from '@mui/material/';
import { Verified, HourglassTop, TaskAlt, ReportProblem, CompareArrows, KeyboardBackspace, ArrowForward } from '@mui/icons-material/';
import { styled } from '@mui/material/styles';

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
    height: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(4),
    margin: 'auto',
}));

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td': {
        borderBottom: 'none', // Remove bottom border from last row
    },
    '&:first-of-type td:first-of-type': {
        borderTopLeftRadius: '8px',
    },
    '&:first-of-type td:last-of-type': {
        borderTopRightRadius: '8px',
    },
    '&:last-of-type td:first-of-type': {
        borderBottomLeftRadius: '8px',
    },
    '&:last-of-type td:last-of-type': {
        borderBottomRightRadius: '8px',
    },
}));

function createData(
  quantity: number,
  status: number,
  numbers: string,
  port: string,
  portDate: Date,
  importExport: Date,
  portState: string,
) {
  return { quantity, status, numbers, port, portDate, importExport, portState };
}

const rows = [
  createData(1, 159, '35936 / 34983', 'D012', new Date(), new Date(), 'LP'),
  createData(2, 237, '35936 / 34983', 'D012', new Date(), new Date(), 'LP'),
];

export default function PortingTable() {
  return (
    <Contents variant='outlined' sx={{ height: '100%' }}>
        <Content>
            <Stack width={'100%'} spacing={1}>
                <Typography variant="body1" component="h2" color={'black'}>Porting</Typography>
                <Divider sx={{ width: '100%', margin: '0', backgroundColor: 'rgba(0, 0, 0, 0.12)' }} />
            </Stack>
            <TableContainer component={Box} sx={{ border: '1px solid rgba(224, 224, 224, 1)', borderRadius: '8px', overflow: 'hidden', display: 'block'}}>
                <Table 
                    aria-label="customized table"
                    sx={{ 
                        width: '100%', 
                        borderCollapse: 'collapse', 
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>#</StyledTableCell>
                            <StyledTableCell align="right">Status</StyledTableCell>
                            <StyledTableCell align="right">Number(s)</StyledTableCell>
                            <StyledTableCell align="right">Port</StyledTableCell>
                            <StyledTableCell align="right">Prot-Date</StyledTableCell>
                            <StyledTableCell align="right">Import / Export</StyledTableCell>
                            <StyledTableCell align="right">Prot-Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.quantity}>
                            <StyledTableCell align="right">
                                {row.quantity}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.status}</StyledTableCell>
                            <StyledTableCell align="right">{row.numbers}</StyledTableCell>
                            <StyledTableCell align="right">{row.port}</StyledTableCell>
                            <StyledTableCell align="right">{row.portDate.toLocaleDateString()}</StyledTableCell>
                            <StyledTableCell align="right">{row.importExport.toLocaleDateString()}</StyledTableCell>
                            <StyledTableCell align="right"><Chip label={row.portState} sx={{width: '100%', border: 0, borderRadius: '8px', backgroundColor: '#E9EBEC'}}/></StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <DirectionStack />
        </Content>
    </Contents>
  );
}

const icons = {
    Open: <HourglassTop fontSize='small' color='info'/>,
    Completed: <Verified fontSize='small' color='success'/>,
    Legacy: <TaskAlt fontSize='small' color='success'/>,
    Error: <ReportProblem fontSize='small' color='error'/>,
};

const portingArrows = {
    Pair: <CompareArrows fontSize='small'/>,
    Outgoing: <KeyboardBackspace fontSize='small'/>,
    Incoming: <ArrowForward fontSize='small'/>,
}

const Item = styled(Stack)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
    [`&.${Typography}`]: {
        fontSize: 14,
    },
}));

function DirectionStack() {
    return (
      <Stack spacing={0.5}>
        <Stack direction="row" sx={{alignItems: 'center'}}>
            <Typography sx={{fontWeight: 'medium'}}>Status:</Typography>
            <Item direction="row" spacing={1}>{icons.Open} <Typography>-</Typography> <Typography>Open</Typography></Item>
            <Item direction="row" spacing={1}>{icons.Completed} <Typography>-</Typography> <Typography>Completed</Typography></Item>
            <Item direction="row" spacing={1}>{icons.Legacy} <Typography>-</Typography> <Typography>Legacy</Typography></Item>
            <Item direction="row" spacing={1}>{icons.Error} <Typography>-</Typography> <Typography>Error</Typography></Item>
        </Stack>
        <Stack direction="row" sx={{alignItems: 'center'}}>
            <Typography sx={{fontWeight: 'medium'}}>Status:</Typography>
            <Item direction="row" spacing={1}>{portingArrows.Pair} <Typography>-</Typography> <Typography>Open</Typography></Item>
            <Item direction="row" spacing={1}>{portingArrows.Outgoing} <Typography>-</Typography> <Typography>Open</Typography></Item>
            <Item direction="row" spacing={1}>{portingArrows.Incoming} <Typography>-</Typography> <Typography>Open</Typography></Item>
        </Stack>
      </Stack>
    );
}