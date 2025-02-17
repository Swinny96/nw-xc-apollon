import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card, CardContent, Divider, Stack, Typography, tableCellClasses, Box, Chip } from '@mui/material/';
import { Verified, HourglassTop, TaskAlt, ReportProblem, CompareArrows, ArrowBack, ArrowForward } from '@mui/icons-material/';
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
    status: string,
    numbers: string,
    port: string,
    portDate: Date,
    importExport: Date,
    portState: string,
    portType: string // New field to determine the arrow
) {
return { quantity, status, numbers, port, portDate, importExport, portState, portType };
}
  

const rows = [
    createData(1, 'Open', '35936 / 34983', 'D012', new Date(), new Date(), 'LP', 'Outgoing'),
    createData(2, 'Completed', '35936 / 34983', 'D013', new Date(), new Date(), 'LP', 'Incoming'),
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
                            <StyledTableCell align="center">Status</StyledTableCell>
                            <StyledTableCell align="center">Number(s)</StyledTableCell>
                            <StyledTableCell align="center">Port</StyledTableCell>
                            <StyledTableCell align="center">Prot-Date</StyledTableCell>
                            <StyledTableCell align="center">Import / Export</StyledTableCell>
                            <StyledTableCell align="center">Prot-Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.quantity}>
                            <StyledTableCell align="center">
                                <Typography variant='body2'>{row.quantity}</Typography>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {icons[row.status] || row.status}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <Typography variant='body2'>{row.numbers}</Typography>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {portingArrows[row.portType] && (
                                <Stack spacing={1} direction="row" alignItems="center">
                                    <Typography variant='body2'>{row.port}</Typography>
                                    <Box sx={{ mx: 1 }}>{portingArrows[row.portType]}</Box>
                                    <Typography variant='body2'>{rows.find(r => r.quantity === row.quantity + 1)?.port || ''}</Typography>
                                </Stack>
                                )}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <Typography variant='body2'>{row.portDate.toLocaleDateString()}</Typography>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <Typography variant='body2'>{row.importExport.toLocaleDateString()}</Typography>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <Chip label={row.portState} sx={{ width: '100%', border: 0, borderRadius: '8px', backgroundColor: '#E9EBEC' }} />
                            </StyledTableCell>
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
    Outgoing: <ArrowBack fontSize='small'/>,
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
            <Item direction="row" spacing={1}>{icons.Open} <Typography variant='body2'>-</Typography> <Typography variant='body2'>Open</Typography></Item>
            <Item direction="row" spacing={1}>{icons.Completed} <Typography variant='body2'>-</Typography> <Typography variant='body2'>Completed</Typography></Item>
            <Item direction="row" spacing={1}>{icons.Legacy} <Typography variant='body2'>-</Typography> <Typography variant='body2'>Legacy</Typography></Item>
            <Item direction="row" spacing={1}>{icons.Error} <Typography variant='body2'>-</Typography> <Typography variant='body2'>Error</Typography></Item>
        </Stack>
        <Stack direction="row" sx={{alignItems: 'center'}}>
            <Typography sx={{fontWeight: 'medium'}}>Status:</Typography>
            <Item direction="row" spacing={1}>{portingArrows.Pair} <Typography variant='body2'>-</Typography> <Typography variant='body2'>Open</Typography></Item>
            <Item direction="row" spacing={1}>{portingArrows.Outgoing} <Typography variant='body2'>-</Typography> <Typography variant='body2'>Open</Typography></Item>
            <Item direction="row" spacing={1}>{portingArrows.Incoming} <Typography variant='body2'>-</Typography> <Typography variant='body2'>Open</Typography></Item>
        </Stack>
      </Stack>
    );
}