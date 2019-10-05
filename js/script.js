/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const studentList = document.querySelectorAll('.student-item');
const pageDisplay = 10;

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/
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


const li = document.getElementsByTagName('li');

/* 1. Determine how many pages are needed for the list by dividing the
total number of list items by the max number of items per page*/
for (let i = 0; i < li.length; i ++) {
  let page = (li[i] / Math.max(pageDisplay));

  for (let i = 0; i < page.length; i++) {
if (i <= page.length) {
  page[i].style.display = 'block';
} else {
  page[i].style.display = 'none';
}
console.log(page)[i];
  }

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
for (i = 0; i < li.length; i ++) {
page[i] += li.a;
page[i].textContent = page.number.parseInt();

/*5. Add an event listener to each a tag. When they are clicked
call the showPage function to display the appropriate page*/
li.addEventListener('click', getElementsByTagName('a')); {
for (i = 0; i < showPage.length; i++) {
  showPage(studentList, page[i]);
}
//6. Loop over pagination links to remove active class from all links
for  (i = 0; i < pagination.length; i ++) {
const pagination = document.getElementsByClassName('pagination');

if (i >= startIndex && i <= endIndex) {
  pagination[i].style.display = 'remove';
} else {
  pagination[i].style.display = 'add';
  }
  /*7. Add the active class to the link that was just clicked. You can identify that
  clicked link using event.target*/

}

}; // addEventListener bracket
} // for bracket

} // <---function bracket
}
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
