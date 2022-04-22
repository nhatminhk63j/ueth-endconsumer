import { Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GREY_900 } from 'assets/theme/colors';
import React from 'react';

const useStylesBootstrap = makeStyles(
  (theme) => ({
    arrow: {
      color: GREY_900,
    },
    tooltip: {
      backgroundColor: GREY_900,
    },
  }),
  { index: 1 }
);
const BootstrapTooltip = (props: any) => {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
};

export default BootstrapTooltip;
