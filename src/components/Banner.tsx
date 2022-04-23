import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

interface BannerProps {
  img: string
}

const useStyle = makeStyles({
  root: {
    // marginTop: -70,
  },
  img: {
    width: "100%",
    maxHeight: 530,
  },
});

const Banner: React.FC<BannerProps> = ({img}) => {
  const classes = useStyle();

  return (
    <Box className={classes.root}>
      <img
        className={classes.img}
        alt=""
        src={img}
      />
    </Box>
  );
};

export default Banner;
