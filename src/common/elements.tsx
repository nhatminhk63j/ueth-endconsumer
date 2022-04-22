import {
  Link,
  styled,
  Button,
  alpha,
  LinearProgress,
  linearProgressClasses,
} from '@mui/material';
import * as React from 'react';

interface Props {
  as?: React.ElementType;
  to?: string;
  children?: any;
  className?: string;
  href?: string;
  [x: string]: any;
}

const _CustomLink = ({ children, ...rest }: Props) => (
  <Link {...rest} underline="none">
    {children}
  </Link>
);

export const RowContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '10px',
}));

export const StackConatiner = styled('div')(({ theme }) => ({
  alignItems: 'center',
}));

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  marginTop: 10,
  // borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: alpha('#FF9B25', 0.2),
  },
  [`& .${linearProgressClasses.bar}`]: {
    // borderRadius: 5,
    backgroundColor: '#FF9B25',
  },
}));

export const BlackButton = styled(Button)(({ theme }) => ({
  color: '#ffffff',
  borderRadius: '4px',
  height: '32px',
  alignItems: 'center',
  backgroundColor: '#000000',
  '&:hover': {
    backgroundColor: '#000000',
  },
  a: {
    color: '#ffffff',
  },
}));

export const PageWrapper = styled('div')(({ theme }) => ({
  minHeight: '100vh',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  //   background: theme.palette.gray.main,
}));

export const CustomLink = styled(_CustomLink)(({ theme }) => ({
  color: '#000000',
}));
