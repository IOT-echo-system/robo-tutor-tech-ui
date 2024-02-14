import React, { useState } from "react";
import { useMedia, useSelector } from "../../hooks";
import { IconButton, Stack, styled } from "@mui/material";
import { MenuItem } from "../atoms";
import { Close, Menu } from "@mui/icons-material";

const Container = styled(Stack)<{ open: "true" | "false" }>(
  ({ theme, open }) => ({
    borderTop: `1px solid ${theme.palette.background.default}`,
    minHeight: `calc(100vh - ${theme.spacing(6)})`,
    background: theme.palette.common.white,
    position: "absolute",
    top: theme.spacing(6),
    right: 0,
    overflow: "hidden",
    transition: "width 0.2s ease-in-out",
    width: theme.spacing(open === "true" ? 32 : 0),
    "&>*": {
      borderBottom: `1px solid ${theme.palette.background.default}`,
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      position: "unset",
      width: "unset",
      border: "unset",
      minHeight: "unset",
      flexDirection: "row",
      "&>*": {
        borderBottom: "unset",
        padding: theme.spacing(2),
      },
    },
  }),
);

export const Menubar: React.FC = () => {
  const menus = useSelector((state) => state.site.header.menus);
  const media = useMedia();
  const [open, setOpen] = useState(false);

  return (
    <>
      {!media.md && (
        <IconButton
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? <Close /> : <Menu />}
        </IconButton>
      )}
      <Container open={open ? "true" : "false"}>
        {menus.map(({ label, link }) => (
          <MenuItem key={link} link={link} label={label} />
        ))}
      </Container>
    </>
  );
};
