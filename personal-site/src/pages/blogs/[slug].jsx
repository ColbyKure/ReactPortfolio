import { useRouter } from "next/router";
import BlogContent from "../../components/blogs/BlogContent";

const BlogDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1 className="text-2xl font-bold">Blog Title: {slug}</h1>
      <BlogContent content={`This is a placeholder for the blog content of ${slug}.`} />
    </div>
  );
};

export default BlogDetail;
