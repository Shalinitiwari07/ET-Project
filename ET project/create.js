const form = document.querySelector("form");
const table = document.querySelector("table");
const thead= document.querySelector("thead");
const body= document.querySelector("body");
const array = [];



const submit = () => {
    const name = document.querySelector("#name").value;
    const date = document.querySelector("#date").value;
    const amount = document.querySelector("#amount").value;

    const formdata = {
        name,
        date,
        amount,
    };
array.push(formdata);
console.log(array);
};