import { readInput } from "../src"

describe('Utilities', () => {
    it('should be able to read the contents of a text file that exists', () => {
        const fileContents = readInput('test/input/test.txt')
        expect(fileContents).toBe('Hello, world!')
    })

    it('should throw an error when reading a file that does not exist', () => {
        const test = () => {
            readInput('path/does/not/exist')
        }

        expect(test).toThrow()
    })
})
