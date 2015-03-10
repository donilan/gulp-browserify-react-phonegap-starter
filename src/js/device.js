var $ = require('jquery');

var Device = {

  check_connection: function() {

    var networkState = Cordova.navigator.connection.type;
    
    var states = {};
    states[Cordova.Connection.UNKNOWN]  = 'Unknown connection';
    states[Cordova.Connection.ETHERNET] = 'Ethernet connection';
    states[Cordova.Connection.WIFI]     = 'WiFi connection';
    states[Cordova.Connection.CELL_2G]  = 'Cell 2G connection';
    states[Cordova.Connection.CELL_3G]  = 'Cell 3G connection';
    states[Cordova.Connection.CELL_4G]  = 'Cell 4G connection';
    states[Cordova.Connection.CELL]     = 'Cell generic connection';
    states[Cordova.Connection.NONE]     = 'No network connection';
    
    console.log('Connection type: ' + states[networkState]);
  },
  information: function() {
    try {
      console.log('device.name: '     + device.name);
      console.log('device.cordova: '  + device.cordova);
      console.log('device.platform: ' + device.platform);
      console.log('device.uuid: '     + device.uuid);
      console.log('device.version: '  + device.version);
      console.log('device.model: '    + device.model);
    } catch (e) {
      console.log("Can't print cordova information. " + e);
    }
  },
  scan: function() {
    cordova.plugins.barcodeScanner.scan(
      function (result) {
        console.log("We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled);
      }, 
      function (error) {
        alert("Scanning failed: " + error);
      }
    );
  },
  is_phone: function() {
    return /^file:\/{3}[^\/]/i.test(window.location.href) && /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent);
  },
  ready: function(callback) {
    if( this.is_phone() ) {
      document.addEventListener('deviceready', callback, false);
    } else {
      $(callback);
    }
  }
};


module.exports = Device;

