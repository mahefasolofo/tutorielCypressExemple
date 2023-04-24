 // Récupération des éléments HTML dans le DOM
 const btns = document.querySelectorAll(".choice_btn");

 // Événements de clic sur les boutons
 btns.forEach(function(btn) {
   btn.addEventListener("click", function() {
     // Désactive le bouton précédemment activé
     const activeBtn = document.querySelector(".choice_btn.active");
     if (activeBtn && activeBtn !== btn) {
       activeBtn.classList.remove("active");
     }

     // Toggle la classe "active" sur le bouton cliqué
     btn.classList.toggle("active");
   });
 });