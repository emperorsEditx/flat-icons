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
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between", paddingRight:'0px',border: 'none', backgroundColor: '#1B252E' }}>
      <List dense sx={{ width: "100%", paddingRight:'0px' }}>
        {mainListItems.map((item, index) => {
          const route = `/${item.text.replace(" ", "-").toLowerCase() == "dashboard" ? "" : item.text.replace(" ", "-").toLowerCase()}`;
          const isActive = '/' + pathname.split('/')[1] == route;

          return (
            <ListItem
              key={index}
              disablePadding
              sx={{
                display: "block",
                width: "100%",
              }}
              style={{paddingRight:'0px'}}
            >
              <Link
                href={route}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                  paddingRight: '0px'
                }}
              >
                <ListItemButton
                  selected={isActive}
                  style={{color:isActive?'':'#fff', padding: '7px 0px 7px 15px', borderRadius: '50px 0px 0px 50px', backgroundColor: isActive ? '#F4F7FE' : '' }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.text}
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
