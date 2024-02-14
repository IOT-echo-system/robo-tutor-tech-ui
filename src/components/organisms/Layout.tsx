import type { PropsWithChildren } from "react";
import React from "react";
import { Stack, styled } from "@mui/material";
import { Header } from "./Header";

const Container = styled(Stack)(({ theme }) => ({
  background: theme.palette.background.default,
  minHeight: "100vh",
}));

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};
