import {
  ClickAwayListener,
  IconButton,
  Popper,
  TextField,
  Typography,
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { CSSProperties } from '@material-ui/styles';
import moment from 'moment';
import React from 'react';
import { GREY_500, WHITE } from 'assets/theme/colors';
import { HOUR_MINUTE } from 'utils/models/moment';
import { Col, Row } from './Elements';
import FormControlTextField from './FormControlTextField';
import { validNumberRegex, timeRegex } from 'constants/constants';

interface Props {
  time: string | null;
  label?: React.ReactNode;
  onChangeTime(values: string): void;
  disabled?: boolean;
  style?: CSSProperties;
  formControlStyle?: CSSProperties;
  errorMessage?: string;
}

const SelectTimeCheck: React.FC<Props> = (props) => {
  const {
    label,
    time,
    onChangeTime: setTime,
    disabled,
    style,
    formControlStyle,
    errorMessage,
  } = props;
  const [hourTest, setHourTest] = React.useState<number>();
  const [minutesTest, setMinutesTest] = React.useState<number>();
  const [timeCustom, setTimeCustom] = React.useState('');
  const inputRef = React.useRef<any>();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    if (!disabled) {
      setOpen(true);
    }
  };

  const getTime = React.useCallback(() => {
    if (timeCustom) {
      setHourTest(Number(timeCustom.split(':')[0]));
      setMinutesTest(
        timeCustom.split(':')[1] ? Number(timeCustom.split(':')[1]) : undefined
      );
    } else {
      setHourTest(undefined);
      setMinutesTest(undefined);
    }
  }, [timeCustom]);

  const hourFormattedString = React.useMemo(() => {
    if (hourTest === 0 || (hourTest && hourTest < 10)) {
      return `0${hourTest}`;
    }
    return hourTest ? `${hourTest}` : '';
  }, [hourTest]);

  const minutesFormattedString = React.useMemo(() => {
    if (minutesTest === 0 || (minutesTest && minutesTest < 10)) {
      return `0${minutesTest}`;
    }
    return minutesTest ? `${minutesTest}` : '';
  }, [minutesTest]);

  const timeStringLabel = React.useMemo(
    () =>
      `${hourFormattedString !== '' ? hourFormattedString : '--'}:${
        minutesFormattedString !== '' ? minutesFormattedString : '--'
      }`,
    [hourFormattedString, minutesFormattedString]
  );

  const handleChangeHourTest = React.useCallback(
    (hour: number) => {
      if (hour < 0) {
        setTimeCustom(`23:${minutesFormattedString || '00'}`);
      } else if (hour > 23) {
        setTimeCustom(`00:${minutesFormattedString || '00'}`);
      } else if (hour < 10) {
        setTimeCustom(`0${hour}:${minutesFormattedString || '00'}`);
      } else setTimeCustom(`${hour}:${minutesFormattedString || '00'}`);
    },
    [minutesFormattedString]
  );

  const handleChangeMinutesTest = React.useCallback(
    (minutes: number) => {
      if (minutes < 0) {
        setTimeCustom(`${hourFormattedString || '00'}:59`);
      } else if (minutes > 59) {
        setMinutesTest(0);
        setTimeCustom(`${hourFormattedString || '00'}:00`);
      } else if (minutes < 10) {
        setTimeCustom(`${hourFormattedString || '00'}:0${minutes}`);
      } else setTimeCustom(`${hourFormattedString || '00'}:${minutes}`);
    },
    [hourFormattedString]
  );

  const handleChangeTextTime = React.useCallback((values: string) => {
    if (values.length <= 2) {
      setTimeCustom(`${values}`);
    }
    if (values.length >= 3) {
      setTimeCustom(`${values.slice(0, 2)}:${values.slice(2)}`);
    }
  }, []);

  const handleClose = () => {
    if (open) {
      const isValid =
        moment(timeStringLabel, HOUR_MINUTE).isValid() &&
        !timeStringLabel.includes('--');
      if (isValid) {
        setTime(timeStringLabel);
        setTimeCustom(timeStringLabel);
      } else time && setTimeCustom(time);
    }
    setOpen(false);
  };

  const handleKeyTab = (key: string) => {
    if (key === 'Tab') {
      handleClose();
    }
  };

  React.useEffect(() => {
    time ? setTimeCustom(time) : setTimeCustom('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  React.useEffect(() => {
    getTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeCustom]);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Col style={{ minWidth: '108px', ...formControlStyle }}>
        <FormControlTextField
          label={label}
          value={timeCustom}
          innerRef={inputRef}
          placeholder="--:--"
          onChange={(e) => {
            setOpen(true);
            e.target.value.length <= 1
              ? validNumberRegex.test(e.target.value) &&
                setTimeCustom(e.target.value)
              : timeRegex.test(e.target.value.replace(':', '')) &&
                handleChangeTextTime(e.target.value.replace(':', ''));
          }}
          style={{ minWidth: 108, width: '100%' }}
          formControlStyle={{
            minWidth: 108,
            width: '100%',
            marginRight: 0,
            ...style,
          }}
          onClick={handleClick}
          onKeyDown={(e) => handleKeyTab(e.key)}
          onFocus={handleClick}
          disabled={disabled}
          errorMessage={errorMessage}
        />
        <Popper
          open={open}
          anchorEl={inputRef?.current}
          placement="bottom"
          transition
        >
          <Col
            style={{
              alignItems: 'center',
              backgroundColor: WHITE,
              minWidth: inputRef?.current?.offsetWidth,
              maxHeight: 350,
              boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Row style={{ justifyContent: 'space-between' }}>
              <Col style={{ alignItems: 'center' }}>
                <IconButton
                  style={{ padding: 2 }}
                  onClick={() => {
                    const hour = hourTest ? hourTest + 1 : 1;
                    handleChangeHourTest(hour);
                  }}
                >
                  <ArrowDropUpIcon />
                </IconButton>
                <TextField
                  style={{ width: 30, margin: 0 }}
                  value={hourFormattedString}
                  placeholder="--"
                  onChange={(e) =>
                    (e.target.value === '' ||
                      validNumberRegex.test(e.target.value)) &&
                    handleChangeHourTest(Number(e.target.value))
                  }
                  inputProps={{
                    style: {
                      textAlign: 'center',
                      fontSize: '24px',
                      color: GREY_500,
                      padding: 0,
                    },
                  }}
                />
                <IconButton
                  style={{ padding: 2 }}
                  onClick={() => {
                    const hour = hourTest ? hourTest - 1 : 23;
                    handleChangeHourTest(hour);
                  }}
                >
                  <ArrowDropDownIcon />
                </IconButton>
              </Col>
              <Typography variant="h5" color="textSecondary">
                :
              </Typography>
              <Col style={{ alignItems: 'center' }}>
                <IconButton
                  style={{ padding: 2 }}
                  onClick={() => {
                    const minute = minutesTest ? minutesTest + 1 : 1;
                    handleChangeMinutesTest(minute);
                  }}
                >
                  <ArrowDropUpIcon />
                </IconButton>
                <TextField
                  style={{ width: 28, margin: 0 }}
                  value={minutesFormattedString}
                  placeholder="--"
                  onChange={(e) =>
                    (e.target.value === '' ||
                      validNumberRegex.test(e.target.value)) &&
                    handleChangeMinutesTest(Number(e.target.value))
                  }
                  inputProps={{
                    style: {
                      textAlign: 'center',
                      fontSize: '24px',
                      color: GREY_500,
                      padding: 0,
                    },
                  }}
                />
                <IconButton
                  style={{ padding: 2 }}
                  onClick={() => {
                    const minute = minutesTest ? minutesTest - 1 : 59;
                    handleChangeMinutesTest(minute);
                  }}
                >
                  <ArrowDropDownIcon />
                </IconButton>
              </Col>
            </Row>
          </Col>
        </Popper>
      </Col>
    </ClickAwayListener>
  );
};

export default SelectTimeCheck;
