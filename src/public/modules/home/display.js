import { displayRender } from "./pages/displayRender.js";
import { modalDisplay } from "./pages/modalDisplay.js"

async function getDisplayModal(_id, _func) {

    const token = localStorage.getItem("auth");

    try {
        //const response = await fetch(`https://108.61.89.179:443/getpedra/${_id}`, {
        const response = await fetch(`https://alphaedpedra.ddns.net/getpedra/${_id}`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.err);

        console.log("data do getDisplayModal", data.data);
        document.getElementById("appHome").innerHTML += _func(data.data[0]);
        const modal = document.querySelector(`.modal`);
        modal.style.display = "block";

        return true;

    } catch (error) {

        console.log(error);

    }
}

function displayModal(_id, _name, _description, _img) {

    console.log("modalpedra", _id,);
    getDisplayModal(_id, modalDisplay);

}

async function displayReq() {

    const token = localStorage.getItem("auth");

    try {
        //const response = await fetch(`https://108.61.89.179:443/listpedra`, {
        const response = await fetch(`https://alphaedpedra.ddns.net/listpedra`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Basic ${token}` },
        });

        const data = await response.json();

        if (!response.ok) throw new Error(data.err);

        console.log(data);
        //retornando o objeto >>>>>>>> OK!!!!!
        const display = document.getElementById("display_box");
        display.innerHTML = "";

        data.data.forEach(element => {
            // listIcon

            if(element.validated === true){
                display.style.display="flex";

                display.innerHTML += `
                <button class="stone" onclick="displayModal('${element.id}','${element.name}','${element.description}','${element.img_url}')">
                    <img width="100%" height="100%" src="${element.img_url}"  />
                </button>             
                `;
            }

        });


    } catch (error) {

        console.log(error);

    }

}

function display() {
    document.getElementById("appHome").innerHTML = ``;
    document.getElementById("appHome").innerHTML = displayRender();
    displayReq();
    console.log("display");

}

window.displayModal = displayModal;
window.display = display;
export { display }


