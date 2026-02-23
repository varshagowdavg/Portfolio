# Deploy Your Portfolio Live

Your messages go to **varshagowdavg819@gmail.com**. To receive them from the contact form, set up Formspree first (see Step 1).

---

## Step 1: Set Up Formspree (Contact Form)

1. Go to [formspree.io](https://formspree.io)
2. Sign up (free)
3. Click **"New Form"**
4. Enter **varshagowdavg819@gmail.com** as the notification email
5. Copy your Form ID (e.g. `xzpkqewn`)
6. Open `index.html` and replace `YOUR_FORMSPREE_ID` with your Form ID:
   ```html
   action="https://formspree.io/f/xzpkqewn"
   ```

---

## Step 2: Host on GitHub Pages (Free)

1. Create a new repo on [github.com](https://github.com) (e.g. `varsha-portfolio`)
2. Upload your files (index.html, styles.css, script.js) to the repo
3. Go to **Settings → Pages**
4. Under **Source**, choose **Deploy from a branch**
5. Branch: `main`, folder: `/ (root)`, Save
6. Your site will be live at: `https://YOUR_USERNAME.github.io/varsha-portfolio`

---

## Step 3: Alternative — Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag your **portfolio folder** onto the Netlify drop zone
3. Your site goes live instantly with a URL like `random-name.netlify.app`
4. You can add a custom domain in Netlify settings

---

## Step 4: Alternative — Vercel

1. Go to [vercel.com](https://vercel.com) and sign up
2. Import your GitHub repo or upload the folder
3. Deploy — you get a URL like `your-project.vercel.app`
