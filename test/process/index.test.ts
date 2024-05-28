import { debounce } from "../../src/process";

describe('algorithm', () => {
    test('debounce', () => {
        expect(debounce(() => {},100)).toStrictEqual(() => {})
    });
})