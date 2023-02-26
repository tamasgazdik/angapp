/*
JS file created for executing below commands
Currently it only installs python I think
TODO: find out why and correct
*/
var exec=require('child_process').exec;

exec('npm cache clear --force');
exec('npm install -g python');
exec('npm install -g angular-cli');
exec('npm install');