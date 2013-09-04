/// <reference path="../src/definitions/Jasmine.d.ts" />
/// <reference path="../src/definitions/JQuery.d.ts" />
/// <chutzpah_reference path="../../../lib/JQuery/jquery-1.9.1.js" />
/// <reference path="../src/ts/SharingMenuItem.ts" />
/// <reference path="../src/ts/DefaultShareSources.ts" />

describe("sharing menu item", function () {
    var curriedGetFunctionFromSpy = (spy: jasmine.Spy) => {
        return (functionName: string) => {
            for (var i = 0; i < spy.argsForCall.length; i++) {
                if (spy.argsForCall[i][0] === functionName) {
                    return spy.argsForCall[i][1];
                };
            }
        };
    }

    var player: VjsPluginComponents.IPlayer;
    var triggerEventSpy;
    var playerEventSpy;
    var getVideoSpy;
    var analytics;
    var currentTimeSpy;
    var durationSpy;
    var idSpy;
    var playerId;
    var videoId;
    var eventRepository: VjsPluginComponents.IObservableRepository;
    var createEventSpy;

    beforeEach(() => {
        videoId = "video1";
        playerId = "player1";
        analytics = [];
        playerEventSpy = jasmine.createSpy('playerEvent');
        triggerEventSpy = jasmine.createSpy('triggerEvent');
        getVideoSpy = jasmine.createSpy("player.getVideo").andReturn({
            id: videoId
        });
        currentTimeSpy = jasmine.createSpy("player.currentTime");
        durationSpy = jasmine.createSpy("player.duration");
        idSpy = jasmine.createSpy("player.id").andReturn(playerId);
        createEventSpy = jasmine.createSpy('eventRepo.create')
        eventRepository = {
                remove: jasmine.createSpy('eventRepo.remove'),
                getEntity: jasmine.createSpy('eventRepo.getEntity'),
                create: createEventSpy,
                trigger: jasmine.createSpy('eventRepo.trigger'),
                on: jasmine.createSpy('eventRepo.on'),
                toList: jasmine.createSpy('eventRepo.toList'),
                update: jasmine.createSpy('eventRepo.update'),
                clear: jasmine.createSpy('eventRepo.clear'),
            }

        player = {
            on: playerEventSpy,
            setVideo: jasmine.createSpy("player.setVideo"),
            getVideo: getVideoSpy,
            changeSrcResetTime: jasmine.createSpy("player.changeSrcResetTime"),
            changeSrcRetainTime: jasmine.createSpy("player.changeSrcRetainTime"),
            currentTime: currentTimeSpy,
            id: idSpy,
            trigger: triggerEventSpy,
            dispose: jasmine.createSpy("player.dispose"),
            createEl: jasmine.createSpy("player.createEl"),
            el: jasmine.createSpy("player.el"),
            addChild: jasmine.createSpy("player.addChild"),
            children: jasmine.createSpy("player.children"),
            off: jasmine.createSpy("player.off"),
            one: jasmine.createSpy("player.one"),
            show: jasmine.createSpy("player.show"),
			pause: jasmine.createSpy("player.pause"),
            hide: jasmine.createSpy("player.hide"),
            width: jasmine.createSpy("player.width"),
            height: jasmine.createSpy("player.height"),
            dimensions: jasmine.createSpy("player.dimensions"),
            techName: jasmine.createSpy("player.techName"),
            play: jasmine.createSpy("player.play"),
            lockShowing: jasmine.createSpy("player.lockShowing"),
            unlockShowing: jasmine.createSpy("player.unlockShowing"),
            currentSrc: jasmine.createSpy("player.currentSrc"),
            duration: durationSpy,
            toOriginal: jasmine.createSpy("player.duration"),
            sources: jasmine.createSpy("player.sources"),
            options: jasmine.createSpy("player.options"),
        }
    });

    it("dummytest", function () {
    });
});
