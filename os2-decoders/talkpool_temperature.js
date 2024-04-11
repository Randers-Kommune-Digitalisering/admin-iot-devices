/*
 *
 * Tilpasset af
 __             __   ___  __   __     
|__)  /\  |\ | |  \ |__  |__) /__`    
|  \ /~~\ | \| |__/ |___ |  \ .__/    
      __                         ___                             
|__/ /  \  |\/|  |\/| |  | |\ | |__  
|  \ \__/  |  |  |  | \__/ | \| |___ 

* Benyttes til Talkpool temperatur- og luftfugtighedsmåling
*
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

        /* Find timestamp + sensor ID */
        timestamp = payload.rxInfo[0].time != null ?
                    payload.rxInfo[0].time :
                    new Date().toJSON();

        /* Skab retur-objekt */
        let res = {};

        res.id = "device-" + payload.devEUI.slice(-6);
        res.deviceEui = payload.devEUI;
        res.observedAt = timestamp;

        /* Konverter data */
        buf = base64ToBytes(payload.data);
        temp = (((buf[0] << 4) | (buf[2] >>    4)) - 800)/10;
        hum =  (((buf[1] << 4) | (buf[2] &   0xf)) - 250)/10;
        //raw = payload.data;

        res.values = [
            {
                "type": "temperature",
                "value": temp
            },
            {
                "type": "humidity",
                "value": hum
            }
        ]

        /*res.location = {
            "type": "GeoLocation",
            "value": {
                "type": "Point",
                "coordinates":[Number(metadata.location.coordinates[0]), Number(metadata.location.coordinates[1])]
            }        
        }*/

        res.rssi = payload.rxInfo[0].rssi;
        res.batteryLevel = metadata.lorawanSettings.deviceStatusBattery <= 100 ?
                       metadata.lorawanSettings.deviceStatusBattery / 100 : -1;

        return res;

    }
}
    