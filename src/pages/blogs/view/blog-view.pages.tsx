import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sanityClient } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import { Post } from "@/types/blogs";
import { SanityComponent } from "@/sanity/component";

const BlogViewer = () => {
  const [post, setPost] = useState<Post | null>(null);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    if (!slug) return;

    sanityClient
      .fetch<Post>(
        `*[_type == "post" && slug.current == $slug][0]{
          _id,
          _type,
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          body[]{
            ...,
            asset->{
              _id,
              url
            }
          },
          "author": author->{
            _id,
            name,
            bio,
            image{
              asset->{
                _id,
                url
              }
            }
          },
          "categories": categories[]->{
            _id,
            title
          },
          publishedAt
        }`,
        { slug }
      )
      .then((data) => {
        console.log("Post data:", data);
        setPost(data);
      })
      .catch(console.error);
  }, [slug]);

  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <article className="max-w-5xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        {post.mainImage && (
          <img
            src={post.mainImage.asset.url}
            alt={post.title}
            className="w-full h-84 object-cover rounded-lg mb-4"
          />
        )}
        <div className="flex items-center gap-4 text-gray-600">
          {post.author && (
            <div className="flex items-center gap-2">
              {post.author.image && (
                <img
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full"
                />
              )}
              <span>{post.author.name}</span>
            </div>
          )}
          {post.publishedAt && (
            <time>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
        </div>
        {post.categories && post.categories.length > 0 && (
          <div className="flex gap-2 mt-2">
            {post.categories.map((category) => (
              <span
                key={category._id}
                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
              >
                {category.title}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose max-w-none">
        <PortableText 
          value={post.body} 
          components={SanityComponent}
        />
      </div>
    </article>
  );
};

export default BlogViewer;