let header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  window.scrollY > 100
    ? header.classList.add("active")
    : header.classList.remove("active");
});
// Explore Btn
let exploreBtn = document.querySelector(".main-text .btn");
let hadithSection = document.querySelector(".hadith");

exploreBtn.addEventListener("click", () => {
  hadithSection.scrollIntoView({
    behavior: "smooth",
  });
});
// hadith data

let hadithContainer = document.querySelector(".hadith-container");
let next = document.querySelector(".buttons .next");
let prev = document.querySelector(".buttons .prev");
let number = document.querySelector(".buttons .number");
let hadithIndex = 0;

hadithData();
function hadithData() {
  fetch("https://api.hadith.gading.dev/books/muslim?range=1-300")
    .then((res) => res.json())
    .then((data) => {
      let Hadiths = data.data.hadiths;
      changeHadith();
      next.addEventListener("click", () => {
        hadithIndex == 299 ? (hadithIndex = 0) : hadithIndex++;
        changeHadith();
      });
      prev.addEventListener("click", () => {
        hadithIndex == 0 ? (hadithIndex = 299) : hadithIndex--;
        changeHadith();
      });
      function changeHadith() {
        hadithContainer.innerText = Hadiths[hadithIndex].arab;
        number.innerText = `300 / ${hadithIndex + 1}`;
      }
    });
}
// fetch quram Data
let surahContainer = document.querySelector(".surah-container");
getQuranData();
function getQuranData() {
  // fetch('http://api.alquran.cloud/v1/meta')
  fetch("https://alquran.vip/APIs/surahs")
    .then((res) => res.json())
    .then((data) => {
      let suraes = data;
      let numberOfSurah = 114;
      for (let i = 0; i < numberOfSurah; i++) {
        surahContainer.innerHTML += `
            <div class="surah">
            <p>${suraes[i].name_ar}</p>
            <p>${suraes[i].name_en}</p>
            <span class="badge">(${suraes[i].type})</span>
            </div>
            `;
      }
      // ayat gat data
      let surahTitles = document.querySelectorAll(".surah-container .surah ");
      let popUp = document.querySelector(".surah-popup");
      let ayatContainer = document.querySelector(".surah-popup .ayat");

      surahTitles.forEach((title, index) => {
        title.addEventListener("click", () => {
          fetch(`https://api.alquran.cloud/v1/surah/${index + 1}`)
            .then((res) => res.json())
            .then((data) => {
              let ayatTitle = data.data.ayahs;
              ayatContainer.innerHTML = "";
              ayatTitle.forEach((aya) => {
                popUp.classList.add("active");
                ayatContainer.innerHTML += `
                        <p> ${aya.numberInSurah} - ${aya.text}</p>
                        `;
              });
            });
        });
      });
      let closeBtn = document.querySelector(".close-popup");
      closeBtn.addEventListener("click", () => {
        popUp.classList.remove("active");
      });
    });
}

// get data for pray time

let cards = document.querySelector(".cards");
getDataPrayTime();
function getDataPrayTime() {
  fetch(
    " http://api.aladhan.com/v1/timingsByCity?city=Dubai&country=United Arab Emirates&method=8"
  )
    .then((res) => res.json())
    .then((data) => {
      let timingsPray = data.data.timings;
      cards.innerHTML = "";
      for (let time in timingsPray) {
        cards.innerHTML += `
            <div class="card">
            <div class="circle">
              <svg>
                <circle cx="100" cy="100" r="100"></circle>
              </svg>
              <div class="pray-time">${timingsPray[time]}</div>
            </div>
            <p>${time}</p>
          </div>
            `;
      }
    });
}
//  "http://api.aladhan.com/v1/timingsByCity?city=mansoura&country=egypt&method=8" القديم
//  http://api.aladhan.com/v1/timingsByAddress?address=Regents Park Mosque, London, UK الجديد
// scroll bottom
let scrollBtn = document.querySelector(".scrollBottom");
window.addEventListener("scroll", () => {
  window.scrollY > 500
    ? scrollBtn.classList.add("active")
    : scrollBtn.classList.remove("active");
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// bars in responsive

let barsBtn = document.querySelector(".header .bars");
let navbar = document.querySelector(".navbar");

barsBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
