(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[391],{391:()=>{function e(){return localStorage.getItem("theme")||"light"}!function(){const t=e(),o=document.body,l=document.querySelector("#modeSwitcher .bi-moon"),n=document.querySelector("#modeSwitcher .bi-sun");o.classList.toggle("dark-theme","dark"===t),"dark"===t?(l.style.display="none",n.style.display="inline-block"):(l.style.display="inline-block",n.style.display="none")}(),document.getElementById("modeSwitcher").addEventListener("click",(function(){const t=e(),o=document.body,l=document.querySelector("#modeSwitcher .bi-moon"),n=document.querySelector("#modeSwitcher .bi-sun"),c="dark"===t?"light":"dark";localStorage.setItem("theme",c),o.classList.toggle("dark-theme"),o.classList.contains("dark-theme")?(l.style.display="none",n.style.display="inline-block"):(l.style.display="inline-block",n.style.display="none")}))}}]);