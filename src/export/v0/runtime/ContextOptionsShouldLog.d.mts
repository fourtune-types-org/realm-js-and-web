import type {ContextInstance} from "./ContextInstance.d.mts"
import type {LogLevel} from "./LogLevel.d.mts"
import type {RuntimePackageInformation} from "#~src/export/_versionless/runtime/RuntimePackageInformation.d.mts"

export type ContextOptionsShouldLog = (
	context : ContextInstance,
	level : LogLevel,
	pkg : RuntimePackageInformation,
	tag : string
) => boolean|null
