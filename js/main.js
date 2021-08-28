
window.onscroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("header").classList.add("is__scroll");
        if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
            document.getElementById("header__search__id").style.opacity = 1;
            document.getElementById("categories__id").style.opacity = 1;
        }else{
            document.getElementById("header__search__id").style.opacity = 0;
            document.getElementById("categories__id").style.opacity = 0;
        }
    }else{
        document.getElementById("header").classList.remove("is__scroll");
    }
};