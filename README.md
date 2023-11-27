# 🌡️ vis-os2iot-data
|  [**Beskrivelse**](#beskrivelse)  |  [**Afhængigheder**](#afh%C3%A6ngigheder)  |

## Beskrivelse
Formålet med applikationen er at modtage og lagre store mængder IoT bygningsdata fra offentlige institutioner. Data lagres i lokal database og i [KMD EnergyKey](https://www.kmd.dk/loesninger-og-services/loesninger/energi/kmd-energykey).


## Dataflow
Sensordata pushes fra OS2IoT til applikationen via en POST request med basic authentication.

Applikationen modtager dataobjekter som følger denne JSON objekt struktur:

    [
	    {
		    "id": id,
		    "type": type,
		    "observedAt" timestamp,
		    "name": name,
		    "values": [
			    {
				    "type": type,
				    "value": value
			    }
		    ]
	    }
    ]
Applikationen gemmer data i MariaDB. Metadata for alle sensorer gemmes i samlet metadata tabel. Hver individuel sensors data gennes i egen tabel hvor hver datatype gemmes i separat række (timestamp, datatype, værdi). Her antages det at sensorens **id** er en unik værdi. 

## Afhængigheder
Løsningen er afhængig af en række :gear: software komponenter og :cloud: netværksadgange til eksterne ressourcer for at fungere.

:gear: | [Node.js 18](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)  |  [Node-RED 3.0.2](https://nodered.org/docs/getting-started/windows)  |

:cloud: | Indkommende POST requests |
