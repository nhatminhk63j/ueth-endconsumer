import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import CustomSearch from '../search-bar';
import { BlackButton, CustomLink } from 'common/elements';
import { t } from 'i18next';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from 'constants/routes';
import { Link, Stack } from '@mui/material';
const pages = ['Register', 'Login'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSearch = value => {
    alert(`Searching ${value}`);
  };

  return (
    <AppBar
      position="static"
      color="default"
      style={{
        backgroundColor: 'white',
        width: '90%',
        marginTop: '16px',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        padding: '1rem 3rem',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <CustomLink component={RouterLink} to={routes.HOMEPAGE}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              VERYCIOUS
            </Typography>
          </CustomLink>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            VERYCIOUS
          </Typography>

          <CustomLink
            component={RouterLink}
            to={routes.SIGNUP}
            sx={{ ml: 3, display: { xs: 'flex', md: 'flex' } }}
          >
            {t('Join merchants')}
          </CustomLink>

          <CustomSearch
            searchFunction={handleSearch}
            sx={{ alignSelf: 'center', display: { xs: 'flex', md: 'flex' } }}
          />

          <Stack
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <CustomLink component={RouterLink} to={routes.SIGNUP}>
              {t('Sign up')}
            </CustomLink>

            <BlackButton variant="contained" disableRipple>
              <Link component={RouterLink} to={routes.LOGIN} underline="none">
                {'Login'}
              </Link>
            </BlackButton>
          </Stack>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(setting => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;