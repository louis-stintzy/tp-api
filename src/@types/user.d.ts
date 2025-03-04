export type UserIdData = number;

export interface NewUserData {
  email: string;
  password: string;
}

export interface UserData {
  id: UserIdData;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
