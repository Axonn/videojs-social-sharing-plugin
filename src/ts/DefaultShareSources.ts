///<reference path='IShareSource.ts'/>

module Sharing {
    export var defaultDefinitions: IShareSource[] = [{
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
        }];
}