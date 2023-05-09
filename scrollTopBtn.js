let ScrollToTopBtn = document.getElementById("scrollToTopBtn")
let rootElement = document.documentElement;

function scrollToTop() {
    rootElement.scrollTop({
        top: 0,
        behavior: "smooth"
    });
}

scrollToTopBtn.addEventListener("click", scrollToTop)