# Next Phase Technical Implementation Guide & Roadmap

This document outlines the architecture, implementation steps, and verification procedures for the upcoming development phase of the **Dasari Sriharikrishna Portfolio**.

---

## 📌 Next Phase Overview

| Task                                                 | Priority | Status  | Architecture / Mechanism                                          |
| ---------------------------------------------------- | -------- | ------- | ----------------------------------------------------------------- |
| **1. Dark & Light Theme Implementation**             | High     | Planned | `next-themes` + Tailwind `class` mode + HSL CSS variable tokens   |
| **2. Contact Form to Google Sheets via Apps Script** | High     | Planned | Google Apps Script Web App (`doPost`) + Google Sheets + Fetch API |
| **3. Custom Domain Setup**                           | Medium   | Planned | Registrar purchase + Netlify DNS / ALIAS + SSL configuration      |

---

## 🎨 1. Dark and Light Theme Implementation

### Architecture Overview

The current UI is built on a dark palette with HSL CSS variables defined in [`globals.css`](../src/app/globals.css) and Tailwind dark-oriented tokens. We will implement seamless light/dark/system mode switching without hydration mismatch or flash of unstyled content (FOUC).

### Step-by-Step Implementation Plan

1. **Install Theme Provider:**

   ```bash
   npm install next-themes
   ```

2. **Tailwind Dark Mode Configuration:**
   Ensure [`tailwind.config.ts`](../tailwind.config.ts) enables class-based dark mode:

   ```typescript
   export default {
     darkMode: ['class'],
     // ...
   };
   ```

3. **Define Dual-Palette Tokens in [`globals.css`](../src/app/globals.css):**
   - **Light Mode (`:root`):** Clean off-white background (`hsl(0 0% 100%)`), deep charcoal text (`hsl(222.2 84% 4.9%)`), subtle slate borders (`hsl(214.3 31.8% 91.4%)`), and elevated card backgrounds.
   - **Dark Mode (`.dark`):** Existing deep obsidian background (`hsl(240 10% 3.9%)`), pure white/slate foreground (`hsl(0 0% 98%)`), and glowing neon accent highlights.

4. **Create Theme Provider Component (`src/components/theme/ThemeProvider.tsx`):**

   ```tsx
   'use client';
   import { ThemeProvider as NextThemesProvider } from 'next-themes';

   export function ThemeProvider({
     children,
     ...props
   }: React.ComponentProps<typeof NextThemesProvider>) {
     return (
       <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
         {children}
       </NextThemesProvider>
     );
   }
   ```

5. **Create Theme Toggle Button (`src/components/theme/ThemeToggle.tsx`):**
   - Place in [`Navbar.tsx`](../src/components/layout/Navbar.tsx) alongside existing nav links and mobile menu.
   - Use Lucide icons (`Sun`, `Moon`, `Laptop`) with smooth micro-interactions.

---

## 📊 2. Bind Contact Page to Google Sheets (via Apps Script)

### Problem & Advantage

Currently, contact inquiries require either Resend API keys or client-side mailto links. Binding the form to Google Sheets via Google Apps Script:

- Acts as a free, 100% reliable database for client inquiries.
- Never exposes credentials in client-side static builds (`output: 'export'`).
- Sends instant email alerts to your personal inbox upon submission.

### Google Apps Script Code (`Code.gs`)

1. Open [Google Sheets](https://sheets.new) and create a sheet named **Portfolio Inquiries**.
2. Set header row (Row 1):
   `Timestamp | Name | Email | Subject | Service | Message | User Agent`
3. Click **Extensions > Apps Script** and paste:

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    var row = [
      new Date(),
      data.name || '',
      data.email || '',
      data.subject || '',
      data.service || 'General Inquiry',
      data.message || '',
      data.userAgent || '',
    ];

    sheet.appendRow(row);

    // Optional: Send yourself an instant email notification
    MailApp.sendEmail({
      to: 'sriharikrishna.work@gmail.com',
      subject: '🚀 New Portfolio Contact: ' + (data.name || 'Anonymous'),
      body:
        'You received a new inquiry:\n\nName: ' +
        data.name +
        '\nEmail: ' +
        data.email +
        '\nSubject: ' +
        data.subject +
        '\nService: ' +
        data.service +
        '\n\nMessage:\n' +
        data.message,
    });

    return ContentService.createTextOutput(
      JSON.stringify({ status: 'success', message: 'Inquiry recorded' })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

4. Click **Deploy > New deployment**:
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the generated Web App URL (`https://script.google.com/macros/s/.../exec`).

### Frontend Integration ([`Contact.tsx`](../src/features/contact/components/Contact.tsx))

Create an environment variable in `.env.local` and Netlify:
`NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/.../exec`

Update form submission handler:

```typescript
const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!, {
  method: 'POST',
  mode: 'no-cors', // standard for Google Apps Script Web Apps
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

---

## 🌐 3. Domain Purchase & Deployment Configuration

### Recommended Domain Options

For a Frontend Engineer & Product Engineer portfolio:

- **Primary:** `sriharikrishna.dev` or `dasarisriharikrishna.com`
- **Modern Tech Alternatives:** `dskh.dev`, `sriharikrishna.tech`, `dskh.me`

### Recommended Registrars

1. **Cloudflare Registrar:** Zero markup on wholesale pricing, top-tier free DNS DDoS protection, and instant DNS propagation.
2. **Porkbun / Namecheap:** Inexpensive first-year pricing with free WHOIS privacy.

### Netlify Custom Domain & DNS Setup Guide

1. **Netlify Dashboard:**
   - Go to **Site Configuration > Domain Management > Custom domains**.
   - Click **Add custom domain** and enter your purchased domain (e.g. `sriharikrishna.dev`).
2. **DNS Configuration (Choose Option A or Option B):**
   - **Option A (Netlify DNS - Recommended):** Point your registrar's nameservers to Netlify's 4 nameservers (`dns1.p01.nsone.net`, etc.). Netlify handles apex domains, subdomains, and automatic SSL renewals automatically.
   - **Option B (External DNS at Registrar / Cloudflare):**
     - Apex (`@` or `sriharikrishna.dev`): Create an `ALIAS`, `ANAME`, or `A` record pointing to Netlify's load balancer IP `75.2.60.5`.
     - Subdomain (`www.sriharikrishna.dev`): Create a `CNAME` record pointing to `<your-site-name>.netlify.app`.
3. **SSL Certificate:**
   - Netlify automatically generates a free Let's Encrypt Wildcard SSL certificate within minutes once DNS propagates.
4. **Update Project Metadata:**
   - Update `metadataBase` in [`layout.tsx`](../src/app/layout.tsx).
   - Update [`robots.txt`](../public/robots.txt) and [`sitemap.xml`](../public/sitemap.xml) with the new custom domain URL.
