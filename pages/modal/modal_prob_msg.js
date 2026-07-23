function openCloseModalProbabilityMsg(show) {

    const modal = document.getElementById("imodal_msg");
    const main = document.getElementsByTagName("main")[0];
    const header = document.getElementsByTagName("header")[0];
    const msgErrorText = document.querySelectorAll("section#imodal_msg p.error")[0];

    if (show) {
        //Displaying the modal
        modal.style.display = "block";
        
        //Visual affects on the background
        main.inert = true;
        header.inert = true;
        main.style.filter = "blur(3px)";
        header.style.filter = "blur(3px)";

        return
    }
    //Ommiting the modal
    modal.style.display = "none";
    
    //Taking out the visual affects over the background
    main.inert = false;
    header.inert = false;
    main.style.filter = "blur(0px)";
    header.style.filter = "blur(0px)";

    //Cleaning stuff inside the modal
    msgErrorText.innerText = "";
    const msg_cont = document.getElementById("idiv_with_prob");
    modal.removeChild(msg_cont);
}

//window.openCloseModalProbabilityMsg = openCloseModalProbabilityMsg;