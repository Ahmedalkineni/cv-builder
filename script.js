function generateCV(){

const name = document.getElementById("name").value;
const jobTitle = document.getElementById("jobTitle").value;
const phone = document.getElementById("phone").value;
const email = document.getElementById("email").value;
const summary = document.getElementById("summary").value;
const experience = document.getElementById("experience").value;
const education = document.getElementById("education").value;

const skills = document
.getElementById("skills")
.value
.split("\n")
.filter(skill => skill.trim() !== "");

const skillList = skills
.map(skill => `<li>${skill}</li>`)
.join("");

document.getElementById("cv").innerHTML = `

<div class="header">

<div>
<div class="name">${name}</div>
<div class="job">${jobTitle}</div>
</div>

<div class="contact">
<div>${phone}</div>
<div>${email}</div>
</div>

</div>

<div class="section">
<h2>PERSONAL SUMMARY</h2>
<p>${summary}</p>
</div>

<div class="section">
<h2>WORK EXPERIENCE</h2>
<p>${experience}</p>
</div>

<div class="section">
<h2>SKILLS</h2>
<ul>
${skillList}
</ul>
</div>

<div class="section">
<h2>EDUCATION</h2>
<p>${education}</p>
</div>

<div class="section">
<h2>REFERENCES</h2>
<p>Available Upon Request</p>
</div>

`;

}
