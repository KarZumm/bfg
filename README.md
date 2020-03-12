# README

Random data generator that works with list files. It takes a .list file as an input and substitutes block content between `{}` brackets with random content from that block.

## Comments in list files

Comments in .list files are marked with starting `#`. Comments are, well, comments and ignored.

## List file format

`listName` needs to be specified.

|LISTNAME|
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

example usage: `node .\example.js .\data\SSH.list .\data\IP.list --listName SSHDLOGLINE --count 100`

This will read `SSH.list` and `IP.list` files and combines them. Starts parsing blockname of `SSHDLOGLINE` and produces 100 lines.




[this is a port from original nonsense]
