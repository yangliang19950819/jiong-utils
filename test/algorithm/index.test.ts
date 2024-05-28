import { getValueByKey } from "../../src/algorithm";

describe('algorithm', () => {
    test('getValueByKey', () => {
        expect(getValueByKey({a:{b:{c:6}}}, "c")).toStrictEqual([6])
    });
})