let submitValid = false;
let data;

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
   
    await fetch('https://wt.ops.labs.vu.nl/api23/53e16a12', {
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

  refreshGallery();
  getDatabase();
  
}

let form = document.getElementById("submitForm");
    form.addEventListener("submit", validateSubmission);

async function getDatabase()
{
    try{
        let response = await fetch('https://wt.ops.labs.vu.nl/api23/53e16a12');
        data = await response.json();
    }
    
    catch(error){
        console.log(error);
    }
    displayDatabase();
}

function displayDatabase()
{
    
    let lastPerson = data.length;
    for(let person = 0; person < lastPerson; person++)
    {
        authorDisplay(person);
    }
}

function authorDisplay(x) //gets all the elements of the submission for an author, combines and then adds them to the DOM
{
    let skeleton = document.createElement('span');

        let auth = document.createElement('p');
        let authTxt = document.createTextNode(data[x].author);
        auth.appendChild(authTxt);
        skeleton.appendChild(auth);

        let img = document.createElement('img');
        img.src = data[x].image;
        skeleton.appendChild(img);

        let alt = document.createElement('p');
        let altTxt = document.createTextNode(data[x].alt);
        alt.appendChild(altTxt);
        skeleton.appendChild(alt);

        let descript = document.createElement('p');
        let descriptTxt = document.createTextNode(data[x].description);
        descript.appendChild(descriptTxt);
        skeleton.appendChild(descript);

        let tags = document.createElement('p');
        let tagsTxt = document.createTextNode(data[x].tags);
        tags.appendChild(tagsTxt);
        skeleton.appendChild(tags);

    let connect = document.getElementById('authorsAlbum');
    connect.appendChild(skeleton);
}

function refreshGallery()
{
    let toRemove = document.getElementById('authorsAlbum');
    toRemove.remove();

    let newSpan = document.createElement('span');
    newSpan.setAttribute('id', 'authorsAlbum');
    let connect = document.getElementById('album');
    connect.appendChild(newSpan);
}

getDatabase();