/* eslint-disable @typescript-eslint/ban-types */
import mitt from "mitt"
const emitter = mitt()

export type Bus = {
  $on: Function
  $emit: Function
  $off: Function
}

const eventBus = {} as Bus

eventBus.$on = emitter.on
eventBus.$emit = emitter.emit
eventBus.$off = emitter.off

export default eventBus
