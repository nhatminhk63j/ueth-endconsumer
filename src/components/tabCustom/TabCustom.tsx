import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Tabs, Tab } from '@material-ui/core';
import { GREEN } from 'assets/theme/colors';

export const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: GREEN,
    minWidth: 0,
  },
})(Tabs);

export const NoBorderAntTabs = withStyles({
  indicator: {
    backgroundColor: GREEN,
    minWidth: 0,
  },
})(Tabs);

export const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 0,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: 30,
    padding: '4px 0',
    '&:hover': {
      color: GREEN,
      opacity: 1,
    },
    '&$selected': {
      color: GREEN,
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: GREEN,
    },
  },
  selected: {},
}))((props: { label: string }) => <Tab disableRipple {...props} />);
