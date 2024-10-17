document.getElementById("change-theme").onclick = function () {
  document.body.classList.toggle("dark-color");
  document.querySelector(".navbar").classList.toggle("black-navbar");
  document.querySelector(".fa-moon").classList.toggle("d-none");
  document.querySelector(".fa-sun-bright").classList.toggle("d-none");
};
document.querySelector(".fa-bars").onclick = function () {
  document.querySelector(".navbar .container ul").classList.toggle("clicked");
};
