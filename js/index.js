// скролл
const elems = document.querySelectorAll('a[href^="#"]:not(a[href="#"]');
elems.forEach((el) => {
  el.addEventListener('click',(event) => {
    event.preventDefault()
    const id = el.getAttribute('href').substring(1)
   
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
    
  })
})

//конец скролл
//Галерея Swiper 
const swiper = new Swiper('.hero__slider', {  
 slidesPerView:1,
 slidesPerGroup:1,
 spaceBetween: 5, 
 grabCursor: true,
 keyboard: {
   enable: true,
   onlyInViewport: true,
   pageUpDown: true,
 },
//  autoplay: {
//    delay: 3000,
//    disableOnInteraction: false
//  }
})


const swiper1 = new Swiper('.gallery__slider', {
 
  navigation: {    
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  autoHeight: false,
  speed: 1000,
  slidesPerView: 1,
  slidesPerGroup: 1, 
  slidesPerColumn: 1,
  spaceBetween: 10,
  
  breakpoints: {     
    750: {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 34,
  slidesPerColumn: 2,
    },
     1920: {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  slidesPerColumn: 2,
    },
  }
  
})


const swiper2 = new Swiper('.editions__slider', {
  navigation: {    
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',    
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  autoHeight: false,
  slidesPerView: 2,
  slidesPerGroup: 2,
  slidesPerColumn: 3,
  spaceBetween: 10,   
  breakpoints: {     
    750: {  
  slidesPerView: 2,
  slidesPerGroup: 2,
  slidesPerColumn: 1,  
  spaceBetween: 34,  
    },
   1024: {
  slidesPerView: 2,
  slidesPerGroup: 2,
  slidesPerColumn: 1,  
  spaceBetween: 49,  
    },
     1920: {
  slidesPerView: 3,
  slidesPerGroup: 3,
  slidesPerColumn: 1,  
  spaceBetween: 49,  
    },
  }
 
})
const swiper5 = new Swiper('.events__slider', {
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,},
  autoHeight: false,
  slidesPerView: 1,
  
  }
 
)
const swiper3 = new Swiper('.projects__slider', {
  navigation: {    
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 slidesPerView:1,
 slidesPerGroup:1,
 spaceBetween: 50,
 breakpoints: {     
    750: {
  slidesPerView: 2,
  slidesPerGroup: 2,  
    },
     1920: {
  slidesPerView: 3,
  slidesPerGroup: 3,   
    },
  } 
})
// конец галлереи


//кастомный селект
const element = document.querySelector('.selectCustom')
  const choices = new Choices(element, {
    searchEnabled: false,
  })
// таб по флагу
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__flag').forEach(function(tabsLink) {    
    tabsLink.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__description').forEach(function(linkContent){        
        linkContent.classList.add('hide')
      })      
      document.querySelector(`[data-target="${path}"]`).classList.remove('hide')     
    })
  })
  //показ всех событий в секции events и скритие кнопки
  document.querySelector('.events__btn').addEventListener('click', function(event) {
      
      document.querySelectorAll('.events__event').forEach(function(linkContent){        
        linkContent.classList.remove('hide')

      })
      document.querySelector('.events__btn').classList.add('hide')
      document.querySelector('.events_3').style.display = 'block'     
          
    }) 
    let n = 0
  document.querySelector('.burger').addEventListener('click',function(event) {
     n=n+1    
    if (n % 2 > 0) 
    {document.querySelector('.header__mobil').style.display = 'block'}
    else {document.querySelector('.header__mobil').style.display = 'none'}    

  })
})
//маска и валидация формы
var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7(999)-999-99-99")
  im.mask(selector);
  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 20,
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
      
    },
    messages: {
      name: {
        minLength: 'Имя должно содержать более 1 символа',
        required: 'Поле обязательное для заполнения'
      },
      tel: {
        required: 'Поле обязательное для заполнения',
        function: 'В телефоне должно быть 10 цифр'
      },     
    },
  });
//показ художников по клику на имя (секция сatalog)
const catalogHandler = document.querySelectorAll('.catalog__flag')



 function bat() {
   const butHandler = document.querySelectorAll('div.catalog__description:not(.hide) .catalog__link__painter')
   const context = document.querySelectorAll('div.catalog__description:not(.hide)  .catalog__picture')
   console.log('hello')
   butHandler.forEach((but) => {
  but.addEventListener('click',(el) => {
    butHandler.forEach(item => {      
      if(but === item) {
        item.classList.add ('activ')
      } else {
        item.classList.remove ('activ')
      }
    })
    context.forEach(item => {
      if (item.dataset.target === but.dataset.path) {
        item.classList.remove('hide')
        console.log(item.dataset.target)
      } else {
        item.classList.add('hide')
      }
    })
  })
})}
bat()
catalogHandler.forEach((aaa) =>  {  
  aaa.addEventListener('click',() => {
    setTimeout(bat(),500)
  })})