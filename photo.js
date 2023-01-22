/*let authorValid = false;
let imageValid = false;
let altValid = false;
let descriptionValid = false;
let tagsValid = false;*/
let submitValid = false;

async function validateSubmission(event)
{
    
    if(form.author.value === "")
    {
        form.author.style.backgroundColor = "#e63d3d";
        submitValid = false;
    }
    else
    {
        form.author.style.backgroundColor = "white";
        submitValid = true;
    }

    if(form.image.value === "")
    {
        form.image.style.backgroundColor = "#e63d3d";
        submitValid = false;
    }
    else
    {
        form.image.style.backgroundColor = "white";
        submitValid = true;
    }

    if(form.description.value === "")
    {
        form.description.style.backgroundColor = "#e63d3d";
        submitValid = false;
    }
    else
    {
        form.description.style.backgroundColor = "white";
        submitValid = true;
    }

    if(form.alt.value === "")
    {
        form.alt.style.backgroundColor = "#e63d3d";
        submitValid = false;
    }
    else
    {
        form.alt.style.backgroundColor = "white";
        submitValid = true;
    }

    if(form.tags.value === "")
    {
        form.tags.style.backgroundColor = "#e63d3d";
        submitValid = false;
    }
    else
    {
        form.tags.style.backgroundColor = "white";
        submitValid = true;
    }
    
    if(!submitValid)
        {event.preventDefault();}
}

let form = document.getElementById("submitForm");
form.addEventListener("submit", validateSubmission);