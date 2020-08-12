export interface Comment {
  _id: string;
  name: string;
  email: string;
  text: string;
  updatedAt?: Date;
  createdAt?: Date;
}