export interface IUser {
  name: string;
  email: string;
  role: string;
  _id: string;
  status: string;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface IGenericResponse {
  status: string;
  message: string;
}

