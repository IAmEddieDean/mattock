var Fs = require('fs');
var Path = require('path');

function mattock(str){

  var path = Path.join(__dirname, str);
  var plugins = [];

  requireDir(path);

  function requireDir(dir){
    Fs.readdirSync(dir).forEach(function(file){
      var full = dir + '/' + file;

      if(Fs.statSync(full).isDirectory()){
        requireDir(full);
      }else{
        plugins.push(require(full));
      }
    });
  }

  return plugins;
}

module.exports = mattock;
