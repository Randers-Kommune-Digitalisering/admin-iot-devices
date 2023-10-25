SELECT latitude AS latitude,
       longitude AS longitude,
       rssi AS rssi
FROM
  (select longitude.observedAt,
          longitude.value as longitude,
          latitude.value as latitude,
          snr.value as snr,
          rssi.value as rssi,
          sats.value as sats
   from os2iot_field_tester_64c4 as longitude
   left join os2iot_field_tester_64c4 as latitude on longitude.observedAt = latitude.observedAt
   left join os2iot_field_tester_64c4 as snr on longitude.observedAt = snr.observedAt
   left join os2iot_field_tester_64c4 as rssi on longitude.observedAt = rssi.observedAt
   left join os2iot_field_tester_64c4 as sats on longitude.observedAt = sats.observedAt
   where longitude.type = 'longitude'
     and (latitude.type is null
          or latitude.type = 'latitude')
     and (snr.type is null
          or snr.type = 'snr')
     and (rssi.type is null
          or rssi.type = 'rssi')
     and (sats.type is null
          or sats.type = 'sats')) AS virtual_table
GROUP BY latitude,
         longitude,
         rssi
LIMIT 10000;
