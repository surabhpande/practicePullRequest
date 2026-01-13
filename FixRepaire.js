/* ✅ CORRECT WORKFLOW (Non-Owner Fix → Pull Request)

This is how professionals do it in companies & open-source.

🧠 High-Level Idea (Simple)

You cannot push to their repo ❌
So you:

Fork their repo (your copy)

Fix/debug in your fork

Push to your fork

Create Pull Request to their repo

🧩 STEP-BY-STEP (NO CONFUSION)
1️⃣ Fork the repository (MANDATORY)

On GitHub:

Open repo: xyz/hellow

Click Fork

This creates:

your-username/hellow


👉 Now this repo is yours (you have permission)

2️⃣ Clone YOUR fork (not theirs)
git clone https://github.com/your-username/hellow.git
cd hellow


⚠️ If you already cloned the original, we’ll fix that below 👇

3️⃣ Add original repo as upstream

This helps you stay updated.

git remote add upstream https://github.com/xyz/hellow.git


Check:

git remote -v


You should see:

origin    -> your fork
upstream  -> original repo

4️⃣ Create a fix branch (VERY IMPORTANT)
git checkout -b fix-css-layout


✔ Never work on main

5️⃣ Debug & fix the CSS 🎨

Run project

Inspect using browser DevTools

Fix CSS issues

Test properly

6️⃣ Commit your fix
git add .
git commit -m "Fix CSS alignment issue on header"

7️⃣ Push to YOUR fork
git push origin fix-css-layout


✔ This will work (you own the fork)

8️⃣ Create Pull Request (MOST IMPORTANT)

On GitHub:

Base repo: xyz/hellow

Base branch: main

Compare repo: your-username/hellow

Compare branch: fix-css-layout

Click Create Pull Request

✍️ Add description:

What was broken

What you fixed

Screenshots (if CSS)

🔁 If original repo updates while you work

Sync your fork:

git checkout main
git fetch upstream
git merge upstream/main
git push origin main


Then update your branch:

git checkout fix-css-layout
git merge main

🧠 SIMPLE ANALOGY

Original repo = client’s house

Fork = your workshop

Fix CSS = repair work

PR = “Please apply my fix”

🏆 Why this is the BEST way

✔ Professional
✔ Trackable changes
✔ Code review
✔ Safe for owner
✔ Reusable history

📌 One-Line Summary

Fork → Fix → Push → Pull Request */