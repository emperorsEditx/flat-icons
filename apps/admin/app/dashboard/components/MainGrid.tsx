"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Copyright from "../internals/components/Copyright";
import ChartUserByCountry from "./ChartUserByCountry";
import CustomizedTreeView from "./CustomizedTreeView";
import CustomizedDataGrid from "./CustomizedDataGrid";
import HighlightedCard from "./HighlightedCard";
import PageViewsBarChart from "./PageViewsBarChart";
import SessionsChart from "./SessionsChart";
import StatCard, { StatCardProps } from "./StatCard";
import { DockOutlined, Store, Timelapse, Upload } from "@mui/icons-material";

const data: StatCardProps[] = [
  {
    title: "Files",
    value: "14k",
    interval: "Last 30 days",
    trend: "up",
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340,
      380, 360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
  {
    title: "Downloads",
    value: "325",
    interval: "Last 30 days",
    trend: "down",
    data: [
      1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600,
      820, 780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300,
      220,
    ],
  },
  {
    title: "Earnings",
    value: "200k",
    interval: "Last 30 days",
    trend: "neutral",
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510,
      530, 520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
];

export default function MainGrid() {
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      {/* cards */}
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        All Icons
      </Typography>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{ mb: (theme) => theme.spacing(2) }}
      >
        {data.map((card, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
            <StatCard {...card} />
          </Grid>
        ))}
        <Grid size={{ xs: 12, md: 12 }}>
          <PageViewsBarChart />
        </Grid>
      </Grid>
      <Grid container spacing={2} columns={12} justifyContent="center">
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              height: "100%",
              borderRadius: 1,
              boxShadow: 3,
              p: 2,
              transition: "all 0.3s ease",
              "&:hover": { boxShadow: 6, transform: "translateY(-5px)" },
            }}
          >
            <CardContent>
              {/* Icon with rounded background */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <Upload fontSize="large" />
              </Box>

              {/* Texts */}
              <Typography
                component="h4"
                variant="h6"
                sx={{ mb: 1, fontWeight: 600 }}
              >
                Upload New
              </Typography>
              <Typography component="p" variant="body1" color="text.secondary">
                Request to upload
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              height: "100%",
              borderRadius: 1,
              boxShadow: 3,
              p: 2,
              transition: "all 0.3s ease",
              "&:hover": { boxShadow: 6, transform: "translateY(-5px)" },
            }}
          >
            <CardContent>
              {/* Icon with rounded background */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <Store fontSize="large" />
              </Box>

              {/* Texts */}
              <Typography
                component="h4"
                variant="h6"
                sx={{ mb: 1, fontWeight: 600 }}
              >
                Live in Store
              </Typography>
              <Typography component="p" variant="body1" color="text.secondary">
                1.33 icons
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              height: "100%",
              borderRadius: 1,
              boxShadow: 3,
              p: 2,
              transition: "all 0.3s ease",
              "&:hover": { boxShadow: 6, transform: "translateY(-5px)" },
            }}
          >
            <CardContent>
              {/* Icon with rounded background */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <DockOutlined fontSize="large" />
              </Box>

              {/* Texts */}
              <Typography
                component="h4"
                variant="h6"
                sx={{ mb: 1, fontWeight: 600 }}
              >
                Draft
              </Typography>
              <Typography component="p" variant="body1" color="text.secondary">
                110 icons
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              height: "100%",
              borderRadius: 1,
              boxShadow: 3,
              p: 2,
              transition: "all 0.3s ease",
              "&:hover": { boxShadow: 6, transform: "translateY(-5px)" },
            }}
          >
            <CardContent>
              {/* Icon with rounded background */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "primary.main",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <Timelapse fontSize="large" />
              </Box>

              {/* Texts */}
              <Typography
                component="h4"
                variant="h6"
                sx={{ mb: 1, fontWeight: 600 }}
              >
                Under Review
              </Typography>
              <Typography component="p" variant="body1" color="text.secondary">
                110 icons
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
