// Set the PDF.js worker path
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";

// Keywords to check
const targetKeywords = [
  "Java", "Python", "Teamwork", "Git", "Communication",
  "React", "Node.js", "Problem Solving", "Leadership"
];

function analyzeResume() {
  const fileInput = document.getElementById("resumeUpload");
  const file = fileInput.files[0];

  if (!file || !file.name.endsWith(".pdf")) {
    alert("Please upload a valid PDF file.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function () {
    const typedArray = new Uint8Array(this.result);

    pdfjsLib.getDocument({ data: typedArray }).promise
      .then(function (pdfDoc) {
        let textContent = "";

        const promises = [];

        for (let i = 1; i <= pdfDoc.numPages; i++) {
          promises.push(
            pdfDoc.getPage(i).then(function (page) {
              return page.getTextContent().then(function (text) {
                text.items.forEach((item) => {
                  textContent += item.str + " ";
                });
              });
            })
          );
        }

        Promise.all(promises).then(() => {
          evaluateText(textContent.toLowerCase());
        });
      })
      .catch(function (err) {
        console.error("PDF.js error:", err);
        alert("Failed to parse PDF. Make sure it's a valid file.");
      });
  };

  reader.readAsArrayBuffer(file);
}

function evaluateText(text) {
  const matched = [];
  const missed = [];

  targetKeywords.forEach((keyword) => {
    if (text.includes(keyword.toLowerCase())) {
      matched.push(keyword);
    } else {
      missed.push(keyword);
    }
  });

  const score = Math.round((matched.length / targetKeywords.length) * 100);

  const results = document.getElementById("results");
  results.innerHTML = `
    <h3>ATS Score: ${score}%</h3>
    <p><strong>Matched Keywords:</strong> ${matched.join(", ") || "None"}</p>
    <p><strong>Missing Keywords:</strong> ${missed.join(", ") || "None"}</p>
  `;
}
