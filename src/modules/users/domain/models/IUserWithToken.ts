export interface IUserWithToken {
  user: {
    username: string;
    email: string;
  };
  access_token: string;
}
