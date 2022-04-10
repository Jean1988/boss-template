import mitt from "mitt"
const emitter = mitt()

export type Bus = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  $on: Function
}

const eventBus = {}

eventBus.$on = emitter.on
eventBus.$emit = emitter.emit
eventBus.$off = emitter.off

export default eventBus
