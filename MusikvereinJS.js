//Aus und einblenden des Banners beim scrollen

window.onscroll = function () {
  scrollFunction();
  stickNavigation();
};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("banner").style.opacity = "0";
    document.getElementById("banner").style.visibility = "hidden";
  } else {
    document.getElementById("banner").style.opacity = "1";
    document.getElementById("banner").style.visibility = "visible";
  }
}

//Navigationsleist oben anpinnen und besser sichtbar machen

function stickNavigation() {
  var navigation = document.getElementsByClassName("navigation")[0];
  // Ersetzen Sie "20" durch die tatsächliche Höhe Ihres Banners, wenn bekannt
  if (window.scrollY > 60) {
    navigation.classList.add("sticky-nav");
    navigation.style.transform = "translateY(0%)";
  } else {
    navigation.classList.remove("sticky-nav");
    //navigation.style.transform = "translateY(-100%)";
  }
}

window.addEventListener("scroll", stickNavigation);

document
  .querySelector(".hamburger-container")
  .addEventListener("click", function () {
    // Toggle-Funktion für das Hamburger-Icon und das Menü
    var hamburger = this.querySelector(".hamburger");
    hamburger.classList.toggle("active"); // Wechselt die Klasse für die Transformation
    document.querySelector(".nav-menu").classList.toggle("show"); // Zeigt oder verbirgt das Menü
  });

// Funktion, um das Overlay mit dem vergrößerten Bild zu öffnen
function enlargeImage(src) {
  document.getElementById("largeImg").src = src;
  document.getElementById("imgOverlay").style.display = "flex";
}

// Funktion, um das Overlay zu schließen
function closeImage() {
  document.getElementById("imgOverlay").style.display = "none";
}

// Event-Listener für alle Bilder im #BilderBereich
document.querySelectorAll("#BilderBereich img").forEach((img) => {
  img.style.cursor = "pointer"; // Fügt einen Cursor hinzu, um anzudeuten, dass das Bild klickbar ist
  img.onclick = function () {
    enlargeImage(this.src); // Öffnet das Overlay mit dem Bild, auf das geklickt wurde
  };
});
