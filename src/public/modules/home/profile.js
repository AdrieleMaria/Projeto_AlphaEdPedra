import { ProfileRender } from "./pages/ProfileRender.js";

function profile() {
    document.getElementById("appHome").innerHTML = ProfileRender();
    getUser();
}

async function getUser() {

    const token = localStorage.getItem("auth");

    try {
        const response = await fetch(`http://localhost:8082/profile`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Bearer ${token}` },
        });

        const data = await response.json();
        console.log(data.id);


    } catch (error) {
        console.log(error);
    }

}

window.profile = profile;
export { profile }