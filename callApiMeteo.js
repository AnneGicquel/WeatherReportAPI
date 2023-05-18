// FETCH DATA FROM API
function getValue() {

    // Sélectionner l'élément input et récupérer sa valeur
    let inputByUser = document.querySelector('#inputByUser').value;
    // vérif.
    console.log(inputByUser)
    // je récupère dynamiquement les datas venants de l'API avec `et $ ` 
    const urlToFetch = `https://www.prevision-meteo.ch/services/json/${inputByUser}`;
    fetch(urlToFetch)
      .then((response) => response.json())
      .then((data) => {
        const { city_info, current_condition } = data;
        console.log("mes 2 variables", city_info, current_condition);
        cityName.textContent = city_info.name;
        icon.src = current_condition.icon;
        temperature.textContent = current_condition.tmp + "°c";
      });
  
  }
  
  // GET BY ID
  const cityName = document.getElementById("cityName");
  const icon = document.getElementById("img");
  const temperature = document.getElementById("tmp");
  
  
  