import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sanityClient } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import { Post } from "@/types/blogs";
import { SanityComponent } from "@/sanity/component";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { TableOfContents } from "@/components/custom";
import { SocialShare, NewsletterSubscribe } from "./blog-sidebar.component";

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

  const currentUrl = window.location.href;

  return (

    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/blogs">Blogs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{post.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0 space-y-6">
          <div className="sticky top-4 space-y-6">
            {/* Social Share */}
            <SocialShare url={currentUrl} title={post.title} />

            {/* Table of Contents */}
            <div className="border-t pt-6">
              <TableOfContents content={post.body} />
            </div>

            {/* Newsletter Subscribe */}
            <div className="border-t pt-6">
              <NewsletterSubscribe />
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <article className="flex-1">
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
            <PortableText value={post.body} components={SanityComponent} />
          </div>
        </article>


      </div>

      <div className="h-80 mt-20">
          <div className="bg-gradient-to-tr from-gray-800 to-emerald-600 p-20 text-white text-center rounded-xl">
            <h1 className="text-4xl mb-10">Discover the Ultimate Platform for AI-Powered Kubernetes Management</h1>
            <a href="https://account.agentkube.com" className="bg-white cursor-pointer text-black py-2 px-6 rounded-[0.5rem]">Get Started</a>
          </div>
      </div>

    </div>
  );
};

export default BlogViewer;