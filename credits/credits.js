document.getElementById("main").style.opacity = "1";


// ------------------------------
document.getElementById("main").style.backgroundColor = "white"

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
    document.getElementById("main").style.transition = "all ease 1s"
    document.getElementById("main").style.opacity = "0"
    if (i === 1) {
        setInterval(() => {
            window.location.href = "/?status=loaded"
        }, 1000);

    } else if (i === 2) {
        setInterval(() => {
            window.location.href = "../games"
        }, 1000);
    } else if (i == 3) {
        setInterval(() => {
            window.location.href = "../about"
        }, 1000);
    }


    document.body.style.backgroundColor = "black"
}
