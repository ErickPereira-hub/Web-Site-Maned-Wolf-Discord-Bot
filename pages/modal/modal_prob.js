function openCloseModalProbability(show, type) {

    //Getting HTML nodes from the DOM
    const modal = document.getElementById(type === "message" ? "imodal_msg" : "imodal_member");
    const main = document.getElementsByTagName("main")[0];
    const header = document.getElementsByTagName("header")[0];
    const footer = document.getElementsByTagName("footer")[0];
    const msgErrorText = type === "message" ? document.querySelectorAll("section#imodal_msg p.error")[0] : document.getElementById("imember_prob_error");

    if (show) {
        //Displaying the modal
        modal.style.display = "block";
        
        //Visual affects on the background
        main.inert = true;
        header.inert = true;
        footer.inert = true;
        main.style.filter = "blur(3px)";
        header.style.filter = "blur(3px)";
        footer.style.filter = "blur(3px)";

        return
    }

    //Ommiting the modal
    modal.style.display = "none";

    //Taking out the visual affects over the background
    main.inert = false;
    header.inert = false;
    footer.inert = false;
    main.style.filter = "blur(0px)";
    header.style.filter = "blur(0px)";
    
    //Cleaning stuff inside the modal
    msgErrorText.innerText = "";
    const msg_cont = document.getElementById(type === "message" ? "idiv_with_prob" : "idiv_with_member_prob");
    if (msg_cont !== null) {
        modal.removeChild(msg_cont);
    }
}