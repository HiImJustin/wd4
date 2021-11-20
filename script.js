let button1 = document.getElementById("firstbutton")
let button2 = document.getElementById("secondbutton")
let button3 = document.getElementById("thirdbutton")
let button4 = document.getElementById("fourthbutton")

let page1 = document.getElementById("page1")
let page2 = document.getElementById("page2")
let page3 = document.getElementById("page3")
let page4 = document.getElementById("page4")

window.onload = function hidePagesLoad() {
    //Hides all but the first page on load
    page1.style.display = "block"
    page2.style.display = "none"
    page3.style.display = "none"
    page4.style.display = "none"
}

//Loops through the class="pages" and shows the page with
//the variable pageId
function showPage(pageId) {

    let pages = document.getElementsByClassName("pages")
    for (let page of pages) {
        page.style.display = "none"
    }

    // Show page with page id
    let pageToShow = document.getElementById(pageId)
    pageToShow.style.display = "block"
}

document.getElementById("toggle")
    .addEventListener("click", function() {
    if (page1.style.display == "block") {
            button1.style.backgroundColor = "red"
            button2.style.backgroundColor = "#212529"
            button3.style.backgroundColor = "#212529"
            button4.style.backgroundColor = "#212529"
        }
        if (page2.style.display == "block") {
            button2.style.backgroundColor = "red"
            button1.style.backgroundColor = "#212529"
            button3.style.backgroundColor = "#212529"
            button4.style.backgroundColor = "#212529"
        }
         if (page3.style.display == "block") {
            button3.style.backgroundColor = "red"
            button1.style.backgroundColor = "#212529"
            button2.style.backgroundColor = "#212529"
            button4.style.backgroundColor = "#212529"
        }
         if (page4.style.display == "block") {
            button4.style.backgroundColor = "red"
            button1.style.backgroundColor = "#212529"
            button2.style.backgroundColor = "#212529"
            button3.style.backgroundColor = "#212529"
        }
    })