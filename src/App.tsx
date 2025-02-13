import { ThemeProvider, Box, Button, CssBaseline, Divider, FormLabel, FormControl, TextField, Typography, Stack, Card, InputAdornment, IconButton } from '@mui/material/';
import { SitemarkIcon } from './components/CustomIcons';
import { styled } from '@mui/material/styles';
import {enghouseTheme} from "@eds/core";
import React from 'react';
import { Password, LocalPhone, Visibility, VisibilityOff } from '@mui/icons-material';

const MUICard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  alignItems: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
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

function App(props: { disableCustomTheme?: boolean }) {
  const [accessCodeError, setAccessCodeError] = React.useState(false);
  const [accessCodeErrorMessage, setAccessCodeErrorMessage] = React.useState('');
  const [phoneNumberError, setPhoneNumberError] = React.useState(false);
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = React.useState('');
  const [showAccessCode, setShowAccessCode] = React.useState(false);

  const handleClickShowAccessCode = () => setShowAccessCode(!showAccessCode);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (accessCodeError || phoneNumberError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      accessCode: data.get('accessCode'),
      phoneNumber: data.get('phoneNumber'),
    });
  };

  const validateInputs = () => {
    const accessCode = document.getElementById('accessCode') as HTMLInputElement;
    const phoneNumber = document.getElementById('phoneNumber') as HTMLInputElement;

    let isValid = true;

    if (!accessCode.value || accessCode.value.length < 6) {
      setAccessCodeError(true);
      setAccessCodeErrorMessage('Access code must be at least 6 characters long.');
      isValid = false;
    } else {
      setAccessCodeError(false);
      setAccessCodeErrorMessage('');
    }

    if (!phoneNumber.value || !/^\d{10}$/.test(phoneNumber.value)) {
      setPhoneNumberError(true);
      setPhoneNumberErrorMessage('Please enter a valid 10-digit phone number.');
      isValid = false;
    } else {
      setPhoneNumberError(false);
      setPhoneNumberErrorMessage('');
    }

    return isValid;
  };

  return (
    <ThemeProvider theme={enghouseTheme} {...props}>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <MUICard variant="outlined">
          <SitemarkIcon />
          <Divider />
          <Typography
            component="h1"
            variant="h4"
          >
            Log in
          </Typography>
          <Divider sx={{ width: '100%', margin: '0', backgroundColor: 'rgba(0, 0, 0, 0.12)' }} />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 3,
              }}
          >
            <FormControl>
              <FormLabel htmlFor="accessCode">Access Code</FormLabel>
              <TextField
                error={accessCodeError}
                helperText={accessCodeErrorMessage}
                id="accessCode"
                type={showAccessCode ? 'text' : 'password'}
                name="accessCode"
                placeholder="Enter your access code"
                autoComplete="off"
                autoFocus
                required
                fullWidth
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Password />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle access code visibility"
                        onClick={handleClickShowAccessCode}
                        edge="end"
                      >
                        {showAccessCode ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                color={accessCodeError ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
              <TextField
                error={phoneNumberError}
                helperText={phoneNumberErrorMessage}
                name="phoneNumber"
                placeholder="Enter your phone number"
                type="tel"
                id="phoneNumber"
                autoComplete="tel"
                autoFocus
                required
                fullWidth
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalPhone />
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
              sx={{ textTransform: 'none', boxShadow: 'none' }}
            >
              Submit
            </Button>
          </Box>
        </MUICard>
      </SignInContainer>
    </ThemeProvider>
  )
}

export default App
