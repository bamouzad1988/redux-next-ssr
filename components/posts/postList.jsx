import { useSelector } from "react-redux";

function PostList() {
  const postList = useSelector((state) => state.posts.postList);
  const isLoading = useSelector((state) => state.posts.fetchingPosts);
  const error = useSelector((state) => state.posts.errorMessage);

  if (isLoading) return <p>Loading</p>;

  if (error) return <p>{error}</p>;
  if (postList.length) {
    return (
      <div>
        <ul>
          {postList.map((post) => (
            <li style={{ margin: 20 }} key={post.id}>
              {post.body}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
