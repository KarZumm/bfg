# README

Random data generator that works with list files.

listfile.list content
---------------------

# comments are marked with starting hash

IPADDRv4

Internal IP: {INTERNALIPv4}

Public IP: {EXTERNALIPv4}

INTERNALIPv4

172.{#16-21}.{#0-254}.{#1-254}

192.168.{#0-254}.{#1-254}

10.{#0-254}.{#0-254}.{#1-254}

EXTERNALIPv4

{#1-254}.{#0-254}.{#0-254}.{#1-254}

---------------------

example usage: `node .\example.js --listFile .\data\IP.list --listName IPADDRv4 --count 10`

Works with `IP.list` file and starts working with `IPADDRv4` list and produces `10` results.
Chooses random line from `IPADDRv4` list. That list produces new random outputs from other lists.
Result is 10 random internal or external IPv4 IP addresses.





[this is a port from original nonsense]
