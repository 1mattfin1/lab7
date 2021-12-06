let lastScrollTop = 0;

document.addEventListener("scroll", (event) => {
    const header = document.querySelector('header')
    const postition = window.pageYOffset || document.documentElement.scrollTop;
    
    if (postition > lastScrollTop){
        header.classList.add('header-scrolled')
    } else {
        header.classList.remove('header-scrolled')
    }
    lastScrollTop = postition <= 0 ? 0 : postition;
}, false)