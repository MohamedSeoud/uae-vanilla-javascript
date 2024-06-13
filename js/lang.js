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
const InformationTitle = document.querySelector('.InformationTitle');
const GalleryTitle = document.querySelector('.GalleryTitle');
const contactUsLang = document.querySelector('.contactUsLang');
const ContactUsTitle = document.querySelector('.ContactUsTitle');
const nameText = document.querySelector('.nameText');
const emailText = document.querySelector('.emailText');
const messageText = document.querySelector('.messageText');
const submitText = document.querySelector('.submitText');
const subGalleryText = document.querySelector('.subGalleryText');
const copyText = document.querySelector('.copyText');
const unitedText = document.querySelector('.unitedText');
const arabText = document.querySelector('.arabText');
const emairatesText = document.querySelector('.emairatesText');
const fiftyText = document.querySelector('.fiftyText');
const allText = document.querySelector('.allText');

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
    InformationTitle.textContent = data[attribute].informationText;
    GalleryTitle.textContent = data[attribute].galleryText;
    contactUsLang.textContent = data[attribute].contactUsLang;
    ContactUsTitle.textContent = data[attribute].contactUsLang;
    nameText.textContent = data[attribute].nameText;
    emailText.textContent = data[attribute].emailText;
    messageText.textContent = data[attribute].messageText;
    submitText.textContent = data[attribute].submitText;
    subGalleryText.textContent = data[attribute].subGalleryText;
    copyText.textContent = data[attribute].copyText;
    unitedText.textContent = data[attribute].unitedText;
    arabText.textContent = data[attribute].arabText;
    emairatesText.textContent = data[attribute].emairatesText;
    fiftyText.textContent = data[attribute].fiftyText;
    allText.textContent = data[attribute].allText;

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
    "contactUsLang":"Contact us",
    "nameText":" Name",
    "emailText":" Email",
    "messageText":" Message",
    "submitText":"Send Message",
    "subGalleryText":"The most prominent pictures of the celebration of the fiftieth year of the United Arab Emirates",
    "copyText":"© Copyright 2022 All Rights Reserved",
    "unitedText":"United ",
    "arabText":"Arab ",
    "emairatesText":"Emirates ",
    "fiftyText":"50 years of prosperity and progress",
    "allText":"All",

    
  },
  "arabic" : {
    "logoText" : "استشارات الشركات الدولية",
    "login":"تسجيل الدخول",
    "homeText":"الصفحة الرئسية",
    "aboutText":"معلومات عنا",
    "informationText":"بيانات",
    "galleryText":"المعرض",
    "aboutUsPart":"معلومات عنا   ؟",
    "contactUsLang":"تواصل معانا",
    "nameText":" الاسم كامل",
    "emailText":" البريد الالكتروني",
    "messageText":" الرسالة",
    "submitText":"ارسال الرسالة",
    "subGalleryText":"أبرز صور الاحتفال بالعام الخمسين لدولة الإمارات العربية المتحدة",
    "copyText":"© حقوق الطبع والنشر 2022 جميع الحقوق محفوظة",
    "unitedText":"الإمارات ",
    "arabText":"العربية ",
    "emairatesText":"المتحدة",
    "fiftyText":"50 عاماً من الازدهار والتقدم",
    "allText":"الجميع",



  },

  "turkish" : {
    "logoText" :  "Uluslararası Kurumsal Danışmanlık",
    "login":"giriş yapmak",
    "homeText":"Ana sayfa",
    "aboutText":"Hakkımızda",
    "informationText":"Bilgi",
    "galleryText":"Galeri",
    "aboutUsPart":"Hakkımızda   ?",
    "contactUsLang":"Bize Ulaşın",
    "nameText":" İsim",
    "emailText":" E-posta",
    "messageText":" İleti",
    "submitText":"Mesaj gönder",
    "subGalleryText":"Birleşik Arap Emirlikleri'nin ellinci yıl kutlamalarının en öne çıkan resimleri",
    "copyText":"© Copyright 2022 Tüm Hakları Saklıdır",
    "unitedText":"Birleşik ",
    "arabText":"Arap ",
    "emairatesText":"Emirlikleri ",
    "fiftyText":"50 yıllık refah ve ilerleme",
    "allText":"Tüm",

  },


}
});




document.addEventListener('DOMContentLoaded', () => {

  const langEl = document.getElementById('langs');
  const link = document.querySelectorAll('.cool-lang');
  const logo_text = document.querySelector('.logoText');
  const login_text = document.querySelector('.loginText');
  const loginTextPart = document.querySelector('.loginTextPart');
  const homeText = document.querySelector('.homeText');
  const aboutText = document.querySelector('.aboutText');
  const informationText = document.querySelector('.informationText');
  const galleryText = document.querySelector('.galleryText');
  const aboutUsPart = document.querySelector('.aboutUsPart');
  const InformationTitle = document.querySelector('.InformationTitle');
  const GalleryTitle = document.querySelector('.GalleryTitle');
  const contactUsLang = document.querySelector('.contactUsLang');
  const ContactUsTitle = document.querySelector('.ContactUsTitle');
  const nameText = document.querySelector('.nameText');
  const emailText = document.querySelector('.emailText');
  const messageText = document.querySelector('.messageText');
  const submitText = document.querySelector('.submitText');
  const subGalleryText = document.querySelector('.subGalleryText');
  const copyText = document.querySelector('.copyText');
  const unitedText = document.querySelector('.unitedText');
  const arabText = document.querySelector('.arabText');
  const emairatesText = document.querySelector('.emairatesText');
  const fiftyText = document.querySelector('.fiftyText');
  const allText = document.querySelector('.allText');
  
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
      InformationTitle.textContent = data[attribute].informationText;
      GalleryTitle.textContent = data[attribute].galleryText;
      contactUsLang.textContent = data[attribute].contactUsLang;
      ContactUsTitle.textContent = data[attribute].contactUsLang;
      nameText.textContent = data[attribute].nameText;
      emailText.textContent = data[attribute].emailText;
      messageText.textContent = data[attribute].messageText;
      submitText.textContent = data[attribute].submitText;
      subGalleryText.textContent = data[attribute].subGalleryText;
      copyText.textContent = data[attribute].copyText;
      unitedText.textContent = data[attribute].unitedText;
      arabText.textContent = data[attribute].arabText;
      emairatesText.textContent = data[attribute].emairatesText;
      fiftyText.textContent = data[attribute].fiftyText;
      allText.textContent = data[attribute].allText;
  
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
      "contactUsLang":"Contact us",
      "nameText":" Name",
      "emailText":" Email",
      "messageText":" Message",
      "submitText":"Send Message",
      "subGalleryText":"The most prominent pictures of the celebration of the fiftieth year of the United Arab Emirates",
      "copyText":"© Copyright 2022 All Rights Reserved",
      "unitedText":"United ",
      "arabText":"Arab ",
      "emairatesText":"Emirates ",
      "fiftyText":"50 years of prosperity and progress",
      "allText":"All",
  
      
    },
    "arabic" : {
      "logoText" : "استشارات الشركات الدولية",
      "login":"تسجيل الدخول",
      "homeText":"الصفحة الرئسية",
      "aboutText":"معلومات عنا",
      "informationText":"بيانات",
      "galleryText":"المعرض",
      "aboutUsPart":"معلومات عنا   ؟",
      "contactUsLang":"تواصل معانا",
      "nameText":" الاسم كامل",
      "emailText":" البريد الالكتروني",
      "messageText":" الرسالة",
      "submitText":"ارسال الرسالة",
      "subGalleryText":"أبرز صور الاحتفال بالعام الخمسين لدولة الإمارات العربية المتحدة",
      "copyText":"© حقوق الطبع والنشر 2022 جميع الحقوق محفوظة",
      "unitedText":"الإمارات ",
      "arabText":"العربية ",
      "emairatesText":"المتحدة",
      "fiftyText":"50 عاماً من الازدهار والتقدم",
      "allText":"الجميع",
  
  
  
    },
  
    "turkish" : {
      "logoText" :  "Uluslararası Kurumsal Danışmanlık",
      "login":"giriş yapmak",
      "homeText":"Ana sayfa",
      "aboutText":"Hakkımızda",
      "informationText":"Bilgi",
      "galleryText":"Galeri",
      "aboutUsPart":"Hakkımızda   ?",
      "contactUsLang":"Bize Ulaşın",
      "nameText":" İsim",
      "emailText":" E-posta",
      "messageText":" İleti",
      "submitText":"Mesaj gönder",
      "subGalleryText":"Birleşik Arap Emirlikleri'nin ellinci yıl kutlamalarının en öne çıkan resimleri",
      "copyText":"© Copyright 2022 Tüm Hakları Saklıdır",
      "unitedText":"Birleşik ",
      "arabText":"Arap ",
      "emairatesText":"Emirlikleri ",
      "fiftyText":"50 yıllık refah ve ilerleme",
      "allText":"Tüm",
  
    },
  
  
  }
  });
  
  
  