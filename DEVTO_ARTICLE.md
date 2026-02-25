---
title: My 2026 Portfolio - Modern Next.js with Live GitHub Stats & Dev.to Integration
published: false
description: A modern, feature-rich portfolio built with Next.js 16, TypeScript, and custom API integrations
tags: NewYearNewYouGoogleAI, nextjs, typescript, portfolio
cover_image: https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000&h=420&fit=crop
---

*This is a submission for the [New Year, New You Portfolio Challenge Presented by Google AI](https://dev.to/challenges/new-year-new-you-google-ai-2025-12-31)*

## About Me

Hi! I'm **Dasari Sriharikrishna**, a Product Engineer and Frontend Developer with 1.8+ years of experience building scalable, high-performance web applications. I specialize in Next.js, React, TypeScript, and modern frontend technologies.

My portfolio is more than just a showcase - it's a demonstration of my technical expertise, problem-solving skills, and passion for creating beautiful, functional user experiences. I wanted to build something that not only looks great but also demonstrates real-world engineering challenges and solutions.

## Portfolio

🔗 **Live Site**: https://dskh-portfolio.netlify.app
🔗 **GitHub**: https://github.com/dsriharikrishna/dsk-portfolio

<!-- Note: Portfolio is deployed on Netlify, not Cloud Run -->

### Key Features

- 📊 **Custom GitHub Stats** - Real-time data from GitHub's official API
- 📝 **Integrated Blog** - Automatic sync with Dev.to articles
- 🏆 **Certifications Section** - Showcase achievements and courses
- 📄 **Downloadable Resume** - Print-optimized PDF generation
- 📧 **Working Contact Form** - Email integration with Resend API
- 🎨 **Premium Design** - Glassmorphism with GSAP animations
- 📱 **Fully Responsive** - Mobile-first approach

## How I Built It

### Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: GSAP with ScrollTrigger
- **Form Handling**: React Hook Form + Zod validation
- **Email Service**: Resend API
- **Deployment**: Netlify
- **APIs**: GitHub REST API, Dev.to API

### Design Decisions

**1. Custom GitHub Stats Instead of Third-Party Services**

I initially tried using popular GitHub stats services, but they were unreliable (503 errors). So I built my own using GitHub's official REST API:

```typescript
export async function getGitHubStats(username: string) {
  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`),
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
  ]);
  
  // Calculate total stars, forks, and language distribution
  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const topLanguages = calculateLanguageDistribution(repos);
  
  return { totalStars, totalForks, topLanguages, publicRepos };
}
```

**2. Glassmorphism Design System**

Created a cohesive design with custom CSS utilities:

```css
.glass-card {
  @apply bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl;
}
```

**3. Smart Navigation with IntersectionObserver**

The navbar automatically highlights the current section:

```typescript
const observer = new IntersectionObserver(handleIntersection, {
  rootMargin: '-80px 0px -40% 0px',
  threshold: 0,
});
```

**4. Dev.to Blog Integration**

Automatically fetches and displays my articles:

```typescript
export async function getDevToArticles(username: string) {
  const response = await fetch(
    `https://dev.to/api/articles?username=${username}`,
    { next: { revalidate: 3600 } } // Cache for 1 hour
  );
  return await response.json();
}
```

### Development Process

1. **Planning**: Designed the architecture and component structure
2. **Data Centralization**: Created typed data files for easy maintenance
3. **Component Development**: Built reusable, accessible components
4. **API Integration**: Connected GitHub and Dev.to APIs
5. **Optimization**: Implemented caching, lazy loading, and code splitting
6. **Testing**: Verified all features work in production
7. **Deployment**: Set up Netlify with environment variables

### Challenges Solved

**Challenge 1: Static Export vs. API Routes**
- **Problem**: Next.js static export disabled server-side features
- **Solution**: Used standard build with Netlify's Next.js Runtime

**Challenge 2: Build-Time Environment Variables**
- **Problem**: Resend API key caused build failures
- **Solution**: Implemented lazy initialization pattern

**Challenge 3: GitHub Stats Reliability**
- **Problem**: Third-party services had downtime
- **Solution**: Built custom implementation with GitHub's official API

## What I'm Most Proud Of

### 1. **Custom GitHub Stats Component** 🎯

Instead of relying on external services, I built a robust solution that:
- Fetches real-time data from GitHub's official API
- Calculates top 5 programming languages with percentages
- Displays beautiful progress bars with color coding
- Never goes down because it uses the official API

### 2. **Seamless Dev.to Integration** 📝

My portfolio automatically syncs with my Dev.to articles:
- Individual article pages with full content
- Cover images, tags, and engagement metrics
- SEO optimized with metadata
- Revalidates every hour for fresh content

### 3. **Print-Optimized Resume Page** 📄

A dedicated `/resume` route with:
- One-click PDF download via browser print
- ATS-friendly format for job applications
- Professional layout optimized for A4 paper
- Comprehensive work history and skills

### 4. **Performance Optimizations** ⚡

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based splitting
- **API Caching**: Smart revalidation strategies
- **Bundle Size**: Optimized imports and tree-shaking
- **Animations**: Hardware-accelerated CSS transforms

### 5. **Developer Experience** 🛠️

- **TypeScript**: Full type safety across the codebase
- **Centralized Data**: Easy to update content without touching code
- **Modular Components**: Reusable and maintainable
- **Clean Architecture**: Separation of concerns

## Technical Achievements

- ✅ **100% TypeScript** - Full type safety
- ✅ **Zero Runtime Errors** - Comprehensive error handling
- ✅ **Responsive Design** - Works on all devices
- ✅ **SEO Optimized** - Proper metadata and structure
- ✅ **Accessible** - Semantic HTML and ARIA labels
- ✅ **Fast Load Times** - Optimized assets and caching

## Future Enhancements

- [ ] Add dark/light theme toggle
- [ ] Implement project detail pages with case studies
- [ ] Add analytics dashboard
- [ ] Create a /uses page for tech stack
- [ ] Add more interactive animations
- [ ] Implement search functionality for blog

---

## Conclusion

Building this portfolio was an incredible journey. It showcases not just my projects, but my ability to:
- Architect scalable applications
- Integrate with external APIs
- Solve real-world problems
- Create beautiful user experiences
- Write clean, maintainable code

I'm excited to continue improving it and sharing my journey on Dev.to!

**Check it out**: https://dskh-portfolio.netlify.app

---

#NewYearNewYouGoogleAI #NextJS #TypeScript #WebDev #Portfolio
