const main$$ = document.querySelector("#container");

const renderLogo = () => {
  const divLogo$$ = document.createElement("div");
  const Logo$$ = document.createElement("img");

  divLogo$$.classList.add("logo-box");
  Logo$$.classList.add("logo-img");
  Logo$$.src = "./assets/images/SK Iso.png";

  divLogo$$.appendChild(Logo$$);
  main$$.appendChild(divLogo$$);
};



const init = () => {
  renderLogo();
  
};
window.onload = init;
