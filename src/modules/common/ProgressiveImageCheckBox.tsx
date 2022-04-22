import { ButtonBase, IconButton } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { ReactComponent as BtnIconClose } from 'assets/icons/btn-icon-close.svg';
import ProgressiveImage from './ProgressiveImage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonIcon: {
      '& .hide': { display: 'none' },
      '&:hover .hide': { display: 'inline-block' },
    },
  })
);

interface ProgressiveImageCheckBoxProps {
  index: number;
  value: boolean;
  onChange(): void;
  thumbnail: string;
}

function ProgressiveImageCheckBox(props: ProgressiveImageCheckBoxProps) {
  const { onChange, thumbnail } = props;
  const classes = useStyles();
  return (
    <ButtonBase className={classes.buttonIcon} style={{ marginTop: 4 }}>
      <div style={{ position: 'relative', width: '100%' }}>
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <IconButton className="hide" onClick={onChange}>
            <BtnIconClose color="primary" />
          </IconButton>
        </div>
        <ProgressiveImage
          style={{
            width: 200,
            borderRadius: 4,
            objectFit: 'cover',
            height: 160,
          }}
          src={thumbnail}
          alt=""
        />
      </div>
    </ButtonBase>
  );
}

export default ProgressiveImageCheckBox;
