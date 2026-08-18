import { createSlice } from "@reduxjs/toolkit";

export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState: {
    selectedUID: [],
  },
  reducers: {
    changeCheckbox: (state, action) => {
      const id = action.payload;// take user's ID
      const index = state.selectedUID.indexOf(id);

      if (index !== -1) {
        state.selectedUID.splice(index, 1); 
      } 
      else {
        state.selectedUID.push(id);
      }
    },
  },
});

export const { changeCheckbox } = kanbanSlice.actions;
export default kanbanSlice.reducer;