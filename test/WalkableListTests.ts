/// <reference path="../src/definitions/Jasmine.d.ts" />
/// <reference path="../src/ts/ObservableRepository.ts" />
/// <reference path="../src/ts/WalkableList.ts" />
/// <reference path="../src/ts/EventSortingfunction.ts" />
/// <reference path="../src/ts/Observable.ts" />
/// <chutzpah_reference path="../../../lib/JQuery/jquery-1.9.1.js" />

describe("walkableList", () => {
    var entity = (id: number) => { return { id: id } }
    var baseRepository: VjsPlugin.IObservableRepository;

    beforeEach(() => {
        baseRepository = new VjsPlugin.ObservableRepository(new VjsPlugin.Observable());
    });

    it("updates itself on repository adding", () => {
        var sut = new VjsPlugin.WalkableList((a,b) => { return parseInt(a.id) - parseInt(b.id) },
                    (a) => {
                        return true
                    },
                    baseRepository
                );

        baseRepository.create(entity(1));

        var testEntity = sut.getCurrent();

        expect(testEntity).toEqual(entity(1));
    });
});