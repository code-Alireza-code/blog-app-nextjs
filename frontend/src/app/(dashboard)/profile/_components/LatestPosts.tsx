import PostsTable from "../posts/_/components/PostsTable";

function LatestPosts() {
  return <PostsTable postQuery="sort=latest&limit=5" />;
}

export default LatestPosts;
