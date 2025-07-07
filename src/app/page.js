import Image from "next/image";
import Link from 'next/link';
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// export const dynamic = 'force-dynamic';

const projects = [
  {
    name: '進擊的巨人角色',
    desc: 'Fetch 進擊的巨人角色',
    link: '/projects/attack-on-titan/index.html',
  },
  {
    name: '圖片滑動版',
    desc: '圖片滑動展示',
    link: '/projects/image-slider/index.html',
  },
  {
    name: '怪奇物語角色',
    desc: 'Fetch 怪奇物語角色',
    link: '/projects/stranger-things/index.html',
  },
  {
    name: '隨機出現圖片',
    desc: '隨機出現',
    link: '/projects/random-photos/index.html',
  },
  {
    name: 'Fetch 隨機出現圖片',
    desc: 'Fetch 點選按鈕隨機出現圖片',
    link: '/projects/random-photos-fetch/index.html',
  },
  {
    name: 'Sidebar Menu',
    desc: '側邊欄',
    link: '/projects/sidebar-menu/index.html',
  },
  {
    name: '滑動載入圖片',
    desc: '點選按鈕隨機出現圖片',
    link: '/projects/lazy-loading-images/index.html',
  },
  {
    name: 'Dark Mode',
    desc: '閱讀模式',
    link: '/projects/dark-mode-toggle/index.html',
  },
];

// 取得最新文章
async function getLatestPosts(n = 3) {
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
  return posts.slice(0, n);
}

export default async function Home() {
  const latestPosts = await getLatestPosts(3);
  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-white">
      <nav className="absolute top-8 right-8">
        <Link href="/about" className="text-gray-400 hover:text-yellow-400 transition">
          About
        </Link>
      </nav>
      {/* Main 區塊 */}
      <main className="flex-1 flex flex-col items-center justify-center">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-5xl">
          {projects.map((item, idx) => (
            <li key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col items-center transition hover:scale-105">
              <a href={item.link} target="_blank" rel="noopener" className="text-2xl font-bold mb-2 hover:text-blue-700 dark:hover:text-yellow-400">
                {item.name}
              </a>
              <p className="text-gray-500 dark:text-gray-400">{item.desc}</p>
            </li>
          ))}
        </ul>
        {/* 最新文章區塊 */}
        <section className="w-full max-w-2xl my-10">
          <h2 className="text-xl font-bold mb-4 text-yellow-300">最新文章</h2>
          <ul>
            {latestPosts.map((post) => (
              <li key={post.slug} className="mb-2">
                <Link href={`/posts/${post.slug}`}
                  className="text-lg text-blue-400 hover:underline">
                  {post.title}
                </Link>
                <span className="text-gray-400 ml-2 text-sm">{post.date}</span>
              </li>
            ))}
          </ul>
        </section>
        <p className="mt-10 text-gray-400 text-center max-w-md">
          &quot;Won&apos;t you give yourself a try? Won&apos;t you give?&quot; - The 1975
        </p>
        <div className="mt-4 mb-6 flex flex-col items-center">
          <Image
            src="/img/DSCF4701.JPG"
            alt="Howard Huang"
            width={600}
            height={200}
            style={{ height: 'auto' }}
            className="rounded object-contain"
          />
          <p className="mt-4 text-gray-400 text-center max-w-md">
            &quot;Don&apos;t wait for the tide just to dip both your feet in.&quot; - Beabadoobee
          </p>
        </div>
      </main>
    </div>
  );
}
