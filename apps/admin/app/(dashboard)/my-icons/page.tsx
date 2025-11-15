import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import {
  AccessTime,
  EditDocument,
  Settings,
  Store,
  Upload,
  DoNotDisturbAlt,
  Delete,
  Clear,
} from "@mui/icons-material";
import Link from "next/link";

export default function MyIcons() {
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" }, px: 3 }}>
      <Grid container spacing={2} columns={12} justifyContent="center">
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Link href="/my-icons/upload" style={{textDecoration: 'none'}}>
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
                borderRadius: 1,
                p: 2,
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
                "&:hover": { boxShadow: 1, transform: "translateY(-5px)" },
              }}
            >
              <CardContent>
                {/* Icon with rounded background */}
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#2CB88B",
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
                <Typography
                  component="p"
                  variant="body1"
                  color="text.secondary"
                >
                  Request to upload
                </Typography>
              </CardContent>
            </Card>
          </Link>
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
              p: 2,
              backgroundColor: "#fff",
              transition: "all 0.3s ease",
              "&:hover": { boxShadow: 1, transform: "translateY(-5px)" },
            }}
          >
            <CardContent>
              {/* Icon with rounded background */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "#1B252E",
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
              p: 2,
              backgroundColor: "#fff",
              transition: "all 0.3s ease",
              "&:hover": { boxShadow: 1, transform: "translateY(-5px)" },
            }}
          >
            <CardContent>
              {/* Icon with rounded background */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "#1B252E",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <EditDocument fontSize="large" />
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
              p: 2,
              backgroundColor: "#fff",
              transition: "all 0.3s ease",
              "&:hover": { boxShadow: 1, transform: "translateY(-5px)" },
            }}
          >
            <CardContent>
              {/* Icon with rounded background */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "#1B252E",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <AccessTime fontSize="large" />
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
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              height: "100%",
              borderRadius: 1,
              p: 2,
              backgroundColor: "#fff",
              transition: "all 0.3s ease",
              "&:hover": { boxShadow: 1, transform: "translateY(-5px)" },
            }}
          >
            <CardContent>
              {/* Icon with rounded background */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "#1B252E",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <Settings fontSize="large" />
              </Box>

              {/* Texts */}
              <Typography
                component="h4"
                variant="h6"
                sx={{ mb: 1, fontWeight: 600 }}
              >
                Need to improve
              </Typography>
              <Typography component="p" variant="body1" color="text.secondary">
                0 icons
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
              p: 2,
              backgroundColor: "#fff",
              transition: "all 0.3s ease",
              "&:hover": { boxShadow: 1, transform: "translateY(-5px)" },
            }}
          >
            <CardContent>
              {/* Icon with rounded background */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "#E52828",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <DoNotDisturbAlt fontSize="large" />
              </Box>

              {/* Texts */}
              <Typography
                component="h4"
                variant="h6"
                sx={{ mb: 1, fontWeight: 600 }}
              >
                Not Approved
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
              p: 2,
              backgroundColor: "#fff",
              transition: "all 0.3s ease",
              "&:hover": { boxShadow: 1, transform: "translateY(-5px)" },
            }}
          >
            <CardContent>
              {/* Icon with rounded background */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "#1B252E",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <Delete fontSize="large" />
              </Box>

              {/* Texts */}
              <Typography
                component="h4"
                variant="h6"
                sx={{ mb: 1, fontWeight: 600 }}
              >
                Deleted
              </Typography>
              <Typography component="p" variant="body1" color="text.secondary">
                0 icons
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
              p: 2,
              backgroundColor: "#fff",
              transition: "all 0.3s ease",
              "&:hover": { boxShadow: 1, transform: "translateY(-5px)" },
            }}
          >
            <CardContent>
              {/* Icon with rounded background */}
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "#1B252E",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                <Clear fontSize="large" />
              </Box>

              {/* Texts */}
              <Typography
                component="h4"
                variant="h6"
                sx={{ mb: 1, fontWeight: 600 }}
              >
                Failed icons
              </Typography>
              <Typography component="p" variant="body1" color="text.secondary">
                0 icons
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
