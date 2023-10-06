let library = [];

const form = document.querySelector('form');
const btn = document.querySelector(".addbtn");
const booksgrid = document.querySelector('.booksgrid');
const submitBook = document.getElementById('submitBook');

getLocalStorage();

submitBook.addEventListener('click', (e) => {
    e.preventDefault();
    validateInput();
});

btn.addEventListener('click', () =>{
    document.querySelector('.form').classList.toggle('active');   
    }
)

window.addEventListener('load', updateLibrary);


function Book (title, author, Npages, haveIReadIt){
    this.title = title;
    this.author = author;
    this.Npages = Npages;
    this.information = "";
    this.haveIReadIt = Boolean(haveIReadIt);
    this.info  = function (){
        return this.information;
    }
}

function validateInput (){
    const form = document.querySelector('form');

    if(form.checkValidity()){
        returnValue();
    } else {
        form.reportValidity();
    }
}


function addToLibrary (book){
    library.push(book);
    localStorage.setItem('library', JSON.stringify(library));
}



function updateLibrary(){
    booksgrid.innerHTML = '';

   library.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookcard');
    let bookTitle = document.createElement('h2');
    bookTitle.classList.add('bookcardtitle');
    bookTitle.innerHTML = 'Title: ' + book.title;
    let bookAuthor = document.createElement('h3');
    bookAuthor.innerHTML = 'Author: ' + book.author;
    let Npages = document.createElement('h3');
    Npages.innerHTML = 'Pages: ' + book.Npages;
    let haveIReadIt = document.createElement('h3');
    haveIReadIt.innerHTML = 'Have i read it: ' + book.haveIReadIt;

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(Npages);
    bookCard.appendChild(haveIReadIt);
    booksgrid.appendChild(bookCard);
   })

}

function returnValue(){
    document.querySelector('.form').classList.toggle('active');
    const TitleValue = document.getElementById('Title').value;
    const AuthorValue = document.getElementById('Author').value;
    const NpagesValue = document.getElementById('NPages').value
    const haveIReadItValue = document.getElementById('HaveIReadIt').value;        

    let book = new Book(TitleValue, AuthorValue, NpagesValue, haveIReadItValue)
    addToLibrary(book);
    updateLibrary();
    }




function getLocalStorage () {
    if (localStorage.getItem('library')){
        library = JSON.parse(localStorage.getItem('library'));
    } else {
        localStorage.setItem('library', JSON.stringify(library));
    }
    updateLibrary();
}

