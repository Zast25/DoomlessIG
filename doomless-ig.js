
HideElements()

const observer = new MutationObserver(HideElements);
observer.observe(document.body, { childList: true, subtree: true });

function HideElements(){
    document.querySelector('[href="/explore/"]').style.display = "none"
    document.querySelector('[href="/reels/"]').style.display = "none"

    //Deletes all <article>'s if we are at the homepage. 
    if (window.location.pathname == "/") {
        let articles = document.querySelectorAll('article');
     for (i = 0; i < articles.length; i++) {
             articles[i].style.display = "none" } }
}

