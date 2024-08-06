const { loadInfra3D } = require("./infra3dcomponent");

function component() {
    const element = document.createElement('div');
    const button = document.createElement('button');
    const br = document.createElement('br');
    button.innerHTML = 'Load infra3D!';
    element.appendChild(br);
    element.appendChild(button);
    button.onclick = e => {
      button.style.cursor = "wait"; 
      loadInfra3D().then(_=>{
        button.style.cursor = "default"; 
      }).catch(_=>{
        button.style.cursor = "default"; 
      });
    }
    return element;
  }
  
  document.body.appendChild(component());
  