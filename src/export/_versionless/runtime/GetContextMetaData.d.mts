import type {RuntimeWrappedContextInstance} from "./RuntimeWrappedContextInstance.d.mts"
import type {RuntimePackageInformation} from "./RuntimePackageInformation.d.mts"

// vv-- written this way so JSDoc works for this function
export type GetContextMetaData = {
	/**
	 * @brief
	 * Return information about a context.
	 * @param wrapped_context
	 * The wrapped context instance.
	 * @return
	 * An object containing the major and minor (named revision) version number
	 * as well as the package this context was created in.
	 */
	(wrapped_context: RuntimeWrappedContextInstance) : {
		version: {
			major: number,
			revision: number
		},
		package: RuntimePackageInformation
	}
}
