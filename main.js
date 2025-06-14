// TYPING EFFECT
var typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Photo Editer", "Youtuber", "Web Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});
// ABOUT SECTION CLICK TAB LINKS
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// OPEN/CLOSE MENU
var sidemenu = document.getElementById("sideMenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
// FOR CONTACT FORM
const scriptURL =
  "https://script.google.com/macros/s/AKfycby0X2YqNPn-aUmi_Fftc5vBCXP3ZynnxItNDUbffKHZi71GXiOGPS7hQ5YOMEtj-Zbm/exec";
const form = document.forms["submit-to-google-sheet"];

const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
// 123

// 123



// DARK/LIGHT THEME
var icon = document.getElementById("iconbtn");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};

