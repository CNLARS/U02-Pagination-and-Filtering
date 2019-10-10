/******************************************
Treehouse Techdegree: CNLARS
FSJS project 2 - List Filter and Pagination
******************************************/

const studentList = document.querySelectorAll('.student-item');
const pageDisplay = 10;
//showPage Math and for looped with an if/else style.display to determine list length.
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
//front page
showPage(studentList, 1);


function appendPageLinks (list) {
/* 1. Determine how many pages are needed for the list by dividing the
total number of list items by the max number of items per page*/
let page = Math.ceil(studentList.length/pageDisplay);

//2. div.pagination appending to .page div
const div = document.createElement('div');
div.className = 'pagination';
const pageDiv = document.body.firstElementChild;
pageDiv.appendChild(div);

//3. 'ul' added to div.pagination to store links.
const ul = document.createElement('ul');
const divPagination = document.body.firstElementChild.lastElementChild;
divPagination.appendChild(ul);

//4. for loop previous page Math appending child elements a tag and then li after defining innerText and href.
  for (i = 1; i <= page; i ++) {
    const li = document.createElement('li')
    const a = document.createElement('a');

    a.innerText = i;
    a.href = '#';
    li.appendChild(a);
    ul.appendChild(li);

// *Instructions say to add intial active class to 1st a tag.*
  const activeFrontPage = document.querySelector('div.pagination a');
  activeFrontPage.className = 'active';

//5. Re-defining page inside addEventListener before calling showPage()
a.addEventListener('click', (e) => {
  page = a.innerText;
  showPage(studentList, page);
/*6 + 7. Loop over pagination links to remove active class from all links
+ Add the active class to the link that was just clicked.*/
  const links = document.querySelectorAll('a');
  for  (let i = 0; i < links.length; i ++) {
    links[i].classList.remove('active');
    const selection = e.target;
      selection.classList.add('active');
  }
    });
  }
}
appendPageLinks();

//Concise comments provided,question(s) submitted with project; personal comment: worth all the hours of study.  Ready for U03!
