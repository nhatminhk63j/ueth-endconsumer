import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

interface BannerProps {
  img: string;
  offset?: number;
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

const Banner: React.FC<BannerProps> = ({ img, offset }) => {
  const classes = useStyle();

  return (
    <Box className={classes.root} style={{ marginTop: offset }}>
      <img className={classes.img} alt="" src={img} />
    </Box>
  );
};

export default Banner;
