// 
const menus = document.querySelector('#menus');
const sidebar = document.querySelector('#sibebar');
const icon1 = document.querySelector('.fa-xmark');
const icon2 = document.querySelector('.fa-bars');

menus.addEventListener('click', function (){
   
    
   sidebar.classList.toggle('active') 

   if(sidebar.classList.contains('active')){
        icon1.setAttribute('data-visible', true)
        icon2.setAttribute('data-visible', false)
   }else{
      icon1.setAttribute('data-visible', false)
       icon2.setAttribute('data-visible', true)
   }
})

// icon1.setAttribute('data-visible', true)
//    icon2.setAttribute('data-visible', false)