import BlogEditClient from "../../components/BlogEditClient";

async function getBlog(id: string) {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function EditBlogPage({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);

  return (
    <div>
      <h1>Edit Blog</h1>
      <BlogEditClient id={params.slug} blog={blog} />
    </div>
}