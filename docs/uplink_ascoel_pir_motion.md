OPCNT = Total intrusion count

CNTELPS = Number of intrusions before to send the message (MODE 2 or 3 only)

TMELPS = Unsigned int (16 bits) Sampling period (to be used only in MODE 3. Any value is ignored by the sensor if not in MODE 3)

## Goal:

1) Set MODE 3
2) Set TMELPS to 60 seconds
3) Set CNTELPS to 0 (only use TMELPS to send data)
4) Reset OPCNT counter after the uplink

The HEX message the server must send on port 12 is:

```
0A030001006400003C50
```

Where the first byte indicates the total length of the massage (0A -> 10 bytes) and the last one contains
the checksum of the message (50 -> 80 decimal) as explained on chapter 5.
