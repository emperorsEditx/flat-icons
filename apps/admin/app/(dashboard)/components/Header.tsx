"use client";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { signOut, useSession } from "next-auth/react";

import NavbarBreadcrumbs from "./NavbarBreadcrumbs";
import MenuButton from "./MenuButton";
import ColorModeIconDropdown from "../../shared-theme/ColorModeIconDropdown";

export default function Header() {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    signOut({ callbackUrl: "/login" });
  };

  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: "none", md: "flex" },
        width: "100%",
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        maxWidth: { sm: "100%", md: "1700px" },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs />

      <Stack direction="row" sx={{ gap: 1, alignItems: "center" }}>
        <MenuButton showBadge aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </MenuButton>

        <ColorModeIconDropdown />

        {/* User Dropdown */}
        <Button
          onClick={handleClick}
          sx={{
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar
            alt={session?.user?.name || "User"}
            src={session?.user?.image || ""}
            sx={{ width: 32, height: 32 }}
          />
          <Typography variant="body2" color="text.primary">
            {session?.user?.name || "Guest"}
          </Typography>
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 3,
            sx: { borderRadius: 2, mt: 1 },
          }}
        >
          <MenuItem onClick={handleClose}>
            <AccountCircleRoundedIcon fontSize="small" sx={{ mr: 1 }} />
            Profile
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout}>
            <LogoutRoundedIcon fontSize="small" sx={{ mr: 1 }} />
            Logout
          </MenuItem>
        </Menu>
      </Stack>
    </Stack>
  );
}
