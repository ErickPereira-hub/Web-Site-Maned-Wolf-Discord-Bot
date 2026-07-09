import { infoJSON } from "../../src/info/infoJSON.js";

export default function injectJSON() {
    const mainHTML = document.getElementsByTagName("main")[0]
    for (let i = 0; i <= infoJSON.length; i++) {
        mainHTML.innerHTML += `
            <section class = "overall">
                <div class = "how_to_container">
                    <div class = "skull_logo"></div>
                    <div class = "how_to">
                        <h2 class = "edit_title">
                            ${infoJSON[i]["title"]}
                        </h2>
                    </div>
                </div>
                <p>
                    ${infoJSON[i]["command"]}: ${infoJSON[i]["desc"]}
                </p>
                <div onclick = "openCloseModal(true, ${i})" class = "access_but">
                    <p>EXAMPLE</p>
                    <div class = "arrow_logo">
                    </div>
                </div>
            </section>
        `
    }
}