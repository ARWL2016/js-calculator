"use strict";

const $ = require("jQuery");
const _ = require("underscore");
require("./scss/style.scss");

$(document).ready(function() {

    let input = [];
    let result = 0;
    let memoryTotal = 0;
    const display_Main = document.getElementById("display_Main");
    const display_Sub = document.getElementById("display_Sub");
    const MAX_RESULT = 999999999999;

    /*-----------------------------------------------------
    UTILS 
    ------------------------------------------------------*/

    function updateMainDisplay() {
        display_Main.innerText = input.length === 0 ? 0 : input.join('');
    }

    function reduceMainDisplaySize() {
        if (input.length > 14) {
            display_Main.setAttribute("style", "font-size: 0.5em");
        }
    }

    function removeExtraOps() {
        const pattern = /\+|\-|\*|\//;
        if (isNaN(_.last(input)) && pattern.test(_.last(input))) {
            input.pop();
            return removeExtraOps();
        }
    }

    function removeInitialOps() {
        if (input[0] === "*" || input[0] === "/") {
            input.shift();
        }
    }

    function removeExtraZeroes() {
        if (input[0] === 0 && input[1] !== ".") {
            input.pop();
        }
    }

    function getAnswer() {
        removeExtraOps();
        result = eval(input.join(""));
        result = +result.toFixed(9);
        if (result > MAX_RESULT) {
            result = result.toExponential(2);
        }
        display_Main.innerHTML = result;
        display_Main.setAttribute("style", "font-size: 1em");
        display_Sub.innerText = input.join('');
        input = [];
    }

    /*-------------------------------------------------
    BUTTON CLICK EVENTS
    --------------------------------------------------*/

    document.getElementById("allClearBtn").addEventListener("click", () => {
        input = [];
        display_Main.innerText = 0;
        display_Main.setAttribute("style", "font-size: 1em");
        document.getElementById("display_Sub").innerText = "Ans";
        memoryTotal = 0;
        result = 0;
    });

    document.getElementById("clearBtn").addEventListener("click", () => {
        input.pop();
        updateMainDisplay();
        if (memoryTotal === 0) {
            display_Sub.innerText = "Ans";
        } else {
            display_Sub.innerText = `memory: ${memoryTotal}`;
        }
    });

    document.getElementById("keypad").addEventListener("click", (e) => {
        const inputData = e.target.innerText;
        // console.log(e.target.id);
        if (inputData.match(/[0-9]/)) {
            input.push(inputData);
            if (inputData === 0) {
                removeExtraZeroes();
            }
            reduceMainDisplaySize();
            updateMainDisplay();
        }
        if (inputData.match(/\+|\-|\*|\//)) {
            const inputOp = inputData;
            removeExtraOps();
            input.push(inputOp);
            removeInitialOps();
            reduceMainDisplaySize();
            updateMainDisplay();
        }
        if (e.target.id === 'decimalBtn') {
            if (_.last(input) !== ".") {
                if (input.length === 0) {
                    input.push("0");
                }
                input.push(".");
            }
            updateMainDisplay();
        }
        if (e.target.id === 'percentBtn') {
            removeExtraOps();
            if (input.length !== 0) {
                input.push("/", 100);
                updateMainDisplay();
            } else {
                input.push(result, "/", 100);
                getAnswer();
            }
        }

    })

    $("#posnegBtn").on("click", function() {
        if (input[0] === "+" || input.length === 0) {
            input.shift();
            input.unshift("-");
        } else if (input[0] === "-" || input.length === 0) {
            input.shift();
            input.unshift("+");
        } else {
            if (_.last(input) === "-") {
                input.pop();
                input.push("+");
            } else if (_.last(input) === "+") {
                input.pop();
                input.push("-");
            } else {
                input.push("-");
            }
        }
        updateMainDisplay();
    });

    $("#equalsBtn").on("click", function() {
        if (input.length > 2) {
            getAnswer();
        }

    });

    // MEMORY FUNCTIONS - M+, M- and MR
    $("#mPlusBtn").on("click", function() {
        memoryTotal += result;
        document.getElementById("display_Sub").innerText = `memory: ${memoryTotal}`;
    });

    $("#mMinusBtn").on("click", function() {
        memoryTotal -= result;
        document.getElementById("display_Sub").innerText = `memory: ${memoryTotal}`;
    });

    $("#mrBtn").on("click", function() {
        if (_.last(input) !== memoryTotal) {
            input.push(memoryTotal);
            updateMainDisplay();
        }
    });

    //SHORTCUTS BUTTON
    $("#shortcuts").on("click", function() {
        $("#popup").toggle(400);
    });

    // map e.which to id 
    const KEY_MAP = {
        "13": "equalsBtn",
        "32": "allClearBtn",
        "96": "zeroBtn",
        "97": "oneBtn",
        "98": "twoBtn",
        "99": "threeBtn",
        "100": "fourBtn",
        "101": "fiveBtn",
        "102": "sixBtn",
        "103": "sevenBtn",
        "104": "eightBtn",
        "105": "nineBtn",
        "106": "muliplyBtn",
        "107": "plusBtn",
        "108": "",
        "109": "minusBtn",
        "110": "decimalBtn",
        "111": "divideBtn"
    };

    document.getElementById('body').addEventListener('keydown', (e) => {
        document.querySelector("button[id=" + KEY_MAP[e.which] + "]").click();
    });

}); //docready


// deprecated code

//KEYBOARD SHORTCUTS
// $("body").keydown(function(e) {
//     var key = e.which;
//     switch (key) {
//         case 96:
//             $("button[data-num=\"0\"]").click();
//             break;
//         case 97:
//             $("button[data-num=\"1\"]").click();
//             break;
//         case 98:
//             $("button[data-num=\"2\"]").click();
//             break;
//         case 99:
//             $("button[data-num=\"3\"]").click();
//             break;
//         case 100:
//             $("button[data-num=\"4\"]").click();
//             break;
//         case 101:
//             $("button[data-num=\"5\"]").click();
//             break;
//         case 102:
//             $("button[data-num=\"6\"]").click();
//             break;
//         case 103:
//             $("button[data-num=\"7\"]").click();
//             break;
//         case 104:
//             $("button[data-num=\"8\"]").click();
//             break;
//         case 105:
//             $("button[data-num=\"9\"]").click();
//             break;
//         case 13:
//             $("button[id = \"equalsBtn\"]").click();
//             break;
//         case 32:
//             $("button[id = \"allClearBtn\"]").click();
//             break;
//         case 110:
//             $("button[id = \"decimalBtn\"]").click();
//             break;
//         case 107:
//             $("button[data-op=\"+\"]").click();
//             break;
//         case 109:
//             $("button[data-op=\"-\"]").click();
//             break;
//         case 106:
//             $("button[data-op=\"*\"]").click();
//             break;
//         case 111:
//             $("button[data-op=\"/\"]").click();
//             break;
//     }
// });