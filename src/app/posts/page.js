import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
        <main className="p-8 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">文章列表</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug} className="mb-4">
                        <a href={`/posts/${post.slug}`} className="text-lg text-blue-400 hover:underline">
                            {post.title}
                        </a>
                        <div className="text-gray-400 text-sm">{post.date}</div>
                    </li>
                ))}
            </ul>
        </main>
    );
}
