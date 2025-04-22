# Portfolio Website Structure

A modular, scalable portfolio website built with Next.js, shadcn/ui components, and Tailwind CSS.

## Project Structure

\`\`\`
portfolio/
├── app/                    # Next.js App Router
│   ├── about/              # About page
│   ├── blog/               # Blog section
│   │   └── [slug]/         # Individual blog post
│   ├── contact/            # Contact page
│   ├── projects/           # Projects section
│   │   └── [slug]/         # Individual project
│   ├── testimonials/       # Testimonials page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable components
│   ├── sections/           # Page sections
│   │   ├── hero-section.tsx
│   │   ├── about-preview.tsx
│   │   └── ...
│   ├── ui/                 # UI components from shadcn
│   ├── navigation.tsx      # Navigation component
│   ├── footer.tsx          # Footer component
│   └── ...
├── lib/                    # Utility functions
│   └── utils.ts
├── public/                 # Static assets
└── ...
\`\`\`

## Core Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode Support**: Toggle between light and dark themes
- **Modular Components**: Reusable components for easy maintenance
- **Accessibility**: Built with accessibility in mind
- **Performance Optimized**: Fast loading times and efficient asset management

## Pages

1. **Home**: Introduction with sections for about, featured projects, testimonials, and blog
2. **About**: Detailed information about skills, experience, and background
3. **Projects**: Gallery of projects with filtering capability
4. **Project Detail**: In-depth look at individual projects
5. **Testimonials**: Client and colleague testimonials
6. **Blog**: Articles and insights
7. **Blog Post**: Individual blog articles
8. **Contact**: Contact form and information

## Getting Started

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Adding a New Page

1. Create a new folder in the `app` directory
2. Add a `page.tsx` file with your content
3. Update the navigation component to include the new page

### Adding a New Component

1. Create a new file in the `components` directory
2. Import and use the component in your pages

### Styling

- Use Tailwind CSS classes for styling
- Customize the theme in `tailwind.config.ts`
- Add global styles in `app/globals.css`

## Deployment

This project can be easily deployed to Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Deploy

## License

MIT
