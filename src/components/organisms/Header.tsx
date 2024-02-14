import React from "react";
import { Stack, Typography, styled } from "@mui/material";
import { useSelector } from "../../hooks";
import { Menubar } from "../molecules";

const Container = styled(Stack)(({ theme }) => ({
  background: theme.palette.common.white,
  minHeight: theme.spacing(6),
  padding: theme.spacing(0, 2),
  boxShadow: theme.shadows[1],
  [theme.breakpoints.up("md")]: {
    minHeight: theme.spacing(8),
    padding: theme.spacing(0, 8),
  },
}));

const SiteTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.spacing(2.5),
  [theme.breakpoints.up("md")]: {
    fontSize: theme.spacing(4),
  },
}));

export const Header: React.FC = () => {
  const metadata = useSelector((state) => state.site.metadata);
  return (
    <Container
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <SiteTitle>{metadata.title}</SiteTitle>
      <Menubar />
    </Container>
  );
};
