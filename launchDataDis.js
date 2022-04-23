

class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magnetX,
        magnetY,
        magnetZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magnetX = magnetX;
        this.magnetY = magnetY;
        this.magnetZ = magnetZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function updateDisplay() {
    theTime = new Date();
    var timeRead = data[index].time_seconds;

    if (timeRead >= 10) {
        document.getElementById("data").rows["seconds"].innerHTML = dataRow("Time Elapsed", data[index].time_seconds, "seconds");
        document.getElementById("data").rows["latitude"].innerHTML = dataRow("latitude", data[index].latitude, " ");
        document.getElementById("data").rows["lomgitude"].innerHTML = dataRow("lomgitude", data[index].longitude, " ");
        document.getElementById("data").rows["gpsSensor_alt"].innerHTML = dataRow("gpsSensor altitude", data[index].gps_altitude, " ");
        document.getElementById("data").rows["bmpSensor_alt"].innerHTML = dataRow("bmpSensor altitude", data[index].bmpSensor_altitude, " ");
        document.getElementById("data").rows["bmpSensor_pres"].innerHTML = dataRow("bmpSensor pressure", data[index].bmpSensor_pressure, " ");
        document.getElementById("data").rows["bmpSensor_temp"].innerHTML = dataRow("bmpSensor temperture", data[index].bmpSensor_temp, " ");
        document.getElementById("data").rows["digSensor_temp"].innerHTML = dataRow("Digital temperture", data[index].digSensor_temp, " ");
        document.getElementById("data").rows["cssSensor_temp"].innerHTML = dataRow("CSS temperture", data[index].cssSensor_temp, " ");
        document.getElementById("data").rows["cssSensor_eCO2"].innerHTML = dataRow("CSS eCO2", data[index].cssSensor_eCO2, " ");
        document.getElementById("data").rows["cssSensor_TVOC"].innerHTML = dataRow("CSS TVOC", data[index].cssSensor_TVOC, " ");
        document.getElementById("data").rows["UV"].innerHTML = dataRow("UV", data[index].UV, " ");
        document.getElementById("data").rows["accelX"].innerHTML = dataRow("acceleration in X", data[index].accelX, " ");
        document.getElementById("data").rows["accelY"].innerHTML = dataRow("acceleration in Y", data[index].accelY, " ");
        document.getElementById("data").rows["accelZ"].innerHTML = dataRow("acceleration in Z", data[index].accelZ, " ");
        document.getElementById("data").rows["magneticX"].innerHTML = dataRow("magnetic field in X", data[index].magnetX, " ");
        document.getElementById("data").rows["magneticY"].innerHTML = dataRow("magnetic field in Y", data[index].magnetY, " ");
        document.getElementById("data").rows["magneticZ"].innerHTML = dataRow("magnetic field in Z", data[index].magnetZ, " ");
        document.getElementById("data").rows["gyroX"].innerHTML = dataRow("Rotation Velocity around X", data[index].gyroX, " ");
        document.getElementById("data").rows["gyroY"].innerHTML = dataRow("Rotation Velocity around Y", data[index].gyroY, " ");
        document.getElementById("data").rows["gyroZ"].innerHTML = dataRow("Rotation Velocity around Z", data[index].gyroZ, " ");

        document.getElementById("clockTime").innerHTML = theTime.getHours() + ":" + theTime.getMinutes() + ":" + theTime.getSeconds();

        if (index < 500) {
            index++;
        } else {
            index = 0;
        }
    }
    console.log("Display: " + theTime.getHours() + ":" + theTime.getMinutes() + ":" + theTime.getSeconds());
}

var theTime = new Date();
        var tempTime = new Date();
        var time_interval = 5000;
        var last_iteration = 0;
        var running = true;
        var index = 0;
        var timer;

        // gets data into the array
        var data = getData();
