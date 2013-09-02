/// <reference path="../../src/definitions/VideoJS.d.ts" />
/// <reference path="../../src/definitions/JQuery.d.ts" />
/// <reference path="../../bower_components/videojs-plugin-components/vjsplugincomponents.d.ts" />
declare module Sharing {
    interface IShareSource {
        label: string;
        link: string;
        imageSource: string;
        largeImageSource: string;
        popupHeight: number;
        popupWidth: number;
        icon: string;
    }
}
declare module Sharing {
    var defaultDefinitions: IShareSource[];
}
declare module Sharing {
    class SharingMenuItem extends VjsPluginComponents.MenuItem {
        public _source: Sharing.IShareSource;
        constructor(player: VjsPluginComponents.IPlayer, source: Sharing.IShareSource);
        public onClick(): void;
        public createEl(type?, props?): HTMLElement;
    }
}
declare module Sharing {
    class SharingMenu extends VjsPluginComponents.Menu {
        public kind: string;
        public className: string;
        public buttonText: string;
        constructor(player: VjsPluginComponents.IPlayer, sources: Sharing.IShareSource[]);
        public createItems(sources: Sharing.IShareSource[]): void;
    }
}
declare module Sharing {
    class SharingButton extends VjsPluginComponents.Component {
        public kind: string;
        public className: string;
        public buttonText: string;
        public menu: Sharing.SharingMenu;
        constructor(player: VjsPluginComponents.IPlayer, sources: Sharing.IShareSource[]);
        public createEl(): HTMLElement;
        public buildCSSClass(): string;
        public onFocus(): void;
        public onBlur(): void;
        public onClick(): void;
    }
}
declare module Sharing {
    class Plugin {
        public _player: _V_.Player;
        constructor(player: _V_.Player);
        public enable(): void;
    }
}
