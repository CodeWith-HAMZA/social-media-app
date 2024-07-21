import { User } from "./user.model";

export interface Video {
  $id: string;
  title: string;
  thumbnail: string;
  video: string;
  creator: User;
  prompt: string;
}
