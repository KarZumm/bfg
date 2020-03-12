# README

Random data generator that works with list files. It takes a .list file as an input and substitutes block content between `{}` brackets with random content from that block.

## Comments in list files

Comments in .list files are marked with starting `#`. Comments are, well, comments and ignored.

## List file format

if `listName` is not specified then it will default to a list named `DEFAULT`

|DEFAULT|
|-------|
|{BLOCKNAME}|
||
|BLOCKNAME|
|blockitem1|
|blockitem2|

## Special items in listfile

{[item1|item2|item3} <= returns a random item from list
{#1-100} <= returns a random number between 1-100

## Usage

example usage: `node .\example.js --listFile .\data\IP.list --listName IPADDRv4 --count 10`

Works with `IP.list` file and starts working with `IPADDRv4` list and produces `10` results.
Chooses random line from `IPADDRv4` list. That list produces new random outputs from other lists.
Result is 10 random internal or external IPv4 IP addresses.





[this is a port from original nonsense]
