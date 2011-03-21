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

replica --help       : show help
replica -b {command} : open Replica page with specified browsr command (for Linux, BSD)
replica -o           : open Replica page open command (for Mac OS X)
replica -p {port}    : run Replica server on specified port
replica -d           : show debug messages on STDOUT
