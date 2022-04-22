import { Box, Grid, TextField, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { LocationIcon } from "assets/icons";
import { KEY_GOOGLE_MAP } from "constants/constants";
import React from "react";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

export interface AddressPlace {}
interface PlaceAutoCompleteProps {
  defaultValue?: string;
  onChange: () => void;
}

const PlaceAutoComplete: React.FC<PlaceAutoCompleteProps> = ({
  defaultValue,
}) => {
  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    usePlacesService({
      apiKey: KEY_GOOGLE_MAP,
      language: "vi",
      options: {
        componentRestrictions: { country: "vn" },
      },
    });

  return (
    <>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={placePredictions}
        getOptionLabel={(e) =>
          e.description.split(", ").slice(0, -1).join(", ")
        }
        loading={isPlacePredictionsLoading}
        renderInput={(params) => (
          <TextField
            variant="outlined"
            {...params}
            placeholder="Nhập địa chỉ của bạn"
            onChange={(evt) => {
              getPlacePredictions({ input: evt.target.value });
            }}
            size="small"
            defaultValue={"abc"}
          />
        )}
        renderOption={(option) => (
          <Box onClick={(e) => console.log(option)}>
            <Grid
              container
              wrap="nowrap"
              alignItems="baseline"
              style={{ padding: "5px 0" }}
            >
              <LocationIcon style={{ minWidth: 25 }} />
              &nbsp;
              <Typography>{option.description}</Typography>
            </Grid>
          </Box>
        )}
      />
    </>
  );
};

export default PlaceAutoComplete;
