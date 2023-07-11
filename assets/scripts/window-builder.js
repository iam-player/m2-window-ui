const inputWidth = document.getElementById("inputWidth");
const inputHeight = document.getElementById("inputHeight");

const inputForm = document.getElementById("inputForm");

const windowBody = document.getElementById("windowBody");
const windowTitle = document.getElementById("windowTitle");

const renderButton = document.getElementById("renderButton");

const render = () => {
    let renderWidth = inputWidth.value;
    let renderHeight = inputHeight.value;

    windowBody.setAttribute("style",`height: ${renderHeight}px !important; width: ${renderWidth}px !important`);
    windowTitle.setAttribute("style",`width: ${renderWidth - 12}px !important`);
};

//regex test for 0-9 numeric values only
const testInput = (input) => {
    const regex = /^[0-9]*$/;
    return regex.test(input);
};

//listen on input to test
inputWidth.addEventListener("input", () => {
    if (!testInput(inputWidth.value)) {
        inputWidth.value = inputWidth.value.replace(/[^0-9]/g, "");
    }
});

//listen on input to test
inputHeight.addEventListener("input", () => {
    if (!testInput(inputHeight.value)) {
        inputHeight.value = inputHeight.value.replace(/[^0-9]/g, "");
    }
});

//on click render window
renderButton.addEventListener("click", (e) => {
    e.preventDefault();
    render();
});


