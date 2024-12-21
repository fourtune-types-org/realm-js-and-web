import type {RuntimeWrappedContextInstance} from "#~src/export/_versionless/runtime/RuntimeWrappedContextInstance.d.mts"
import type {ContextOptions} from "./ContextOptions.d.mts"

export type CreateContext = (
	instance_or_options?: RuntimeWrappedContextInstance|(
		// this prevents someone from both specifying options
		// and a wrapped context instance
		Partial<ContextOptions> & {
			_kind?: never
			_version?: never
			_revision?: never
			_instance?: never
		}
	)
) => RuntimeWrappedContextInstance
