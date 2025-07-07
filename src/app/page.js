import Image from "next/image";

const projects = [
  {
    name: '進擊的巨人角色',
    desc: 'Fetch 進擊的巨人角色',
    link: '/projects/attack-on-titan/index.html',
  },
  {
    name: '圖片滑動版',
    desc: '圖片滑動展示',
    link: '/projects//image-slider/index.html',
  },
  // ... 其餘專案
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-white">
      {/* Header 區塊 */}
      <header className="py-8 text-center border-b border-neutral-800">
        <h1 className="text-3xl font-bold mb-2">Frontend Projects made by Howard Huang</h1>
        <h2 className="text-lg">持續更新中：這裡會收錄我的所有前端練習專案</h2>
      </header>

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
      </main>

      {/* Footer 區塊 */}
      <footer className="py-4 text-center text-sm border-t border-neutral-800">
        &copy; {new Date().getFullYear()} Howard Huang | Frontend Projects
      </footer>
    </div>
  );
}
