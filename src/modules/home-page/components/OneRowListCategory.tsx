import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import WrapList from "./WrapList";

interface OneRowListCategoryProps {
  title: string;
  categories: Category[];
}

const useStyle = makeStyles((theme) => ({
  image: {
    width: 70,
    height: 70,
  },
  grid: {
    width: "100%",
  },
}));
const OneRowListCategory = ({ title, categories }: OneRowListCategoryProps) => {
  const classes = useStyle();
  // categories = 5 * categories;
  return (
    <WrapList title={title}>
      <Box className={classes.grid}>
        <Grid
          container
          spacing={7}
          alignItems="flex-end"
          justifyContent="center"
        >
          {categories.map((item) => (
            <Grid item key={item.id}>
              <Box justifyContent="center">
                <Link to={`category/${item.id}`}>
                  <img
                    src={item.avatar}
                    alt={item.avatar}
                    className={classes.image}
                  />
                </Link>

                <Typography align="center">{item.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </WrapList>
  );
};

export default OneRowListCategory;
