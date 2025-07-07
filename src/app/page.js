import Image from "next/image";
import Link from 'next/link';

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

export default function Home() {
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
        <p className="mt-4 text-gray-300 text-center max-w-md">
          Wont you give yourself a try? Wont you give? - The 1975
        </p>
        <div className="mt-6 flex flex-col items-center">
          <Image
            src="/img/DSCF4701.JPG"
            alt="Howard Huang"
            width={600}
            height={200}
            style={{ height: 'auto' }}
            className="rounded object-contain"
          />
          <p className="mt-2 text-gray-400 text-center max-w-md">
            Dont wait for the tide just to dip both your feet in - Beabadoobee
          </p>
        </div>
      </main>
    </div>
  );
}
