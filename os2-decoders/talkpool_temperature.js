/**

Tilpasset af
 __             __   ___  __   __     
|__)  /\  |\ | |  \ |__  |__) /__`    
|  \ /~~\ | \| |__/ |___ |  \ .__/    
      __                         ___                             
|__/ /  \  |\/|  |\/| |  | |\ | |__  
|  \ \__/  |  |  |  | \__/ | \| |___ 

*/
function base64ToBytes(str)
{
    return atob(str)
          .split("")
          .map(function (c)
          {
            return c.charCodeAt(0);
          });
}

function decode(payload, metadata)
{

    /* Hvis fPort stemmer overens med enhedens fPort */
    if (payload.fPort == 2)
    {

        /* Konverter data */
        buf = base64ToBytes(payload.data)
        temp = (((buf[0] << 4) | (buf[2] >>    4)) - 800)/10;
        hum =  (((buf[1] << 4) | (buf[2] &   0xf)) - 250)/10;
        //raw = payload.data;

        /* Find timestamp + device ID */
        timestamp = payload.rxInfo[0].time != null ?
                    payload.rxInfo[0].time :
                    new Date().toJSON();
        let deviceId = payload.devEUI.slice(-4);

        /* Skab retur-objekt */
        let res = {};

        res.id = "refrigerator-device_" + deviceId + "-talkpool";
        res.type=  "refrigerator-device";

        res.observedAt = timestamp;
        res.name = metadata.name;

        res.values = [
            {
                "type": "temperature",
                "value": temp
            },
            {
                "type": "humidity",
                "value": hum
            },
        ]

        res.location = {
            "type": "GeoLocation",
            "value": {
                "type": "Point",
                "coordinates":[Number(metadata.location.coordinates[0]), Number(metadata.location.coordinates[1])]
            }        
        }

        return [res];

    }
}
    
