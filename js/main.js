
let NavbarToggle = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".sidebar");
    let getSidebarHeader = document.querySelector(".sidebar-header");


    if (NavbarToggle === false){

      
        NavbarToggle = true
    }

    else if (NavbarToggle === true){

        getSidebar.style.left = "-100%";
        NavbarToggle = false
    }

}