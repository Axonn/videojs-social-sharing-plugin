///<reference path='../../../definitions/VideoJS.d.ts'/>
///<reference path='../../../definitions/JQuery.d.ts'/> 
///<reference path='SharingMenuItem.ts'/>
///<reference path='SharingMenu.ts'/>
///<reference path='../vjsplugin/Menu.ts'/>
///<reference path='../vjsplugin/IPlayer.ts'/>
///<reference path='IShareSource.ts'/>

module Sharing {
    export class SharingMenu extends VjsPlugin.Menu {
        kind: string = "share";
        className: string = "vjs-share-button";
        buttonText: string = "";

        constructor(player: VjsPlugin.IPlayer, sources: Sharing.IShareSource[]) {
            super(player);

            var listItem = jQuery(document.createElement("li")).addClass("vjs-menu-title").html(this.kind);

            // Add a title list item to the top
            jQuery(this.el()).append(listItem);

            var downDiv = jQuery(document.createElement("div")).addClass("vjs-menu-arrow");
            var downArrow = jQuery(document.createElement("li")).append(downDiv).addClass("vjs-menu-arrow");

            // Add a title list item to the top
            jQuery(this.el()).append(listItem);

            this.createItems(sources);

            jQuery(this.el()).append(downArrow);
        }

        // Create a menu item for each text track
        createItems(sources: Sharing.IShareSource[]) {
            jQuery.each(sources, (index, source) => {
                this.addItem(new Sharing.SharingMenuItem(this._player, source));
            });
        }
    }
}