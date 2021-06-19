const chooseBestDistance = require('../src/ChooseBestDistance');


describe('ChooseBestDistance', () => {

    it('Expect null', () => {
        expect(chooseBestDistance(163, 3, [50])).toBeNull()
    })

    it('Expect error, because of ls = []', () => {
        expect(() => chooseBestDistance(163, 3, [])).toThrow(TypeError)
    })

    it('Expect error, because of ls contains negative num', () => {
        expect(() => chooseBestDistance(163, 3, [-1])).toThrow(TypeError)
    })

    it('Expect error, because of k = 0', () => {
        expect(() => chooseBestDistance(163, 0, [])).toThrow(TypeError)
    })

    it('k = 2', () => {
        expect(chooseBestDistance(108, 2, [51, 56, 58, 59, 61])).toEqual(107)
    })

    it('k = 3', () => {
        expect(chooseBestDistance(174, 3, [51, 56, 58, 59, 61])).toEqual(173)
    })

});