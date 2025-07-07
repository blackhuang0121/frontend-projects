import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default async function PostPage({ params }) {
    const filePath = path.join(process.cwd(), 'posts', `${params.slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return (
        <div className="prose mx-auto py-12 text-white">
            <h1>{data.title}</h1>
            <p className="text-gray-400">{data.date}</p>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}

export async function generateStaticParams() {
    const postsDir = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(postsDir);
    return filenames.map((file) => ({
        slug: file.replace(/\.md$/, ''),
    }));
}
