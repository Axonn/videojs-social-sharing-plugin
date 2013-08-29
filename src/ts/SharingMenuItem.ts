///<reference path='../../../definitions/VideoJS.d.ts'/>
///<reference path='../../../definitions/JQuery.d.ts'/>
///<reference path='../vjsplugin/IPlayer.ts'/>
///<reference path='../vjsplugin/Player.ts'/>
///<reference path='../vjsplugin/MenuItem.ts'/>
///<reference path='IShareSource.ts'/>

module Sharing {
    export class SharingMenuItem extends VjsPlugin.MenuItem {
        _source: Sharing.IShareSource;

        constructor(player: VjsPlugin.IPlayer, source: Sharing.IShareSource) {
            this._source = source;

            super(player);

            jQuery(document).ready(() => {
                if (jQuery(this.el()).children('.vjs-share-icon').css("font-size") === "24px") {
                    jQuery(this.el()).children('.vjs-share-icon').attr("src", this._source.largeImageSource);
                }
            });
        }

        onClick() {
                window.open(this._source.link, '', 'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no,width=' + this._source.popupWidth + ',height=' + this._source.popupHeight);
                this._player.trigger('share', { share: this._source.label });
        }

        createEl(type?, props?) {
            return super.createEl('li', jQuery.extend({
                className: 'vjs-menu-item',
                innerHTML: "<img class='vjs-share-icon' src='" +this._source.imageSource + "' />" + "<div class='vjs-share-network'>" +this._source.label + "</div>"
                //innerHTML: "<div class='vjs-share-network'><span data-icon='" + this._source.icon + "'></span><span class='vjs-share-icon-background' data-icon='&#61829;'></span>" + this._source.label + "</div>"
            }, props));
        };


    }
}