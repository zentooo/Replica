Replica
=======

Replica is REPL to evaluate JavaScript codes on browser context.


Install
-------

git clone git://github.com/zentooo/Replica.git

cd Replica

npm install .

or

npm install replica


Usage
-------

Run **replica** command and open http://127.0.0.1:7009/ (defaullt) with your browser.

* **replica --help** ... show help
* **replica -b {command}** ... open Replica page with specified browser command (for Linux, BSD)
* **replica -o** ... open Replica page with open command (for Mac OS X)
* **replica -p {port}** ... run Replica server with specified port number
* **replica -d** ... show debug messages on STDOUT
* **replica {filenames}** ... Execute local JavaScript files on browser when connected, then exit (no repl)
