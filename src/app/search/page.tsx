import { redirect } from "next/navigation";
import PostList from "@/components/posts/post-list";
import { fetchPostsBySearchTerms } from "@/db/queries/posts";
interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;
  console.log(term);
  if (!term) {
    redirect(`/`);
  }

  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerms(term)} />
    </div>
  );
}
