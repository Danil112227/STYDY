const electron = require("electron");
const { contextBridge, ipcRenderer } = electron;


window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const dependency of ["chrome", "node", "electron"]) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }

  const form = document.querySelector('#form')
        form.addEventListener('submit', (event) =>{
            event.preventDefault()
            openWindow()
        })
});

function openWindow() {
  const name = document.querySelector("#name").value;
  const lastname = document.querySelector("#lastname").value;
  const homeAdress = document.querySelector("#homeAdress").value;
	const surname = document.querySelector("#surname").value;

  let e = document.getElementById("select");
  let strUser = e.options[e.selectedIndex].value;

	ipcRenderer.send("asynchronous-message", { surname, lastname, name, homeAdress, strUser });
}

contextBridge.exposeInMainWorld("myAPI", {
  openWindow,
});
