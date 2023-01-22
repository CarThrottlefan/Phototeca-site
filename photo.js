let authorValid = false;
let imageValid = false;
let altValid = false;
let descriptionValid = false;
let tagsValid = false;
let submitValid = false;

async function validateSubmission(event)
{
    form.author.style.backgroundColor = "black";
    
    if(form.author.value === "")
    {
        form.author.style.backgroundColor = "red";
    }
    event.preventDefault();
}

let form = document.getElementById("submitForm");
form.addEventListener("submit", validateSubmission);