import type {LogLevel} from "./LogLevel.d.mts"

type Operator = 
	">"  |
	">=" |
	"<"  |
	"<="

export type CompareLogLevel = (
	log_level_left: LogLevel,
	operator: Operator,
	log_level_right: LogLevel
) => boolean
