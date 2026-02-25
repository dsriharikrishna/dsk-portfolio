'use client';

import { useEffect, useState } from 'react';
import GlassCard from '@/components/shared/GlassCard';
import { GitFork, Star, Code2, BookOpen } from 'lucide-react';

interface GitHubStats {
  totalStars: number;
  totalForks: number;
  publicRepos: number;
  totalCommits: number;
  topLanguages: { name: string; percentage: number; color: string }[];
}

export default function GithubMetrics() {
  const username = 'dsriharikrishna';
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        // Fetch user data and repos
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          console.warn('GitHub API returned an error. Please check the username and API rate limits.');
          setStats(null);
          setLoading(false);
          return;
        }


        const userData = await userRes.json();
        const repos = await reposRes.json();

        // Calculate stats
        const totalStars = repos.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
        const totalForks = repos.reduce((acc: number, repo: any) => acc + repo.forks_count, 0);

        // Calculate language stats
        const languageMap = new Map<string, number>();
        repos.forEach((repo: any) => {
          if (repo.language) {
            languageMap.set(repo.language, (languageMap.get(repo.language) || 0) + 1);
          }
        });

        const totalReposWithLang = Array.from(languageMap.values()).reduce((a, b) => a + b, 0);
        const topLanguages = Array.from(languageMap.entries())
          .map(([name, count]) => ({
            name,
            percentage: Math.round((count / totalReposWithLang) * 100),
            color: getLanguageColor(name),
          }))
          .sort((a, b) => b.percentage - a.percentage)
          .slice(0, 5);

        setStats({
          totalStars,
          totalForks,
          publicRepos: userData.public_repos,
          totalCommits: 0, // GitHub API doesn't provide total commits easily
          topLanguages,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubStats();
  }, []);

  function getLanguageColor(language: string): string {
    const colors: Record<string, string> = {
      JavaScript: '#f1e05a',
      TypeScript: '#3178c6',
      Python: '#3572A5',
      Java: '#b07219',
      HTML: '#e34c26',
      CSS: '#563d7c',
      React: '#61dafb',
      'C++': '#f34b7d',
      C: '#555555',
      Go: '#00ADD8',
      Rust: '#dea584',
      Ruby: '#701516',
      PHP: '#4F5D95',
    };
    return colors[language] || '#00D8FF';
  }

  if (loading) {
    return (
      <div className="mt-12 space-y-8 animate-fade-up">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h3 className="text-xl font-semibold text-foreground whitespace-nowrap">GitHub Activity</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GlassCard className="p-6 min-h-[195px] flex items-center justify-center">
            <div className="animate-pulse text-muted-foreground">Loading stats...</div>
          </GlassCard>
          <GlassCard className="p-6 min-h-[195px] flex items-center justify-center">
            <div className="animate-pulse text-muted-foreground">Loading languages...</div>
          </GlassCard>
        </div>
      </div>
    );
  }

  if (!stats) {
    return null;
  }

  return (
    <div className="mt-12 space-y-8 animate-fade-up">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <h3 className="text-xl font-semibold text-foreground whitespace-nowrap">GitHub Activity</h3>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* GitHub Stats Card */}
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <GlassCard className="p-6 group-hover:border-primary/30 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-primary" />
                <h4 className="text-lg font-semibold text-foreground">GitHub Stats</h4>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Repositories</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stats.publicRepos}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Stars</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stats.totalStars}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <GitFork className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Forks</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stats.totalForks}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Projects</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stats.publicRepos}</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </a>

        {/* Top Languages Card */}
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <GlassCard className="p-6 group-hover:border-primary/30 transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-primary" />
                <h4 className="text-lg font-semibold text-foreground">Top Languages</h4>
              </div>

              <div className="space-y-3">
                {stats.topLanguages.map((lang) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: lang.color }}
                        />
                        <span className="text-foreground font-medium">{lang.name}</span>
                      </div>
                      <span className="text-muted-foreground">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${lang.percentage}%`,
                          backgroundColor: lang.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </a>
      </div>
    </div>
  );
}
