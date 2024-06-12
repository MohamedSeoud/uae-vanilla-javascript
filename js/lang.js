document.addEventListener('DOMContentLoaded', () => {

const langEl = document.querySelector('.small-lang');
const link = document.querySelectorAll('.cool-lang');
const logo_text = document.querySelector('.logoText');
const login_text = document.querySelector('.loginText');
const homeText = document.querySelector('.homeText');
const aboutText = document.querySelector('.aboutText');
const informationText = document.querySelector('.informationText');
const galleryText = document.querySelector('.galleryText');



link.forEach(element=>{
  element.addEventListener('click' , ()=>{
    langEl.querySelector('.activeLang').classList.remove('activeLang');
    element.classList.add('activeLang');
    const attribute = element.getAttribute('lang');
    if(attribute === "arabic" ){
      document.dir="rtl"
    }
    else{
      document.dir="ltr"

    }

    logo_text.textContent = data[attribute].logoText;
    login_text.textContent = data[attribute].login;
    homeText.textContent = data[attribute].homeText;
    aboutText.textContent = data[attribute].login;
    informationText.textContent = data[attribute].login;
    galleryText.textContent = data[attribute].login;



  })
});

var data = {
  "english" : {
    "logoText" : "International Corporate Consultancy",
    "login":"Login",
    "homeText":"Home",
    "aboutText":"About",
    "informationText":"Information",
    "galleryText":"Gallery",

  },
  "arabic" : {
    "logoText" : "استشارات الشركات الدولية",
    "login":"تسجيل الدخول",
    "homeText":"الصفحة الرئسية",
    "aboutText":"About",
    "informationText":"Information",
    "galleryText":"Gallery",
  },

  "turkish" : {
    "logoText" :  "Uluslararası Kurumsal Danışmanlık",
    "login":"giriş yapmak",
    "homeText":"Ana sayfa",
    "aboutText":"About",
    "informationText":"Information",
    "galleryText":"Gallery",
  },


}
});