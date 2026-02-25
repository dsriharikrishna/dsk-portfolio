export interface DevToArticle {
    id: number;
    title: string;
    description: string;
    url: string;
    published_at: string;
    cover_image: string | null;
    tag_list: string[];
    reading_time_minutes: number;
    public_reactions_count: number;
    comments_count: number;
    slug: string;
    body_html?: string;
}

/**
 * Fetch articles from Dev.to API
 */
export async function getDevToArticles(username: string): Promise<DevToArticle[]> {
    try {
        const response = await fetch(`https://dev.to/api/articles?username=${username}&per_page=10`);

        if (!response.ok) {
            throw new Error('Failed to fetch Dev.to articles');
        }

        const articles: DevToArticle[] = await response.json();
        return articles;
    } catch (error) {
        console.error('Error fetching Dev.to articles:', error);
        return [];
    }
}

/**
 * Fetch a single article by slug
 */
export async function getDevToArticle(username: string, slug: string): Promise<DevToArticle | null> {
    try {
        const response = await fetch(`https://dev.to/api/articles/${username}/${slug}`);

        if (!response.ok) {
            throw new Error('Failed to fetch article');
        }

        const article: DevToArticle = await response.json();
        return article;
    } catch (error) {
        console.error('Error fetching article:', error);
        return null;
    }
}

/**
 * Format date to readable string
 */
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
