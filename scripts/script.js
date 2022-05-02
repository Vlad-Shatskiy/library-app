const main = document.querySelector('.cards');
let dimmer = "";


let opener = document.getElementById("opener");

opener.onclick = function(){
    
    let lightbox = document.getElementById("lightbox"),
        dimmer = document.createElement("div");
        
        document.getElementById("lightbox").style.display = "grid";
    dimmer.style.width =  window.innerWidth + 'px';
    dimmer.style.height = window.innerHeight + 'px';
    dimmer.className = 'dimmer';
    
    dimmer.onclick = function(){
        document.body.removeChild(this);   
        lightbox.style.visibility = 'hidden';
    }
        
    document.body.appendChild(dimmer);
    document.querySelector('.dimmer').style.display = "flow-root";
    lightbox.style.visibility = 'visible';
    lightbox.style.top = window.innerHeight/2 - 50 + 'px';
    lightbox.style.left = window.innerWidth/2 - 100 + 'px';
    return false;
}

const submitBtn = document.getElementById('submit');
const newTitle = document.getElementById('title');
const newAuthor = document.getElementById('author');
const newPages = document.getElementById('pages');
const haveRead = document.getElementById('read');
let myLibrary = [];
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return`${title} by ${author}, ${pages}, ${read}`
    }
}
submitBtn.addEventListener('click', (event) =>{
    event.preventDefault();
   
    const newBook = new Book(newTitle.value, newAuthor.value, newPages.value, haveRead.checked);
    myLibrary.push(newBook);
    console.log(myLibrary[myLibrary.length-1].title);
    console.log(newBook.author);
         card = document.createElement('div');
         card.classList.add('card');
     card.innerHTML = `<h3>"${myLibrary[myLibrary.length-1].title}"</h3>
     <p>${myLibrary[myLibrary.length-1].author}</p>
     <p>${myLibrary[myLibrary.length-1].pages} pages</p>
     ${myLibrary[myLibrary.length-1].read === true ? '<button class="toggle haveread">Read</button>' : '<button class="toggle haventread">Not read</button>'}
     <button class="remove" onClick="this.parentNode.parentNode.removeChild(this.parentNode);">Remove</button>
     `;
     console.log(myLibrary[myLibrary.length-1].read);
    main.appendChild(card);
    
    //  
    // document.getElementById("lightbox").visibility = 'hidden';
    document.getElementById("lightbox").style.display = "none";
    
    document.querySelector('.dimmer').style.display = "none";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";

})
toggleBtn = document.querySelectorAll('.toggle');
toggleBtn.addEventListener('click', ()=> alert('clicked'));
