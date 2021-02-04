const submitButton = document.querySelector('button');
const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    // Get Submission Values
    let newImgLink = document.querySelector('input[id = picUrl]').value;
    let topText = document.querySelector('input[id = topText]').value;
    let bottomText = document.querySelector('input[id = bottomText]').value;
    //Initiate addImage Function
    if(newImgLink === '')
    {
        alert('Please enter a link');
    }else{
        formatImage(newImgLink, topText, bottomText);
        form.reset();
    }
    
});

function formatImage(link, topCaption, bottomCaption){
    //Creating New Elements
    let createdImg = document.createElement('img');
    let newDiv = document.createElement('div');
    let topDiv = document.createElement('div');
    let bottomDiv = document.createElement('div');
    let del = document.createElement('a'); //adds a delete function that can be enabled and reenabled through hover
    //Giving New Elements their own Classifications
    topDiv.className = 'middle-top';
    topDiv.innerText = topCaption;
    bottomDiv.className = 'middle-bottom';
    bottomDiv.innerText = bottomCaption;
    newDiv.id = 'addedPictures';
    createdImg.src = link;
    del.className = 'delete';
    del.innerHTML = 'Delete this Meme?'
    //Appending New Elements
    form.appendChild(newDiv);
    newDiv.appendChild(createdImg);
    newDiv.appendChild(topDiv);
    newDiv.appendChild(bottomDiv);
    newDiv.appendChild(del);

    newDiv.addEventListener('click', function(e){
        e.currentTarget.remove();
    })
}

function addTopText(text){
    let topDiv = document.createElement()
}