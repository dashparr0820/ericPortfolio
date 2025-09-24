# Portfolio Website

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean flat design with light/dark theme toggle and EmailJS integration for contact forms.

## Features

- 🎨 **Modern Flat Design** - Clean, professional aesthetic
- 🌓 **Theme Toggle** - Switch between light and dark modes
- 📱 **Responsive Design** - Optimized for all devices
- ✨ **Smooth Animations** - Framer Motion powered interactions
- 📧 **Contact Form** - EmailJS integration for easy communication
- 🚀 **Performance Optimized** - Built with Next.js 14 and modern tooling

## Sections

- **Hero** - Introduction and call-to-action
- **About** - Professional summary and skills
- **Experience** - Work history and achievements
- **Education** - Academic background and credentials
- **Contact** - Contact form and information

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio-site
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### EmailJS Setup

The contact form is configured with EmailJS. Update the following constants in `components/Contact.tsx`:

```typescript
const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const PUBLIC_KEY = "your_public_key";
```

### Personal Information

Update the following files with your personal information:

- `components/Hero.tsx` - Your name and title
- `components/About.tsx` - Your summary and skills
- `components/Experience.tsx` - Your work experience
- `components/Education.tsx` - Your education background
- `components/Contact.tsx` - Your contact information
- `components/Footer.tsx` - Your social links

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`. The current setup includes:

- Primary colors (blues)
- Dark theme colors
- Custom component classes

### Styling

Global styles and component classes are defined in `app/globals.css`. You can modify:

- Base styles
- Component utilities
- Custom animations

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any static hosting service

## Project Structure

```
portfolio-site/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Experience.tsx     # Work experience
│   ├── Education.tsx      # Education section
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   ├── ThemeProvider.tsx  # Theme context
│   └── ThemeToggle.tsx    # Theme toggle button
├── public/                 # Static assets
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!

---

Built with ❤️ using Next.js and modern web technologies.
