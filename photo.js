/*let authorValid = false;
let imageValid = false;
let altValid = false;
let descriptionValid = false;
let tagsValid = false;*/
let submitValid = false;

async function validateSubmission(event)
{
    event.preventDefault();

    form.author.style.backgroundColor = "white";
    form.image.style.backgroundColor = "white";
    form.description.style.backgroundColor = "white";
    form.tags.style.backgroundColor = "white";
    form.alt.style.backgroundColor = "white";
    
    if(form.author.value === "")
    {
        form.author.style.backgroundColor = "#e63d3d";
        submitValid = false;
    }
    else if(form.image.value === "")
    {
        form.image.style.backgroundColor = "#e63d3d";
        submitValid = false;
    }
    else if(form.description.value === "")
    {
        form.description.style.backgroundColor = "#e63d3d";
        submitValid = false;
    }
    else if(form.alt.value === "")
    {
        form.alt.style.backgroundColor = "#e63d3d";
        submitValid = false;
    }
    else if(form.tags.value === "")
    {
        form.tags.style.backgroundColor = "#e63d3d";
        submitValid = false;
    }
    else
    {
        submitValid = true;
    }
    
    let toSend = {
        author: form.author.value,
        image: form.image.value,
        alt: form.alt.value,
        description: form.description.value,
        tags: form.tags.value
    };
    
    let jsonString = JSON.stringify(toSend);
    console.log(jsonString);
   
    fetch('https://wt.ops.labs.vu.nl/api23/53e16a12', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: jsonString,
})
  .then((response) => response.json())
  .then((toSend) => {
    console.log('Success:', toSend);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

let form = document.getElementById("submitForm");
    form.addEventListener("submit", validateSubmission);
    
function createAuthor(element)
{
    return document.createElement(element);
}

function append(parrent, element)
{
    return document.appendChild(element);
}

async function displayDatabase()
{
    try{
        let resp = await fetch('https://wt.ops.labs.vu.nl/api23/53e16a12');
       await console.log(resp.json());    
    }
    
    catch(error){
        console.log(error);
    }
}

displayDatabase();
/*async function renderData()
{
    let authors = await displayDatabase();
    let html = '';

    authors.forEach(author => {
        let htmlSegment = '<div class = "author">
                            <p>${author.author}</p>
                            <img src = "${author.image}" >
                            <p>$</p>
                            
    })
}
*/