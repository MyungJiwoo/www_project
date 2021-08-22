const form = document.querySelector(".js-form");
const input = form.querySelector(".js-input");
const view = document.querySelector(".js-viewName");

const NAME_LS = "username";
let names = [];


const loadName = () => {
    const data = localStorage.getItem(NAME_LS);

    if (data !== null) {
        const jsonData = JSON.parse(data);
        jsonData.forEach((name) => {
            createName(name.value);
        });
    }
};

const saveName = () => {
    const stringName = JSON.stringify(names);
    localStorage.setItem(NAME_LS, stringName);
    console.log("이름 저장 성공");
};

const createName = (value) => {
    const newName = names.length + 1;
    view.innerText=`Hi, ${value}.`;
    const tempName = {
        value: value,
        id: newName,
    };

    names.push(tempName);
    saveName();
};

const submitName = (event) => {
    const username = event.preventDefault();
    const value = input.value;
    input.value = "";
    createName(value);
};

const init3 = () => {
    form.addEventListener("submit", submitName);
    loadName();
};

init3();