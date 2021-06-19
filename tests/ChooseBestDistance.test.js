const chooseBestDistance = require('../src/ChooseBestDistance');


describe('ChooseBestDistance', () => {

    it('Null test', () => {
        expect(chooseBestDistance(163, 3, [50])).toBeNull()
    })

    it('k = 2', () => {
        expect(chooseBestDistance(108, 2, [51, 56, 58, 59, 61])).toEqual(107)
    })

});