let showOptsForSmallDevices = false;
const opts = document.getElementsByTagName("nav")[0];

function toggleMenu() {
    if (showOptsForSmallDevices) {
        opts.style.display = "none";
    } else {
        opts.style.display = "block";
    }
    showOptsForSmallDevices = !showOptsForSmallDevices;
}

function correctToggleBehavior() {
    if (window.innerWidth >= 720) {
        opts.style.display = "block";
        showOptsForSmallDevices = true;
    }
}