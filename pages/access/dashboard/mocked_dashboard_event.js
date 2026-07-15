import { mockedJson } from "./mocked.js";
import { generateDashbord } from "./generate_dashboard.js";

const mockButton = document.getElementById("imock-data");

mockButton.addEventListener("click", evt => {
    generateDashbord(mockedJson); //Generating dashboard with mocked data (The data didn't come from a server. It is just mocked)
});