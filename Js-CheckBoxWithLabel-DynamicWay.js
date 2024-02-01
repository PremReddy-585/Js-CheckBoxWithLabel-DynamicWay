let checkboxWithLabelContainerEl = document.getElementById("checkboxWithLabelContainer");
checkboxWithLabelContainerEl.classList.add("text-center");

let checkBoxEl = document.createElement("input");
checkBoxEl.type = "checkbox";
checkBoxEl.id = "checkbox";
checkboxWithLabelContainerEl.appendChild(checkBoxEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for", "checkbox");
labelEl.textContent = "Click Me!";
labelEl.classList.add("m1-2");
labelEl.id = "checkboxLabel";
checkboxWithLabelContainerEl.appendChild(labelEl);

