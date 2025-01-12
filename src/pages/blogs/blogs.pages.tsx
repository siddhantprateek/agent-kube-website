import { useEffect, useState } from "react";
import { sanityClient } from "@/sanity/client";
import { Post } from "@/types/blogs";
import { BlurText } from "@/components/ui/blur-text";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState<Post[]>([]);

  useEffect(() => {
    sanityClient
      .fetch<Post[]>(
        `*[_type == "post"] | order(publishedAt desc) {
          _id,
          _type,
          title,
          slug,
          publishedAt,
          mainImage {
            asset-> {
              _id,
              url
            }
          },
          "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
          author->{
            _id,
            name,
            image {
              asset-> {
                _id,
                url
              }
            }
          },
          categories[]->{ 
            _id,
            title
          },
          "excerpt": array::join(string::split(pt::text(body[0...1]), "")[0..200], "") + "..."
        }`
      )
      .then((data) => {
        setAllPosts(data);
      })
      .catch(console.error);
  }, []);


  const featuredPost = allPostsData[0];
  const remainingPosts = allPostsData.slice(1);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Blog Header */}
      <div className="relative mb-10 flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
        <p className="z-10 whitespace-pre-wrap text-center font-medium tracking-tighter text-black dark:text-white">
          <h1 className="text-5xl font-bold">
            <BlurText
              text="Blogs"
            />
          </h1>
          <p className="p-2 text-xl">
            <BlurText
              text="Keep up to date with the latest insights, news, and content from Agentkube."
            />
          </p>
        </p>
        <InteractiveGridPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
      </div>


      {/* Featured Post */}
      {featuredPost && (
        <a href={`/blogs/${featuredPost.slug.current}`}>
          <div className="group cursor-pointer mb-10">
            <div className="relative rounded-xl overflow-hidden flex md:flex-row flex-col gap-6 border border-gray-300">
              <div className="md:w-1/2 relative">
                {featuredPost.mainImage?.asset?.url && (
                  <img
                    src={featuredPost.mainImage.asset.url}
                    alt={featuredPost.title}
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                )}
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-4xl font-bold mb-4 group-hover:text-emerald-500 transition-colors">
                  {featuredPost.title}
                </h2>
                <div className="flex items-center gap-4 mb-4">
                  {featuredPost.author?.image?.asset?.url && (
                    <img
                      src={featuredPost.author.image.asset.url}
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-medium">{featuredPost.author.name}</p>
                    <p className="text-sm text-gray-400">
                      {formatDate(featuredPost.publishedAt)}
                    </p>
                  </div>

                </div>
                {featuredPost.categories && (
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.categories.map((category) => (
                      <span
                        key={category._id}
                        className="bg-slate-800 text-green-400 px-3 py-1 rounded-full text-sm"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </a>
      )}

      {/* All Posts Grid */}
      {/* <h2 className="text-3xl font-bold mb-8">All Blog Posts</h2> */}
      <div className="grid md:grid-cols-3 gap-8">
        {remainingPosts.map((post) => (
          <a href={`/blogs/${post.slug.current}`} key={post._id}>
            <div className="group cursor-pointer">
              <div className="relative rounded-lg overflow-hidden mb-4">
                {post.mainImage?.asset?.url && (
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="px-3">
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <div>
                    <p className="text-sm text-gray-600">
                      {formatDate(post.publishedAt)}
                    </p>
                  </div>
                </div>

                {post.categories && (
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((category) => (
                      <span
                        key={category._id}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}