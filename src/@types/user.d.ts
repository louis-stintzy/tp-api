interface RegistrationRequestBody {
  email?: string;
  password?: string;
}

export interface NewUserData {
  email: string;
  password: string;
}

export type UserIdData = number;

export interface UserData {
  id: UserIdData;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}
