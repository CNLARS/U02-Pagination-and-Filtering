/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

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

    li.innerText = i;
    li.appendChild(a);
    ul.appendChild(li);
  }

/*5. Add an event listener to each a tag. When they are clicked
call the showPage function to display the appropriate page*/

for (i = 1; i < divPagination.length; i ++ ) {

a.addEventListener('click', event);
showPage(studentList, li[i]); //# is placeholder
 // addEventListener bracket


} //for loop bracket
//Draft line


for (i = 0; i < page.length; i++) {
  page[i].style.display = 'block';
}

if (i > page.length) {
  page[i].style.display = 'none';
}
//6. Loop over pagination links to remove active class from all links
for  (i = 0; i < divPagination.length; i ++) {
const pagination = document.getElementsByClassName('pagination');
  pagination[i].classList.remove('active');

  /*7. Add the active class to the link that was just clicked. You can identify that
  clicked link using event.target*/
const eventTarget = event.target;
a.eventTarget.classList.add('active');
}




} // <---function 2 bracket

appendPageLinks();

  //<!-- pagination HTML VISUAL EXAMPLE -->
  // <div class="pagination">
  //   <ul>
  //     <li>
  //       <a class="active" href="#">1</a>
  //     </li>
  //      <li>
  //       <a href="#">2</a>
  //     </li>
  //      <li>
  //       <a href="#">3</a>
  //     </li>
  //      <li>
  //       <a href="#">4</a>
  //     </li>
  //      <li>
  //       <a href="#">5</a>
  //     </li>
  //   </ul>
  // </div>
  //<!-- end pagination -->

// Remember to delete the comments that came with this file, and replace them with your own code comments.
