type responseUerType = {
  id: string;
  email: string;
  name: string;
};
export type loginResponseType = {
  user: responseUerType;
  token: string;
};