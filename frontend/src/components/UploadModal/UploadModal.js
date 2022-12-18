import React from "react";
import { useContext, useState } from "react";

import { Modal } from "@mui/material";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";

import { Box } from "@mui/system";

import CloseIcon from "@mui/icons-material/Close";

import axios from "axios";

import FilterContext from "../../store/filter-context";

import siteConfig from "../../config/site-config";

const UploadModal = function (props) {
  const filterCtx = useContext(FilterContext);

  const [videoLink, setVideoLink] = useState("");
  const [thumbnailLink, setThumbnailLink] = useState("");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("Education");
  const [ageRating, setAgeRating] = useState("7+");
  const [uploadDate, setUploadDate] = useState("");

  const inputChangeHandler = function (e) {
    if (e.target.id === "video-link") setVideoLink(e.target.value);
    if (e.target.id === "thumbnail-link") setThumbnailLink(e.target.value);
    if (e.target.id === "title") setTitle(e.target.value);
    if (e.target.id === "genre") setGenre(e.target.value);
    if (e.target.id === "age-group") setAgeRating(e.target.value);
    if (e.target.id === "upload-date") setUploadDate(e.target.value);
  };

  const resetForm = function () {
    setVideoLink("");
    setThumbnailLink("");
    setTitle("");
    setGenre("");
    setAgeRating("");
    setUploadDate("");
  };

  const submitHandler = async function (e) {
    e.preventDefault();

    const videoDate = new Date(uploadDate);
    const formattedDate = videoDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const formData = {
      videoLink: videoLink,
      previewImage: thumbnailLink,
      title: title,
      genre: genre,
      contentRating: ageRating,
      releaseDate: formattedDate,
    };

    const reqOptions = {
      method: "post",
      url: `${siteConfig.backendEndpoint}/videos`,
      headers: { "Content-Type": "application/json" },
      body: formData,
    };

    // try {
    //   await axios(reqOptions);
    //   window.location.reload();
    // } catch (error) {
    //   console.log(error);
    // }

    window.location.reload();
  };

  const genreItems = filterCtx.availableFilters.genre.map(
    ({ name, value }, i) => {
      if (!i) return;
      return (
        <MenuItem value={value} key={i}>
          {name}
        </MenuItem>
      );
    }
  );

  const ageGroupItems = filterCtx.availableFilters.ageRating.map(
    ({ name, value }, i) => {
      if (!i) return;
      return (
        <MenuItem value={value} key={i}>
          {name}
        </MenuItem>
      );
    }
  );

  return (
    <Modal open={props.open}>
      <Box
        sx={{
          bgcolor: "#cccccc",
          padding: "20px",
          width: "50vw",
          maxWidth: "400px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Stack component={"form"} gap={3} onSubmit={submitHandler}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <p style={{ margin: 0, marginLeft: "5px" }}>Upload Video</p>
            <IconButton onClick={props.close}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <TextField
            id="video-link"
            label="Video Link"
            variant="outlined"
            helperText="This link will be used to derive the video"
            onChange={inputChangeHandler}
            value={videoLink}
            required
          />
          <TextField
            id="thumbnail-link"
            label="Thumbnail Image Link"
            variant="outlined"
            helperText="This link will be used to preview the thumbnail image"
            onChange={inputChangeHandler}
            value={thumbnailLink}
            required
          />
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            helperText="The title will be representative text for video"
            onChange={inputChangeHandler}
            value={title}
            required
          />
          <FormControl fullWidth>
            <InputLabel id="genre-label">Genre</InputLabel>
            <Select
              labelId="genre-label"
              id="genre"
              label="Genre"
              onChange={inputChangeHandler}
              value={genre}
              required
            >
              {genreItems}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="age-label">
              Suitable age group for the clip
            </InputLabel>
            <Select
              labelId="age-label"
              id="age-group"
              label="Suitable age group for the clip"
              onChange={inputChangeHandler}
              value={ageRating}
              required
            >
              {ageGroupItems}
            </Select>
          </FormControl>
          <TextField
            id="upload-date"
            label="Upload and Publish Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={inputChangeHandler}
            value={uploadDate}
            required
          />
          <Stack direction="row" alignItems="center" sx={{ marginTop: "10px" }}>
            <Button
              sx={{
                borderRadius: "5px",
                padding: "7px 25px",
                textTransform: "none",
                bgcolor: "red",
                color: "button.light.content",
                "&:hover": { bgcolor: "red" },
                marginRight: "10px",
              }}
              type="submit"
            >
              UPLOAD VIDEO
            </Button>
            <Button
              sx={{
                borderRadius: "5px",
                padding: "2px 10px",
                textTransform: "none",
                bgcolor: "transparent",
                color: "#000000",
                "&:hover": { bgcolor: "transparent" },
              }}
              onClick={() => {
                resetForm();
                props.close();
              }}
            >
              CANCEL
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};
export default UploadModal;
