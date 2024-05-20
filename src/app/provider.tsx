"use client";

import React from "react";

import { ApolloProvider } from "@apollo/client";
import createApolloClient from "@/service/apollo-clients";
import { theme } from "@/theme/BreakPoints";
import { ThemeProvider } from "styled-components";

const client = createApolloClient();

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default AppProviders;
