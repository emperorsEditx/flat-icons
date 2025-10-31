import * as React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SelectContent from "./SelectContent";
import MenuContent from "./MenuContent";
import CardAlert from "./CardAlert";
import OptionsMenu from "./OptionsMenu";

const drawerWidth = 200;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
    backgroundColor: "#1B252E !important",
    color: "#f3f3f3 !important",
  },
});

export default function SideMenu() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          mt: "calc(var(--template-frame-height, 0px) + 4px)",
          p: 1.5,
        }}
      >
        <svg
          width="126"
          height="33"
          viewBox="0 0 126 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M62.8443 1.90735e-06H65.57L66.8803 5.92285L68.4396 1.90735e-06H70.5231L72.0825 5.92285L73.3927 1.90735e-06H76.1053L73.6156 9.38204H70.8898L69.4745 4.16684L68.0727 9.38204H65.3339L62.8443 1.90735e-06Z"
            fill="white"
          />
          <path
            d="M77.1404 9.38225V0.000213623H79.6433V3.56445H82.9979V0.000213623H85.4873V9.38225H82.9979V5.8048H79.6433V9.38225H77.1404Z"
            fill="white"
          />
          <path
            d="M86.483 9.38225L89.903 0.000213623H92.4711L95.8911 9.38225H93.2443L92.7986 8.05879H89.5753L89.1295 9.38225H86.4828H86.483ZM90.1257 6.0669H91.9997L91.0694 3.1711L90.1257 6.0669Z"
            fill="white"
          />
          <path
            d="M94.8954 2.24078V0H103.02V2.24078H100.202V9.38204H97.7127V2.24078H94.8954Z"
            fill="white"
          />
          <path
            d="M106.383 9.38225L109.803 0.000213623H112.372L115.792 9.38225H113.145L112.699 8.05879H109.476L109.03 9.38225H106.383ZM110.026 6.0669H111.9L110.97 3.1711L110.026 6.0669Z"
            fill="white"
          />
          <path
            d="M116.775 9.38225V0.000213623H118.989L122.619 5.17621V0.000213623H125.121V9.38225H122.92L119.277 4.20626V9.38225H116.775Z"
            fill="white"
          />
          <path
            d="M62.8443 31.5437V13.5634H67.6408V31.5437H62.8443Z"
            fill="white"
          />
          <path
            d="M79.0661 31.8452C77.3589 31.8452 75.8268 31.4647 74.4709 30.7027C73.1147 29.9411 72.0478 28.8653 71.2691 27.4758C70.4905 26.0865 70.101 24.4457 70.101 22.5535C70.101 20.6614 70.4905 19.0213 71.2691 17.6318C72.0478 16.2425 73.1147 15.1666 74.4709 14.4048C75.8268 13.6431 77.3589 13.2621 79.0661 13.2621C81.4432 13.2621 83.3684 13.8566 84.8419 15.0454C86.3149 16.2341 87.2361 17.8578 87.6041 19.9173L84.2749 20.4114C83.3631 20.5467 82.501 20.0984 81.974 19.342C81.7812 19.0652 81.5485 18.8299 81.2762 18.6364C80.6397 18.1843 79.9033 17.958 79.0661 17.958C77.8775 17.958 76.9193 18.385 76.1907 19.2386C75.4628 20.0929 75.0989 21.1979 75.0989 22.5535C75.0989 23.9092 75.4628 25.0144 76.1907 25.8685C76.9193 26.7221 77.8775 27.1491 79.0661 27.1491C79.9203 27.1491 80.6693 26.9062 81.3137 26.4206C81.6243 26.1866 81.8834 25.8885 82.0912 25.526C82.5585 24.7104 83.45 24.2328 84.3844 24.3377L87.73 24.7129C87.3616 26.9735 86.3946 28.7274 84.8295 29.9739C83.2638 31.2218 81.3429 31.845 79.0663 31.845L79.0661 31.8452Z"
            fill="white"
          />
          <path
            d="M97.6488 31.8452C95.9416 31.8452 94.4095 31.4647 93.0536 30.7027C91.6974 29.9411 90.6305 28.8653 89.8519 27.4758C89.0732 26.0865 88.6837 24.4457 88.6837 22.5535C88.6837 20.6614 89.0732 19.0213 89.8519 17.6318C90.6305 16.2425 91.6974 15.1666 93.0536 14.4048C94.4095 13.6431 95.9416 13.2621 97.6488 13.2621C99.373 13.2621 100.914 13.6431 102.269 14.4048C103.625 15.1666 104.697 16.2422 105.484 17.6318C106.27 19.0215 106.664 20.6622 106.664 22.5535C106.664 24.4449 106.27 26.0865 105.484 27.4758C104.697 28.8651 103.625 29.9411 102.269 30.7027C100.914 31.4647 99.373 31.8452 97.6488 31.8452ZM97.6488 27.1493C98.8544 27.1493 99.8211 26.7223 100.549 25.8687C101.278 25.0144 101.642 23.9094 101.642 22.5538C101.642 21.1981 101.278 20.0929 100.549 19.2388C99.8214 18.3852 98.8546 17.9582 97.6488 17.9582C96.4602 17.9582 95.502 18.3852 94.7734 19.2388C94.0455 20.0931 93.6816 21.1981 93.6816 22.5538C93.6816 23.9094 94.0455 25.0147 94.7734 25.8687C95.502 26.7223 96.4602 27.1493 97.6488 27.1493Z"
            fill="white"
          />
          <path
            d="M109.125 31.5437V13.5634H113.369L120.326 23.4828V13.5634H125.121V31.5437H120.903L113.922 21.6243V31.5437H109.125Z"
            fill="white"
          />
          <path
            d="M42.5011 1.90735e-06L28.0403 25.0468L32.7408 32.8964H41.6362L56.0969 7.84954L51.3964 1.90735e-06H42.5011Z"
            fill="#00A654"
          />
          <path
            d="M13.5959 3.8147e-06L28.0566 25.0468L23.3561 32.8964H14.4607L0 7.84954L4.70051 3.8147e-06H13.5959Z"
            fill="#00A654"
          />
          <path
            d="M18.4861 8.4701L23.1867 1.90735e-06H32.6678L37.3688 8.88946L28.0567 25.0468L18.4861 8.4701Z"
            fill="#00A654"
          />
          <path
            d="M49.5214 13.287L52.1157 8.79361L49.2277 3.97063H43.7621L41.3676 8.11781L49.5214 13.287Z"
            fill="white"
          />
          <path
            d="M39.8607 10.728L32.168 24.0521L35.0561 28.8751H40.5217L48.0145 15.8972L39.8607 10.728Z"
            fill="white"
          />
        </svg>
      </Box>
      {/* <Divider /> */}
      <Box
        sx={{
          overflow: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MenuContent />
        {/* <CardAlert /> */}
      </Box>
      {/* <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Avatar
          sizes="small"
          alt="Riley Carter"
          src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ mr: "auto" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, lineHeight: "16px" }}
          >
            Riley Carter
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            riley@email.com
          </Typography>
        </Box>
        <OptionsMenu />
      </Stack> */}
    </Drawer>
  );
}
