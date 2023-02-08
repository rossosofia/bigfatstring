"use strict"
console.log('hello world');

function getInput(){
    document.querySelector('button#generate').addEventListener('click', generate);
}

function generate(){
    const input = document.querySelector("input#input").value;
    const choice = document.getElementById("choice");
    const choiceValue = choice.value;
    let output = " ";
    // console.log(choiceValue);
    // console.log(input);
    
    if (choiceValue === "0"){
        output = input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
    } else if (choiceValue === "1"){
        output = input.substring(0, input.indexOf(" "));
    } else if (choiceValue === "2"){
        output = input.substring(0, input.indexOf(" ")).length;
    } else if (choiceValue === "3"){
        output = `${input.indexOf(" ")+1} , ${input.lastIndexOf(" ")} , ${input.substring(input.indexOf(" ")+1 , input.lastIndexOf(" "))}`;
    } else if (choiceValue === "4"){
        // Solution 1
        // output = input.endsWith(".png") || input.endsWith(".jpg");
        // if(output){
        //     output = "this file is a png or jpg ";
        // }else {
        //     output = "this file is not a png or jpg ";
        // }
        // Solution 2
        if(input.endsWith(".png")){
            output = "this file is a png";
        } else if(input.endsWith(".jpg")) {
            output = "this file is a jpg";
        } else {
            output = "this file isn't a png or a jpg"
        }
        // Solution 3
        // output = `This file is a ${input.substring(input.lastIndexOf(".")+1)}`
    } else if (choiceValue === "5"){
        output = "*".repeat(input.length);
    } else if (choiceValue === "6"){
        output = input.replace(input.charAt(2), input.charAt(2).toUpperCase());

    } else if (choiceValue === "7"){
        let str1 = input.indexOf("-");
        let str2 = input.charAt(str1 + 1).toUpperCase();
        console.log(typeof str1);
        console.log(typeof str2);
        output = input.replace(input.charAt(str1 + 1), str2);
        console.log(output);
    }


    // console.log(output);
    document.querySelector("input#output").value = output;
}

getInput();

// 8th. includes " " and "-".
// inputArray = input.split(" ")
