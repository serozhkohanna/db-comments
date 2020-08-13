export interface Comment {
  readonly _id: string;
  name: string;
  email: string;
  text: string;
  readonly updatedAt?: Date;
  readonly createdAt?: Date;
}