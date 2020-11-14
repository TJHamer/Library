let myLibrary = [];

function book(title, author, pages, read){
	this.title = title
	this.author= author
	this.pages = pages
	this.read  = read
	this.info  = function(){
		return(`${title} by ${author}, ${pages} pages, ${read} yet`)
	}
}


function addBookToLibrary(obj){

	myLibrary.push(obj);
}

function removeBookFromLibrary(index){

	myLibrary.splice(index,1);
	
}

function addToPage(array){

	let length = array.length;

	for(let i=0;i<length;i++){

		var row = $('<tr> </tr>')
			row.addClass('row')
			   .addClass(`row${i}`)
			   .attr('id', `${i}`)

		var cell1 = $('<td></td>')
			  cell1.addClass('cell')
			       .addClass(`row${i}`)
				   .attr('id', `id${i}-title`)
				   .attr('data-key', `${i}`)
				   .text(array[i]["title"]);
		var cell2 = $('<td></td>')
			  cell2.addClass('cell')
			       .addClass(`row${i}`)
			  	   .attr('id', `id${i}-author`)
			  	   .attr('data-key', `${i}`)
			  	   .text(array[i]["author"]);
		var cell3 = $('<td></td>')
			  cell3.addClass('cell')
			       .addClass(`row${i}`)
				   .attr('id', `id${i}-pages`)
				   .attr('data-key', `${i}`)
				   .text(array[i]["pages"]);





		var cell4 = $('<td></td>')
			  cell4.addClass('cell')
			       .addClass(`row${i}`)
			  	   .attr('id', `id${i}-read`)
			  	   .attr('data-key', `${i}`)
			  	   .text(array[i]["read"]);

		var btn = $('<button> </button>')
			  btn.addClass('removeButton')
			     .attr('id', `id${i}removeButton`)
			     .attr('data-key', `${i}`)
			  	 .text('removeButton');

		row.append(cell1);
		row.append(cell2);
		row.append(cell3);
		row.append(cell4);
		row.append(btn);

		$('#table').append(row);

	}

	$('.removeButton').on('click', function(e){
		console.log(e);
	var id = e.target.id;
	var index = parseInt(document.getElementById(id).parentNode.id);
	
	removeBookFromLibrary(index); //remove from array
	//document.getElementById(id).parentNode.remove(); //removes row

	clearPage();
	addToPage(myLibrary);

	})
}

function clearPage(){

	var row = Array.from($('.row'));
	row.forEach(row => row.remove());
}

$('#submitButton').on('click', function(){

	var title = $('#title').val();
	var author = $('#title').val();
	var pages = $('#title').val();
	var readChecked = $('#read')[0]["checked"];
	var read = readChecked ? 'read' : 'not read';

	var newBook = new book(title,author,pages,read);

	addBookToLibrary(newBook);
	clearPage();
	addToPage(myLibrary);


})







// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}







var book1 = new book('The Hobbit', 'JRR Tolkein', 297, 'not read');
var book2 = new book('Harry Potter', 'JK Rowling', 500, 'read');

addBookToLibrary(book1);
addBookToLibrary(book2);

addToPage(myLibrary);



