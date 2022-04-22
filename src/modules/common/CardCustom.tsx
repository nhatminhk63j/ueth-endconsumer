import { Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const CardCustom = withStyles(
  () => ({
    root: {
      '&:hover': {
        boxShadow:
          '0px 4px 9px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1)',
      },
      cursor: 'pointer',
      padding: '12px 16px',
      display: 'flex',
      minHeight: 148,
      minWidth: 200,
      justifyContent: 'flex-start',
      flex: 1,
      border: 'none',
      borderRadius: 12,
    },
  }),
  { index: 1 }
)(Card);
