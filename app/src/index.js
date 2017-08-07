"use strict";

const _ = require("underscore");
require("./scss/style.scss");

window.addEventListener('load', function() {

    let input = [];
    let result = 0;
    let memoryTotal = 0;
    let inputData = '';
    const display = document.getElementById("display");
    const subDisplay = document.getElementById("subDisplay");
    const MAX_RESULT = 999999999999;

    function updateMainDisplay() {
        display.innerText = input.length === 0 ? 0 : input.join('');
    }

    function reduceMainDisplaySize() {
        if (input.length > 14) {
            display.setAttribute("style", "font-size: 0.5em");
        }
    }

    function removeExtraOps() {
        const pattern = /\+|\-|\*|\//;
        if (isNaN(_.last(input)) && pattern.test(_.last(input))) {
            input.pop();
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
        display.innerHTML = result;
        display.setAttribute("style", "font-size: 1em");
        subDisplay.innerText = input.join('');
        input = [];
    }

    function setMemory() {
        result = 0;
        display.innerText = 0;
        subDisplay.innerText = `memory: ${memoryTotal}`;
    }

    document.getElementById("keypad").addEventListener("click", (e) => {
        inputData = e.target.innerText;

        if (inputData.match(/[0-9]/) && input.length <= 45) {
            input.push(inputData);
            if (inputData === 0) {
                removeExtraZeroes();
            }
            reduceMainDisplaySize();
            updateMainDisplay();

        } else if (inputData.match(/([+-\/\*])/) && inputData !== '+/-' && inputData !== 'M+' && inputData !== 'M-') {
            removeExtraOps();
            input.push(inputData);
            removeInitialOps();
            reduceMainDisplaySize();
            updateMainDisplay();

        } else if (e.target.id === 'decimalBtn') {
            if (_.last(input) !== ".") {
                if (input.length === 0) {
                    input.push("0");
                }
                input.push(".");
            }
            updateMainDisplay();

        } else if (e.target.id === 'percentBtn') {
            removeExtraOps();
            if (input.length !== 0) {
                input.push("/", 100);
                updateMainDisplay();
            } else {
                input.push(result, "/", 100);
                getAnswer();
            }

        } else if (e.target.id === 'posnegBtn') {
            if (input[0] === "+") {
                input.shift();
                input.unshift("-");
            } else if (input[0] === "-") {
                input.shift();
                input.unshift("+");
            } else {
                input.unshift('-')
            }
            updateMainDisplay();

        } else if (e.target.id === 'equalsBtn') {
            if (input.length > 2) {
                getAnswer();
            }
        } else if (e.target.id === 'mPlusBtn') {
            memoryTotal += result;
            setMemory();
        } else if (e.target.id === 'mMinusBtn') {
            memoryTotal -= result;
            setMemory();
        } else if (e.target.id === 'mrBtn') {
            if (_.last(input) !== memoryTotal) {
                input.push(memoryTotal);
                updateMainDisplay();
            }
        } else if (e.target.id === 'allClearBtn') {
            input = [];
            display.innerText = 0;
            display.setAttribute("style", "font-size: 1em");
            subDisplay.innerText = "Ans";
            memoryTotal = 0;
            result = 0;
        } else if (e.target.id === 'clearBtn') {
            input.pop();
            updateMainDisplay();
            if (memoryTotal === 0) {
                subDisplay.innerText = "Ans";
            } else {
                subDisplay.innerText = `memory: ${memoryTotal}`;
            }
        }
    })

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
        "106": "multiplyBtn",
        "107": "plusBtn",
        "109": "minusBtn",
        "110": "decimalBtn",
        "111": "divideBtn"
    };

    document.getElementById('body').addEventListener('keydown', (e) => {
        document.querySelector("button[id=" + KEY_MAP[e.which] + "]").click();
    });

});