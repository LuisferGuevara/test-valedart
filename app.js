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

const renderFooter = () => {
    const footer$$ = document.createElement("footer");
    const footerParagraph$$ =  document.createElement("p");
    const footerParagraph2$$ =  document.createElement("p");
    const footerBasesLink$$$ =  document.createElement("a");

    footerParagraph$$.textContent = "2016-2021 Siroko Solutions S.L";
    footerParagraph2$$.textContent = "Todos los derechos reservados. ";
    footerBasesLink$$$.textContent = "Ver bases";
  
    footerParagraph2$$.appendChild(footerBasesLink$$$);
    footer$$.appendChild(footerParagraph$$);
    footer$$.appendChild(footerParagraph2$$);
    document.body.appendChild(footer$$);
};

const init = () => {
  renderLogo();
  renderFooter();
};
window.onload = init;
