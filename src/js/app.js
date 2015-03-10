
var React = require("react");

var HomeComponents = React.createFactory(require("components/home"));
var Device = require('./device');

Device.ready(function(){
  console.log("Device ready, will try to render React component!");
  Device.information();
  var mountNode = document.getElementById('reactAppContainer');

  var mountComponent = HomeComponents({
    name: "Dear user!"
  });

  React.render(mountComponent, mountNode);

  console.log("React should now be loaded");
});
