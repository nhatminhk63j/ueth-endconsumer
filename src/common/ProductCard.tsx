import React, { FC } from 'react';
import { Paper, Box, Typography, Button, styled, alpha } from '@mui/material';
import { commonStyles } from 'styles/theme';
import StarIcon from '@mui/icons-material/Star';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import { RowContainer, StackConatiner, BorderLinearProgress } from './elements';

interface ProductCardProps {
  product: Product;
  limited?: boolean;
}

const styles = {
  container: {
    width: 220,
    height: 320,
  },
  image: {
    width: '100%',
    height: 160,
    objectFit: 'cover',
  },
  content: {
    padding: '5px 10px',
  },
  name: {
    fontWeight: 500,
    fontSize: 14,
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    overflow: 'hidden',
    maxHeight: '3.6em',
    lineHeight: '1.8em',
  },
  info: {
    fontSize: 14,
    color: '#5E6366',
  },
  starIcon: {
    color: '#FF9B25',
  },
  row: {
    justifyContent: 'space-between',
  },
  price: {
    // color: '#FF9B25',
  },
};

const BuyButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  borderRadius: '4px',
  height: '32px',
  alignItems: 'center',
  backgroundColor: alpha('#FF9B25', 0.9),
  '&:hover': {
    backgroundColor: alpha('#FF9B25', 0.7),
  },
  a: {
    color: '#ffffff',
  },
}));

const ProductCard: FC<ProductCardProps> = (props: ProductCardProps) => {
  const { product, limited } = props;

  return (
    <Paper sx={{ ...commonStyles.container, ...styles.container }}>
      <Box
        component="img"
        src={product.avatar}
        alt={product.name}
        sx={{ ...styles.image }}
      />
      <Box sx={{ ...styles.content }}>
        <Typography sx={{ ...styles.name }}>{product.name}</Typography>

        <RowContainer sx={{ ...styles.info }}>
          <StackConatiner>
            <StarIcon sx={{ ...styles.starIcon }} />
            4.05
          </StackConatiner>

          <StackConatiner>
            <TableRowsOutlinedIcon />
            {`${product.quantityOfStock} ${product.unit}`}
          </StackConatiner>
        </RowContainer>

        <RowContainer>
          <Typography sx={{ ...styles.price }}>
            {product.price.toLocaleString()}đ
          </Typography>
          <BuyButton>Mua</BuyButton>
        </RowContainer>
      </Box>
      {limited && <BorderLinearProgress variant="determinate" value={80} />}
    </Paper>
  );
};

export default ProductCard;
