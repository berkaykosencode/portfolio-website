# 🚀 Quick Start Guide

Your portfolio website is ready! Follow these steps to launch it.

## ✅ What's Been Done

Your complete portfolio website includes:

- ✅ Modern one-page design
- ✅ Before/After slider component (killer feature!)
- ✅ Hero section with professional layout
- ✅ Service guarantees section
- ✅ Pricing section (setup + monthly retainer)
- ✅ Contact section with multiple CTAs
- ✅ Floating WhatsApp button
- ✅ Mobile-first responsive design
- ✅ Turkish language content optimized for plastic surgeons
- ✅ All dependencies installed
- ✅ Production build tested and working

## 🎯 Before You Launch - Customize These 3 Things

### 1. Update Your WhatsApp Number (CRITICAL!)

**Files to edit:**
- `components/WhatsAppButton.tsx` - Line 6
- `app/page.tsx` - Line 20

Replace with your actual WhatsApp number (including country code, no spaces or +).

Example: `905442151282`

### 2. Update Your Contact Information

**File: `components/ContactSection.tsx`**
- Line 53: Change email to your actual email
- Lines 79-86: Update Instagram and LinkedIn URLs

**File: `app/layout.tsx`**
- Line 9: Update email in metadata

### 3. Add Your Professional Photo

**File: `components/Hero.tsx`**

The placeholder emoji (👨‍💻) needs to be replaced with your actual photo.

**Option A - Use a photo file:**
1. Place your photo in `/public/images/berkay-photo.jpg`
2. Replace lines 55-72 in `components/Hero.tsx` with:

```tsx
<div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-3xl shadow-2xl">
  <Image
    src="/images/berkay-photo.jpg"
    alt="Berkay Kösen"
    fill
    className="object-cover"
    priority
  />
</div>
```

**Option B - Use an online photo (temporary):**
Replace lines 55-72 with your photo URL from Unsplash/etc.

## 🚀 Launch Your Site

### Step 1: Start Development Server

```bash
cd /Users/berkaykosen/Desktop/website_portfolio
npm run dev
```

Your site will be available at: **http://localhost:3000**

### Step 2: Test Everything

Open http://localhost:3000 and check:

- ✅ Hero section loads correctly
- ✅ Before/After slider works (drag the slider)
- ✅ WhatsApp button opens your WhatsApp
- ✅ All sections scroll smoothly
- ✅ Contact buttons work
- ✅ Mobile responsive (resize browser)

### Step 3: Test on Your Phone

This is CRITICAL since 90% of traffic comes from Instagram!

1. Make sure your computer and phone are on the same WiFi
2. Find your computer's local IP address:
   - Mac: Open Terminal, run `ifconfig | grep "inet " | grep -v 127.0.0.1`
   - The IP looks like: `192.168.1.XXX`
3. On your phone, open browser and go to: `http://YOUR_IP:3000`
4. Test the Before/After slider with your finger
5. Test the WhatsApp button
6. Check that everything looks good

### Step 4: Deploy to Production

#### Option A: Vercel (Recommended - FREE)

1. Create account at https://vercel.com
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy:
   ```bash
   vercel
   ```
4. Follow the prompts - your site will be live in 2 minutes!

#### Option B: Netlify (Also FREE)

1. Create account at https://netlify.com
2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Deploy:
   ```bash
   netlify deploy --prod
   ```

#### Option C: Manual Hosting

If you have traditional hosting (cPanel, etc.):
1. Run: `npm run build`
2. Upload entire project folder via FTP
3. Run `npm install && npm start` on server
4. Point your domain to the server

## 📱 Week 2 Checklist

Based on your roadmap, here's what you should complete this week:

- [x] Design one-page portfolio site ✅
- [x] Develop Before/After slider demo ✅
- [x] Write compelling copy ✅
- [ ] **Take professional photo** ⚠️ DO THIS ASAP!
- [ ] **Update WhatsApp number** ⚠️ CRITICAL
- [ ] **Update contact information** ⚠️ CRITICAL
- [ ] Launch portfolio site (follow steps above)
- [ ] Test on multiple devices
- [ ] Test in Instagram in-app browser

## 🎨 Optional Customizations

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  accent: "#d4af37",    // Change gold color
  medical: "#0077b6",   // Change blue color
}
```

### Add Real Before/After Images

Edit `components/DemoSection.tsx` (line 31-33):

```tsx
<BeforeAfterSlider
  beforeImage="/images/before.jpg"  // Add real images
  afterImage="/images/after.jpg"
/>
```

Make sure you have permission to use these images!

### Update Pricing

Edit `components/PricingSection.tsx`:
- Lines 39-47: Setup fee pricing
- Lines 111-113: Monthly retainer pricing

## 🐛 Common Issues

### Port 3000 is already in use
```bash
npx kill-port 3000
npm run dev
```

### WhatsApp button doesn't work
- Make sure you updated the phone number
- Format must be: country code + number (no spaces, no +)
- Example: `905442151282` NOT `+90 544 215 1282`

### Site looks broken on mobile
- Clear your browser cache
- Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Try in incognito/private mode

## 📊 After Launch

### Get Your First Clients (Week 3)

1. **Scout 10 doctors** with bad/no websites:
   - Search Google Maps: "Plastik Cerrah [City]"
   - Look for broken websites or gmail addresses
   - Save their Instagram profiles

2. **Create video audits**:
   - Record their current site/Instagram
   - Show what's wrong
   - Show your Before/After slider
   - Send via Instagram DM

3. **Follow up**:
   - Respond quickly on WhatsApp
   - Offer free consultation
   - Show your portfolio site

See `roadmap.md` for detailed Week 3 strategy.

## 💡 Pro Tips

1. **Professional Photo is KEY**: Don't launch without a good photo. Doctors trust people who show their face.

2. **Test in Instagram App**: Share your site link in a DM to yourself, open in Instagram. This is how 90% of visitors will see it.

3. **WhatsApp Response Time**: Set expectations that you respond within 1 hour. This builds trust.

4. **Before/After Images**: Use high-quality, licensed images. Never steal images from other surgeons.

5. **Loading Speed**: Once deployed, test your site speed at https://pagespeed.web.dev

## 🎓 Resources

- Full documentation: See `README.md`
- Business roadmap: See `roadmap.md`
- Next.js docs: https://nextjs.org/docs
- Deployment help: https://vercel.com/docs

## 🆘 Need Help?

If something's not working:

1. Check the error message carefully
2. Review `README.md` troubleshooting section
3. Make sure you followed all customization steps
4. Test in different browsers
5. Check browser console for errors (F12)

---

## 🎉 You're Ready!

Your portfolio site is production-ready. Just customize the 3 critical items above, deploy, and you're ready to start reaching out to plastic surgeons!

**Next Steps:**
1. Update WhatsApp number + contact info
2. Add your professional photo
3. Deploy to Vercel/Netlify
4. Start Week 3: Find your first clients!

Good luck with your freelance business! 🚀

---

*Part of the Freelance Web Development Roadmap - Week 2*
