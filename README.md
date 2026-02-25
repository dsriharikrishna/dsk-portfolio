# Portfolio - Dasari Sriharikrishna

A modern, production-ready portfolio website built with Next.js 15, TypeScript, and GSAP animations. Features a fully functional contact form with email integration.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP with ScrollTrigger
- **State Management:** React Hooks
- **Form Handling:** React Hook Form + Zod
- **Email Service:** Resend
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React

## ✨ Features

- 🎨 Modern, responsive design with glass morphism effects
- ⚡ Optimized performance with Next.js App Router
- 📧 Functional contact form with email notifications
- 🎭 Smooth GSAP animations and scroll effects
- 📱 Fully responsive across all devices
- 🔒 Form validation with Zod
- 🎯 SEO optimized with proper metadata
- 🏗️ Scalable folder structure
- 🔄 Reusable component architecture
- 📊 Type-safe with TypeScript

## 📁 Project Structure

```
dsk-portfolio/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/contact/    # Contact form API endpoint
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── layout/         # Layout components (Navbar, Footer)
│   │   ├── sections/       # Page sections (Hero, About, etc.)
│   │   ├── shared/         # Reusable components
│   │   └── ui/             # shadcn/ui components
│   ├── data/               # Static data files
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   └── contact.ts
│   ├── lib/                # Utilities
│   │   ├── utils.ts
│   │   ├── animations.ts
│   │   └── validations.ts
│   ├── services/           # External services
│   │   └── email.ts
│   └── types/              # TypeScript types
│       └── index.ts
├── public/                 # Static assets
├── .env.local             # Environment variables
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
└── package.json           # Dependencies
```

## 🛠️ Setup & Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd dsk-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Email Service Configuration
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL_TO=dsriharik8432@gmail.com
   CONTACT_EMAIL_FROM=onboarding@resend.dev
   ```

   To get a Resend API key:
   - Sign up at [resend.com](https://resend.com)
   - Navigate to API Keys section
   - Create a new API key
   - Copy and paste it into `.env.local`

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📧 Email Service Setup

The contact form uses [Resend](https://resend.com) for sending emails. To set it up:

1. Create a free account at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add the API key to `.env.local`
4. (Optional) Verify your domain for production use

The contact form includes:

- Form validation with Zod
- Rate limiting (5 requests per minute)
- Professional HTML email templates
- Error handling and user feedback
- Loading states

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🎨 Customization

### Update Personal Information

Edit the data files in the `/data` directory:

- `contact.ts` - Contact information and social links
- `projects.ts` - Project showcase
- `skills.ts` - Technical skills
- `experience.ts` - Work experience
- `education.ts` - Educational background

### Modify Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Theme colors: Update CSS variables in `globals.css`

### Add New Sections

1. Create a new component in `components/sections/`
2. Add data file in `data/` if needed
3. Import and add to `app/page.tsx`

## 🔧 Key Features Implementation

### Global Components

Reusable components to reduce code duplication:

- `SectionHeader` - Consistent section headers
- `GlassCard` - Glass morphism card wrapper
- `ScrollAnimation` - GSAP scroll animation wrapper

### Data Separation

All static content is separated into typed data files for easy updates and maintenance.

### Type Safety

Full TypeScript coverage with proper type definitions for all data models.

### Performance Optimizations

- Next.js Image optimization
- Font optimization with next/font
- Code splitting with App Router
- GSAP animation optimization

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Dasari Sriharikrishna**

- Email: dsriharik8432@gmail.com
- LinkedIn: [dasari-sriharikrishna](https://www.linkedin.com/in/dasari-sriharikrishna/)
- GitHub: [dsriharikrishna](https://github.com/dsriharikrishna)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Animations powered by [GSAP](https://greensock.com/gsap/)
- Icons from [Lucide](https://lucide.dev/)
