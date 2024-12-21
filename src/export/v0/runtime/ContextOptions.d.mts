import type {ContextOptionsGetCurrentLogLevel} from "./ContextOptionsGetCurrentLogLevel.d.mts"
import type {ContextOptionsPrintLine} from "./ContextOptionsPrintLine.d.mts"
import type {ContextOptionsLogWithLevel} from "./ContextOptionsLogWithLevel.d.mts"
import type {ContextOptionsShouldLog} from "./ContextOptionsShouldLog.d.mts"

export type ContextOptions = {
	/**
	 * @brief Tag of context, can be empty.
	 */
	tag : string

	/**
	 * @brief Retrieve the current log level.
	 */
	getCurrentLogLevel: ContextOptionsGetCurrentLogLevel,

	/**
	 * @brief Print a line.
	 */
	printLine: ContextOptionsPrintLine,

	/**
	 * @brief Log lines with a specific log level.
	 */
	logWithLevel: ContextOptionsLogWithLevel,

	/**
	 * @brief Determine whether a message should be logged.
	 * @param level The log level of the message.
	 * @param package_name The package name of the module making the request.
	 * @param tag The tag of the module that is making the request.
	 */
	shouldLog: ContextOptionsShouldLog
}
