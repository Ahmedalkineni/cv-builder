const fields = [
  ["name", "cvName"],
  ["title", "cvTitle"],
  ["summary", "cvSummary"],
  ["phone", "cvPhone"],
  ["email", "cvEmail"],
  ["location", "cvLocation"],
  ["experience", "cvExperience"],
  ["skills", "cvSkills"],
  ["education", "cvEducation"]
];

function updatePreview(id, targetId, prefix = "") {
  const input = document.getElementById(id);
  const target = document.getElementById(targetId);

  const render = () => {
    const value = input.value.trim();
    target.textContent = value ? prefix + value : target.dataset.placeholder || target.textContent;
  };

  input.addEventListener("input", render);
  render();
}

document.getElementById("cvName").dataset.placeholder = "Your Name";
document.getElementById("cvTitle").dataset.placeholder = "Job Title";
document.getElementById("cvSummary").dataset.placeholder =
  "Write a short introduction about yourself, your strengths, and the role you are seeking.";
document.getElementById("cvPhone").dataset.placeholder = "T: 05xxxxxxxx";
document.getElementById("cvEmail").dataset.placeholder = "E: name@email.com";
document.getElementById("cvLocation").dataset.placeholder = "Jeddah, Saudi Arabia";
document.getElementById("cvExperience").dataset.placeholder = "Add your work experience here.";
document.getElementById("cvSkills").dataset.placeholder = "Add your professional skills here.";
document.getElementById("cvEducation").dataset.placeholder = "Add your education details here.";

updatePreview("name", "cvName");
updatePreview("title", "cvTitle");
updatePreview("summary", "cvSummary");
updatePreview("phone", "cvPhone", "T: ");
updatePreview("email", "cvEmail", "E: ");
updatePreview("location", "cvLocation");
updatePreview("experience", "cvExperience");
updatePreview("skills", "cvSkills");
updatePreview("education", "cvEducation");
