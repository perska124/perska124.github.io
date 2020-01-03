window.onscroll = function() {
    var scrollDistance = window.scrollY;

    for(paragraph of document.getElementsByTagName("p")){
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