const bindings = [
  ["fullName", "pvName", ""],
  ["jobTitle", "pvTitle", ""],
  ["address", "pvAddress", ""],
  ["phone", "pvPhone", ""],
  ["email", "pvEmail", ""],
  ["summary", "pvSummary", ""],
  ["experience", "pvExperience", ""],
  ["education", "pvEducation", ""]
];

bindings.forEach(([inputId, outputId, prefix]) => {
  const input = document.getElementById(inputId);
  const output = document.getElementById(outputId);
  const initial = output.innerHTML;

  const render = () => {
    const value = input.value.trim();
    output.innerHTML = value
      ? value.replace(/\n/g, "<br>")
      : initial;
  };

  input.addEventListener("input", render);
  render();
});

const skillsInput = document.getElementById("skills");
const skillsOutput = document.getElementById("pvSkills");
const skillsInitial = skillsOutput.innerHTML;

const renderSkills = () => {
  const value = skillsInput.value.trim();
  if (!value) {
    skillsOutput.innerHTML = skillsInitial;
    return;
  }

  const items = value
    .split("\n")
    .map(s => s.trim())
    .filter(Boolean)
    .map(s => `<li>${s}</li>`)
    .join("");

  skillsOutput.innerHTML = items ? items : skillsInitial;
};

skillsInput.addEventListener("input", renderSkills);
renderSkills();

document.getElementById("downloadBtn").addEventListener("click", () => {
  const element = document.getElementById("cv");
  html2pdf().set({
    margin: 0,
    filename: "cv.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
    jsPDF: { unit: "pt", format: "a4", orientation: "portrait" }
  }).from(element).save();
});
