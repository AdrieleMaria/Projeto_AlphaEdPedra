import { ProfileRender } from "./pages/ProfileRender.js";

async function profile() {
    getUser();
    //document.getElementById("appHome").innerHTML = ProfileRender(data);
}

async function getUser() {

    const token = localStorage.getItem("auth");

    try {
        const response = await fetch(`http://localhost:8082/profile`, {
            method: "GET",
            headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": `Bearer ${token}` },
        });

        const data = await response.json();
 
        const render = await ProfileRender(data);
        document.getElementById("appHome").innerHTML = render;

        return true;

    } catch (error) {
        console.log(error);
    }


}

window.profile = profile;
export { profile }