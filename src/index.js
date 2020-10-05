const ClipCC = require('clipcc-extension');

class SampleExtension extends ClipCC.Extension {
    init() {
        // Codes of your extension
        ClipCC.addCategory({
            categoryId: 'clipcc.example.test',
            messageId: 'Test',
            color: '#66CCFF'
        });
        ClipCC.addBlock({
            opcode: 'clipcc.example.test1',
            type: ClipCC.BlockType.BOOLEAN,
            messageId: 'TEST1 [ARG1] [ARG2]',
            categoryId: 'clipcc.example.test',
            function: args => args.ARG1 === args.ARG2,
            argument: {
                ARG1: {
                    type: ClipCC.ArgumentType.STRING,
                    //default: 'aaa'
                },
                ARG2: {
                    type: ClipCC.ArgumentType.STRING,
                    default: 'bbb'
                }
            }
        });
        ClipCC.addBlock({
            opcode: 'clipcc.example.test2',
            type: ClipCC.BlockType.REPORTER,
            messageId: 'TEST2 [ARG] [BOOL]',
            categoryId: 'clipcc.example.test',
            function: args => args.BOOL ? args.ARG : args.ARG + 2,
            argument: {
                ARG: {
                    type: ClipCC.ArgumentType.NUMBER,
                    default: 1
                },
                BOOL: {
                    type: ClipCC.ArgumentType.BOOLEAN
                }
            }
        });
        ClipCC.addBlock({
            opcode: 'clipcc.example.test3',
            type: ClipCC.BlockType.COMMAND,
            messageId: 'TEST3 [COLOR]',
            categoryId: 'clipcc.example.test',
            function: args => args.COLOR,
            argument: {
                COLOR: {
                    type: ClipCC.ArgumentType.COLOR
                }
            }
        });
    }
}

module.exports = SampleExtension;
