// ==================бургер====================
const windDark = document.querySelector('.windDark');
const hamburgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navigation');
const logo = document.querySelector('.header__logo');
const logoHamb = document.querySelector('.header__logo_hamb');
const navLinks = document.querySelectorAll('.nav-link');
//const closeArray = ['.navigation', '.hamburger'];
if(hamburgerMenu){
    
        hamburgerMenu.addEventListener("click", function(e){
            // чтоб странице нельзя было прокручивать при открытом бургере
            document.body.classList.toggle('_lock');
            hamburgerMenu.classList.toggle('_active');
            navMenu.classList.toggle('_active');
            logo.classList.toggle('_lock');
            logoHamb.classList.toggle('_active');
            windDark.classList.toggle('_active');
    });
};

navLinks.forEach((el) => el.addEventListener('click', closeMenu));
// ==windDark.addEventListener('click', closeMenu);
//closeArray.addEventListener('click', closeMenu);
function closeMenu(e) {
    if (e.target.classList.contains('nav-link')) {
    hamburgerMenu.classList.remove('_active');
    navMenu.classList.remove('_active');
    
    //closeArray.forEach(x => x.classList.remove('_active'));
    //не получилось чтоб закрывалось при клике везде
}
 };



//================= = MODAL = ===================
let pets = [
  {
    id:0,
    name: "Jennifer",
    img: "../../assets/images/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    id: 1,
    name: "Sophia",
    img: "../../assets/images/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    id: 2,
    name: "Woody",
    img: "../../assets/images/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"]
  },
  {
    id: 3,
    name: "Scarlett",
    img: "../../assets/images/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    id: 4,
    name: "Katrine",
    img: "../../assets/images/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    id:5,
    name: "Timmy",
    img: "../../assets/images/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"]
  },
  {
    id:6,
    name: "Freddie",
    img: "../../assets/images/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"]
  },
  {
    id:7,
    name: "Charly",
    img: "../../assets/images/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"]
  }
];
const body = document.querySelector('body');
const somePets = document.querySelectorAll('.pets__one'); //сами карточки
const modal = document.querySelector(".modal"); //модалка
const modalContent = document.querySelector(".popup__content");//наполнение модалки с Х
const overlay = document.querySelector(".overlay");//
const closeBtn =  document.querySelector(".popup__close");
const popupOnlyPets = document.querySelector(".popup__only_pets"); // карточка в модалке с животным

//открытие 
somePets.forEach(item=>item.addEventListener('click', openModal));
function openModal(){
  modal.classList.add('_open');
  overlay.classList.add('_open');
  body.classList.add('_open');
  closeBtn.classList.add('_open');
}

// закрытие
overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
function closeModal(e){

  if (e.target.classList.contains('overlay') || e.target.classList.contains('popup__close')) {
    modal.classList.remove('_open');
    overlay.classList.remove('_open');
    body.classList.remove('_open');
    location.reload();//перезагрузка страницы
}
}
//модалка

const createPopup = (id) => {
  let img = document.createElement('div');
      img.className = 'popup__img';
      img.innerHTML = `<img src=${pets[id].img}>`;
      modalContent.appendChild(img);

  let content = document.createElement('div');
    content.className = 'popup__only_pets';
    content.innerHTML = `
      <span class="pets_name_pop">${pets[id].name}</span>
      <span class="pets_type_pop">${pets[id].type} - ${pets[id].breed}</span>
      <span class="pets_description_pop">${pets[id].description}</span>
       <ul>
          <li><span class="pets_age_pop">Age:</b> ${pets[id].age}</span></li>
          <li><span class="pets_inoculations_pop">Inoculations:</b> ${pets[id].inoculations.join(', ')}</span></li>
          <li><span class="pets_diseases_pop">Diseases:</b> ${pets[id].diseases.join(', ')}</span></li>
          <li><span class="pets_parasites_pop">Parasites:</b> ${pets[id].parasites.join(', ')}</span></li>
      </ul>
  `;
  modalContent.appendChild(content);
 }
 document.addEventListener('click', (e) => {
  let targetCard = e.target.closest('.pets__one');
  if (targetCard) {
      createPopup(targetCard.id);
      openModal();
  }
  if (e.target === overlay)
    closeModal();
  if (e.target.closest('.popup__close'))
    closeModal();
});


// ============CARUSEL===============
// const left = document.querySelector('.button_arrow_left');
// const right = document.querySelector('.button_arrow_right');
// const carusel = document.querySelector('#carusel');

// let moveLeft = ()=>{
//   carusel.classList.add('.trans_left');
//   left.removeEventListener('click', moveLeft);
// }
// left.addEventListener('click', moveLeft);

// let moveRight = ()=>{
//   carusel.classList.add('.trans_right');
//   right.removeEventListener('click', moveRight);
// }
// right.addEventListener('click', moveRight);



