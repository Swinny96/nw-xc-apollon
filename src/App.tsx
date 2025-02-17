import { ThemeProvider, CssBaseline, Container, styled } from '@mui/material/';
import {enghouseTheme} from "@eds/core";
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

function App() {

const Content = styled(Container)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        background: theme.palette.grey.light1,
    },
}));

  return (
    <ThemeProvider theme={enghouseTheme}>
      <CssBaseline enableColorScheme />
      <Content maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Outlet />
      </Content>
      {/* <TanStackRouterDevtools /> */}
    </ThemeProvider>
  )
}

export default App