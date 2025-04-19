import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: {
      allUsers: null,
      isFetching: false,
      error: false,
    },
    msg: "",
  },
  reducers: {
    getUsersStart: (state) => {
      state.users.isFetching = true;
    },
    getUsersSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.allUsers = action.payload;
    },
    getUsersFailed: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },
    deleteUserStart: (state) => {
      state.users.isFetching = true;
    },
    deleteUsersSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.error = false;
      state.msg = action.payload; // Cập nhật msg sau khi xóa thành công
    },
    deleteUserFailed: (state, action) => {
      state.users.isFetching = false;
      state.users.error = true;
      state.msg = action.payload; // Cập nhật msg khi xóa thất bại
    },
    updateMsg: (state, action) => {
      state.msg = action.payload; // Action để cập nhật msg
    },
  },
});

export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailed,
  deleteUserStart,
  deleteUsersSuccess,
  deleteUserFailed,
  updateMsg, // Export action updateMsg
} = userSlice.actions;

export default userSlice.reducer;
