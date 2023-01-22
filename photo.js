/*let authorValid = false;
let imageValid = false;
let altValid = false;
let descriptionValid = false;
let tagsValid = false;*/
let submitValid = false;

async function validateSubmission(event)
{
    event.preventDefault();
    
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
    
    fetch('https://wt.ops.labs.vu.nl/api23/53e16a12', {
  method: 'POST', // or 'PUT'
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

let toSend = {
    author: form.author,
    image: 'form.image',
    alt: form.alt,
    description: form.description,
    tags: form.tags
};

let jsonString = JSON.stringify(toSend);
console.log(jsonString);






/*$(document).ready(function(){
    // click on button submit
    $("#submit").on('click', function(){
        // send ajax
        $.ajax({
            url: 'https://wt.ops.labs.vu.nl/api23/53e16a12', // url where to submit the request
            type : "POST", // type of action POST || GET
            dataType : 'json', // data type
            data : $("#submitForm").serialize(), // post data || get data
            success : function(result) {
                // you can see the result from the console
                // tab of the developer tools
                console.log(result);
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        })
    });
});


var SendInfo= { SendInfo: [author:author.value, ]};

        $.ajax({
            type: 'post',
            url: 'https://wt.ops.labs.vu.nl/api23/53e16a12',
            data: JSON.stringify(SendInfo),
            contentType: "application/json; charset=utf-8",
            traditional: true,
            success: function (data) {
                ...
            }
        });
*/