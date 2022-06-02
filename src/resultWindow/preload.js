const { webContents } = require("electron");
const ipcRenderer = require("electron").ipcRenderer;

window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const dependency of ["chrome", "node", "electron"]) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }
});


ipcRenderer.on("fetchingDataFromMain", function (event, store) {

  let surnameElement = document.querySelector("#surnameResult");
  surnameElement.innerText = store.surname;

  let nameElement = document.querySelector("#nameResult");
  nameElement.innerText = store.name;

  let lastnameElement = document.querySelector("#lastnameResult");
  lastnameElement.innerText = store.lastname;
  
  let homeAdressElement = document.querySelector("#homeAdressResult");
  homeAdressElement.innerText = store.homeAdress;
  
  let moneyElement = document.querySelector("#money");
  console.log(store.strUser)
  if (store.strUser == 'yes')  {
    moneyElement.innerText = 'в субсидии отказано'
  } else {
    moneyElement.innerText = 'cубсидия одобрена'
  }
});
