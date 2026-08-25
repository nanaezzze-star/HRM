import { createSlice } from "@reduxjs/toolkit";
import { DEALS_STATUS } from "../constants/kanbanConfig";

const STATUS_IDS = DEALS_STATUS.map(status => status.id);
const savedState = JSON.parse(localStorage.getItem('kanbanState'));

export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState: savedState || {
    selectedUID: [],
    users: [],
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
  setUsers: (state, action) => {
    if (state.users.length === 0) {
        state.users = action.payload.map((user) => ({
          ...user,
          statusId: user.statusId || STATUS_IDS[user.id % STATUS_IDS.length],
        }));
      }
    },
  moveUser: (state, action) => {
    const { userId, newStatusId } = action.payload;
    const user = state.users.find((u) => u.id === userId);
    if (user) {
      user.statusId = newStatusId;
    }
  }
}});

export const { changeCheckbox, setUsers, moveUser } = kanbanSlice.actions;
export default kanbanSlice.reducer;