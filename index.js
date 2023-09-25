
// --------------------------------------------
// Scroll section by section 

// -------------------------------------------
// Handle nav bar icon tap
let navIsOpen = 1;

document.getElementById("nav-button").addEventListener("click", () => handleClick())
document.getElementById("nav-back").addEventListener("click", () => { handleClick() })

function handleNav(navStatus) {
    if (navStatus === 0) {
        // if closed, open
        console.log("open")
        document.getElementById("nav").style.width = "500px";
        document.getElementById("nav-back").style.width = "100vw";

    } else if (navStatus === 1) {
        // if open, close
        console.log("close")
        document.getElementById("nav").style.width = 0
        document.getElementById("nav-back").style.width = 0;
    }
}
function handleClick () {
    if (navIsOpen === 0) {
        handleNav(1)
        navIsOpen = 1
    } else if (navIsOpen === 1) {
        handleNav(0)
        navIsOpen = 0
    }
}

//------------------------
