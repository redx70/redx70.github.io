fetch("https://user5e8e13639aafd2a.app.vtxhub.com/dlvlist/").then((Response) => {
    return Response.json()
    }).then((data) => {
        let positions = {};
        for (i in data["main"]) {
            positions[data["main"][i]] = data["main"].length - (data["main"].indexOf(data["main"][i]));
        }
        document.getElementById("globalvar1").innerHTML = JSON.stringify(positions);
        document.getElementById("globalvar2").innerHTML = JSON.stringify(data["colors"]);
        document.getElementById("startbutton").disabled = false;
});

function startButtonHover() {
    if (document.getElementById("startbutton").disabled === false) {
        document.getElementById("startbutton").style.borderColor = "yellow";
    }
}

function startButtonUnhover() {
    document.getElementById("startbutton").style.borderColor = "green";
}

function resetButtonHover() {
    document.getElementById("resetbutton").style.borderColor = "yellow";
}

function resetButtonUnhover() {
    document.getElementById("resetbutton").style.borderColor = "red";
}

function saveButtonHover() {
    document.getElementById("savebutton").style.borderColor = "yellow";
}

function saveButtonUnhover() {
    document.getElementById("savebutton").style.borderColor = "blue";
}

function loadButtonHover() {
    document.getElementById("loadbutton").style.borderColor = "yellow";
}

function loadButtonUnhover() {
    document.getElementById("loadbutton").style.borderColor = "purple";
}

function doneButtonHover() {
    document.getElementById("donebutton").style.borderColor = "yellow";
}

function doneButtonUnhover() {
    document.getElementById("donebutton").style.borderColor = "green";
}

function giveUpButtonHover() {
    document.getElementById("giveupbutton").style.borderColor = "yellow";
}

function giveUpButtonUnhover() {
    document.getElementById("giveupbutton").style.borderColor = "red";
}

function start() {
    let positions = JSON.parse(document.getElementById("globalvar1").innerHTML);
    let levels = Object.keys(positions);
    let colors = JSON.parse(document.getElementById("globalvar2").innerHTML);
    let level1 = levels[[Math.floor(Math.random() * levels.length)]];
    document.getElementById("globalvar3").innerHTML = "1";
    document.getElementById("globalvar4").innerHTML = colors[level1];
    let level1html = `<div style="left: 50%; transform: translateX(-50%); border-radius: 25px; border: thick solid ${colors[level1]}; text-align: center; width: 500px; bottom: 135px; position: relative;">
    <h1 class="centered2" style="bottom: 15px; color: ${colors[level1]};">#${positions[level1]} - ${level1}</h1><input id="percentage" type="number" placeholder="At Least 1%" min="1" max="100" style="width: 100px; border-radius: 15px; height: 35px;position: relative; bottom: 50px;">
    <div id="buttons" style="text-align: center;">
    <button id="donebutton" onclick=done() onmouseover=doneButtonHover() onmouseleave=doneButtonUnhover() style="background-color: lime; border-radius: 25px; width: 100px; height: 50px; position: relative; bottom: 35px; font-family: 'Poppins', sans-serif">Done</button>
    <button id="giveupbutton" onclick=giveUp() onmouseover=giveUpButtonHover() onmouseleave=giveUpButtonUnhover() style="background-color: red; border-radius: 25px; width: 100px; height: 50px; position: relative; bottom: 35px; font-family: 'Poppins', sans-serif">Give Up</button>
    </div>
    </div>`
    document.getElementById("levels").innerHTML += level1html;
    document.getElementById("startbutton").disabled = true;
}

function done() {
    if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"].includes(document.getElementById("percentage").value) && parseInt(document.getElementById("percentage").value) >= parseInt(document.getElementById("globalvar3").innerHTML)) {
        if (parseInt(document.getElementById("globalvar3").innerHTML) > 99) {
            alert("You Completed The DLV Roulette!");
        }
        else {
            let positions = JSON.parse(document.getElementById("globalvar1").innerHTML);
            let levels = Object.keys(positions);
            let colors = JSON.parse(document.getElementById("globalvar2").innerHTML);
            let level = levels[[Math.floor(Math.random() * levels.length)]];
            document.getElementById("globalvar3").innerHTML = parseInt(document.getElementById("globalvar3").innerHTML) + 1;
            document.getElementById("donebutton").remove();
            document.getElementById("giveupbutton").remove();
            document.getElementById("percentage").outerHTML = `<h1 style="color: ${document.getElementById("globalvar4").innerHTML}; position: relative; bottom: 50px; font-family: 'Poppins', sans-serif; font-size: 50px; margin: 0px; border: 0px; padding: 0px;">${document.getElementById("percentage").value}%</h1>`;
            document.getElementById("globalvar4").innerHTML = colors[level];
            let html = `<div style="left: 50%; transform: translateX(-50%); border-radius: 25px; border: thick solid ${colors[level]}; text-align: center; width: 500px; bottom: 135px; position: relative;">
            <h1 class="centered2" style="bottom: 15px; color: ${colors[level]};">#${positions[level]} - ${level}</h1><input id="percentage" type="number" placeholder="At Least ${parseInt(document.getElementById("globalvar3").innerHTML)}%" min="1" max="100" style="width: 100px; border-radius: 15px; height: 35px;position: relative; bottom: 50px;">
            <div id="buttons" style="text-align: center;">
            <button id="donebutton" onclick=done() onmouseover=doneButtonHover() onmouseleave=doneButtonUnhover() style="background-color: lime; border-radius: 25px; width: 100px; height: 50px; position: relative; bottom: 35px; font-family: 'Poppins', sans-serif">Done</button>
            <button id="giveupbutton" onclick=giveUp() onmouseover=giveUpButtonHover() onmouseleave=giveUpButtonUnhover() style="background-color: red; border-radius: 25px; width: 100px; height: 50px; position: relative; bottom: 35px; font-family: 'Poppins', sans-serif">Give Up</button>
            </div>
            </div>`
            document.getElementById("levels").innerHTML += html;
        }
    }
    else {
        if (parseInt(document.getElementById("percentage").value) > 100) {
            alert("Percentage Too High!");
        }
        else if (parseInt(document.getElementById("percentage").value) < parseInt(document.getElementById("globalvar3").innerHTML)){
            alert("Percentage Too Low!");
        }
    }
}

function reset() {
    if (window.confirm("Are You Sure?") === true) {
        document.getElementById("levels").innerHTML = "";
        document.getElementById("startbutton").disabled = false;
    }
}

function giveUp() {
    if (window.confirm("Are You Sure?") === true) {
        if (window.confirm(`${parseInt(document.getElementById("globalvar3").innerHTML) - 1} Demons Completed! Show Remaining Demons?`)) {
            document.getElementById("donebutton").remove();
            document.getElementById("giveupbutton").remove();
            document.getElementById("percentage").outerHTML = `<h1 style="color: ${document.getElementById("globalvar4").innerHTML}; position: relative; bottom: 50px; font-family: 'Poppins', sans-serif; font-size: 50px; margin: 0px; border: 0px; padding: 0px;">${document.getElementById("globalvar3").innerHTML}%</h1>`;
            let i = 0;
            while (i !== (100 - parseInt(document.getElementById("globalvar3").innerHTML))) {
                let positions = JSON.parse(document.getElementById("globalvar1").innerHTML);
                let levels = Object.keys(positions);
                let colors = JSON.parse(document.getElementById("globalvar2").innerHTML);
                let level = levels[[Math.floor(Math.random() * levels.length)]];
                document.getElementById("levels").innerHTML += `<div style="left: 50%; transform: translateX(-50%); border-radius: 25px; border: thick solid ${colors[level]}; text-align: center; width: 500px; bottom: 135px; position: relative;">
                <h1 class="centered2" style="bottom: 15px; color: ${colors[level]};">#${positions[level]} - ${level}</h1><h1 style="color: ${colors[level]}; position: relative; bottom: 50px; font-family: 'Poppins', sans-serif; font-size: 50px; margin: 0px; border: 0px; padding: 0px;">${i + parseInt(document.getElementById("globalvar3").innerHTML) + 1}%</h1>
                </div>`
                i++;
            }
            document.getElementById("startbutton").disabled = false;
        }
        else {
            document.getElementById("levels").innerHTML = "";
            document.getElementById("startbutton").disabled = false;
        }
    }
}

document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      done();
    }
});
