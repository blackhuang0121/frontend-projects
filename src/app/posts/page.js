import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-static"; // SSG

export default function PostsPage() {
    const postsDir = path.join(process.cwd(), "posts");
    const filenames = fs.readdirSync(postsDir);

    const posts = filenames.map((file) => {
        const filePath = path.join(postsDir, file);
        const fileContents = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContents);

        return {
            slug: file.replace(/\.md$/, ""),
            ...data,
        };
    }).sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <main className="p-8 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-8">全部文章</h1>
            <div className="flex flex-col gap-8">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/posts/${post.slug}`}
                        className="flex bg-neutral-800 rounded-xl overflow-hidden shadow hover:scale-105 transition w-full max-w-3xl"
                    >
                        {/* 左側 Cover 圖片 */}
                        <div className="w-48 h-36 flex-shrink-0 relative">
                            {post.cover && (
                                <Image
                                    src={post.cover}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>
                        {/* 右側內容 */}
                        <div className="flex flex-col justify-between p-6 min-w-0 w-2/3">
                            <div>
                                <h2 className="text-lg font-bold mb-1">{post.title}</h2>
                                <div className="text-gray-400 text-xs mb-2 flex gap-4">
                                    <span>旅行日期：{post.travel_date}</span>
                                    <span>發文日期：{post.date}</span>
                                </div>
                                <div className="text-sm text-gray-300 mb-2">{post.description}</div>
                            </div>
                            <div className="text-gray-400 text-xs">
                                {post.city}・{post.country}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
