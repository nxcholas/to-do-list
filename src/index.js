import * as css from "./styles.css";
import {openModalBox , closeModalBox} from './modal.js';
import { renderSubmitTaskBtn } from "./modaltabs.js";
import { updateHTML, JSONstrtoTaskArray, updateProjectHTML} from "./getTask.js";
import { generateCalendar } from "./populateCalendar.js";


renderSubmitTaskBtn();
openModalBox();
closeModalBox();


document.addEventListener('DOMContentLoaded', function () {
    JSONstrtoTaskArray();
    updateHTML();
    updateProjectHTML();
    generateCalendar();
})