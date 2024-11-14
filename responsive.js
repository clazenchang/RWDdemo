
document.querySelector(".phone_menu_tg").addEventListener('click', (e) => {
    e.preventDefault();
    const phoneMenuItems = document.querySelector(".phone_menu_items");
    phoneMenuItems.style.display = phoneMenuItems.style.display === 'block' ? 'none' : 'block'
})


let hamburgerTog = 1;
document.querySelector(".hamburger").addEventListener('click', () => {
    const phoneNav = document.querySelector(".phone_nav");
    //phone_menu_items
    if(hamburgerTog){
        phoneNav.classList.remove("d-none")     // remove the inline style
    }else{
        phoneNav.classList.add("d-none")
    }
    hamburgerTog = !hamburgerTog
    // console.log("hello")
})
