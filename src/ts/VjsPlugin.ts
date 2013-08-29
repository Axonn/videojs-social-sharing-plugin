///<reference path='Plugin.ts'/>
///<reference path='../../../definitions/VideoJS.d.ts'/>

_V_.plugin("sharingPlugin", function (options) {
    var plugin = new Sharing.Plugin(this);
    plugin.enable();
});