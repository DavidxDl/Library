let library = [{
    title: 'The Witcher',
    author: 'Andrej Sapowsky',
    Npages: 300,
    info: '',
    haveIReadIt: true
    },
    {
    title: 'Harry Potter',
    author: 'JK Rowling',
    Npages: 300,
    info: '',
    haveIReadIt: false

    
}];
const form = document.querySelector('form');
const btn = document.querySelector(".addbtn");
const booksgrid = document.querySelector('.booksgrid');






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

function handleForm (event) { event.preventDefault(); }

function addToLibrary (book){
    library.push(book);
}



function checkLibrary(){
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
    const bookCard = document.createElement('div');
    bookCard.classList.add('bookcard');
    const TitleValue = document.getElementById('Title').value;
    let title = document.createElement('h2');
    title.classList.add('bookcardtitle');
    title.innerHTML = `Title: ${TitleValue}`
    const AuthorValue = document.getElementById('Author').value;
    let author = document.createElement('h3');
    author.innerHTML = `Author: ${AuthorValue}`;
    const NpagesValue = document.getElementById('NPages').value
    let Npages = document.createElement('h3');
    Npages.innerHTML = `Pages: ${NpagesValue}`;
    const haveIReadItValue = document.getElementById('HaveIReadIt').value;
    let haveIReadIt = document.createElement('h3');
    haveIReadIt.innerHTML = `Have i Read it?: ${haveIReadItValue}`;
        
    let book = new Book(TitleValue, AuthorValue, NpagesValue, haveIReadItValue)
    addToLibrary(book);

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(Npages);
    bookCard.appendChild(haveIReadIt);
    booksgrid.appendChild(bookCard);
    }










form.addEventListener('submit',handleForm)

btn.addEventListener('click', () =>{
    document.querySelector('.form').classList.toggle('active');   
    }
)

window.addEventListener('load', checkLibrary);

