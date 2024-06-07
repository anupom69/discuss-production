import PostCreateForm from "@/components/posts/post-create";
import { db } from "@/db";
import PostList from "@/components/posts/post-list";
import { fetchPostsBySlug } from "@/db/queries/posts";
import TopicNotFound from "./not-found";

interface TopicShowPageProps {
  params: {
    slug: string;
  };
}
export default async function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params;
  const topic = await db.topic.findUnique({
    where: {slug}
  })
  if (!topic) {
    return <TopicNotFound slug={slug} />
  }
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <PostList fetchData={() => fetchPostsBySlug(slug)}/>
      </div>
      <div>
        <PostCreateForm topicId={topic.id} topicSlug={topic.slug}/>
      </div>
    </div>
  )
}
