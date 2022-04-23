import { Box, Typography } from "@material-ui/core";
import { BACK_GROUND } from "assets/theme/colors";
import VoteStar from "modules/common/VoteStar";
import React from "react";

interface VoteProps {
  star?: number;
}

const ProductVote: React.FC<VoteProps> = ({ star }) => {
  return (
    <Box
      style={{
        display: "inline-block",
        textAlign: "center",
        minWidth: 150,
        borderRadius: 5,
        backgroundColor: BACK_GROUND,
      }}
    >
      <Typography>Đánh giá</Typography>
      <Typography variant="h4">4</Typography>
      <Typography color="secondary">
        <VoteStar star={5} iconOnly />
      </Typography>
    </Box>
  );
};

export default ProductVote;
