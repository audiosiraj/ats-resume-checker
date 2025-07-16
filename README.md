# 📄 ATS Resume Checker (PDF-Based)

A simple, frontend-only web application that analyzes PDF resumes to check for keyword compatibility with Applicant Tracking Systems (ATS).

---

##  Features

-  Upload `.pdf` resumes directly in the browser
-  Extracts resume text using `pdf.js`
-  Scans for industry-relevant keywords
-  Calculates an ATS compatibility score
-  No backend or Firebase needed — 100% client-side
-  Accessible and responsive design

---

## 📸 Demo

>  **Live Site:** Coming Soon  
> ![Screenshot](demo.png)  
> *(You can replace this with a real screenshot or GIF later)*

---

## 🛠 Built With

- HTML5, CSS3, JavaScript
- [PDF.js](https://mozilla.github.io/pdf.js/)
- Accessibility best practices (labeling, ARIA-friendly)

---

## 📂 Folder Structure
ats-resume-checker/
├── index.html # Main HTML structure
├── style.css # CSS styling
├── script.js # Resume analysis logic
└── README.md # This file


---

##  How It Works

1. Upload a PDF resume
2. The app uses `pdf.js` to extract the text
3. It scans for keywords like:
   - Java, Python, React, Git, Communication, etc.
4. It calculates and displays:
   - ATS Score (% match)
   - Matched keywords
   - Missing keywords

---

##  Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/your-username/ats-resume-checker.git
cd ats-resume-checker

