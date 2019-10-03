/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.

   Pro Tip: Log out the variable storing the list to ensure it equals the list of li items and not the container of the li elements.
***/
const studentList = document.querySelectorAll('.student-item');
const pageDisplay = 10;



/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
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
const div = document.createElement('div');
const ul = document.getElementsByTagName('ul');
const li = document.getElementsByTagName('li');

div.className = 'pagination'
getElementsByClassName('.page').appendChild(div);
getElementsByClassName('pagination').appendChild(ul);
ul.appendChild(li); //or li[i];?

if (i = 0; i < list.length; i ++) {
  let page = (list[i] / Math.max(pageDisplay);
  for (let i = 0; i < page.length; i++) {

  }
}
for (i = 0; i < li.length; i ++) {
li.createElement('a');
 li.addEventListener('click',() => {


});
}


// if (){
//   showPage(studentList[i], )
// }

} // <---function bracket



/*
1. MAYBE? Determine how many pages are needed for the list by dividing the
total number of list items by the max number of items per page


2. DONE 67-68 Create a div, give it the “pagination” class, and append it to the .page div

3. DONE 69 Add a ul to the “pagination” div to store the pagination links

4. ??? for every page, add li and a tags with the page number text

5. Add an event listener to each a tag. When they are clicked
call the showPage function to display the appropriate page

6. Loop over pagination links to remove active class from all links

7. Add the active class to the link that was just clicked. You can identify that
clicked link using event.target
*/

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
