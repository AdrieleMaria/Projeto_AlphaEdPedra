import { exchangesRender } from "./pages/exchangesRender.js"


function exchanges() {


    console.log("TROCAS");
    document.getElementById("appHome").innerHTML = exchangesRender();


    // document.getElementById("new_stone").addEventListener("click", createStone);

}

window.exchanges = exchanges;
export { exchanges }