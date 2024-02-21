const defaultTheme = "light";

function getCurrentTheme() {
  return localStorage.getItem("theme") || defaultTheme;
}

function setTheme() {
  const currentTheme = getCurrentTheme();
  const body = document.body;
  const moonIcon = document.querySelector("#modeSwitcher .bi-moon");
  const sunIcon = document.querySelector("#modeSwitcher .bi-sun");

  body.classList.toggle("dark-theme", currentTheme === "dark");

  if (currentTheme === "dark") {
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline-block";
  } else {
    moonIcon.style.display = "inline-block";
    sunIcon.style.display = "none";
  }
}

function toggleTheme() {
  const currentTheme = getCurrentTheme();
  const body = document.body;
  const moonIcon = document.querySelector("#modeSwitcher .bi-moon");
  const sunIcon = document.querySelector("#modeSwitcher .bi-sun");

  const newTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", newTheme);

  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline-block";
  } else {
    moonIcon.style.display = "inline-block";
    sunIcon.style.display = "none";
  }
}

// Initial setup
setTheme();

// Assign the toggleTheme function to the click event of the element with id "modeSwitcher"
const modeSwitcher = document.getElementById("modeSwitcher");
modeSwitcher.addEventListener("click", toggleTheme);
