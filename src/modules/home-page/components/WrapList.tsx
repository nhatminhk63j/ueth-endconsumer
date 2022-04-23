import {
  Box,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

interface WrapListProps {
  title: string;
  children: any;
}

const useStyle = makeStyles((theme) => ({
  container: {
    // width: "70%",
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    marginBottom: 40,
    gap: 50,
  },
}));

const WrapList = ({ title, children }: WrapListProps) => {
  const classes = useStyle();

  return (
    <Container className={classes.container}>
      <Typography variant="subtitle1">{title}</Typography>
      <Box>{children}</Box>
    </Container>
  );
};

export default WrapList;
