import { IExecuteFunctions, INodeExecutionData, INodeType, INodeTypeDescription } from 'n8n-workflow'
import fetch from 'node-fetch'

export class Random implements INodeType {
  description: INodeTypeDescription = {
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
  }

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const min = this.getNodeParameter('min', 0) as number
    const max = this.getNodeParameter('max', 0) as number

    const response = await fetch(
      `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`
    )
    const text = await response.text()
    const value = parseInt(text.trim(), 10)

    return [[{ json: { value } }]]
  }
}