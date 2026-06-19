function generateCV(){

const name =
document.getElementById("name").value;

const jobTitle =
document.getElementById("jobTitle").value;

const email =
document.getElementById("email").value;

const phone =
document.getElementById("phone").value;

const summary =
document.getElementById("summary").value;

document.getElementById("cvPreview").innerHTML = `

<h1>${name}</h1>

<h3>${jobTitle}</h3>

<p>
${phone}<br>
${email}
</p>

<hr>

<h2>نبذة شخصية</h2>

<p>${summary}</p>

`;

}
