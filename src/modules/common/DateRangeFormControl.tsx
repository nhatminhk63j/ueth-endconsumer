/* eslint-disable no-nested-ternary */
import { Button, IconButton, InputAdornment, RootRef } from "@material-ui/core";
import { GREY_600 } from "assets/theme/colors";
import moment, { Moment } from "moment";
import React from "react";
import { DayPickerRangeController, FocusedInputShape } from "react-dates";
import { FormattedMessage, useIntl } from "react-intl";
import { CSSTransition } from "react-transition-group";
import { DATE_FORMAT } from "utils/models/moment";
import { ReactComponent as IconCalender } from "assets/icons/ic_calendar.svg";
import {
  Col,
  DateMaskCustomRange,
  DateMaskCustomSingle,
  Wrapper,
} from "./Elements";
import FormControlTextField from "./FormControlTextField";
import styles from "./styles.module.scss";
import { MIN_WIDTH_FORM, renderMonthText } from "./utils";

export function isDayHighlighted(day: Moment) {
  return moment().format("L") === day.format("L") ? (
    <span style={{ fontWeight: "bold", color: GREY_600 }}>
      {day.format("D")}
    </span>
  ) : (
    day.format("D")
  );
}

export interface DateRangeFormControlProps extends some {
  onChange(startDate?: Moment, endDate?: Moment): void;
  label?: React.ReactNode;
  startDate?: Moment;
  endDate?: Moment;
  optional?: boolean;
  errorMessage?: string;
  helpText?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  minimizedWidth?: string | number;
  numberOfMonths?: number;
  singleValue?: boolean;
  startAdornment?: boolean;
  placeholder?: string;
  iRef?: React.RefObject<HTMLDivElement>;
  isOutsideRange?: (day: any) => boolean;
  onClickBtn?: () => void;
  direction?: "left" | "center";
  isInputReadOnly?: boolean;
  id?: string;
  disableError?: boolean;
}

const DateRangeFormControl: React.FC<DateRangeFormControlProps> = (props) => {
  const intl = useIntl();
  const {
    onChange,
    startDate,
    endDate,
    optional,
    errorMessage,
    helpText,
    inputStyle,
    style,
    label,
    minimizedWidth,
    singleValue,
    numberOfMonths,
    placeholder,
    startAdornment,
    isOutsideRange,
    onClickBtn,
    iRef,
    direction,
    isInputReadOnly,
    id,
    disableError,
    ...rest
  } = props;

  const customValueShow = (date) => {
    return `${
      date
        ? date.format(DATE_FORMAT)
        : placeholder || intl.formatMessage({ id: "IDS_NOT_CHOOSE" })
    }`;
  };
  const [focusedInput, setFocusedInput] =
    React.useState<FocusedInputShape>("startDate");
  const [dateFormatStr, setDateFormatStr] = React.useState(
    singleValue
      ? customValueShow(startDate)
      : `${customValueShow(startDate)} - ${customValueShow(endDate)}`
  );
  const [start, setStartDate] = React.useState<Moment | undefined>();
  const [end, setEndDate] = React.useState<Moment | undefined>();
  const [isFocused, setFocus] = React.useState(false);
  const [height, setHeight] = React.useState(0);

  const parent = iRef || React.createRef<HTMLDivElement>();
  const inputRef = React.useRef<HTMLInputElement>();
  const innerRef = React.useRef<HTMLInputElement>();

  const onBlur = React.useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      if (e.relatedTarget instanceof Element) {
        if (e.currentTarget.contains(e.relatedTarget as Element)) {
          if (
            inputRef.current &&
            (e.relatedTarget.id !== "selectDateRange" ||
              e.relatedTarget.tagName !== "INPUT")
          ) {
            inputRef.current?.focus();
            return;
          }
          if (parent.current) {
            parent.current.focus();
            return;
          }
        }
      }
      setFocus(false);
      onChange(start, end);
      setDateFormatStr(
        singleValue
          ? customValueShow(start)
          : `${customValueShow(start)} - ${customValueShow(end)}`
      );
    }, // eslint-disable-next-line
    [onChange, start, end, singleValue, intl, parent]
  );

  const textChange = React.useCallback(
    (text: string) => {
      const newDateValues = text.split(" - ");
      const newStartDate = moment(newDateValues[0], DATE_FORMAT, true);
      const newEndDate = newDateValues[1]
        ? moment(newDateValues[1], DATE_FORMAT, true)
        : undefined;
      if (
        newStartDate.isValid() &&
        (isOutsideRange ? !isOutsideRange(newStartDate) : true)
      ) {
        setStartDate(newStartDate);
      } else {
        setStartDate(undefined);
      }
      if (
        newEndDate?.isValid() &&
        (isOutsideRange ? !isOutsideRange(newStartDate) : true) &&
        newEndDate.isAfter(newStartDate)
      ) {
        setEndDate(newEndDate);
      } else {
        setEndDate(undefined);
      }
    },
    [isOutsideRange]
  );

  React.useEffect(() => {
    setFocusedInput("startDate");
    setStartDate(startDate);
    setEndDate(endDate);
    setDateFormatStr(
      singleValue
        ? customValueShow(startDate)
        : `${customValueShow(startDate)} - ${customValueShow(endDate)}`
    ); // eslint-disable-next-line
  }, [startDate, endDate, intl, singleValue]);

  React.useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
    }
  }, [inputRef, isFocused, singleValue]);

  React.useEffect(() => {
    setHeight(innerRef.current?.offsetHeight as number);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        outline: "none",
        minHeight: height,
        color: isFocused ? "black" : undefined,
        minWidth: MIN_WIDTH_FORM,
        marginRight: 20,
        ...style,
      }}
      {...rest}
      role="group"
      tabIndex={-1}
      ref={parent}
      onBlur={onBlur}
      onFocus={(e) => {
        const focus = true;
        if (focus) {
          if (e.target !== parent.current && inputRef.current) {
            inputRef.current.focus();
          }
          setFocus(true);
        }
      }}
    >
      <Wrapper
        style={{
          boxShadow: isFocused ? "0px 4px 8px rgba(0, 0, 0, 0.25)" : undefined,
          zIndex: isFocused ? 100 : 0,
          backgroundColor: isFocused
            ? "rgba(255,255,255,1)"
            : "rgba(255,255,255,0)",
          margin: isFocused
            ? direction === "center"
              ? "-12px 0px"
              : "-12px"
            : undefined,
          transition: "none",
          right: direction === "left" ? 0 : undefined,
          left:
            direction === "left"
              ? "unset"
              : direction === "center"
              ? "50%"
              : undefined,
          transform: direction === "center" ? "translateX(-50%)" : undefined,
        }}
      >
        <div style={{ padding: isFocused ? "12px 12px 0px 12px" : undefined }}>
          <RootRef rootRef={innerRef}>
            <FormControlTextField
              disableError={disableError}
              helpText={helpText}
              id={id}
              inputRef={inputRef}
              label={label}
              formControlStyle={{
                margin: 0,
                width: "100%",
                minWidth: minimizedWidth,
              }}
              style={{
                background: "white",
                ...inputStyle,
              }}
              placeholder={
                placeholder ||
                (singleValue
                  ? `${DATE_FORMAT.toLocaleLowerCase()}`
                  : `${DATE_FORMAT.toLocaleLowerCase()} - ${DATE_FORMAT.toLocaleLowerCase()}`)
              }
              fullWidth
              value={dateFormatStr}
              optional={optional}
              inputProps={{ style: { width: "100%" } }}
              onChange={(e) => {
                setDateFormatStr(e.target.value);
                textChange(e.target.value);
              }}
              errorMessage={errorMessage}
              inputComponent={
                isFocused
                  ? singleValue
                    ? (DateMaskCustomSingle as any)
                    : (DateMaskCustomRange as any)
                  : undefined
              }
              endAdornment={
                !startAdornment && (
                  <InputAdornment position="end" style={{ marginRight: 8 }}>
                    <IconButton size="small" edge="start">
                      <IconCalender />
                    </IconButton>
                  </InputAdornment>
                )
              }
              startAdornment={
                startAdornment && (
                  <InputAdornment position="start" style={{ marginLeft: 8 }}>
                    <IconButton size="small" edge="start">
                      <IconCalender />
                    </IconButton>
                  </InputAdornment>
                )
              }
              readOnly={isInputReadOnly}
            />
          </RootRef>
        </div>
        <CSSTransition
          timeout={200}
          in={isFocused}
          classNames={{
            enter: styles.enter,
            enterActive: styles.enterActive,
            exit: styles.leave,
            exitActive: styles.leaveActive,
          }}
          unmountOnExit
        >
          <Col
            key={1}
            style={{
              transition: "all 300ms ease",
              backgroundColor: "white",
              width: isFocused ? undefined : 0,
              alignItems: "center",
            }}
          >
            <DayPickerRangeController
              hideKeyboardShortcutsPanel
              noBorder
              daySize={40}
              numberOfMonths={numberOfMonths || 1}
              startDate={start || null}
              endDate={end || null}
              focusedInput={focusedInput}
              onDatesChange={(value) => {
                setStartDate(value.startDate || undefined);
                setEndDate(value.endDate || undefined);
                setDateFormatStr(
                  singleValue
                    ? customValueShow(value.startDate)
                    : `${customValueShow(value.startDate)} - ${customValueShow(
                        value.endDate
                      )}`
                );
              }}
              onFocusChange={(text) =>
                setFocusedInput(singleValue ? "startDate" : text || "startDate")
              }
              isOutsideRange={(e: any) =>
                isOutsideRange
                  ? isOutsideRange(e)
                  : moment().endOf("day").isSameOrBefore(e) ||
                    moment()
                      .subtract(6, "months")
                      .startOf("day")
                      .isSameOrAfter(e)
              }
              minimumNights={0}
              renderMonthText={renderMonthText}
              renderDayContents={(day) => isDayHighlighted(day)}
            />
            {onClickBtn && (
              <div
                style={{ alignSelf: "flex-end", padding: "0px 12px 12px 0px" }}
              >
                <Button
                  disableElevation
                  style={{ minWidth: 120, minHeight: 30 }}
                  size="large"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    parent.current?.blur();
                    inputRef.current?.blur();
                    onClickBtn && onClickBtn();
                  }}
                >
                  <FormattedMessage id="IDS_ACCEPT" />
                </Button>
              </div>
            )}
          </Col>
        </CSSTransition>
      </Wrapper>
    </div>
  );
};

export default DateRangeFormControl;
