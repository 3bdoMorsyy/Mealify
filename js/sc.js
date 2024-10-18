document.getElementById("change-theme").onclick = function () {
  document.body.classList.toggle("dark-color");
  document.querySelector(".navbar").classList.toggle("black-navbar");
  document.querySelector(".fa-moon").classList.toggle("d-none");
  document.querySelector(".fa-sun-bright").classList.toggle("d-none");
};
document.querySelector(".fa-bars").onclick = function () {
  document.querySelector(".navbar .container ul").classList.toggle("clicked");
};

allLis = document.querySelectorAll(".navbar .links li a");
allLis.forEach(function (e) {
  e.onclick = function () {
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    e.classList.add("active");
  };
});

const sm_media = window.matchMedia("(max-width: 767px)");
if (sm_media.matches) {
  window.onscroll = function () {
    console.log(window.scrollY);
    if (window.scrollY > 0 && window.scrollY < 710) {
      allLis.forEach(function (ele) {
        ele.classList.remove("active");
      });
      allLis[0].classList.add("active");
    } else if (window.scrollY >= 710 && window.scrollY < 2700) {
      allLis.forEach(function (ele) {
        ele.classList.remove("active");
      });
      allLis[1].classList.add("active");
    } else if (window.scrollY >= 2700 && window.scrollY < 5450) {
      allLis.forEach(function (ele) {
        ele.classList.remove("active");
      });
      allLis[2].classList.add("active");
    } else if (window.scrollY >= 5450) {
      allLis.forEach(function (ele) {
        ele.classList.remove("active");
      });
      allLis[3].classList.add("active");
    }
  };
}
const md_media = window.matchMedia("(min-width: 768px)");
if (md_media.matches) {
  window.onscroll = function () {
    console.log(window.scrollY);
    if (window.scrollY > 0 && window.scrollY < 880) {
      allLis.forEach(function (ele) {
        ele.classList.remove("active");
      });
      allLis[0].classList.add("active");
    } else if (window.scrollY >= 880 && window.scrollY < 2220) {
      allLis.forEach(function (ele) {
        ele.classList.remove("active");
      });
      allLis[1].classList.add("active");
    } else if (window.scrollY >= 2220 && window.scrollY < 3690) {
      allLis.forEach(function (ele) {
        ele.classList.remove("active");
      });
      allLis[2].classList.add("active");
    } else if (window.scrollY >= 3690) {
      allLis.forEach(function (ele) {
        ele.classList.remove("active");
      });
      allLis[3].classList.add("active");
    }
  };
}

const x_lg_media = window.matchMedia("(min-width: 1200px)");
if (x_lg_media.matches) {
  window.onscroll = function () {
    console.log(window.scrollY);
    if (window.scrollY > 0 && window.scrollY < 643) {
      allLis.forEach(function (ele) {
        ele.classList.remove("active");
      });
      allLis[0].classList.add("active");
    } else if (window.scrollY > 643 && window.scrollY < 1440) {
      allLis.forEach(function (ele) {
        ele.classList.remove("active");
      });
      allLis[1].classList.add("active");
    } else if (window.scrollY >= 1440 && window.scrollY < 2616) {
      allLis.forEach(function (ele) {
        ele.classList.remove("active");
      });
      allLis[2].classList.add("active");
    } else if (window.scrollY >= 2616) {
      allLis.forEach(function (ele) {
        ele.classList.remove("active");
      });
      allLis[3].classList.add("active");
    }
  };
}
