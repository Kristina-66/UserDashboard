import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../api/types';

type Status = 'block' | 'active'
interface INormolizedUsers {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  lastLogin: Date;
  status: Status;
}

interface IUserState {
  user: IUser | null;
  users: INormolizedUsers[] | [];
}

const initialState: IUserState = {
  user: null,
  users: [],
};

export const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    logout: (state) => {
      state.user = null;
      state.users = [];
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setUsers: (state, action: PayloadAction<IUser[]>) => {
      const preparedUsers = action.payload.map((i) => {
        return {
          id: i._id,
          name: i.name,
          email: i.email,
          createdAt: i.createdAt,
          lastLogin: i.lastLogin,
          status: i.status,
        } as INormolizedUsers;
      });
      state.users = preparedUsers;
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser, setUsers } = userSlice.actions;

