"use client";

import React from "react";

import { ApolloProvider } from "@apollo/client";
import createApolloClient from "@/service/apollo-clients";
import { createMuiTheme } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const client = createApolloClient();

const theme = createMuiTheme();
const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default AppProviders;
