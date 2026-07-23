function openCloseModalProbabilityMember(show) {

    const modal = document.getElementById("imodal_member");
    const main = document.getElementsByTagName("main")[0];
    const header = document.getElementsByTagName("header")[0];
    const msgErrorText = document.getElementById("imember_prob_error");

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
    const msg_cont = document.getElementById("idiv_with_member_prob");
    if (msg_cont !== null) {
        modal.removeChild(msg_cont);
    }
}