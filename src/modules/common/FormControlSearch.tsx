import {
  ClickAwayListener,
  Fade,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import { debounce } from "lodash";
import React from "react";
import { FormattedMessage } from "react-intl";
import { BLUE, GREY_300 } from "assets/theme/colors";
import FormControlTextField, {
  FormControlTextFieldProps,
} from "./FormControlTextField";

interface CommonProps<T> extends FormControlTextFieldProps {
  getOptionLabel: (option: T) => string | JSX.Element;
  options: T[];
  defaultValue?: T;
  multiple?: false;
  value?: string | null;
  onSelectOption?: (value?: T) => void;
  loadOptions?: (input: string) => Promise<T[]>;
}

export type SelectProps<T> = CommonProps<T>;

export const FormControlSearch: <T extends some>(
  prop: SelectProps<T>
) => React.ReactElement<SelectProps<T>> = (props) => {
  const {
    options,
    getOptionLabel,
    multiple,
    onSelectOption,
    id,
    value,
    loadOptions,
    onChange,
    ...rest
  } = props;
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef<any>();
  const handleClick = () => {
    setOpen(true);
  };

  const isChecked = React.useCallback(
    (one: typeof options[number]) => {
      return value === getOptionLabel(one);
    },
    [getOptionLabel, value]
  );

  const onSelectValue = React.useCallback(
    (one: typeof options[number]) => {
      onSelectOption && onSelectOption(one);
      setOpen(false);
    },
    [onSelectOption]
  );

  const [optionsTmp, setOption] = React.useState<typeof options>(options);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onLoadOptions = React.useCallback(
    debounce(
      async (input: string) => {
        if (loadOptions) {
          const data = await loadOptions(input);
          if (data && data.length > 0) {
            setOption(data);
          } else setOption(options);
        }
      },
      500,
      {
        trailing: true,
        leading: false,
      }
    ),
    []
  );

  React.useEffect(() => {
    if (value && value?.length > 0) {
      onLoadOptions(value);
    } else {
      setOption(options);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, options]);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div
        style={{
          width: "100%",
        }}
      >
        <FormControlTextField
          {...rest}
          id={id}
          value={value || ""}
          innerRef={inputRef}
          focused={open}
          onChange={(e) => {
            onChange && onChange(e);
            setOpen(true);
          }}
          inputProps={{
            ...rest.inputProps,
            style: { textOverflow: "ellipsis", ...rest.inputProps?.style },
          }}
          onClick={handleClick}
        />
        <Popper
          open={open}
          anchorEl={inputRef?.current}
          style={{
            width: inputRef?.current?.offsetWidth,
            margin: "4px 0",
            zIndex: 1300,
          }}
          placement="bottom"
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper style={{ maxHeight: 300, overflowY: "auto" }}>
                {optionsTmp.length === 0 && (
                  <div style={{ padding: "6px 12px" }}>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      style={{ margin: "16px 0px 0px 0px" }}
                    >
                      <FormattedMessage id="IDS_FORM_NO_OPTION" />
                    </Typography>
                  </div>
                )}
                <List>
                  {optionsTmp?.length > 0 &&
                    optionsTmp.map(
                      (one: typeof optionsTmp[number], index: number) => (
                        <ListItem
                          key={index}
                          role={undefined}
                          dense
                          button
                          onClick={() => {
                            onSelectValue(one);
                          }}
                          style={{
                            background: isChecked(one) ? GREY_300 : undefined,
                          }}
                        >
                          <ListItemText primary={getOptionLabel(one)} />
                          {isChecked(one) && (
                            <ListItemSecondaryAction>
                              <DoneIcon
                                style={{
                                  opacity: 0.6,
                                  width: 18,
                                  height: 18,
                                  color: BLUE,
                                  justifySelf: "flex-end",
                                }}
                              />
                            </ListItemSecondaryAction>
                          )}
                        </ListItem>
                      )
                    )}
                </List>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    </ClickAwayListener>
  );
};

export default FormControlSearch;
