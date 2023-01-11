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
  const footerParagraph$$ = document.createElement("p");
  const footerParagraph2$$ = document.createElement("p");
  const footerBasesLink$$$ = document.createElement("a");

  footerParagraph$$.textContent = "2016-2021 Siroko Solutions S.L";
  footerParagraph2$$.textContent = "Todos los derechos reservados. ";
  footerBasesLink$$$.textContent = "Ver bases";

  footerParagraph2$$.appendChild(footerBasesLink$$$);
  footer$$.appendChild(footerParagraph$$);
  footer$$.appendChild(footerParagraph2$$);
  document.body.appendChild(footer$$);
};

let codeGenerator = {};

const pass1 = () => {
    const div$$ = document.createElement("div");
  const paragraphIntro$$ = document.createElement("p");
  const h1$$ = document.createElement("h1");
  const h2$$ = document.createElement("h2");

  paragraphIntro$$.textContent = "paso 1 de 2";
  h1$$.textContent = "¡VAMOS ALLÁ!";
  h2$$.classList.add("main--paragraph");
  h2$$.textContent =
    "Has llegado hasta el test de Siroko. Responde las sigueinte preguntas y genera tu código premiado a medida";

  div$$.appendChild(paragraphIntro$$);
  div$$.appendChild(h1$$);
  div$$.appendChild(h2$$);

  const dates = ["2016", "2017", "2018", "2019", "2020", "2021"];

  const wrapper$$ = document.createElement("div");
  const p$$ = document.createElement("p");
  const button$$ = document.createElement("button");
  const buttonText$$ = document.createElement("p");
  const arrowDiv$$ = document.createElement("div");
  const arrow$$ = document.createElement("img");

  wrapper$$.classList.add("form--wrapper");
  p$$.classList.add("form--title");
  p$$.textContent = "Uso Siroko desde ...";
  button$$.classList.add("form--button");
  buttonText$$.textContent = "Siguiente";
  arrowDiv$$.classList.add("form--button__arrow-div");
  arrow$$.classList.add("form--button__arrow-img");

  const datesList$$ = document.createElement("form");
  const fieldset$$ = document.createElement("fieldset");

  datesList$$.appendChild(fieldset$$);

  datesList$$.classList.add("form--list");
  //   datesList$$.classList.add("dates-list");
  for (let i = 0; i < dates.length; i++) {
    // const element = dates[i];
    const input$$ = document.createElement("input");
    const label$$ = document.createElement("label");
    // const defaultValue$$ = dates[0];

    // defaultValue$$.checked = true;

    input$$.classList.add("form--input");
    input$$.setAttribute("type", "radio");
    input$$.setAttribute("name", "option");
    input$$.value = dates[i];
    label$$.setAttribute("for", dates[i]);
    label$$.textContent = dates[i];

    label$$.appendChild(input$$);
    fieldset$$.appendChild(label$$);
  }

  wrapper$$.appendChild(p$$);
  wrapper$$.appendChild(datesList$$);
  arrowDiv$$.appendChild(arrow$$);
  button$$.appendChild(buttonText$$);
  button$$.appendChild(arrowDiv$$);
  wrapper$$.appendChild(button$$);
  div$$.appendChild(wrapper$$);
  main$$.appendChild(div$$)

  const checkInputs$$ = document.querySelectorAll("input");
  button$$.addEventListener("click", () => {
    for (const checkInput of checkInputs$$) {
      if (checkInput.checked == true) {
        codeGenerator.stepOne = checkInput.value;
      }
    }
    main$$.removeChild(div$$)
    pass2()

  });
};
const pass2 = () => {
  const paragraphIntro$$ = document.createElement("p");
  const h1$$ = document.createElement("h1");
  const h2$$ = document.createElement("h2");

  paragraphIntro$$.textContent = "paso 1 de 2";
  h1$$.textContent = "¡VAMOS HOSTIA!";
  h2$$.classList.add("main--paragraph");
  h2$$.textContent =
    "Has llegado hasta el test de Siroko. Responde las sigueinte preguntas y genera tu código premiado a medida";

  main$$.appendChild(paragraphIntro$$);
  main$$.appendChild(h1$$);
  main$$.appendChild(h2$$);

  const dates = ["2016", "2017", "2018", "2019", "2020", "2021"];

  const wrapper$$ = document.createElement("div");
  const p$$ = document.createElement("p");
  const button$$ = document.createElement("button");
  const buttonText$$ = document.createElement("p");
  const arrowDiv$$ = document.createElement("div");
  const arrow$$ = document.createElement("img");

  wrapper$$.classList.add("form--wrapper");
  p$$.classList.add("form--title");
  p$$.textContent = "Uso Siroko desde ...";
  button$$.classList.add("form--button");
  buttonText$$.textContent = "Siguiente";
  arrowDiv$$.classList.add("form--button__arrow-div");
  arrow$$.classList.add("form--button__arrow-img");

  const datesList$$ = document.createElement("form");
  const fieldset$$ = document.createElement("fieldset");

  datesList$$.appendChild(fieldset$$);

  datesList$$.classList.add("form--list");
  //   datesList$$.classList.add("dates-list");
  for (let i = 0; i < dates.length; i++) {
    // const element = dates[i];
    const input$$ = document.createElement("input");
    const label$$ = document.createElement("label");
    // const defaultValue$$ = dates[0];

    // defaultValue$$.checked = true;

    input$$.classList.add("form--input");
    input$$.setAttribute("type", "radio");
    input$$.setAttribute("name", "option");
    input$$.value = dates[i];
    label$$.setAttribute("for", dates[i]);
    label$$.textContent = dates[i];

    label$$.appendChild(input$$);
    fieldset$$.appendChild(label$$);
  }

  wrapper$$.appendChild(p$$);
  wrapper$$.appendChild(datesList$$);
  arrowDiv$$.appendChild(arrow$$);
  button$$.appendChild(buttonText$$);
  button$$.appendChild(arrowDiv$$);
  wrapper$$.appendChild(button$$);
  main$$.appendChild(wrapper$$);

  const checkInputs$$ = document.querySelectorAll("input");
  console.log(checkInputs$$);
  console.log(codeGenerator);
  button$$.addEventListener("click", () => {
    h1$$.textContent = "jjja";
    for (const checkInput of checkInputs$$) {
      if (checkInput.checked == true) {
        codeGenerator.stepOne = checkInput.value;
      }
    }
    console.log(codeGenerator);
  });
};

const init = () => {
  renderLogo();
  renderFooter();
  pass1();

};
window.onload = init;
