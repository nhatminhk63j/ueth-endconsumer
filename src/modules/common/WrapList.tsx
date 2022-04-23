import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

interface WrapListProps {
  title: string;
  children: any;
  background?: string;
}

const useStyle = makeStyles((theme) => ({
  container: {
    // width: "70%",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    gap: 50,
    padding: "20px 0",
  },
}));

const WrapList = ({ title, background, children }: WrapListProps) => {
  const classes = useStyle();

  return (
    <Box style={{ backgroundImage: `url(${background})` }}>
      <Container className={classes.container}>
        <Typography variant="h5">{title}</Typography>
        <Box>{children}</Box>
      </Container>
    </Box>
  );
};

export default WrapList;
