



let serialPortEl = document.getElementById("serial-port");
let baudrateEl  = document.getElementById("baudrate");
let parityEl = document.getElementById("parity");
let stopBitsEl = document.getElementById("stop-bits");
let delayEl = document.getElementById("delay");
let timeoutEl = document.getElementById("timeout");
let deviceIdEl = document.getElementById("device-id");
let commandEl = document.getElementById("command");
let startingAddressEl = document.getElementById("starting-address");
let registerQtyEl = document.getElementById("register-qty");
let modeEl = document.getElementById("mode");
let outputDataEl = document.getElementById("output-data");

const modbusConfigs = {
    "id": deviceIdEl.value,
    "command": commandEl.value,
    "address": startingAddressEl.value,
    "regQty": registerQtyEl.value
}

const serialSettings = {
    "port": serialPortEl.value,
    "baudrate": parseInt(baudrateEl.value, 10),
    "stopBits": stopBitsEl.value,
    "parity": parityEl.value,
    "delay": parseInt(delayEl.value, 10),
    "timeout":parseInt(timeoutEl.value, 10),
    "mode": modeEl.value
}

console.log(serialPortEl);
function start_mb_client() {
    const serialSettings = {
        "port": serialPortEl.value,
        "baudrate": parseInt(baudrateEl.value, 10),
        "stopBits": stopBitsEl.value,
        "parity": parityEl.value,
        "delay": parseInt(delayEl.value, 10),
        "timeout":parseInt(timeoutEl.value, 10),
        "mode": modeEl.value
    }

    const modbusConfigs = {
        "id": deviceIdEl.value,
        "command": commandEl.value,
        "address": startingAddressEl.value,
        "regQty": registerQtyEl.value
    }

    outputDataEl.textContent = "";
    let outputStr = "";
    console.log("Serial Settings:")
    for(let key in serialSettings)
    {
        if(serialSettings.hasOwnProperty(key))
        {
            outputStr = key + ": " + serialSettings[key];
            console.log(outputStr);
            outputDataEl.textContent += "\n";
            outputDataEl.textContent += outputStr; 
        
        }
    }

    console.log("Modbus Configuration Settings:")
    for(let key in modbusConfigs)
    {
        if(modbusConfigs.hasOwnProperty(key))
        {
            outputStr = key + ": " + modbusConfigs[key];
            console.log(outputStr);
            outputDataEl.textContent += "\n";
            outputDataEl.textContent += outputStr; 
        }
    }
}

function saveSettings() {

}

function stop_mb_client() {
    alert("Modbus Client Stopped");
}

let getData = false;
/* 
document.addEventListener('DOMContentLoaded', function() {
    //const startButton = document.getElementsByClassName("start-btn");
    const startButton = document.querySelector('.start-btn');
    console.log(startButton);
    startButton.addEventListener('click', function() {alert("Start")});
});
 */






if(typeof Storage !== "undefined") {
    console.log("LocalStorage is supported.");
    localStorage.setItem("serialSettings", JSON.stringify(serialSettings));
    const rcvdSettingsStr = localStorage.getItem("serialSettings");
    const rcvdSettingsObj = JSON.parse(rcvdSettingsStr);
    //console.log(SerialSettings, modbusConfigs);
    for(val in rcvdSettingsObj)
    {
        console.log(val);
    }

} else {
    console.error("LocalStorage is not supported in this browser");
}
