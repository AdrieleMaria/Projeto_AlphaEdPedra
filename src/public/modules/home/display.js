import { displayRender } from "./pages/displayRender.js";

async function displayReq() {

    const token = localStorage.getItem("auth");

    try {
        const response = await fetch(`http://localhost:8082/listpedra`, {
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
                <button class="stone">
                    <img width="100%" height="100%" src="${element.img_url}" />
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



window.display = display;
export { display }


