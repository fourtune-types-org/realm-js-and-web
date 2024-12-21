import type {ContextInstance} from "./ContextInstance.d.mts"
import type {LogLevel} from "./LogLevel.d.mts"

export type ContextOptionsLogWithLevel = (
	context : ContextInstance,
	level : LogLevel,
	lines : string[]
) => undefined
