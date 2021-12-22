import { FC } from "react";
import { Child } from "./async-state";

const PropsExample: FC = () => {
  return (
    <Child
      id={1}
      post={{ id: 1, userId: 12, title: "Title", body: "", comments: [] }}
      setPost={(post) => {
        console.log("Post set", post);
      }}
    />
  );
};

export default PropsExample;
