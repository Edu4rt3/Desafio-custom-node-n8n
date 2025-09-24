"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
class Random {
    description = {
        displayName: 'Random',
        name: 'random',
        group: ['transform'],
        version: 1,
        description: 'Generate a true random number using Random.org',
        defaults: {
            name: 'Random',
        },
        inputs: ['main'],
        outputs: ['main'],
        icon: 'file:random.svg',
        properties: [
            {
                displayName: 'Min',
                name: 'min',
                type: 'number',
                default: 1,
                description: 'Minimum integer value',
            },
            {
                displayName: 'Max',
                name: 'max',
                type: 'number',
                default: 10,
                description: 'Maximum integer value',
            },
        ],
    };
    async execute() {
        const min = this.getNodeParameter('min', 0);
        const max = this.getNodeParameter('max', 0);
        const response = await (0, node_fetch_1.default)(`https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`);
        const text = await response.text();
        const value = parseInt(text.trim(), 10);
        return [[{ json: { value } }]];
    }
}
exports.Random = Random;
