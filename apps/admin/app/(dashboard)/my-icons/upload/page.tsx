"use client";

import { useState } from "react";
import UploadDropzone from "@/app/(dashboard)/components/UploadDropzone";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { List, GridView } from "@mui/icons-material";
import {
  ToggleButton,
  ToggleButtonGroup,
  Paper,
} from "@mui/material";
import UploadTable from "@/app/(dashboard)/components/UploadTable";

export default function UploadNewIcons() {
  const [value, setValue] = useState("1");
  const [view, setView] = useState("list");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleViewChange = (
    event: React.MouseEvent<HTMLElement>,
    newView: string
  ) => {
    if (newView !== null) setView(newView);
  };
  return (
    <div style={{ width: "100%", textAlign: "left" }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: "left", mb: 4 }}>
        Upload New Icons
      </Typography>
      <UploadDropzone />
      <Typography variant="h4" gutterBottom sx={{ textAlign: "left", my: 4 }}>
        Submissions
      </Typography>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "2px solid",
              borderColor: "divider",
              mb: 2,
            }}
          >
            {/* Tabs */}
            <TabList
              onChange={handleChange}
              aria-label="Uploaded Icons"
              textColor="inherit"
              indicatorColor="secondary"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#00B386",
                  height: "3px",
                },
                "& .MuiTab-root": {
                  fontSize: "1rem",
                  textTransform: "none",
                  fontWeight: 500,
                  px: 3,
                  py: 1.5,
                  color: "text.primary",
                  "&.Mui-selected": {
                    color: "#00B386",
                  },
                },
              }}
            >
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>

            {/* View Toggle */}
            <ToggleButtonGroup
              value={view}
              exclusive
              onChange={handleViewChange}
              size="small"
              sx={{
                "& .MuiToggleButton-root": {
                  borderColor: "#00B386",
                  color: "#00B386",
                  "&.Mui-selected": {
                    backgroundColor: "#00B386",
                    color: "#fff",
                  },
                  "&:hover": {
                    backgroundColor: "#00B38620",
                  },
                },
              }}
            >
              <ToggleButton value="list" aria-label="list view">
                <List fontSize="small" />
              </ToggleButton>
              <ToggleButton value="box" aria-label="box view">
                <GridView fontSize="small" />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {/* Tab Panels */}
          <TabPanel value="1">            
              <UploadTable />
          </TabPanel>

          <TabPanel value="2">Item Two content here</TabPanel>
          <TabPanel value="3">Item Three content here</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
