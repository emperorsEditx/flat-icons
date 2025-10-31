"use client";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainListItems = [
  { text: "Dashboard", icon: <HomeRoundedIcon /> },
  { text: "My Icons", icon: <AnalyticsRoundedIcon /> },
  { text: "Store Profile", icon: <PeopleRoundedIcon /> },
  { text: "Stats", icon: <AssignmentRoundedIcon /> },
  { text: "Invoices", icon: <AssignmentRoundedIcon /> },
  { text: "Contact", icon: <AssignmentRoundedIcon /> },
  { text: "Setting", icon: <AssignmentRoundedIcon /> },
];

export default function MenuContent() {
  const pathname = usePathname();

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between", paddingRight: "0px", overflow: "hidden" }}>
      <List dense sx={{ width: "100%", paddingRight: "0px" }}>
        {mainListItems.map((item, index) => {
          const route = `/${item.text.replace(" ", "-").toLowerCase()}`;
          const isActive = pathname === route;

          return (
            <ListItem
              key={index}
              disablePadding
              sx={{
                display: "block",
                width: "100%",
                paddingRight: "0px"
              }}
            >
              <Link
                href={route}
                style={{ textDecoration: "none", color: "inherit", width: "100%", paddingRight: "0px !important" }}
              >
                <ListItemButton
                  selected={isActive}
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    borderTopRightRadius: "0px !important",
                    borderBottomRightRadius: "0px !important",
                    px: 2,
                    py: 2,
                    paddingRight: "0px !important",
                    transition: "all 0.3s ease",
                    justifyContent: "flex-start",
                    backgroundColor: (theme) => isActive ? `${theme.palette.background.paper}` : "transparent",
                    color: isActive ? "#fff" : "text.primary",
                    boxShadow: isActive ? 2 : "none",
                    "&:hover": {
                      backgroundColor: isActive ? "primary.main" : "action.hover",
                    },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: isActive ? "600" : "400",
                      fontSize: "0.95rem",
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
}
