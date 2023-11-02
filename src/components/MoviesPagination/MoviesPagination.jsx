import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../store/videos/videosSlice";
import { getVideos } from "../../store/videos/videosActions";

export default function PaginationControlled() {
  const { currentPage, totalPages } = useSelector((state) => state.videos);
  const dispatch = useDispatch();
  const handleChange = (event, value) => {
    dispatch(changePage({ page: value }));
    dispatch(getVideos());
  };

  return (
    <Stack
      className="pagination"
      sx={{ margin: "20px", borderRadius: "20px", backgroundColor: 'white' }}
      spacing={2}
    >
      <Pagination
        className="paginationBody"
        sx={{
          backgroundColor: "red",
          color: 'white',
          padding: "5px",
          borderRadius: "20px",
        }}
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
      />
    </Stack>
  );
}