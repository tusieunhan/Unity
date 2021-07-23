
// Start Header
const header_browse = document.querySelector('.header-browse')
const box_browse = document.querySelector('.box-browse')
const icon_down_up = document.querySelector('.bx-chevron-down-fix')

const box_add = document.querySelector('.box-add');
const icon_add = document.querySelector('.bx-message-square-add')

const icon_bell = document.querySelector('.bx-bell')
const box_bell = document.querySelector('.box-bell')

const img_user = document.querySelector('.img-user')
const box_settings = document.querySelector('.box-settings')

header_browse.addEventListener("click", function(){ 
     box_browse.classList.toggle('btn-acticve')
     icon_down_up.classList.toggle('bx-chevron-down-fix')
});

icon_add.addEventListener("click", function(){ 
     box_add.classList.toggle('btn-acticve')
     icon_add.classList.toggle('active')
     document.querySelector('.box-bell.btn-acticve').classList.remove('btn-acticve')
});

icon_bell.addEventListener("click", function(){ 
     box_bell.classList.toggle('btn-acticve')
     icon_bell.classList.toggle('active')
     document.querySelector('.box-add.btn-acticve').classList.remove('btn-acticve')
});

img_user.addEventListener("click", function(){ 
     box_settings.classList.toggle('btn-acticve')
     document.querySelector('.box-bell.btn-acticve').classList.remove('btn-acticve')
});
// End Header

// Starts Slide

const slides = document.querySelector('.slide-list_img')
const slide = slides.querySelectorAll('li')

const btn_left = document.querySelector('.btn-slide-left')
const btn_right = document.querySelector('.btn-slide-right')

slide.forEach(function(s){
     s.addEventListener("click", function(){
        const slide_img =  s.querySelector('img')
        const slideActive =   slides.querySelector('.slide_img-item.slide_img-active')
        if( slideActive ){
          slideActive.classList.remove('slide_img-active')
        }
        slide_img.classList.add('slide_img-active')
        const num = slides.querySelector('.slide_img-item.slide_img-active').src;
        slide_show(num)
     })
})

function slide_show(index) {
          const Slide_img = document.querySelector('.slide-item')

          const img = index.indexOf("im");
          const img2 = index.slice(img,100)
          const img3 = `url(./${img2})`
          console.log(img3)
          Slide_img.style.backgroundImage = `${img3}`
          
}

// Sidebar 

const btn_menu = document.querySelector('.bx-menu')
const sidebar = document.querySelector('.sidebar')
const header_sidebar = document.querySelector('.header-sidebar')
const slide_item = document.querySelector('.slide-item')

// btn_menu.addEventListener("click", function(){ 
//      sidebar.classList.toggle("sidebar-active")
//      header_sidebar.classList.toggle("sidebar-active")
//      slide_item.style.with = 'calc(100%+ 159px)';

// });
