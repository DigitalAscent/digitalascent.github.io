// Debug
const noLoading = 0;

if (window.location.href.indexOf("status=loaded") > -1) {
    document.getElementById("load-grandparent").style.display = "none";
    document.getElementById("main").style.visibility = "visible";
    document.getElementById("main").style.opacity = 1;
    document.body.style.backgroundColor = "white";
    document.getElementById("main").style.transitionDelay = "0.5s"
}

if (noLoading === 1) {
    document.getElementById("load-grandparent").style.display = "none";
    document.getElementById("main").style.visibility = "visible";
    document.getElementById("main").style.opacity = 1;
    document.body.style.backgroundColor = "white";
    document.getElementById("main").style.transitionDelay = "0.5s"
    // ---------------
} else {

    function handleOnLoad(x) {
        if (x === 0) {
            // pressed start button, now remove load screen

            document.getElementById("main").style.transitionDelay = "1s"
            document.getElementById("main").style.visibility = "visible";
            document.getElementById("main").style.opacity = 1;
            document.getElementById("load-parent").style.opacity = 0;
            document.getElementById("load-parent").style.display = "none";
        } else {
            document.getElementById("load-parent").style.opacity = 1;
            document.body.style.backgroundColor = "white";
        }

        document.getElementById("load-grandparent").style.opacity = x;
    }
    // -------------------------------------------------------------------------
    document.getElementById("load-grandparent").addEventListener("load", handleOnLoad(1))
    document.getElementById("load-button").addEventListener("click", () => { handleOnLoad(0) })


    //-----------------------------------------
    // ----------------------------------------
    let loadPercent = 0;

    function handleLoading() {
        if (loadPercent === 100) {
            clearInterval(intervaal)
            setTimeout(() => {
                document.getElementById("load-text").style.opacity = "0";
                setTimeout(() => {
                    document.getElementById("load-text").style.display = "none";
                    document.getElementById("load-button").style.opacity = 1;
                    document.getElementById("load-button").style.display = "block";
                    textScramble()
                }, 1000);


            }, 1000);

        } else {
            loadPercent++
            document.getElementById("load-text").innerHTML = loadPercent
        }
    }
    const intervaal = setInterval(handleLoading, 20);

    //-----------------------------------------

    function textScramble() {


        // The text to be loaded
        let text = "ENTER SITE";

        // An array of letters to choose from
        const letters = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

        // A variable to store the current index of the text
        let index = 0;

        ///----- 
        let x = 0
        // A variable to store the current loading text
        let loadingText = "";

        // A function to update the loading text
        function updateText() {
            // If the index is less than the length of the text
            if (index < text.length) {
                // Pick a random letter from the array
                let letter = letters[x];
                // Replace the current letter in the loading text with the letter
                loadingText = loadingText.slice(0, index) + letter + loadingText.slice(index + 1);
                // Display the loading text on the page
                document.getElementById("load-button").innerHTML = loadingText;
                //----- 
                x++
                // If the letter matches the correct letter in the text
                if (letter == text[index]) {
                    // Increment the index by one
                    index++;
                    // ------
                    x = 0
                }
            }
            // Otherwise, clear the interval and stop the loading
            else {
                clearInterval(interval);
            }
        }

        // Create a new interval that calls the updateText function every 100 milliseconds
        const interval = setInterval(updateText, 0.5);
    }

}

//-------------------
//-----------------
document.getElementById("nav-hover").addEventListener("mouseenter", () => {
    document.getElementById("s1").style.gridTemplateColumns = "1fr 3fr"
    document.getElementById("navigation").style.opacity = 1;
})

document.getElementById("s1-h1-container").addEventListener("mouseenter", () => {
    document.getElementById("s1").style.gridTemplateColumns = "0fr 1fr"
    document.getElementById("navigation").style.opacity = 0;
})

document.getElementById("nav-btn1").addEventListener("click", () => { handleNavClick(1) })
document.getElementById("nav-btn2").addEventListener("click", () => { handleNavClick(2) })
document.getElementById("nav-btn3").addEventListener("click", () => { handleNavClick(3) })

function handleNavClick(i) {
    document.body.style.transition = "all ease 1s"
    document.body.style.opacity = "0"
    if (i === 1) {
        setInterval(() => {
            window.location.href = "./games"
        }, 1000);

    } else if (i === 2) {
        setInterval(() => {
            window.location.href = "./credits"
        }, 1000);
    } else if (i == 3) {
        setInterval(() => {
            window.location.href = "./about"
        }, 1000);
    }


    document.body.style.backgroundColor = "black"
}
//--------
