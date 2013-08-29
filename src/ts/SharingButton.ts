///<reference path='../../../definitions/VideoJS.d.ts'/>
///<reference path='../../../definitions/JQuery.d.ts'/> 
///<reference path='SharingMenuItem.ts'/>
///<reference path='SharingMenu.ts'/>
///<reference path='../vjsplugin/Component.ts'/>

module Sharing {
    export class SharingButton extends VjsPlugin.Component{
        kind: string;
        className: string;
        buttonText: string;
        menu: Sharing.SharingMenu;

        constructor(player: VjsPlugin.IPlayer, sources: Sharing.IShareSource[]) {
            this.kind = "sharing";
            this.className = "vjs-sharing-button";
            this.buttonText = "";

            super(player);

            this._player = player;

            this.menu = new Sharing.SharingMenu(this._player, sources);
            this.addChild(this.menu);
        }

       /**
         * Create the component's DOM element.
         * @param  {String=} tagName  Element's node type. e.g. 'div'
         * @param  {Object=} attributes An object of element attributes that should be set on the element.
         * @return {Element}
         */
        createEl(): HTMLElement {

            //Add standard Aria and Tabindex info
            var properties = {
                className: this.buildCSSClass(),
                innerHTML: '<div><span class="vjs-quality-text" data-icon="&#57344;">' + this.buttonText + '</span></div>',
                role: "button",
                'aria-live': 'polite',
                tabIndex: 0,
            };

            var tagName = "div";

            return super.createEl(tagName, properties); //super.createEl(type, props);
        }

        buildCSSClass() {
            return "vjs-sharing-button vjs-menu-button vjs-control";
        }

        // Focus - Add keyboard functionality to element
        onFocus() {

            // Show the menu, and keep showing when the menu items are in focus
            this.menu.lockShowing();
            this.menu.el().style.display = "block";

            //// When tabbing through, the menu should hide when focus goes from the last menu item to the next tabbed element.
            var items = this.menu.items;

            items[items.length -1].one("blur", () => {
                this.menu.unlockShowing();
            });
        }

        // Can't turn off list display that we turned on with focus, because list would go away.
        onBlur() { }

        onClick() { 
            /*
            When you click the button it adds focus, which will show the menu indefinitely.
            So we'll remove focus when the mouse leaves the button.
            Focus is needed for tab navigation.
            */
            this.one('mouseout', () => {
                this.menu.unlockShowing();
                this.el().blur();
            });
        }
    }
}