import style from "../css/style.module.css";

const app = document.createElement("div");
console.log(style.app);
app.className = `${style.app}`;
app.textContent = "Hello from Webpack";

document.body.appendChild(app);

//=========================================================================================
//=========================================================================================
