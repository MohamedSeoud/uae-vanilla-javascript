document.addEventListener('DOMContentLoaded', () => {

const langEl = document.getElementById('navLanguage');
const link = document.querySelectorAll('.cool-lang');
const logo_text = document.querySelector('.logoText');
const login_text = document.querySelector('.loginText');
const loginTextPart = document.querySelector('.loginTextPart');
const homeText = document.querySelector('.homeText');
const aboutText = document.querySelector('.aboutText');
const informationText = document.querySelector('.informationText');
const galleryText = document.querySelector('.galleryText');
const aboutUsPart = document.querySelector('.aboutUsPart');



  langEl.addEventListener('change' , ()=>{

    const attribute = langEl.value;

    console.log('value',attribute)
    if(attribute === "arabic" ){
      document.dir="rtl"
    }
    else{
      document.dir="ltr"
    }

    logo_text.textContent = data[attribute].logoText;
    login_text.textContent = data[attribute].login;
    homeText.textContent = data[attribute].homeText;
    aboutText.textContent = data[attribute].aboutText;
    informationText.textContent = data[attribute].informationText;
    galleryText.textContent = data[attribute].galleryText;
    aboutUsPart.textContent = data[attribute].aboutUsPart;
    loginTextPart.textContent = data[attribute].login;

  })

var data = {
  "english" : {
    "logoText" : "International Corporate Consultancy",
    "login":"Login",
    "homeText":"Home",
    "aboutText":"About Us",
    "informationText":"Information",
    "galleryText":"Gallery",
    "aboutUsPart":"About Us   ?",

  },
  "arabic" : {
    "logoText" : "استشارات الشركات الدولية",
    "login":"تسجيل الدخول",
    "homeText":"الصفحة الرئسية",
    "aboutText":"معلومات عنا",
    "informationText":"بيانات",
    "galleryText":"المعرض",
    "aboutUsPart":"معلومات عنا   ؟",

  },

  "turkish" : {
    "logoText" :  "Uluslararası Kurumsal Danışmanlık",
    "login":"giriş yapmak",
    "homeText":"Ana sayfa",
    "aboutText":"Hakkımızda",
    "informationText":"Bilgi",
    "galleryText":"Galeri",
    "aboutUsPart":"Hakkımızda   ?",

  },


}
});