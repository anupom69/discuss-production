import TopicCreateForm from "@/components/topics/topic-create-form";
import TopicList from "./topics/topic-list";
import { Divider } from "@nextui-org/react";
import PostList from "@/components/posts/post-list";
import { fetchTopPost } from "@/db/queries/posts";

export default function HomePage() {
  return (
    <div className="mt-4 md:mt-0 md:grid md:grid-cols-4 grid-cols-12 gap-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList fetchData={fetchTopPost}/>
      </div>
      <div className="border shadow py-3 px-2">
        <TopicCreateForm />
        <Divider className="my-2"/>
        <h3 className="text-lg pl-2 mb-1">Topics</h3>
        <TopicList />
      </div>
    </div>
  )
}