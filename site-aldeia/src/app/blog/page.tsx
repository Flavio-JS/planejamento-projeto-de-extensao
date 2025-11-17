import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import Image from 'next/image';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Nenhum post encontrado. Crie seu primeiro post no painel admin!
            </p>
            <Link 
              href="/admin" 
              className="mt-4 inline-block text-blue-600 hover:text-blue-800"
            >
              Ir para o painel admin →
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <article>
                  {post.image && (
                    <div className="relative h-48 w-full bg-gray-200">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
                      {post.title}
                    </h2>
                    <time className="text-sm text-gray-500 mb-3 block">
                      {new Date(post.date).toLocaleDateString('pt-BR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <p className="text-gray-700 line-clamp-3">
                      {post.description}
                    </p>
                    <span className="mt-4 inline-block text-blue-600 font-medium">
                      Ler mais →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
