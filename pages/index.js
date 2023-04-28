import Counter from "@/components/counter/counter";
import PostList from "@/components/posts/postList";
import { incNum } from "@/store/slices/counterSlice";
import { fetchPosts } from "@/store/slices/postsSlice";
import { wrapper } from "./../store/store";

export default function Home() {
  return (
    <>
      <Counter />
      <PostList />
    </>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    store.dispatch(incNum(4));
    const state = store.getState();

    const data = await store.dispatch(fetchPosts());
    const posts = JSON.stringify(data.payload);

    return {
      props: {
        count: state.counter.value,
        posts,
      },
    };
  }
);
