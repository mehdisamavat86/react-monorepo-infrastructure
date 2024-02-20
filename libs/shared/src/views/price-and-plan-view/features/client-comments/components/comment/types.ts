export interface CommentProps {
  className?: string;
  comment?: UserComment;
}

export interface UserComment {
  userImage?: string;
  description?: string;
  name?: string;
  position?: string;
  reverse?: boolean;
}
