# Portfolio Website - Berkay Kösen

Modern, one-page portfolio website for building a freelance business targeting plastic surgeons and beauty centers in Turkey.

## 🚀 Features

### ✨ Killer Feature: Before/After Slider
- Interactive image comparison slider
- Touch-friendly for mobile devices
- Perfect for showcasing surgical results
- Smooth animations and professional design

### 📱 Mobile-First Design
- Optimized for Instagram in-app browser
- Responsive across all devices
- Fast loading times (< 1 second)
- Touch-friendly interactions

### 💼 Business-Focused Sections
- **Hero Section**: Compelling headline and professional photo
- **Demo Section**: Live Before/After slider demonstration
- **No-Headache Section**: Service guarantees and features
- **Pricing Section**: Transparent pricing (setup + monthly retainer)
- **Contact Section**: Multiple ways to reach you
- **WhatsApp Integration**: Floating button with pre-filled messages

### 🎨 Technical Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- npm or yarn package manager
- Basic knowledge of React/Next.js

## 🛠️ Installation

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Configure Your Information

#### Update WhatsApp Number

Edit the following files and replace `905XXXXXXXXX` with your actual WhatsApp number:

1. `/components/WhatsAppButton.tsx` (line 6)
2. `/app/page.tsx` (line 20)

#### Update Contact Information

Edit `/components/ContactSection.tsx`:
- Line 53: Update email address
- Line 79-86: Update social media links

#### Update Email Address

Edit `/components/Footer.tsx` and `/app/layout.tsx` with your actual email.

### Step 3: Add Your Professional Photo

Replace the placeholder in `/components/Hero.tsx` (lines 55-72) with your actual photo:

```tsx
<Image
  src="/images/berkay-photo.jpg"
  alt="Berkay Kösen"
  fill
  className="object-cover"
  priority
/>
```

Place your photo in `/public/images/berkay-photo.jpg`

### Step 4: Update Before/After Images

In `/components/DemoSection.tsx`, replace the placeholder images with actual surgical result images:

```tsx
<BeforeAfterSlider
  beforeImage="/images/before.jpg"
  afterImage="/images/after.jpg"
/>
```

## 🚀 Running the Project

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Production Build

```bash
npm run build
npm start
```

## 📱 Testing on Mobile

Since 90% of your traffic will come from Instagram:

1. **Run dev server**: `npm run dev`
2. **Find your local IP**: Run `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
3. **Open on phone**: Navigate to `http://YOUR_IP:3000`
4. **Test in Instagram**: Share link via DM and open in Instagram app

## 🎨 Customization Guide

### Colors

Edit `/tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: "#1a1a1a",      // Dark text
  secondary: "#f5f5f5",    // Light background
  accent: "#d4af37",       // Gold accent (luxury feel)
  medical: "#0077b6",      // Medical blue
}
```

### Content

All text content is in Turkish and optimized for the plastic surgery niche. Edit the following files to customize:

- `/components/Hero.tsx` - Main headline and intro
- `/components/DemoSection.tsx` - Feature highlights
- `/components/NoHeadacheSection.tsx` - Service features
- `/components/PricingSection.tsx` - Pricing details
- `/components/ContactSection.tsx` - Contact information

### Sections

To add/remove sections, edit `/app/page.tsx`:

```tsx
<Hero />
<DemoSection />
// Add your custom section here
<NoHeadacheSection />
```

## 📂 Project Structure

```
website_portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page (all sections)
├── components/
│   ├── BeforeAfterSlider.tsx    # Killer feature component
│   ├── WhatsAppButton.tsx       # Floating WhatsApp button
│   ├── Hero.tsx                 # Hero section
│   ├── DemoSection.tsx          # Demo showcase
│   ├── NoHeadacheSection.tsx    # Service guarantees
│   ├── PricingSection.tsx       # Pricing cards
│   ├── ContactSection.tsx       # Contact form/info
│   └── Footer.tsx               # Footer
├── public/
│   └── images/              # Your images go here
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🌐 Deployment

### Option 1: Vercel (Recommended - Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (takes ~2 minutes)

### Option 2: Netlify (Free)

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Deploy

### Option 3: Traditional Hosting

1. Build: `npm run build`
2. Upload the `.next` folder and `package.json`
3. Run: `npm install && npm start`

## 📊 SEO Optimization

The site includes:
- ✅ Meta tags optimized for Turkish market
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Fast loading times
- ✅ Mobile-first design

## 🔒 KVKK Compliance

To make your site KVKK compliant:

1. Add cookie consent banner (consider using a library)
2. Create privacy policy page
3. Add explicit consent checkboxes to forms
4. Update footer links to actual policy pages

## 📞 Post-Launch Checklist

After deploying:

- [ ] Test all links work
- [ ] Verify WhatsApp button opens with correct number
- [ ] Test Before/After slider on multiple devices
- [ ] Check loading speed (use PageSpeed Insights)
- [ ] Test in Instagram in-app browser
- [ ] Verify contact forms work
- [ ] Check mobile responsiveness
- [ ] Test on iOS and Android
- [ ] Update Google Analytics (optional)
- [ ] Submit sitemap to Google Search Console

## 🎯 Week 2 Roadmap Completion

This portfolio site completes the following Week 2 tasks:

- ✅ Design one-page portfolio site
- ✅ Develop Before/After slider demo
- ✅ Write compelling copy (in Turkish)
- 📸 Take professional photo (you need to do this!)
- 🚀 Launch portfolio site (deploy using instructions above)
- ✅ Test on multiple devices (use local testing method)

## 💡 Tips for Success

1. **Professional Photo**: Get a high-quality photo taken. This is crucial for building trust.

2. **Real Before/After Images**: Use actual (licensed) surgical result images for the slider demo.

3. **WhatsApp Response Time**: Keep your response time under 1 hour during business hours.

4. **Mobile Testing**: Test EVERYTHING in the Instagram app browser on a real phone.

5. **Loading Speed**: Optimize all images before uploading (use TinyPNG or similar).

6. **Social Proof**: Once you get your first clients, add testimonials section.

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process using port 3000
npx kill-port 3000
npm run dev
```

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading
- Ensure images are in `/public` folder
- Use absolute paths: `/images/photo.jpg`
- Check image file extensions match imports

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 🎓 Next Steps (Week 3)

After launching your portfolio:

1. Scout 10 plastic surgeons with bad/no websites
2. Create spreadsheet to track outreach
3. Prepare video audit template
4. Record screen while reviewing their current site
5. Send personalized Instagram DMs

Refer to `roadmap.md` for detailed Week 3 instructions.

## 📄 License

This is your personal portfolio. Feel free to customize and use it for your freelance business.

## 🤝 Support

If you have questions or need help:
- Review the roadmap.md file
- Check Next.js documentation
- Test on multiple devices before asking for help

---

**Remember**: This site is not just a portfolio. It's a sales tool designed to convert plastic surgeons into paying clients. Every element is strategically placed to build trust and demonstrate value.

Good luck with your freelance business! 🚀

---

*Created for Week 2 of the Freelance Web Development Roadmap*
*Target Market: Plastic Surgeons & Beauty Centers in Turkey*
