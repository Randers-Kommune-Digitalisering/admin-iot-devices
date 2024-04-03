/**

Tilpasset af
 __             __   ___  __   __     
|__)  /\  |\ | |  \ |__  |__) /__`    
|  \ /~~\ | \| |__/ |___ |  \ .__/    
      __                         ___                             
|__/ /  \  |\/|  |\/| |  | |\ | |__  
|  \ \__/  |  |  |  | \__/ | \| |___ 

ELSYS simple payload decoder. 
Use it as it is or remove the bugs :)
www.elsys.se
peter@elsys.se

*/
const TYPE_TEMP = 0x01; //temp 2 bytes -3276.8°C -->3276.7°C
const TYPE_RH = 0x02; //Humidity 1 byte  0-100%
const TYPE_ACC = 0x03; //acceleration 3 bytes X,Y,Z -128 --> 127 +/-63=1G
const TYPE_LIGHT = 0x04; //Light 2 bytes 0-->65535 Lux
const TYPE_MOTION = 0x05; //No of motion 1 byte  0-255
const TYPE_CO2 = 0x06; //Co2 2 bytes 0-65535 ppm
const TYPE_VDD = 0x07; //VDD 2byte 0-65535mV
const TYPE_ANALOG1 = 0x08; //VDD 2byte 0-65535mV
const TYPE_GPS = 0x09; //3bytes lat 3bytes long binary
const TYPE_PULSE1 = 0x0A; //2bytes relative pulse count
const TYPE_PULSE1_ABS = 0x0B; //4bytes no 0->0xFFFFFFFF
const TYPE_EXT_TEMP1 = 0x0C; //2bytes -3276.5C-->3276.5C
const TYPE_EXT_DIGITAL = 0x0D; //1bytes value 1 or 0
const TYPE_EXT_DISTANCE = 0x0E; //2bytes distance in mm
const TYPE_ACC_MOTION = 0x0F; //1byte number of vibration/motion
const TYPE_IR_TEMP = 0x10; //2bytes internal temp 2bytes external temp -3276.5C-->3276.5C
const TYPE_OCCUPANCY = 0x11; //1byte payload
const TYPE_WATERLEAK = 0x12; //1byte payload 0-255
const TYPE_GRIDEYE = 0x13; //65byte temperature payload 1byte ref+64byte external temp
const TYPE_PRESSURE = 0x14; //4byte pressure payload (hPa)
const TYPE_SOUND = 0x15; //2byte sound payload (peak/avg)
const TYPE_PULSE2 = 0x16; //2bytes 0-->0xFFFF
const TYPE_PULSE2_ABS = 0x17; //4bytes no 0->0xFFFFFFFF
const TYPE_ANALOG2 = 0x18; //2bytes voltage in mV
const TYPE_EXT_TEMP2 = 0x19; //2bytes -3276.5C-->3276.5C
const TYPE_EXT_DIGITAL2 = 0x1A; // 1bytes value 1 or 0
const TYPE_EXT_ANALOG_UV = 0x1B; // 4 bytes signed int (uV)
const TYPE_DEBUG = 0x3D; // 4bytes debug

function bin16dec(bin)
{
    var num=bin&0xFFFF;
    if (0x8000 & num)
        num = - (0x010000 - num);
    return num;
}
function bin8dec(bin)
{
    var num=bin&0xFF;
    if (0x80 & num) 
        num = - (0x0100 - num);
    return num;
}
function hexToBytes(hex)
{
    for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}

function DecodeElsysPayload(payload)
{
    var values = [];

    for(i=0; i < payload.length; i++)
    {
        let type;
        let value;
        
        switch (payload[i])
        {
        case TYPE_TEMP: //Temperature
            type = "temperature";
            var temp = (payload[i + 1] << 8) | (payload[i + 2]);
            temp = bin16dec(temp);
            value = temp / 10;
            i += 2;
            break;
        case TYPE_RH: //Humidity
            type = "humidity";
            var rh = (payload[i + 1]);
            value = rh;
            i += 1;
            break;
        case TYPE_ACC: //Acceleration
            type = "acceleration";
            let x = bin8dec(payload[i + 1]);
            let y = bin8dec(payload[i + 2]);
            let z = bin8dec(payload[i + 3]);
            value = { "x": x, "y": y, "z": z };
            i += 3;
            break;
        case TYPE_LIGHT: //Light
            type = "light";
            value = (payload[i + 1] << 8) | (payload[i + 2]);
            i += 2;
            break;
        case TYPE_MOTION: //Motion device(PIR)
            type = "motion";
            value = (payload[i + 1]);
            i += 1;
            break;
        case TYPE_CO2: //CO2
            type = "co2";
            value = (payload[i + 1] << 8) | (payload[i + 2]);
            i += 2;
            break;
        case TYPE_VDD: //Battery level
            type = "battery";
            value = (payload[i + 1] << 8) | (payload[i + 2]);
            i += 2;
            break;
        case TYPE_ANALOG1: //Analog input 1
            type = "analog";
            value = (payload[i + 1] << 8) | (payload[i + 2]);
            i += 2;
            break;
        case TYPE_GPS: //gps
            type = "gps";
            i++;
            let lat = (payload[i + 0] | payload[i + 1] << 8 | payload[i + 2] << 16 | (payload[i + 2] & 0x80 ? 0xFF << 24 : 0)) / 10000;
            let long = (payload[i + 3] | payload[i + 4] << 8 | payload[i + 5] << 16 | (payload[i + 5] & 0x80 ? 0xFF << 24 : 0)) / 10000;
            value = { "lat": lat, "long": long };
            i += 5;
            break;
        case TYPE_PULSE1: //Pulse input 1
            type = "pulse";
            value = (payload[i + 1] << 8) | (payload[i + 2]);
            i += 2;
            break;
        case TYPE_PULSE1_ABS: //Pulse input 1 absolute value
            type = "pulse_absolute";
            var pulseAbs = (payload[i + 1] << 24) | (payload[i + 2] << 16) | (payload[i + 3] << 8) | (payload[i + 4]);
            value = pulseAbs;
            i += 4;
            break;
        case TYPE_EXT_TEMP1: //External temp
            type = "temperature_external";
            var temp = (payload[i + 1] << 8) | (payload[i + 2]);
            temp = bin16dec(temp);
            value = temp / 10;
            i += 2;
            break;
        case TYPE_EXT_DIGITAL: //Digital input
            type = "digital"
            value = (payload[i + 1]);
            i += 1;
            break;
        case TYPE_EXT_DISTANCE: //Distance device input
            type = "distance";
            value = (payload[i + 1] << 8) | (payload[i + 2]);
            i += 2;
            break;
        case TYPE_ACC_MOTION: //Acc motion
            type = "acc_motion";
            value = (payload[i + 1]);
            i += 1;
            break;
        case TYPE_IR_TEMP: //IR temperature
            type = "temperature_ir"
            var iTemp = (payload[i + 1] << 8) | (payload[i + 2]);
            iTemp = bin16dec(iTemp);
            var eTemp = (payload[i + 3] << 8) | (payload[i + 4]);
            eTemp = bin16dec(eTemp);
            let internalTemp = iTemp / 10;
            let externalTemp = eTemp / 10;
            value = { "internal": internalTemp, "external": externalTemp };
            i += 4;
            break;
        case TYPE_OCCUPANCY: //Body occupancy
            type = "occupancy";
            value = (payload[i + 1]);
            i += 1;
            break
        case TYPE_WATERLEAK: //Water leak
            type = "waterleak";
            value = (payload[i + 1]);
            i += 1;
            break
        case TYPE_GRIDEYE: //Grideye payload
            type = "grideye";
            var ref = payload[i+1];
            i++;
            value = [];
            for(var j = 0; j < 64; j++) {
                value[j] = ref + (payload[1+i+j] / 10.0);
            }
            i += 64;
            break
        case TYPE_PRESSURE: //External Pressure
            type = "pressure";
            var temp = (payload[i + 1] << 24) | (payload[i + 2] << 16) | (payload[i + 3] << 8) | (payload[i + 4]);
            value = temp / 1000;
            i += 4;
            break
        case TYPE_SOUND: //Sound
            type = "sound";
            let peak = payload[i + 1];
            let avg = payload[i + 2];
            value = { "peak": peak, "avg": avg };
            i += 2;
            break
        case TYPE_PULSE2: //Pulse 2
            type = "pulse2";
            value = (payload[i + 1] << 8) | (payload[i + 2]);
            i += 2;
            break
        case TYPE_PULSE2_ABS: //Pulse input 2 absolute value
            type = "pulse2_absolute";
            value = (payload[i + 1] << 24) | (payload[i + 2] << 16) | (payload[i + 3] << 8) | (payload[i + 4]);
            i += 4;
            break
        case TYPE_ANALOG2: //Analog input 2
            type = "analog2";
            value = (payload[i + 1] << 8) | (payload[i + 2]);
            i += 2;
            break
        case TYPE_EXT_TEMP2: //External temp 2
            type = "temperature_external2"
            var temp = (payload[i + 1] << 8) | (payload[i + 2]);
            temp = bin16dec(temp);
            if(typeof value === "number") {
                value = [value];
            } 
            if(typeof value === "object") {
                value.push(temp / 10);
            } else {
                value = temp / 10;
            }
            i += 2;
            break
        case TYPE_EXT_DIGITAL2: //Digital input 2
            type = "digital2";
            value = (payload[i + 1]);
            i += 1;
            break
        case TYPE_EXT_ANALOG_UV: //Load cell analog uV
            type = "analog_uv";
            value = (payload[i + 1] << 24) | (payload[i + 2] << 16) | (payload[i + 3] << 8) | (payload[i + 4]);
            i += 4;
            break
        default: //somthing is wrong with payload
            i = payload.length;
            break
        }

        values.push({
            "type": type,
            "value": value
        })

    }
    return values;
}

function base64ToHex(str) {
        const raw = atob(str);
        let result = '';
        for (let i = 0; i < raw.length; i++) {
        const hex = raw.charCodeAt(i).toString(16);
        result += (hex.length === 2 ? hex : '0' + hex);
        }
    return result.toUpperCase();
    }
    

   function decode(payload, metadata)
   {
       /* Find timestamp + device ID */
        timestamp = payload.rxInfo[0].time != null ?
                    payload.rxInfo[0].time :
                    new Date().toJSON();
        let deviceId = payload.devEUI.slice(-4);

        /* Skab retur-objekt */
        let res = {};

        res.id = "elsys-device_" + deviceId;
        res.type=  "multipurpose-device";

        res.observedAt = timestamp;
        res.name = metadata.name;

        res.values = base64ToHex(payload.data).toString();
        res.values = DecodeElsysPayload(hexToBytes(res.values));
        
        res.location = payload.rxInfo[0].location;

        return [res];
    }
