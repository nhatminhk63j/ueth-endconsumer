import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  InputBase,
} from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { GREY_300, GREY_700, PRIMARY } from "assets/theme/colors";
import Logo from "components/Logo";
import React from "react";
import { Link, useHistory } from "react-router-dom";

const useStyle = makeStyles({
  root: {
    backgroundColor: PRIMARY,
    color: "white",
    borderBottom: `1px solid ${GREY_300}`,
    padding: "20px 0",
  },
  logo: {
    fill: "white",
    fontWeight: "bolder",
    fontSize: 30,
    margin: "auto 0",
  },
  search: {
    fill: "white",
    margin: "auto 0",
    backgroundColor: "white",
    borderRadius: 30,
    color: GREY_700,
    height: 50,
    flexGrow: 1,
    // maxWidth: "50%",
  },
  container: {
    display: "flex",
    gap: 50,
  },
  icon_badge: {
    fontSize: 12,
  },
  right_nav: {
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
});

export interface HeaderProps {
  noColor?: boolean;
}

const DefaulHeader: React.FC<HeaderProps> = ({ noColor }) => {
  const classes = useStyle();
  let history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search?q=${e.target[0].value}`);
  };
  return (
    <Box
      className={classes.root}
      style={{
        backgroundColor: noColor ? "transparent" : "#FF9B25",
      }}
    >
      <Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          className={classes.container}
        >
          <Link to="/">
            <Button>
              <Logo />
            </Button>
          </Link>
          <form onSubmit={(e) => handleSearch(e)} style={{ width: "50%" }}>
            <InputBase
              fullWidth
              endAdornment={
                <Search
                  style={{
                    width: 50,
                    color: PRIMARY,
                    fontSize: 14,
                    fontWeight: "normal",
                  }}
                />
              }
              className={classes.search}
              style={{ padding: "0 10px" }}
              placeholder="T??m ki???m s???n ph???m, th????ng hi???u"
            />
          </form>

          <Box />
          <Box className={classes.right_nav}>
            <Link to="/cart" style={{ color: "white" }}>
              <Badge
                badgeContent={<span className={classes.icon_badge}>{4}</span>}
                color="default"
              >
                <ShoppingCartOutlined color="inherit" />
              </Badge>
            </Link>

            <Button color="inherit">????ng nh???p</Button>
            <Button color="inherit">????ng k??</Button>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default DefaulHeader;
