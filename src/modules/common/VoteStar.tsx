import { Box } from "@material-ui/core";
import { Star, StarHalf } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { FC } from "react";

interface VoteStarProps {
  star: number;
  iconOnly?: boolean;
  oneStar?: boolean;
}

const useStyles = makeStyles({
  root: {
    fontSize: 16,
    alignItems: "center",
    width: "auto",
    display: "inline-flex !importatn",
  },
  icon: {
    fontSize: 18,
    marginBottom: 3,
  },
});

const VoteStar: FC<VoteStarProps> = ({ star, oneStar, iconOnly }) => {
  const classes = useStyles();

  if (oneStar) {
    return (
      <Box className={classes.root}>
        {star}
        &nbsp;
        <Star className={classes.icon} />
      </Box>
    );
  }

  const count = Math.floor(star);
  const half = star - count > 0;

  return (
    <Box className={classes.root}>
      {!iconOnly && <>{star} &nbsp;</>}

      {[...Array(count)].map(() => (
        <Star className={classes.icon} />
      ))}
      {half && <StarHalf className={classes.icon} />}
    </Box>
  );
};

export default VoteStar;
