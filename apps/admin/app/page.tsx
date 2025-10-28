'use client';

import React from 'react';
import { Button, ThemeProvider, CssBaseline, createTheme, Typography, Box } from '@mui/material';
import { ThemeProvider as CustomThemeProvider } from '@myorg/ui';
// import { MyButton } from '@myorg/ui'; // assuming your shared component is named MyButton or Button
import theme from '@myorg/ui';

export default function Page() {
  return (
    <CustomThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          backgroundColor: '#f9fafc',
        }}
      >
        <Typography variant="h4" color="primary">
          ✅ Shared UI Library Connected Successfully!
        </Typography>

        <Button variant="contained" color="primary">
          MUI Button (from @mui/material)
        </Button>

        {/* <MyButton>Custom Button (from @myorg/ui)</MyButton> */}
      </Box>
    </CustomThemeProvider>
  );
}
