///<reference path='SharingButton.ts'/>
///<reference path='SharingMenuItem.ts'/>
///<reference path='../definitions/JQuery.d.ts'/>
///<reference path='../../bower_components/videojs-plugin-components/vjsplugincomponents.d.ts'/>
///<reference path='DefaultShareSources.ts'/>

module Sharing {
    export class Plugin {
        _player: _V_.Player;

        constructor(player: _V_.Player) {
            this._player = player;
        }

        enable() {
            var button = new Sharing.SharingButton(new VjsPluginComponents.Player(this._player), Sharing.defaultDefinitions);
            this._player["controlBar"].addChild(button);
        }
    }
}