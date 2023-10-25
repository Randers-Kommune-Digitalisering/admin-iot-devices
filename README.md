# vis-os2iot-data
### Beskrivelse
Sensor data pushes fra OS2IoT til applikationen via en POST request.
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
    
Applikationen gemmer data i MariaDB. Metadata for alle sensorer gemmes i én samlet tabel. Hver sensors individuel data gennes i egen tabel for sensor. Her antages det at **id** er en unik værdi. 
