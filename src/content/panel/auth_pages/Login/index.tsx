import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Stack, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../../../../layouts/AuthLayout';
// components
// import Page from '../../../../components/Page';
import { MHidden } from '../../../../components/@material-extend';
import { LoginForm } from '../../../../components/authentication/login';
import AuthSocial from '../../../../components/authentication/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled(React.Fragment)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <RootStyle>
      <AuthLayout>
        Don’t have an account? &nbsp;
        <Link
          underline="none"
          variant="subtitle2"
          component={RouterLink}
          to="/register"
        >
          Get started
        </Link>
      </AuthLayout>
      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Sign in to Rafael's Panel
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Enter your details below.
            </Typography>
          </Stack>
          <AuthSocial />

          <LoginForm />

          <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to="register">
                Get started
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
