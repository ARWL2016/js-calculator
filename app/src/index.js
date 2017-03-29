"use strict";

var $ = require("jQuery");
var _ = require("underscore"); 
require("./scss/style.scss");

$(document).ready(function() {
    $("input").focus();
    $("body").on("click", function() {
        $("input").focus();
    });

    var input = [],
        result,
        memoryTotal = 0;

    /*-----------------------------------------------------
    FUNCTION
    ------------------------------------------------------*/
    //UPDATE THE PRIMARY DISPLAY AFTER USER ENTRY
    function updateMainDisplay() {
        if (input.length === 0) {
            document.getElementById("display1").innerText = 0;
        } else {
            $("#display1").html(input);
        }
    }

    //ADAPT PRIMARY DISPLAY FOR LONG ENTRIES
    function maxEnter() {
        if (input.length > 14) {
            $("#display1").css("font-size", "0.5em");
        }
    }

    //REMOVE REDUNDANT OPERANDS AT END OF ENTRY
    function removeExtraOps() {
        const lastItem = _.last(input);
        const pattern = /\+|\-|\*|\//;
        if (isNaN(lastItem) && pattern.test(lastItem)) {
            input.pop();
            return removeExtraOps();
        }
    }

    //REMOVE INITIAL * AND /
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
        if (result > 999999999999) {
            result = result.toExponential(2);
        }
        $("#display1").html(result).css("font-size", "1em");
        $("#display2").html(input);
        input = [];
    }

    /*-------------------------------------------------
    BUTTON CLICK EVENTS
    --------------------------------------------------*/
    $("#allClearBtn").on("click", function() {
        input = [];
        console.log(this);
        $("#display1").html(0).css("font-size", "1em");
        $("#display2").html("Ans");
        memoryTotal = 0;
        result = 0;
    });

    $("#clearBtn").on("click", function() {
        input.pop();
        updateMainDisplay();

        if (memoryTotal === 0) {
            document.getElementById("display2").innerText = "Ans";
        } else {
            document.getElementById("display2").innerText= `memory: ${memoryTotal}`; 
        }
    });

    $(".number-btn").on("click", function() {
        const inputNum = $(this).data("num");
        input.push(inputNum);
        if (inputNum === 0) {
            removeExtraZeroes();
        }
        maxEnter();
        updateMainDisplay();
    });

    $(".op-btn").on("click", function() {
        const inputOp = $(this).data("op");
        removeExtraOps();
        input.push(inputOp);
        removeInitialOps();
        maxEnter();
        updateMainDisplay();
    });

    $("#decimalBtn").on("click", function() {
        if (input.indexOf(".") === -1) {
            if (input.length === 0) {
                input.push("0", ".");
            } else {
                input.push(".");
            }
        }
        updateMainDisplay();
    });

    $("#percentBtn").on("click", function() {
        if (input.length !== 0) {
            input.push("/", 100);
            updateMainDisplay();
        } else {
            input.push(result, "/", 100);
            getAnswer();
        }
    });

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

    // = BUTTON
    $("#equalsBtn").on("click", function() {
        getAnswer();
    });

    // MEMORY FUNCTIONS - M+, M- and MR
    $("#mPlusBtn").on("click", function() {
        memoryTotal += result;
        document.getElementById("display2").innerText= `memory: ${memoryTotal}`; 
    });

    $("#mMinusBtn").on("click", function() {
        memoryTotal -= result;
        document.getElementById("display2").innerText= `memory: ${memoryTotal}`; 
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

    //KEYBOARD SHORTCUTS
    $("input").keydown(function(e) {
        var key = e.which;
        switch (key) {
            case 96:
                $("button[data-num=\"0\"]").click();
                break;
            case 97:
                $("button[data-num=\"1\"]").click();
                break;
            case 98:
                $("button[data-num=\"2\"]").click();
                break;
            case 99:
                $("button[data-num=\"3\"]").click();
                break;
            case 100:
                $("button[data-num=\"4\"]").click();
                break;
            case 101:
                $("button[data-num=\"5\"]").click();
                break;
            case 102:
                $("button[data-num=\"6\"]").click();
                break;
            case 103:
                $("button[data-num=\"7\"]").click();
                break;
            case 104:
                $("button[data-num=\"8\"]").click();
                break;
            case 105:
                $("button[data-num=\"9\"]").click();
                break;
            case 13:
                $("button[id = \"equalsBtn\"]").click();
                break;
            case 32:
                $("button[id = \"allClearBtn\"]").click();
                break;
            case 110:
                $("button[id = \"decimalBtn\"]").click();
                break;
            case 107:
                $("button[data-op=\"+\"]").click();
                break;
            case 109:
                $("button[data-op=\"-\"]").click();
                break;
            case 106:
                $("button[data-op=\"*\"]").click();
                break;
            case 111:
                $("button[data-op=\"/\"]").click();
                break;
        }
    });

}); //docready