import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ProductCard from 'common/ProductCard';
import { BlackButton, RowContainer } from 'common/elements';
import { Link, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from 'constants/routes';

const _categories = [
  {
    name: 'thit',
    avatar: 'https://source.unsplash.com/random',
    id: 'thit',
  },
  {
    name: 'ga',
    avatar: 'https://source.unsplash.com/random',
    id: 'ga',
  },
  {
    name: 'rau',
    avatar: 'https://source.unsplash.com/random',
    id: 'thit',
  },
  {
    name: 'khoai',
    avatar: 'https://source.unsplash.com/random',
    id: 'thit',
  },
  {
    name: 'khoai',
    avatar: 'https://source.unsplash.com/random',
    id: 'thit',
  },
  {
    name: 'khoai',
    avatar: 'https://source.unsplash.com/random',
    id: 'thit',
  },
];

const headerStyles = {
  center: {
    textAlign: 'center',
  },
  avatar: {
    display: 'inline-block',
    width: 80,
    height: 80,
    border: '1px solid #c5c2c2',
  },
  name: {
    fontSize: 16,
  },
};

const mockProduct = {
  id: 'product-ca-chua',
  avatar:
    'https://cdn-crownx.winmart.vn/images/prod/162427343928010054623-KG-Su-su-qua-DL-L1-MT.jpg',
  name: 'Ca chua duoc trong tu nhien, 100% huu co, khong chat phu gia',
  description: 'Ca chua duoc trong tu nhien, 100% huu co, khong chat phu gia',
  quantityOfStock: 100,
  price: 100000,
  unit: 'kg',
  status: 'approved',
  category: {
    id: 'ca-11',
    name: 'Rau,Cu,Qua',
  },
  provider: {
    id: '12',
    address: 'Ha Noi',
    name: 'Nguyen van A',
    avatar:
      'https://storage.googleapis.com/public-tripi/fresh/img/455080aGecuu/nem-tom-hum.jpg?w=640&q=75',
  },
  createAt: '',
};

export function HomePage() {
  // const getCategories = categories => {
  //   return categories.map(item => (
  //     <Paper key={item.id}>
  //       <img src={item.avatar} alt={item.name} />
  //       <Typography />
  //     </Paper>
  //   ));
  // };
  const categories = _categories.slice(0, 6);

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <Paper
        elevation={0}
        sx={{
          width: '90%',
          margin: 'auto',
          mt: '10px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          borderRadius: '4px',
          padding: '1rem 3rem',
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {categories.map(item => (
            <Grid item xs={2} sm={4} md={2} key={item.id}>
              <Box sx={headerStyles.center}>
                <Avatar
                  src={item.avatar}
                  alt={item.name}
                  sx={headerStyles.avatar}
                />

                <Typography sx={headerStyles.name}>{item.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
      <RowContainer
        sx={{
          margin: 10,
        }}
      >
        <Stack>
          <Typography variant="h3">THỰC PHẨM HOT</Typography>
          <Typography variant="h5">những món ăn không thể thiếu...</Typography>
        </Stack>

        <BlackButton variant="contained" disableRipple>
          <Link component={RouterLink} to={routes.LOGIN} underline="none">
            {'Login'}
          </Link>
        </BlackButton>
      </RowContainer>

      <Paper
        elevation={0}
        sx={{
          width: '90%',
          margin: 'auto',
          mt: '10px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          borderRadius: '4px',
          padding: '1rem 3rem',
        }}
      >
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item>
            <ProductCard product={mockProduct} limited />
          </Grid>
          <Grid item>
            <ProductCard product={mockProduct} limited />
          </Grid>
          <Grid item>
            <ProductCard product={mockProduct} limited />
          </Grid>
          <Grid item>
            <ProductCard product={mockProduct} limited />
          </Grid>
          <Grid item>
            <ProductCard product={mockProduct} limited />
          </Grid>
          <Grid item>
            <ProductCard product={mockProduct} limited />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
