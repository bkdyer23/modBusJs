const defaultSerialSettings = {
    "port": "COM1",
    "baudrate": 9600,
    "stopBits": 1,
    "parity": "none",
    "delay": 1,
    "timeout":2000,
    "mode": "single"
}


const defaultModbusConfigs = {
    "id": 1,
    "command": 3, //read holding regs
    "address": 1,
    "regQty": 1
}

let getData = false;

document.addEventListener('DOMContentLoaded', function() {
    //const startButton = document.getElementsByClassName("start-btn");
    const startButton = document.querySelector('.start-btn');
    console.log(startButton);
    startButton.addEventListener('click', function() {alert("Start")});
});


for(val in defaultSerialSettings){
    console.log(val);
}




if(typeof Storage !== "undefined") {
    console.log("LocalStorage is supported.");
    localStorage.setItem("defaultSerialSettings", JSON.stringify(defaultSerialSettings));
    const rcvdSettingsStr = localStorage.getItem("defaultSerialSettings");
    const rcvdSettingsObj = JSON.parse(rcvdSettingsStr);
    //console.log(defaultSerialSettings, modbusConfigs);
    for(val in rcvdSettingsObj)
    {
        console.log(val);
    }

} else {
    console.error("LocalStorage is not supported in this browser");
}