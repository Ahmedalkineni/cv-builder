function generateCV(){

const name =
document.getElementById("name").value;

const title =
document.getElementById("title").value;

const phone =
document.getElementById("phone").value;

const email =
document.getElementById("email").value;

const summary =
document.getElementById("summary").value;

document.getElementById("cv").innerHTML = `

<div class="header">

<div>
<h1>${name}</h1>
<p>${title}</p>
</div>

<div class="contact">
<p>${phone}</p>
<p>${email}</p>
</div>

</div>

<hr>

<h3>PERSONAL SUMMARY</h3>

<p>${summary}</p>

`;

}
