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

const bgi =
  "https://storage.googleapis.com/phms-dev/photo/img/456483xHLFUj/mask-group.png";
const OneRowListCategory = ({ title, categories }: OneRowListCategoryProps) => {
  const classes = useStyle();
  return (
    <WrapList title={title} background={bgi}>
      <Box className={classes.grid}>
        <Grid
          container
          spacing={4}
          alignItems="flex-start"
          justifyContent="center"
        >
          {categories.map((item) => (
            <Grid item key={item.id}>
              <Box
                justifyContent="center"
                style={{ textAlign: "center", width: 150 }}
              >
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
