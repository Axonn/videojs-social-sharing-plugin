///<reference path='SharingButton.ts'/>
///<reference path='SharingMenuItem.ts'/>
///<reference path='../../../definitions/JQuery.d.ts'/>
///<reference path='../common/Timer.ts'/>
///<reference path='../common/DateService.ts'/>
///<reference path='DefaultShareSources.ts'/>

module Sharing {
    export class Plugin {
        _player: _V_.Player;

        constructor(player: _V_.Player) {
            this._player = player;
        }

        enable() {
            var button = new Sharing.SharingButton(new VjsPlugin.Player(this._player), Sharing.defaultDefinitions);
            this._player["controlBar"].addChild(button);
        }
    }
}