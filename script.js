function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function triggerDownload() {
  const btn = document.getElementById("btn-downloadp");
  const loadingBar = document.getElementById("loading-bar");
  const content = document.getElementById("content");
  content.innerHTML = ""
  btn.classList.add("toLoadingBar");
  loadingBar.classList.add("isLoading");

  setTimeout(() => {
    loadingBar.classList.add("isLoading");
    setTimeout(() => {
      loadingBar.style.display = 'none';
      btn.innerHTML = 'Downloaded!';
      btn.classList.add("toButton");
      window.open('./assets/CV-Pranav-Raj.pdf');
    }, 1000)
  }, 300);
}