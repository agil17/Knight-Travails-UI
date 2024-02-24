import "./styles/normalize.css";
import "./styles/style.css";
import { buildGameBoard } from "./modules/domManipulation";
import { addEventHandlerToForm, setResetBtnEvent } from "./modules/eventHandlers";

buildGameBoard();
addEventHandlerToForm();
setResetBtnEvent();
