window.onscroll = function() {
    var scrollDistance = window.scrollY;

    for(paragraph of document.getElementsByClassName("paragraph")){
        if(paragraph.offsetTop <= Math.ceil(scrollDistance)){
            const menuItems = document.getElementsByClassName('menu-item');
            for(menuItem of menuItems) {
                menuItem.classList.remove("active");
                const href = menuItem.getAttribute("href");
                if(href.slice(1,href.length)===paragraph.id){
                    menuItem.classList.add('active');
                }
            }          
        }
    }
};

function onSendClick(){
    document.getElementById("contactForm").classList.add("visible");
    document.getElementById("contactQuestion").classList.add("hidden");
}