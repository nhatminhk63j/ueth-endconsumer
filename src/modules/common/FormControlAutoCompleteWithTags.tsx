import { Chip, Typography } from "@material-ui/core";
import { BLUE_NAVY, SECONDARY, WHITE } from "assets/theme/colors";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import BootstrapTooltip from "./BootstrapTooltip";
import { Col, Row } from "./Elements";
import FormControlAutoComplete from "./FormControlAutoComplete";

interface Props {
  options: some[];
  label?: string;
  disabled?: boolean;
  formControlStyle?: some;
  style?: some;
  tagsShowing: number;
  tooltipStyle?: some;
  value?: some[];
  onChange: (value: any) => void;
  optional?: boolean;
  placeholder?: string;
}
const FormControlAutoCompleteWithTags: React.FC<Props> = (props) => {
  const {
    options,
    label,
    disabled,
    formControlStyle,
    style,
    tagsShowing,
    tooltipStyle,
    value,
    onChange,
    optional,
    placeholder,
  } = props;
  const intl = useIntl();
  return (
    <FormControlAutoComplete
      multiple
      placeholder={
        placeholder ?? intl.formatMessage({ id: "IDS_FRESH_CHOOSE" })
      }
      label={label ? <FormattedMessage id={label} /> : ""}
      value={value ? value : []}
      style={style || { minWidth: 300 }}
      formControlStyle={
        formControlStyle || { flexBasis: "40%", minWidth: 300, marginRight: 12 }
      }
      optional={optional}
      options={options}
      disableClearable
      disableCloseOnSelect
      getOptionLabel={(one) => one.name}
      getOptionSelected={(option, value) => {
        return option.id === value.id;
      }}
      onChange={(e: any, value: some[]) => {
        onChange(value);
      }}
      disabled={disabled}
      renderTags={(value: some[], getTagProps) => (
        <BootstrapTooltip
          title={value.map((one) => one.name).join(", ")}
          arrow
          style={{ borderRadius: 8, ...tooltipStyle }}
        >
          <Row>
            {value.map((option: some, idx: number) => {
              if (idx < tagsShowing) {
                return (
                  <Chip
                    style={{
                      backgroundColor: BLUE_NAVY,
                      border: "none",
                      height: 28,
                      width: 90,
                      color: WHITE,
                      zIndex: 999,
                    }}
                    variant="outlined"
                    label={
                      <Typography variant="caption" style={{ color: WHITE }}>
                        {option.name}
                      </Typography>
                    }
                    {...getTagProps({ index: idx })}
                  />
                );
              }
              return null;
            })}
            {value.length > tagsShowing && (
              <>
                &hellip;&nbsp;
                <Col
                  style={{
                    minWidth: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: SECONDARY,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="body2" style={{ color: WHITE }}>
                    {value.length}
                  </Typography>
                </Col>
              </>
            )}
          </Row>
        </BootstrapTooltip>
      )}
    />
  );
};

export default FormControlAutoCompleteWithTags;
