"use strict";

var $ = require("jQuery");

$(document).ready(function() {
    $("input").focus();
    $("body").on("click", function() {
        $("input").focus();
    });

    var enteredEq = [],
        result,
        memoryTotal = 0;

    /*-----------------------------------------------------
    FUNCTION
    ------------------------------------------------------*/
    //UPDATE THE PRIMARY DISPLAY AFTER USER ENTRY
    function updateDisplay1() {
        if (enteredEq.length === 0) {
            $("#display1").html(0);
        } else {
            $("#display1").html(enteredEq);
        }
    }

    //ADAPT PRIMARY DISPLAY FOR LONG ENTRIES
    function maxEnter() {
        if (enteredEq.length > 14) {
            $("#display1").css("font-size", "0.5em");
        }
    }

    //REMOVE REDUNDANT OPERANDS AT END OF ENTRY
    function solveRepeatedOps() {
        let lastItem = enteredEq[ enteredEq.length - 1 ];
        let pattern = /\+|\-|\*|\//;
        if (isNaN(lastItem) && pattern.test(lastItem)) {
            enteredEq.pop();
            return solveRepeatedOps();
        }
    }

    //REMOVE INITIAL * AND /
    function solveInitialOpsError() {
        if (enteredEq[ 0 ] === "*" || enteredEq[ 0 ] === "/") {
            enteredEq.shift();
        }
    }

    //REMOVE INITIAL ZEROES
    function solveRepeatedZero() {
        if (enteredEq[ 0 ] === 0 && enteredEq[ 1 ] !== ".") {
            enteredEq.pop();
        }
    }

    //RESOLVE ARRAY AFTER = PRESSED
    function getAnswer() {
        solveRepeatedOps();
        result = eval(enteredEq.join(""));
        result = +result.toFixed(9);
        if (result > 999999999999) {
            result = result.toExponential(2);
        }
        $("#display1").html(result).css("font-size", "1em");
        $("#display2").html(enteredEq);
        enteredEq = [];
    }

    /*-------------------------------------------------
    BUTTON CLICK EVENTS
    --------------------------------------------------*/
    // AC BUTTON
    $("#allClearBtn").on("click", function() {
        enteredEq = [];
        $("#display1").html(0).css("font-size", "1em");
        $("#display2").html("Ans");
        memoryTotal = 0;
        result = 0;

    });

    // C BUTTON - CLEAR LAST ENTRY ONLY
    $("#clearBtn").on("click", function() {
        enteredEq.pop();
        updateDisplay1();

        // memoryTotal === 0 ? $("#display2").html("Ans") : $("#display2").html("memory: " + memoryTotal);

        if (memoryTotal === 0) {
            $("#display2").html("Ans");
        } else {
            $("#display2").html("memory: " + memoryTotal);
        }
    });

    //GET INPUT FROM BUTTON ATTRIBUTES: NUMBERS
    $(".number").on("click", function() {
        let inputNum = $(this).data("num");
        enteredEq.push(inputNum);
        if (inputNum === 0) {
            solveRepeatedZero();
        }
        maxEnter();
        updateDisplay1();
    });

    // OPERATORS +-/*
    $(".operator").on("click", function() {
        let inputOp = $(this).data("op");
        solveRepeatedOps();
        enteredEq.push(inputOp);
        solveInitialOpsError();
        maxEnter();
        updateDisplay1();
    });

    // DECIMAL POINT BUTTON
    $("#decimalBtn").on("click", function() {
        if (enteredEq.indexOf(".") === -1) {
            if (enteredEq.length === 0) {
                enteredEq.push("0", ".");
            } else {
                enteredEq.push(".");
            }
        }
        updateDisplay1();
    });

    $("#percentBtn").on("click", function() {
        if (enteredEq.length !== 0) {
            enteredEq.push("/", 100);
            updateDisplay1();
        } else {
            enteredEq.push(result, "/", 100);
            getAnswer();
        }
    });

    // +/- BUTTON
    $("#posnegBtn").on("click", function() {
        if (enteredEq[ 0 ] === "+" || enteredEq.length === 0) {
            enteredEq.shift();
            enteredEq.unshift("-");
        } else if (enteredEq[ 0 ] === "-" || enteredEq.length === 0) {
            enteredEq.shift();
            enteredEq.unshift("+");
        } else {
            if (enteredEq[ enteredEq.length - 1 ] === "-") {
                enteredEq.pop();
                enteredEq.push("+");
            } else if (enteredEq[ enteredEq.length - 1 ] === "+") {
                enteredEq.pop();
                enteredEq.push("-");
            } else {
                enteredEq.push("-");
            }
        }
        updateDisplay1();
    });

    // = BUTTON
    $("#equalsBtn").on("click", function() {
        getAnswer();
    });

    // MEMORY FUNCTIONS - M+, M- and MR
    $("#mPlusBtn").on("click", function() {
        memoryTotal = memoryTotal + result;
        $("#display2").html("memory: " + memoryTotal);
    });

    $("#mMinusBtn").on("click", function() {
        memoryTotal = memoryTotal - result;
        $("#display2").html("memory: " + memoryTotal);
    });

    $("#mrBtn").on("click", function() {
        if (enteredEq[ enteredEq.length - 1 ] !== memoryTotal) {
            enteredEq.push(memoryTotal);
            updateDisplay1();
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
