export interface IUser {
  id: number;
  username: string;
  saltedHash: string;
  email: string;
}
