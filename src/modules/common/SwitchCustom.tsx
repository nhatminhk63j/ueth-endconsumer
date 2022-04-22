import { Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { GREEN, GREEN_300 } from 'assets/theme/colors';

const CustomSwitch = withStyles(
  {
    switchBase: {
      '&$checked': {
        color: GREEN,
      },
      '&$checked + $track': {
        backgroundColor: GREEN_300,
      },
    },
    checked: {},
    track: {},
  },
  { index: 1 }
)(Switch);

export default CustomSwitch;
