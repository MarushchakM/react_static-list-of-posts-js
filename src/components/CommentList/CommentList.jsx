import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <div className="CommentInfo">
        <CommentInfo comment={comment} />
      </div>
    ))}
  </div>
);
