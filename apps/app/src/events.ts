import mitt from 'mitt'

type Events = {
  upload: string
}

const emitter = mitt<Events>()

export default emitter

export enum EventNames {
  upload = 'upload'
}
