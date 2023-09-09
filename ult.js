"use strict" //tramite questo si informa il browser che si vogliono usare costrutti javascript più attuali

function setInnerMenuBarVisibility() 
{
    let innerMenuBarContainer = document.getElementById("innerMenuBarContainer");
    //let inizializza una variabile nel javascript moderno, prima si usava anche var

    if(innerMenuBarContainer.classList.contains("showInnerMenuBar"))
    {
        innerMenuBarContainer.classList.remove("showInnerMenuBar");
        innerMenuBarContainer.classList.add("hideInnerMenuBar");
       
    }
    else
    {
        innerMenuBarContainer.classList.remove("hideInnerMenuBar");
        innerMenuBarContainer.classList.add("showInnerMenuBar");
    }
}
 
function changeHamburgerIcon()
{
    let hamburgerContainer = document.getElementById("hamburgerContainer"); /*document
                                                                            sta per  la pagina web*/
    
    hamburgerContainer.classList.toggle("changeHamburgerIcon"); 
    /*toggle -> si vuole emulare il concetto di interruttore (on-off): è un'istruzione javascript applicata
    a una lista delle classi (in questo caso del div), quindi si attivano o disattivano le classi di cui si sta
    parlando, si associa o disassocia la classe changeHamburgerIcon */
}

function pageLoaded()
{
    changeHamburgerIcon();
}
window.onload = pageLoaded;

//Accordion
var acc = document.getElementsByClassName("Catalogo");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//catalogo generale
filtraSelezione("tutto")
function filtraSelezione(c) {
  var x, i;
  x = document.getElementsByClassName("card");
  if (c == "tutto") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("buttonContainer");
var btns = btnContainer.getElementsByClassName("bcatalogo");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/*catalogo Architettura
filterArchitettura("architettura")
function filterArchitettura(c) {
  var x, i;
  x = document.getElementsByClassName("card");
  if (c == "tutto") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}*/

