/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const studentList = document.querySelectorAll('.student-item');
const pageDisplay = 10;

function showPage (list, page) {
  const startIndex = (page * pageDisplay) - pageDisplay;
  const endIndex = (page * pageDisplay) - 1;

for (let i = 0; i < list.length; i += 1)  {

  if (i >= startIndex && i <= endIndex) {
    list[i].style.display = 'block';
  } else {
    list[i].style.display = 'none';
    }
  }
}

showPage(studentList, 1);
/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
function appendPageLinks (list) {
/* 1. Determine how many pages are needed for the list by dividing the
total number of list items by the max number of items per page*/
let page = Math.ceil(studentList.length/pageDisplay);

//2. Create a div, give it the “pagination” class, and append it to the .page div
const div = document.createElement('div');
div.className = 'pagination';
const pageDiv = document.body.firstElementChild;
pageDiv.appendChild(div);

//3. Add a ul to the “pagination” div to store the pagination links
const ul = document.createElement('ul');
const divPagination = document.body.firstElementChild.lastElementChild;
divPagination.appendChild(ul);

//4. for every page, add li and a tags with the page number text
  for (i = 1; i <= page; i ++) {
    const li = document.createElement('li')
    const a = document.createElement('a');

    a.innerText = i;
    a.href = '#';
    li.appendChild(a);
    ul.appendChild(li);
//Instructions say to add intial active class to 1st a tag.
  const activeFrontPage = document.querySelector('div.pagination a');
  activeFrontPage.className = 'active';
/*5. Add an event listener to each a tag. When they are clicked
call the showPage function to display the appropriate page*/
//Defining a tags
const pageLinks = document.querySelector('a');

pageLinks.addEventListener('click', (e) => {
  showPage(studentList, i);
//6. Loop over pagination links to remove active class from all links
/*7. +Add the active class to the link that was just clicked. You can identify that
  clicked link using event.target*/
  for  (let i = 0; i < divPagination.length; i ++) {
  const links = querySelectorAll('a');
    links[i].className.remove('active');
    const selection = e.target;
      selection.className.add('active');
  }
    });
  }
}
appendPageLinks();
// Remember to delete the comments that came with this file, and replace them with your own code comments.
