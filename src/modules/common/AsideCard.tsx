import { IconButton, Slide, Typography } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row } from './Elements';

interface IAsideCardProps {
  open: boolean;
  onClose(): void;
  onAccept(): void;
  onReject?: () => void;
  acceptLabel?: string;
  rejectLabel?: string;
  titleLabel?: string;
  loading?: boolean;
  disabled?: boolean;
}

const AsideCard: React.FunctionComponent<IAsideCardProps> = (props) => {
  const { open, onClose, titleLabel, children } = props;
  return (
    <Slide in={open} unmountOnExit direction="left" onExit={onClose}>
      <div
        style={{
          background: 'white',
          width: 400,
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          zIndex: 900,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          marginTop: 56,
          maxHeight: `calc(100vh - ${56}px)`,
          boxShadow:
            '0px 3px 9px rgba(0, 0, 0, 0.15), 0px 7px 18px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div style={{ padding: '12px 16px' }}>
          <Row style={{ justifyContent: 'space-between', marginBottom: 12 }}>
            <Typography variant="subtitle1">
              <FormattedMessage id={titleLabel || 'IDS_CHAT_TAGS_EDIT'} />
            </Typography>
            <IconButton
              style={{ padding: 4, marginRight: 8 }}
              onClick={onClose}
            >
              <ClearIcon />
            </IconButton>
          </Row>
          {children}
        </div>
      </div>
    </Slide>
  );
};

export default AsideCard;
