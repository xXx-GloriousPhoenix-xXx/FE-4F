let thirdElementIsBasicState = true;
let fourthElementIsBasicState = true;

const setElement = (element, color, backgroundColor) => {
    element.style.color = color;
    element.style.backgroundColor = backgroundColor;
}
const setElementToBasic = (element) => setElement(element, "black", "white");

const thirdElement = document.getElementById("third-element");
thirdElement.addEventListener("click", () => {
    thirdElementIsBasicState = !thirdElementIsBasicState
    if (thirdElementIsBasicState) {
        setElementToBasic(thirdElement);
    }
    else {
        setElement(thirdElement, "black", "orange");
    }
});

const fourthElement = document.querySelectorAll("h3.Hobbies")[0];
fourthElement.addEventListener("click", () => {
    fourthElementIsBasicState = !fourthElementIsBasicState
    if (fourthElementIsBasicState) {
        setElementToBasic(fourthElement);
    }
    else {
        setElement(fourthElement, "white", "green");
    }
});

const addButton = document.getElementById("add-button");
const deleteButton = document.getElementById("delete-button");
const inputField = document.getElementById("link-input");
const image = document.getElementById("image");
addButton.addEventListener("click", () => setImage(inputField.value));
deleteButton.addEventListener("click", () => setImage(""));
const setImage = (link) => {
    image.src = link;
}
const increaseButton = document.getElementById("increase-button");
const decreaseButton = document.getElementById("decrease-button");
increaseButton.addEventListener("click", () => changeSize(image, 50));
decreaseButton.addEventListener("click", () => changeSize(image, -50));
const changeSize = (element, delta) => {
    element.style.width = (element.clientWidth + delta) + "px";
}
