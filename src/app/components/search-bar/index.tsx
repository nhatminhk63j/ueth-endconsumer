import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

interface IProps {
  searchFunction: (values: any) => void;
  sx?: any;
}
let KEY = { ENTER: 'Enter' };

const CustomSearch: React.FunctionComponent<IProps> = (props: IProps) => {
  const { searchFunction, sx } = props;

  const _handleKeyDown = (e: any) => {
    if (e.key === KEY.ENTER) return searchFunction(e.target.value);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 16,
    backgroundColor: theme.palette.gray.main,
    '&:hover': {
      backgroundColor: theme.palette.grey,
    },
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '200px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '500px',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '500px',
      },
    },
  }));
  return (
    <Search sx={sx}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        onKeyDown={e => _handleKeyDown(e)}
        placeholder="Tìm kiếm sản phẩm..."
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
};

export default CustomSearch;
