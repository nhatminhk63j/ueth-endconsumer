import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ArrowDownIcon } from "assets/icons";
import { ORANGE } from "assets/theme/colors";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  border: {
    borderBottom: "1px solid lightgray",
    width: "100%",
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  box: {
    width: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: ORANGE,
  },
}));

const DividerListProduct = ({ url, text }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.border} />
      <Link to={url} style={{ textDecoration: "none" }}>
        <Box className={classes.box}>
          <Typography>{text}</Typography>

          <ArrowDownIcon />
        </Box>
      </Link>

      <div className={classes.border} />
    </div>
  );
};
export default DividerListProduct;
