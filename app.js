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

  footerParagraph$$.textContent = "2016-2021 Siroko Solutions S.L.";
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
  h2$$.classList.add("first--paragraph");
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
  arrow$$.src = "./assets/images/arrow-right-thin.png";
  arrow$$.alt = "arrow-right";

  const datesList$$ = document.createElement("form");
  const fieldset$$ = document.createElement("fieldset");

  datesList$$.appendChild(fieldset$$);
  datesList$$.classList.add("form--list");

  for (let i = 0; i < dates.length; i++) {
    const input$$ = document.createElement("input");
    const label$$ = document.createElement("label");

    input$$.classList.add("form--input");
    input$$.setAttribute("type", "radio");
    input$$.setAttribute("name", "option");
    input$$.value = dates[i];
    label$$.setAttribute("for", dates[i]);
    label$$.textContent = dates[i];

    if (i === 0) {
      input$$.checked = true;
    }

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
  main$$.appendChild(div$$);

  const checkInputs$$ = document.querySelectorAll("input");
  button$$.addEventListener("click", () => {
    for (const checkInput of checkInputs$$) {
      if (checkInput.checked == true) {
        codeGenerator.stepOne = checkInput.value;
      }
    }

    main$$.removeChild(div$$);
    pass2();
  });
};

const pass2 = () => {
  const div$$ = document.createElement("div");
  const paragraphIntro$$ = document.createElement("p");
  const h1$$ = document.createElement("h1");

  paragraphIntro$$.textContent = "paso 2 de 2";
  h1$$.textContent = "¡VAMOS, UNA MÁS!";

  div$$.appendChild(paragraphIntro$$);
  div$$.appendChild(h1$$);

  const alternatives = [
    "Segaría a navaja",
    "Rechazaría un cachopo",
    "Renunciaría a mis tierras",
    "Regalaría una ternera",
  ];

  const wrapper$$ = document.createElement("div");
  const p$$ = document.createElement("p");
  const button$$ = document.createElement("button");
  const buttonText$$ = document.createElement("p");
  const arrowDiv$$ = document.createElement("div");
  const arrow$$ = document.createElement("img");

  wrapper$$.classList.add("form--wrapper");
  p$$.classList.add("form--title");
  p$$.textContent = "por unas gafas siroko, yo...";
  button$$.classList.add("form--button");
  buttonText$$.textContent = "Siguiente";
  arrowDiv$$.classList.add("form--button__arrow-div");
  arrow$$.classList.add("form--button__arrow-img");
  arrow$$.src = "./assets/images/arrow-right-thin.png";
  arrow$$.alt = "arrow-right";

  const alternativesList$$ = document.createElement("form");
  const fieldset$$ = document.createElement("fieldset");
  alternativesList$$.classList.add("form--list");
  alternativesList$$.appendChild(fieldset$$);

  for (let i = 0; i < alternatives.length; i++) {
    const input$$ = document.createElement("input");
    const label$$ = document.createElement("label");

    input$$.classList.add("form--input");
    input$$.setAttribute("type", "radio");
    input$$.setAttribute("name", "option");
    input$$.value = alternatives[i];
    label$$.setAttribute("for", alternatives[i]);
    label$$.textContent = alternatives[i];

    if (i === 0) {
      input$$.checked = true;
    }

    label$$.appendChild(input$$);
    fieldset$$.appendChild(label$$);
  }

  wrapper$$.appendChild(p$$);
  wrapper$$.appendChild(alternativesList$$);
  arrowDiv$$.appendChild(arrow$$);
  button$$.appendChild(buttonText$$);
  button$$.appendChild(arrowDiv$$);
  wrapper$$.appendChild(button$$);
  div$$.appendChild(wrapper$$);
  main$$.appendChild(div$$);

  const checkInputs$$ = document.querySelectorAll("input");
  button$$.addEventListener("click", () => {
    for (const checkInput of checkInputs$$) {
      if (checkInput.checked == true) {
        codeGenerator.stepTwo = checkInput.value;
      }
    }

    main$$.removeChild(div$$);
    generateCode();
    pass2_2();
  });
};

const generateCode = () => {
  let firstSlice = codeGenerator.stepOne.slice(-2).split("");
  let first = firstSlice.reduce((a, b) => Number(a) + Number(b), 0);
  const regex = /[b-zB-Z0-9]/g;
  let second = codeGenerator.stepTwo.match(regex);
  second = second.join("").slice(-4).toUpperCase();

  let result = first + second;

  codeGenerator.finalResult = result;
};

const pass2_2 = () => {
  const div$$ = document.createElement("div");
  const h1$$ = document.createElement("h1");

  h1$$.textContent = "¡ENHORABUENA!";

  div$$.appendChild(h1$$);
  const wrapper$$ = document.createElement("div");
  const p$$ = document.createElement("p");
  const p2$$ = document.createElement("p");
  const button$$ = document.createElement("button");
  const buttonText$$ = document.createElement("a");
  const arrowDiv$$ = document.createElement("div");
  const arrow$$ = document.createElement("img");

  const codeDiv$$ = document.createElement("div");
  const codeText$$ = document.createElement("p");
  const copyButton$$ = document.createElement("button");

  const timerDiv$$ = document.createElement("div");
  const timer$$ = document.createElement("p");

  wrapper$$.classList.add("form--wrapper");
  p$$.classList.add("form--title");
  p$$.textContent = "Lo prometido es deuda";
  p2$$.textContent =
    "Introduce este código en tu próxima compra para conseguir tu premio. ¡Disponible durante 20 minutos!";
  codeDiv$$.classList.add("code--div");
  codeText$$.textContent = codeGenerator.finalResult;
  copyButton$$.textContent = "Copiar";
  timerDiv$$.classList.add("timer--div");
  timer$$.textContent = "20:00";
  button$$.classList.add("form--button");
  buttonText$$.textContent = "Ir a siroko.com";
  arrowDiv$$.classList.add("form--button__arrow-div");
  arrow$$.classList.add("form--button__arrow-img");
  arrow$$.src = "./assets/images/arrow-right-thin.png";
  arrow$$.alt = "arrow-right";

  copyButton$$.addEventListener("click", () => {
    navigator.clipboard.writeText(codeText$$.textContent);
  });

  wrapper$$.appendChild(p$$);
  codeDiv$$.appendChild(codeText$$);
  codeDiv$$.appendChild(copyButton$$);
  wrapper$$.appendChild(codeDiv$$);
  wrapper$$.appendChild(p2$$);
  arrowDiv$$.appendChild(arrow$$);
  timerDiv$$.appendChild(timer$$);
  wrapper$$.appendChild(timerDiv$$);
  button$$.appendChild(buttonText$$);
  button$$.appendChild(arrowDiv$$);
  wrapper$$.appendChild(button$$);
  div$$.appendChild(wrapper$$);
  main$$.appendChild(div$$);

  let minutes = 20;
  let seconds = 0;

  let interval = setInterval(function () {
    if (minutes > 0 && seconds === 0) {
      minutes -= 1;
      seconds = 59;
    } else if (minutes === 0 && seconds === 0) {

      clearInterval(interval);
      timer$$.textContent = "";

      const timerImg$$ = document.createElement("img");
      timerImg$$.src = "./assets/images/stopwatch-svgrepo-com.svg";
      timerImg$$.alt = "timer";
      timer$$.textContent = "Código caducado";
      timerDiv$$.appendChild(timerImg$$);

      const span$$ = document.createElement("span");
      timerDiv$$.appendChild(span$$);
      span$$.textContent = "Reiniciar";

      span$$.addEventListener("click", () => {
        main$$.removeChild(div$$);
        Object.keys(generateCode).forEach((element) => {
          delete generateCode[element];
        });
        pass1();
      });
    } else {
      seconds--;
    }

    if (minutes < 10) {
      timer$$.classList.add("red");
    }

    timer$$.textContent = `${minutes.toString().padStart(2, "00")}:${seconds
      .toString()
      .padStart(2, "00")}`;
  }, 1000);
};

const init = () => {
  renderLogo();
  renderFooter();
  pass1();
};
window.onload = init;
