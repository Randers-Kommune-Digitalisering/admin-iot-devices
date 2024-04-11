/*
 * 
 * Bygget af
 __             __   ___  __   __     
|__)  /\  |\ | |  \ |__  |__) /__`    
|  \ /~~\ | \| |__/ |___ |  \ .__/    
      __                         ___                             
|__/ /  \  |\/|  |\/| |  | |\ | |__  
|  \ \__/  |  |  |  | \__/ | \| |___ 

* Dekoder Zenner / Brunata Minomess Water Jet + Zelsius C5 IUF
*
*/

function Decoder(bytes, port)
{
    var decoded = {};

    //decoded.hex = bytes.toString('hex');

    let packetType = (bytes[0] & 0b11110000) >> 4;
    let packetSubtype = bytes[0] & 0b00001111;
    //let type = "Packet_" + packetType + "_" + packetSubtype;
    
    // Read 4 bytes as a single value (MSB - Big-Endian)
    //decoded.valueMSB = bytes.readUInt32BE(1); 

    // Read 4 bytes as a single value (LSB - Little-Endian)
    decoded.consumption = bytes.readUInt32LE(1); 

    //decoded.data = (bytes[0] << 8) | bytes[1]; // Assuming data is 16-bit in bytes 0 and 1
    
    return decoded;
}

function decode(payload, metadata)
{
    
    /* Find timestamp + sensor ID */
    timestamp = payload.rxInfo[0].time != null ?
                payload.rxInfo[0].time :
                new Date().toJSON();

    /* Skab retur-objekt */
    let res = {};

    res.id = "device-" + payload.devEUI.slice(-6);
    res.deviceEui = payload.devEUI;
    res.observedAt = timestamp;

    let bytes = Buffer.from(payload.data, 'base64');
    var data = Decoder(bytes);
    res.values = [];
    
    for(let i = 0; i < Object.keys(data).length; i++)
    {
        const key = (Object.keys(data))[i];
        
        const obj = {
            "type": key,
            "value": data[key]
        }

        res.values.push(obj);
    }

    res.rssi = payload.rxInfo[0].rssi;
    res.batteryLevel = metadata.lorawanSettings.deviceStatusBattery <= 100 ?
                       metadata.lorawanSettings.deviceStatusBattery / 100 : -1;

    return res;
}