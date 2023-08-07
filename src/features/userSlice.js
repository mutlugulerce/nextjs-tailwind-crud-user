import { BASE_URL } from "../constans/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false,
  error: "",
};

export const fetchUser = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    throw new Error("Network response was not ok");
  }
});

export const createUser = createAsyncThunk("users/createUser", async (user) => {
  return axios
    .post(`${BASE_URL}/users`, {
      name: user.name,
      email: user.email,
    })
    .then((response) => response.data);
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await axios.delete(`${BASE_URL}/users/${id}`);
  return id;
});

export const updateUser = createAsyncThunk("users/updateUser", async (user) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/users/${user.id}`,
      {
        name: user.name,
        email: user.email,
      },

      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Could not update user");
  }
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.users = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.loading;
      state.users = [];
      state.error = "Yüklenemedi";
    });
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.users = [...state.users, action.payload];
    });
    builder.addCase(createUser.rejected, (state) => {
      state.loading;
      state.users = [];
      state.error = "Could not create user";
    });
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.users = state.users.filter((user) => user.id !== action.payload);
    });
    builder.addCase(deleteUser.rejected, (state) => {
      state.loading = false;
      state.error = "Could not delete user";
    });
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.users = state.users.map((user) =>
        user.id === action.payload.id
          ? {
              ...user,
              ...action.payload,
            }
          : user
      );
    });

    builder.addCase(updateUser.rejected, (state) => {
      state.loading = false;
      state.error = "Could not update user";
    });
  },
});

export default userSlice.reducer;
