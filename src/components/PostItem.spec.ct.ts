import { mount } from "@cypress/vue";
import PostItem from "./PostItem.vue";

const post: Post = {
  id: 1234,
  userId: 4321,
  title: "This is the title",
  body: "This is the body",
};

it("shows", () => {
  mount(PostItem, {
    props: {
      post,
    },
  });
});
