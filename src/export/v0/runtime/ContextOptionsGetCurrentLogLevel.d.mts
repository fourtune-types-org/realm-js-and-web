import type {ContextInstance} from "./ContextInstance.d.mts"
import type {LogLevel} from "./LogLevel.d.mts"

export type ContextOptionsGetCurrentLogLevel = (
	context: ContextInstance
) => LogLevel|null
