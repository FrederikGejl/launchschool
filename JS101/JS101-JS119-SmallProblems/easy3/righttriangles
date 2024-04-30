/*
Instructions: Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars.
The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, 
and the other end at the upper-right.

Examples: triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

Input: positive integer

Output: n stars / should have one end at the lower-left of the triangle, 
and the other end at the upper-right.

Steps: 


*/

function triangle(integer) {
 let num = parseInt(integer)
 let stars = ""

for (let index = 0; index < num; index++) {
 stars += "*"
}

return stars
}



function triangle(n) {
    // Outer loop for each line of the triangle
    for (let line = 0; line < n; line++) {
        let result = "";
    
        // Inner loop for spaces
        for (let space = 0; space < n - line - 1; space++) {
            result += " "
        }

        // Inner loop for stars
        for (let star = 0; star <= line; star++) {
            result += "*"
        }

        // Log the result for the current line
        console.log(result);
    }
}

(triangle(9));


function triangle(n) {
    for (let line = 0; line < n; line++) {
        let result = "";
        for (let space = 0; space < n - line - 1; space++) {
            result += " "; // Add spaces
        }
        for (let star = 0; star <= line; star++) {
            result += "*"; // Add stars
        }
        console.log(result); // Output the line
    }
}





function triangle(height) {
  let spaces = height - 1;
  let stars = 1;
  while (height > 0) {
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}


triangle(9)


function realMadridChampionships() {
    const totalTitles = 14;
    console.log("Real Madrid Champions League Titles:");

    for (let title = 1; title <= totalTitles; title++) {
        let stars = "";
        for (let count = 1; count <= title; count++) {
            stars += "*";  // Each star represents a championship
        }
        console.log("Title " + title + ": " + stars);
    }
}

realMadridChampionships();
