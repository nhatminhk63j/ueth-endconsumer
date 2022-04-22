import { Avatar, Box, Chip, Grid, Typography } from "@material-ui/core";
import {
  AccessAlarmOutlined,
  CategoryOutlined,
  CheckCircle,
  Phone,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { EmailIcon, LocationIcon } from "assets/icons";
import { GREY_100, GREY_600 } from "assets/theme/colors";
import VoteStar from "modules/common/VoteStar";
import moment from "moment";
import React, { FC } from "react";

interface UserBaseInfoProps {
  avatar: string;
  name: string;
  star?: number;
  email?: string;
  emailConfirmed?: boolean;
  address?: string;
  joinAt?: timestamp;
  categories?: Category[];
  phoneNumber?: string;
  status?: string;
}

const useStyle = makeStyles({
  center: {
    textAlign: "center",
  },
  avatar: {
    display: "inline-block",
    width: 150,
    height: 150,
    outline: `4px solid #ffffff`,
    boxShadow: "0px 0px 2px 5px #c5c2c2",
    border: "1px solid #c5c2c2",
  },
  name: {
    fontSize: 22,
    fontWeight: 500,
    marginTop: 10,
  },
  contact: {
    margin: "10px auto",
    maxWidth: 400,
    display: "flex",
    flexDirection: "column",
  },
  itemContact: {
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "flex-start",
    gap: 20,
    padding: "10px 0",
    borderBottom: `1px solid ${GREY_100}`,
    color: GREY_600,
  },
  itemTitle: {
    width: 200,
  },
  icon: {
    width: 20,
    height: 20,
    // color: GREY_600,
  },
});

const UserBaseInfo: FC<UserBaseInfoProps> = ({
  name,
  email,
  emailConfirmed,
  phoneNumber,
  avatar,
  address,
  star,
  joinAt,
  categories,
}) => {
  const classes = useStyle();

  return (
    <Box style={{ padding: 10 }}>
      <Box className={classes.center}>
        <Avatar className={classes.avatar} src={avatar} />
        <Typography className={classes.name}>{name}</Typography>
        {star && (
          <Typography color="secondary">
            <VoteStar star={5} iconOnly />
          </Typography>
        )}
      </Box>
      <Box className={classes.contact}>
        {phoneNumber && (
          <Box className={classes.itemContact}>
            <Grid
              container
              alignItems="center"
              wrap="nowrap"
              className={classes.itemTitle}
            >
              <Phone className={classes.icon} />
              &nbsp;
              <Typography style={{ whiteSpace: "nowrap" }}>
                Số điện thoại
              </Typography>
            </Grid>
            <Typography align="right" style={{ flexGrow: 1 }}>
              {phoneNumber}
            </Typography>
          </Box>
        )}
        <Box className={classes.itemContact}>
          <Grid
            container
            alignItems="center"
            wrap="nowrap"
            className={classes.itemTitle}
          >
            <EmailIcon className={classes.icon} />
            &nbsp;
            <Typography style={{ whiteSpace: "nowrap" }}>Email</Typography>
          </Grid>
          <Grid container wrap="nowrap" alignItems="center">
            <Typography align="right" style={{ flexGrow: 1 }}>
              {email}&nbsp;
            </Typography>
            {emailConfirmed && (
              <CheckCircle className={classes.icon} color="primary" />
            )}
          </Grid>
        </Box>
        <Box className={classes.itemContact}>
          <Grid
            container
            alignItems="center"
            className={classes.itemTitle}
            wrap="nowrap"
          >
            <LocationIcon className={classes.icon} />
            &nbsp;
            <Typography style={{ whiteSpace: "nowrap" }}> Địa chỉ </Typography>
          </Grid>
          <Typography align="right" style={{ flexGrow: 1 }}>
            {address}
          </Typography>
        </Box>
        <Box className={classes.itemContact}>
          <Grid
            container
            alignItems="center"
            className={classes.itemTitle}
            wrap="nowrap"
          >
            <AccessAlarmOutlined className={classes.icon} />
            &nbsp;
            <Typography style={{ whiteSpace: "nowrap" }}>
              Ngày tham gia
            </Typography>
          </Grid>
          <Typography align="right" style={{ flexGrow: 1 }}>
            {moment(joinAt).format("l")}
          </Typography>
        </Box>
        {categories && categories.length > 0 && (
          <Box className={classes.itemContact}>
            <Grid
              container
              alignItems="center"
              className={classes.itemTitle}
              wrap="nowrap"
            >
              <CategoryOutlined className={classes.icon} />
              &nbsp;
              <Typography style={{ whiteSpace: "nowrap" }}>Mặt hàng</Typography>
            </Grid>
            <Typography align="right" style={{ flexGrow: 1 }}>
              <Grid style={{ gap: 5 }} container justifyContent="flex-end">
                {categories.map((c, i) => (
                  <Chip key={i} label={c.name} />
                ))}
              </Grid>
            </Typography>
          </Box>
        )}
      </Box>
      {/* sdt */}
      {/* address */}
      {/* status */}
    </Box>
  );
};

export default UserBaseInfo;
