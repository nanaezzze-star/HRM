import { createSlice } from "@reduxjs/toolkit";
export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    currentPage: 1,
    pageSize: 13,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload; //current page number
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload; // users per page
      state.currentPage = 1;
    },
    nextPage: (state, action) => {
      const totalPages = action.payload;
      if (state.currentPage < totalPages) {
        state.currentPage += 1;
      }
    },
    prevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
  },
});

export const { setCurrentPage, setPageSize, nextPage, prevPage } = paginationSlice.actions;
export default paginationSlice.reducer;
