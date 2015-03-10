
var React = require("react");
var $ = require('jquery');
var HomeComponents = React.createFactory(require("components/home"));

var app = {

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        console.log("Device ready, will try to render React component!");

        var mountNode = document.getElementById('reactAppContainer');

        var mountComponent = HomeComponents({
            name: "Dear user!"
        });

        React.render(mountComponent, mountNode);

        console.log("React should now be loaded");
    }

};

app.initialize();

$(function(){
  app.onDeviceReady();
});
