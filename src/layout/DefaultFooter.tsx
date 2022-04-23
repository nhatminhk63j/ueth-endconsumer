import { Box, Container, Grid, Typography } from "@material-ui/core";
import { LocalPhoneOutlined, LocationOnOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { WHITE } from "assets/theme/colors";
import Logo from "components/Logo";
import React from "react";

const useStyle = makeStyles({
  root: {
    color: "white",
    minHeight: 400,
    display: "flex",
    backgroundImage: `url(https://storage.googleapis.com/phms-dev/photo/img/456487tYOYFa/anh-background.png)`,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: "50px 0",
  },
  banner: {
    // backgroundColor: SECONDARY,
    textAlign: "center",
    padding: "10px 0px",
    fontSize: 14,
  },
  logo: {
    marginBottom: 40,
  },
});

const DefaultFooter = () => {
  const classes = useStyle();
  return (
    <Box className={classes.root}>
      <Box className={classes.main}>
        <Container>
          <Box className={classes.logo}>
            <Logo />
          </Box>

          <Grid container spacing={3}>
            <Grid item md={4}>
              <Typography variant="subtitle1" style={{ marginBottom: 20 }}>
                Công ty cổ phần ABC601
              </Typography>
              <Grid container alignItems="center" wrap="nowrap">
                <Box style={{ minWidth: 35 }}>
                  <LocalPhoneOutlined style={{ fontSize: 26 }} />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <Typography variant="body2">
                    Tổng đài chăm sóc: 1900 2083 (nhánh 4)
                  </Typography>
                </Box>
              </Grid>
              <Grid container alignItems="center" wrap="nowrap">
                <Box style={{ minWidth: 35 }}>
                  <LocationOnOutlined style={{ fontSize: 26, color: WHITE }} />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginTop: 4,
                  }}
                >
                  <Typography variant="body2">
                    Văn phòng HCM: Tầng 6, Tòa Nhà Central Park, 117 Nguyễn Du,
                    Q.1
                  </Typography>
                  <Typography variant="subtitle2">
                    Văn phòng Hà Nội: sô 79, ngõ 59 Khúc Thừa Dụ, Cầu Giấy
                  </Typography>
                  <Typography variant="subtitle2">
                    Văn phòng Hà Nội: sô 79, ngõ 59 Khúc Thừa Dụ, Cầu Giấy
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid item md={4}>
              <Typography variant="subtitle1">
                Công ty cổ phần ABC601
              </Typography>
              <Grid
                container
                alignItems="flex-start"
                style={{ marginTop: 20 }}
                wrap="nowrap"
              >
                <Box style={{ minWidth: 35 }}>
                  <LocalPhoneOutlined style={{ fontSize: 26 }} />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginTop: 4,
                  }}
                >
                  <Typography variant="body2">
                    Tổng đài chăm sóc: 1900 2083 (nhánh 4)
                  </Typography>
                  <Typography variant="subtitle2">
                    Văn phòng Hà Nội: sô 79, ngõ 59 Khúc Thừa Dụ, Cầu Giấy
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid item md={4}>
              <Typography variant="subtitle1">
                Công ty cổ phần ABC601
              </Typography>
              <Grid
                container
                alignItems="flex-start"
                style={{ marginTop: 20 }}
                wrap="nowrap"
              >
                <Box style={{ minWidth: 35 }}>
                  <LocalPhoneOutlined style={{ fontSize: 26 }} />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    marginTop: 4,
                  }}
                >
                  <Typography variant="body2">
                    Tổng đài chăm sóc: 1900 2083 (nhánh 4)
                  </Typography>
                  <Typography variant="subtitle2">
                    Văn phòng Hà Nội: sô 79, ngõ 59 Khúc Thừa Dụ, Cầu Giấy
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className={classes.banner}>
        <Container style={{ padding: 0 }}>
          Copyright © 2020 - CÔNG TY CỔ PHẦN ABC601 - Đăng ký
          kinh doanh số 0108886908 - do Sở Kế hoạch và Đầu tư thành phố Hà Nội
          cấp lần đầu ngày 04 tháng 09 năm 2019
        </Container>
      </Box>
    </Box>
  );
};

export default DefaultFooter;
