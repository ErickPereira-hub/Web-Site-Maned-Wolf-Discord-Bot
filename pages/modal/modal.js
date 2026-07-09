import {infoJSON as JSON} from "../../src/info/infoJSON.js";

function openCloseModal(show, json_pos) {
    const modal = document.getElementById("imodal");
    const main = document.getElementsByTagName("main")[0];
    const header = document.getElementsByTagName("header")[0];
    if (show) {
        modal.style.display = "block";
        main.inert = true;
        main.style.filter = "blur(3px)";
        header.style.filter = "blur(3px)";
        const title = JSON[json_pos].title;
        const path = "../../src/imgs/examples/" + JSON[json_pos].img_name;
        console.log(title);
        console.log(path);
        return
    }
    modal.style.display = "none";
    main.inert = false;
    main.style.filter = "blur(0px)";
    header.style.filter = "blur(0px)";
}

window.openCloseModal = openCloseModal;