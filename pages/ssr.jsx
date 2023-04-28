import { inc, incNum } from "@/store/slices/counterSlice";
import { fetchPosts } from "@/store/slices/postsSlice";
import { wrapper } from "./../store/store";
import Counter from "@/components/counter/counter";
import PostList from "@/components/posts/postList";

export default function SsrPage(props) {
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
