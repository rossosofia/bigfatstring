"use strict"
console.log('hello world');

function getInput(){
    document.querySelector("input#input").addEventListener('input', updateValue);
    document.querySelector('button#generate').addEventListener('click', generate);
}

function updateValue(x) {
    // console.log(x.target.value);
}

function generate(){
    const input = document.querySelector("input#input").value;
    const choice = document.querySelector("option");
    const choiceValue = choice.value;
    let output = "unused value";
    console.log(choiceValue);
    console.log(input);
    
    if (choiceValue === "0"){
        output = input.replace(input.charAt(0), input.charAt(0).toUpperCase());
    } else (value === ";");
    
    
    console.log(output);
    document.querySelector("input#output").value = output;
}

getInput();
