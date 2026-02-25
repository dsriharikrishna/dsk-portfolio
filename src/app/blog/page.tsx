'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Heart, MessageCircle, ArrowLeft } from 'lucide-react';
import { getDevToArticles, formatDate, type DevToArticle } from '@/lib/devto';
import { blogConfig, blogSection } from '@/data/blog';
import SectionHeader from '@/components/shared/SectionHeader';
import GlassCard from '@/components/shared/GlassCard';

export default function BlogPage() {
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      const data = await getDevToArticles(blogConfig.devtoUsername);
      setArticles(data);
      setLoading(false);
    }
    fetchArticles();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <SectionHeader
            tag={blogSection.tag}
            title={blogSection.title}
            titleHighlight={blogSection.titleHighlight}
            subtitle={blogSection.subtitle}
          />
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">Loading articles...</p>
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No articles found. Start writing on{' '}
                <a
                  href="https://dev.to"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Dev.to
                </a>{' '}
                to see them here!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {articles.map((article) => (
                <a 
                  key={article.id} 
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlassCard className="h-full overflow-hidden group hover:border-primary/30 transition-all duration-300 cursor-pointer">
                    {/* Cover Image */}
                    {article.cover_image && (
                      <div className="relative h-48 w-full overflow-hidden bg-secondary/50">
                        <Image
                          src={article.cover_image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <div className="p-6 space-y-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {article.tag_list.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {article.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border/50">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(article.published_at)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.reading_time_minutes} min read
                        </div>
                      </div>

                      {/* Engagement */}
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {article.public_reactions_count}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {article.comments_count}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
