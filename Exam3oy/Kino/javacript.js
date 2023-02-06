let elHammasi = document.querySelector(".hammasi");  
let elAction = document.querySelector(".action"); 
let elAdventure = document.querySelector(".adventure"); 
let elAnimation = document.querySelector(".animation");
let elComedy = document.querySelector(".comedy");
let elDocumentary = document.querySelector(".documentary");
let elList = document.querySelector(".list");
let elFantasy = document.querySelector(".fantasy");
let elScience = document.querySelector(".science");
let elThriller = document.querySelector(".thriller");
let elHorror = document.querySelector(".horror");
let elFamily = document.querySelector(".family");


elHammasi.addEventListener("click", function (evt) {
    evt.preventDefault();
    let result = menu.map(function (list) {
    return `<li> <img class="img" src = ${list.poster}> 
    <h4>${list.title}</h4>
    <p>${list.genres}</p></li>`;
    });
    result = result.join("");
    elList.innerHTML = result;
  });

  elAction.addEventListener("click", function (evt) {
    evt.preventDefault();
    let result = menu.map(function (list) {
    if (list.genres == "Action") {
    return `<li><img class="img" src = ${list.poster}> 
    <h4>${list.title}</h4>
    <p>${list.genres}</p></li>`;
    }
    });
    result = result.join("");
    elList.innerHTML = result;
  });

  elComedy.addEventListener("click", function (evt) {
    evt.preventDefault();
    let result = menu.map(function (list) {
    if (list.genres == "Comedy") {
    return `<li><img class="img"  src = ${list.poster}> 
    <h4>${list.title}</h4>
    <p>${list.genres}</p></li>`;
    }
    });
    result = result.join("");
    elList.innerHTML = result;
    renderTodos(menu);
  });
  elFantasy.addEventListener("click", function (evt) {
    evt.preventDefault();
    let result = menu.map(function (list) {
    if (list.genres == "Fantasy") {
    return `<li><img class="img"  src = ${list.poster}> 
    <h4> ${list.title}</42>
    <p>${list.genres}</p></li>`;
    }
    });
    result = result.join("");
    elList.innerHTML = result;
    renderTodos(menu);
  });

  elAdventure.addEventListener("click", function (evt) {
    evt.preventDefault();
    let result = menu.map(function (list) {
    if (list.genres == "Adventure") {
    return `<li><img class="img"  src = ${list.poster}> 
    <h4>${list.title}</h4>
    <p>${list.genres}</p></li>`;
    }
    });
    result = result.join("");
    elList.innerHTML = result;
    renderTodos(menu);
  });

  elScience.addEventListener("click", function (evt) {
    evt.preventDefault();
    let result = menu.map(function (list) {
    if (list.genres == "Science Fiction") {
    return `<li><img class="img"  src = ${list.poster}> 
    <h4>${list.title}</h4>
    <p>${list.genres}</p></li>`;
    }
    });
    result = result.join("");
    elList.innerHTML = result;
    renderTodos(menu);
  });

  elThriller.addEventListener("click", function (evt) {
    evt.preventDefault();
    let result = menu.map(function (list) {
    if (list.genres == "Thriller") {
    return `<li><img class="img"  src = ${list.poster}> 
    <h4>${list.title}</h4>
    <p>${list.genres}</p></li>`;
    }
    });
    result = result.join("");
    elList.innerHTML = result;
    renderTodos(menu);
  });

  elHorror.addEventListener("click", function (evt) {
    evt.preventDefault();
    let result = menu.map(function (list) {
    if (list.genres == "Horror") {
    return `<li><img class="img"  src = ${list.poster}> 
    <h4>${list.title}</h4>
    <p>${list.genres}</p></li>`;
    }
    });
    result = result.join("");
    elList.innerHTML = result;
    renderTodos(menu);
  });

  elAnimation.addEventListener("click", function (evt) {
    evt.preventDefault();
    let result = menu.map(function (list) {
    if (list.genres == "Animation") {
    return `<li><img class="img"  src = ${list.poster}> 
    <h4>${list.title}</h4>
    <p>${list.genres}</p></li>`;
    }
    });
    result = result.join("");
    elList.innerHTML = result;
    renderTodos(menu);
  });

  elFamily.addEventListener("click", function (evt) {
    evt.preventDefault();
    let result = menu.map(function (list) {
    if (list.genres == "Family") {
    return `<li><img class="img"  src = ${list.poster}> 
    <h4>${list.title}</h4>
    <p>${list.genres}</p></li>`;
    }
    });
    result = result.join("");
    elList.innerHTML = result;
    renderTodos(menu);
  });
  elDocumentary.addEventListener("click", function (evt) {
    evt.preventDefault();
    let result = menu.map(function (list) {
    if (list.genres == "Documentary") {
    return `<li><img class="img"  src = ${list.poster}> 
    <h4>${list.title}</h4>
    <p>${list.genres}</p></li>`;
      }
    });
    result = result.join("");
    elList.innerHTML = result;
    renderTodos(menu);
  });
