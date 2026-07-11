import { getTopChannels } from "./dashboard/top_channels.js";

export function generateDashbord(JSON) {
    
    console.log(JSON);
    const main = document.getElementsByTagName("main")[0]; //<--- Accessing the <main> of the webpage.
    
    const PALET = {
        "green" : "#679c67",
        "sblue" : "#708ad3",
        "wblue" : "#76c0b0",
        "pink" : "#9070da",
        "yellow" : "#96b85f"
    } //<--- Palet of colors that will be used in the dashboard

    getTopChannels(JSON, main, PALET); //<--- Call the part of the dashboard concerning the most active channels

}