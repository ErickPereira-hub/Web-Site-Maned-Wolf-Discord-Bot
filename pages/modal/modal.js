import {infoJSON as JSON} from "../../src/info/infoJSON.js";

function openCloseModal(show, json_pos) {
    const modal = document.getElementById("imodal");
    const main = document.getElementsByTagName("main")[0];
    const header = document.getElementsByTagName("header")[0];
    if (show) {
        //Displaying the modal
        modal.style.display = "block";
        
        //Visual affects on the background
        main.inert = true;
        main.style.filter = "blur(3px)";
        header.style.filter = "blur(3px)";

        //Accessing the content that will be shown
        const title = JSON[json_pos].title;
        const extra = "( * ) Obs.: this is a print from a real discord server."

        //Getting the elements
        const title_place = document.createElement("h2");
        const img_div = document.createElement("div");
        const extraP = document.createElement("p");
        img_div.id = "iimg_modal";
        title_place.id = "ititle_modal";
        extraP.id = "iextra";

        //Editing the elements
        title_place.className = "title_in_modal";
        title_place.innerText = title;
        img_div.className = "img_in_modal";
        img_div.style.backgroundImage = `url('${JSON[json_pos].url}')`;
        extraP.style.padding = "20px";
        extraP.style.textAlign = "center";
        extraP.innerText = extra;

        //Placing the elements into the modal
        modal.append(title_place);
        modal.append(img_div);
        modal.append(extraP);
        return
    }
    //Ommiting the modal
    modal.style.display = "none";
    
    //Taking out the visual affects over the background
    main.inert = false;
    main.style.filter = "blur(0px)";
    header.style.filter = "blur(0px)";

    //Cleaning the modal
    modal.removeChild(document.getElementById("iimg_modal"));
    modal.removeChild(document.getElementById("ititle_modal"));
    modal.removeChild(document.getElementById("iextra"));
}

window.openCloseModal = openCloseModal;