import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

interface BannerProps {}

const useStyle = makeStyles({
  root: {
    marginTop: -70,
  },
  img: {
    width: "100%",
    maxHeight: 530,
  },
});

const Banner: React.FC<BannerProps> = () => {
  const classes = useStyle();

  return (
    <Box className={classes.root}>
      <img
        className={classes.img}
        alt=""
        src="https://storage.googleapis.com/vntravel/fresh/img/458169DOY/myfresh-banner-danh-muc-webmm-01-01.jpg"
      />
    </Box>
  );
};

export default Banner;
