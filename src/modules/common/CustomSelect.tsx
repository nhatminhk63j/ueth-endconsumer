import {
  ClickAwayListener,
  Fade,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import DoneIcon from "@material-ui/icons/Done";
import { BLUE, GREY_300 } from "assets/theme/colors";
import { Col } from "modules/common/Elements";
import FormControlTextField from "modules/common/FormControlTextField";
import React from "react";
import { useIntl } from "react-intl";

interface Props {
  listHierarchy: some[]; // options
  option: any;
  optionSub?: any;
  setOption?(value: any): void;
  setOptionSub?(value: any): void;
  errorMessage?: any;
}

const CustomSelect: React.FC<Props> = (props) => {
  const {
    listHierarchy,
    option,
    optionSub,
    setOption,
    setOptionSub,
    errorMessage,
  } = props;
  const [open, setOpen] = React.useState(false);
  const [listSub, setListSub] = React.useState<some>(
    listHierarchy[0]?.children
  );

  const inputRef = React.useRef<any>();
  const customRef = React.useRef<any>();
  const intl = useIntl();

  return (
    <ClickAwayListener
      onClickAway={() => {
        setOpen(false);
      }}
    >
      <>
        <FormControlTextField
          readOnly
          value={
            optionSub?.name
              ? `${option?.name || ""} > ${optionSub?.name}`
              : `${option?.name || ""}`
          }
          innerRef={inputRef}
          onClick={() => {
            setOpen(!open);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton style={{ padding: 2, marginRight: 6 }}>
                <ArrowDropDownIcon
                  style={{ transform: open ? "rotate(180deg)" : undefined }}
                />
              </IconButton>
            </InputAdornment>
          }
          placeholder={intl.formatMessage({
            id: "IDS_LIST_PRODUCT_PLACE_HOLDER",
          })}
          // disableError
          errorMessage={errorMessage}
        />
        <Popper
          open={open}
          anchorEl={inputRef?.current}
          style={{
            width: inputRef?.current?.offsetWidth,
            zIndex: 1300,
          }}
          placement="bottom"
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper innerRef={customRef}>
                <List>
                  {listHierarchy.map((ele: some, index: number) => (
                    <ListItem
                      key={index}
                      role={undefined}
                      dense
                      button
                      onClick={(e) => {
                        setListSub(ele?.children);
                        setOption && setOption(ele);
                        setOptionSub && setOptionSub({});
                      }}
                      onMouseEnter={() => {
                        ele?.id === option?.id && setListSub(ele?.children);
                      }}
                      // onMouseLeave={() => setListSub([])}
                      style={{
                        background:
                          ele?.id === option?.id ? GREY_300 : undefined,
                        overflow: "hidden",
                      }}
                    >
                      <Typography
                        variant="body2"
                        style={{
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          flex: 1,
                        }}
                      >
                        {ele.name}
                      </Typography>
                      <DoneIcon
                        style={{
                          opacity: 0.6,
                          width: 18,
                          height: 18,
                          visibility:
                            ele?.id === option?.id ? "visible" : "hidden",
                          color: BLUE,
                          justifySelf: "flex-end",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Popper
                  open
                  anchorEl={customRef?.current}
                  style={{ width: 360, zIndex: 1300 }}
                  placement="right-start"
                  transition
                  // onMouseEnter={() => setOpenMonth(true)}
                  // onMouseLeave={() => setOpenMonth(false)}
                >
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper>
                        <List>
                          {listSub?.map((ele: some, index: number) => (
                            <ListItem
                              key={index}
                              role={undefined}
                              dense
                              button
                              onClick={(e) => {
                                setOptionSub && setOptionSub(ele);
                              }}
                              // onMouseEnter={() => setListSub(ele?.children)}
                              // onMouseLeave={() => setOpenMonth(false)}
                              style={{
                                background:
                                  ele?.id === optionSub?.id
                                    ? GREY_300
                                    : undefined,
                                overflow: "hidden",
                              }}
                            >
                              <Typography
                                variant="body2"
                                style={{
                                  textOverflow: "ellipsis",
                                  overflow: "hidden",
                                  whiteSpace: "nowrap",
                                  flex: 1,
                                }}
                              >
                                {ele.name}
                              </Typography>
                              <DoneIcon
                                style={{
                                  opacity: 0.6,
                                  width: 18,
                                  height: 18,
                                  visibility:
                                    ele?.id === optionSub?.id
                                      ? "visible"
                                      : "hidden",
                                  color: BLUE,
                                  justifySelf: "flex-end",
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </Paper>
            </Fade>
          )}
        </Popper>
      </>
    </ClickAwayListener>
  );
};

export default CustomSelect;
