/**

Bygget af
 __             __   ___  __   __     
|__)  /\  |\ | |  \ |__  |__) /__`    
|  \ /~~\ | \| |__/ |___ |  \ .__/    
      __                         ___                             
|__/ /  \  |\/|  |\/| |  | |\ | |__  
|  \ \__/  |  |  |  | \__/ | \| |___ 

*/
function Decoder(bytes, port)
{
    var decoded = {};
    let n = 0;

    // Port 9 = 4Byte ALIVE message
    if(port == 9)
    {
        // BATTERY Unsigned char (8 bits)
        var batteryType = (bytes[n] & 0b10000000) >> 7 ? 
            "Lithium-thionyl" : "Alkaline";
        decoded.batteryLevel = bytes[n] & 0b01111111;
        n++;
    }

    // EVENT Unsigned char (8 bits)
    decoded.batteryLow        = (bytes[n] & 0b00000100) >> 2; // ? 'low battery event (25%)' : 'battery OK';
    decoded.tamperingDetected = (bytes[n] & 0b00000010) >> 1; // ? 'Tamper alarm' : 'No Tamper alarm';
    decoded.intrusionDetected = (bytes[n] & 0b00000001); // ? 'Intrusion alarm detected' : 'No Intrusion';
    n++;

    // CNT Unsigned int (16 bits)
    decoded.intrusionCount = (bytes[n++] << 8) | bytes[n];

    return decoded;
}
function base64ToBytes(str) {
    return atob(str)
        .split("")
        .map(function (c) {
        return c.charCodeAt(0);
        });
}
function decode(payload, metadata)
{
    /* Ignorer hvis ikke fPort 20 eller 9 */
    if(payload.fPort != 20 && payload.fPort != 9)
        return;

    /* Find timestamp + sensor ID */
    let timestamp = payload.rxInfo[0].time != null ?
                    payload.rxInfo[0].time :
                    new Date().toJSON();
    let sensorId =  payload.devEUI.slice(-4);

    /* Skab retur-objekt */
    let res = {};

    res.id = "pir-" + sensorId + "-ascoel";
    res.type=  "motion-sensor";

    res.observedAt = timestamp;
    res.name = metadata.name;

    /* Data */
    let data = Decoder( base64ToBytes(payload.data), payload.fPort );
    res.values = [];

    for(let i = 0;i < Object.keys(data).length; i++)
    {
        let key = (Object.keys(data))[i];
        res.values.push({
            "type": key,
            "value": data[key]
        })
    }
    
    return res;
}
