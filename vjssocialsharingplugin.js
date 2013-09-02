var Sharing;
(function (Sharing) {
    Sharing.defaultDefinitions = [
        {
            label: 'facebook',
            link: 'http://www.facebook.com/sharer/sharer.php?u=' + window.location.href,
            imageSource: 'http://atlantis-js.s3.amazonaws.com/release/icons/facebook16x16.png',
            largeImageSource: 'http://atlantis-js.s3.amazonaws.com/release/icons/facebook24x24.png',
            popupHeight: 400,
            popupWidth: 450,
            icon: "&#xe00b"
        },
        {
            label: 'twitter',
            link: 'https://twitter.com/intent/tweet?original_referer=' + window.location.href + '&url=' + window.location.href,
            imageSource: 'http://atlantis-js.s3.amazonaws.com/release/icons/twitter16x16.png',
            largeImageSource: 'http://atlantis-js.s3.amazonaws.com/release/icons/twitter24x24.png',
            popupHeight: 500,
            popupWidth: 600,
            icon: "&#xe00c"
        },
        {
            label: 'linkedIn',
            link: 'https://www.linkedin.com/cws/share?url=' + window.location.href,
            imageSource: 'http://atlantis-js.s3.amazonaws.com/release/icons/linkedin16x16.png',
            largeImageSource: 'http://atlantis-js.s3.amazonaws.com/release/icons/linkedin24x24.png',
            popupHeight: 400,
            popupWidth: 450,
            icon: "&#xe00e"
        },
        {
            label: 'google+',
            link: 'https://plus.google.com/share?url=' + window.location.href,
            imageSource: 'http://atlantis-js.s3.amazonaws.com/release/icons/googleplus16x16.png',
            largeImageSource: 'http://atlantis-js.s3.amazonaws.com/release/icons/googleplus24x24.png',
            popupHeight: 400,
            popupWidth: 450,
            icon: "&#xe007"
        },
        {
            label: 'tumblr',
            link: 'http://tumblr.com/share',
            imageSource: 'http://atlantis-js.s3.amazonaws.com/release/icons/tumblr16x16.png',
            largeImageSource: 'http://atlantis-js.s3.amazonaws.com/release/icons/tumblr24x24.png',
            popupHeight: 500,
            popupWidth: 500,
            icon: "&#xe00d"
        }
    ];
})(Sharing || (Sharing = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Sharing;
(function (Sharing) {
    var SharingMenuItem = (function (_super) {
        __extends(SharingMenuItem, _super);
        function SharingMenuItem(player, source) {
            var _this = this;
            this._source = source;

            _super.call(this, player);

            jQuery(document).ready(function () {
                if (jQuery(_this.el()).children('.vjs-share-icon').css("font-size") === "24px") {
                    jQuery(_this.el()).children('.vjs-share-icon').attr("src", _this._source.largeImageSource);
                }
            });
        }
        SharingMenuItem.prototype.onClick = function () {
            window.open(this._source.link, '', 'resizable=no,status=no,location=no,toolbar=no,menubar=no,fullscreen=no,scrollbars=no,dependent=no,width=' + this._source.popupWidth + ',height=' + this._source.popupHeight);
            this._player.trigger('share', { share: this._source.label });
        };

        SharingMenuItem.prototype.createEl = function (type, props) {
            return _super.prototype.createEl.call(this, 'li', jQuery.extend({
                className: 'vjs-menu-item',
                innerHTML: "<img class='vjs-share-icon' src='" + this._source.imageSource + "' />" + "<div class='vjs-share-network'>" + this._source.label + "</div>"
            }, props));
        };
        return SharingMenuItem;
    })(VjsPluginComponents.MenuItem);
    Sharing.SharingMenuItem = SharingMenuItem;
})(Sharing || (Sharing = {}));
var Sharing;
(function (Sharing) {
    var SharingMenu = (function (_super) {
        __extends(SharingMenu, _super);
        function SharingMenu(player, sources) {
            _super.call(this, player);
            this.kind = "share";
            this.className = "vjs-share-button";
            this.buttonText = "";

            var listItem = jQuery(document.createElement("li")).addClass("vjs-menu-title").html(this.kind);

            jQuery(this.el()).append(listItem);

            var downDiv = jQuery(document.createElement("div")).addClass("vjs-menu-arrow");
            var downArrow = jQuery(document.createElement("li")).append(downDiv).addClass("vjs-menu-arrow");

            jQuery(this.el()).append(listItem);

            this.createItems(sources);

            jQuery(this.el()).append(downArrow);
        }
        SharingMenu.prototype.createItems = function (sources) {
            var _this = this;
            jQuery.each(sources, function (index, source) {
                _this.addItem(new Sharing.SharingMenuItem(_this._player, source));
            });
        };
        return SharingMenu;
    })(VjsPluginComponents.Menu);
    Sharing.SharingMenu = SharingMenu;
})(Sharing || (Sharing = {}));
var Sharing;
(function (Sharing) {
    var SharingButton = (function (_super) {
        __extends(SharingButton, _super);
        function SharingButton(player, sources) {
            this.kind = "sharing";
            this.className = "vjs-sharing-button";
            this.buttonText = "";

            _super.call(this, player);

            this._player = player;

            this.menu = new Sharing.SharingMenu(this._player, sources);
            this.addChild(this.menu);
        }
        SharingButton.prototype.createEl = function () {
            var properties = {
                className: this.buildCSSClass(),
                innerHTML: '<div><span class="vjs-quality-text" data-icon="&#57344;">' + this.buttonText + '</span></div>',
                role: "button",
                'aria-live': 'polite',
                tabIndex: 0
            };

            var tagName = "div";

            return _super.prototype.createEl.call(this, tagName, properties);
        };

        SharingButton.prototype.buildCSSClass = function () {
            return "vjs-sharing-button vjs-menu-button vjs-control";
        };

        SharingButton.prototype.onFocus = function () {
            var _this = this;
            this.menu.lockShowing();
            this.menu.el().style.display = "block";

            var items = this.menu.items;

            items[items.length - 1].one("blur", function () {
                _this.menu.unlockShowing();
            });
        };

        SharingButton.prototype.onBlur = function () {
        };

        SharingButton.prototype.onClick = function () {
            var _this = this;
            this.one('mouseout', function () {
                _this.menu.unlockShowing();
                _this.el().blur();
            });
        };
        return SharingButton;
    })(VjsPluginComponents.Component);
    Sharing.SharingButton = SharingButton;
})(Sharing || (Sharing = {}));
var Sharing;
(function (Sharing) {
    var Plugin = (function () {
        function Plugin(player) {
            this._player = player;
        }
        Plugin.prototype.enable = function () {
            var button = new Sharing.SharingButton(new VjsPluginComponents.Player(this._player), Sharing.defaultDefinitions);
            this._player["controlBar"].addChild(button);
        };
        return Plugin;
    })();
    Sharing.Plugin = Plugin;
})(Sharing || (Sharing = {}));
_V_.plugin("sharingPlugin", function (options) {
    var plugin = new Sharing.Plugin(this);
    plugin.enable();
});
//# sourceMappingURL=file:////home/travis/build/Axonn/videojs-social-sharing-plugin/build/js/vjssocialsharingplugin.js.map
