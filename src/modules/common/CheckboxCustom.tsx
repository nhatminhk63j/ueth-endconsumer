import { Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { WHITE, GREY_600, BLUE } from 'assets/theme/colors';

export const CheckboxCustom = withStyles((theme) => ({
  root: {
    color: BLUE,
    '&$checked': {
      color: BLUE,
      '& .MuiIconButton-label': {
        position: 'relative',
        zIndex: 0,
      },
      '& .MuiIconButton-label:after': {
        content: '""',
        left: 4,
        top: 4,
        height: 22,
        width: 22,
        position: 'absolute',
        backgroundColor: WHITE,
        zIndex: -1,
      },
    },
    '&:not($checked)': {
      color: GREY_600,
      '& .MuiIconButton-label': {
        position: 'relative',
        zIndex: 0,
      },
      '& .MuiIconButton-label:after': {
        content: '""',
        left: 4,
        top: 4,
        height: 22,
        width: 22,
        position: 'absolute',
        backgroundColor: WHITE,
        zIndex: -1,
      },
      '& svg > path': {
        color: '#CBD5E0',
      },
    },
  },
  checked: {},
}))(Checkbox);
