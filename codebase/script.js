  const titre = document.getElementById("titre-anime");
  const texte = "Bienvenue sur Saveurs et Recettes";
  let index = 0;
  let efface = false;

  function animation(){
    if (!effacer && index <= texte.length){
      titre.textContent = texte.slice(0,index ++);
    } else if (effacer && index >= 0){ 
      titre.textContent = texte.slice(0,index--);
    }
    if( index === texte.length){
      effacer = true;
      setTimeout(animerTexte,2000);
      return;
    }

      if (index < 0){
        effacer = false; 
    }

    setTimeout(animerTexte,100);
  }

  animerTexte();

