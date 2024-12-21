import type {RuntimeContextInstanceInternals} from "#~src/export/_versionless/runtime/RuntimeContextInstanceInternals.d.mts"
import type {Project} from "../project/Project.d.mts"
import type {ContextOptions} from "./ContextOptions.d.mts"
import type {LogLevel } from "./LogLevel.d.mts"

type ContextInstanceLogMethod = {
	[K in LogLevel]: (...messages: string[]) => undefined
} & {
	/**
	 * @brief Log a message with a severity.
	 */
	(...messages: string[]) : undefined
}

//
// this interface is used by consumers of the context
//
export type ContextInstance = RuntimeContextInstanceInternals & {
	project : Project

	options : ContextOptions

	log : ContextInstanceLogMethod

	defaults: {
		[K in keyof Omit<ContextOptions, "tag">]: ContextOptions[K]
	}
}
