
// On the Mobile when click button mobile-menu, menu is showed !!! 
var menu = document.getElementById("menu");
var mobileMenu = document.getElementById("mobile-menu");
var menuHeight = menu.clientHeight;
mobileMenu.onclick = function(){
    var isClosed = menu.clientHeight ===menuHeight;
    if(isClosed){
        menu.style.height = "auto";
        menu.style.display='block';
        for(i=1;i<7;i++){
            var icon = document.getElementById('icon'+i);
            icon.classList.remove('ti-angle-down');
            icon.classList.add('ti-plus'); 
        }
    }else{
        menu.style.height = null;
        menu.style.display= 'none';
    }
    }
// changle icon by hand !!!





