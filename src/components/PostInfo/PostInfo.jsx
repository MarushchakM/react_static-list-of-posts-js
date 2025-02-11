import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => (
  <>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <UserInfo user={post.user} />
    </div>
    <p className="PostInfo__body">{post.body}</p>
  </>
);
