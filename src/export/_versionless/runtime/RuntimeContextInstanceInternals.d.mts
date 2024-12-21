import type {RuntimePackageInformation} from "./RuntimePackageInformation.d.mts"

export type RuntimeContextInstanceInternals = {
	// every context instance has (or will have) this property
	readonly __internal_do_not_use: {
		readonly origin_package: RuntimePackageInformation
	}
}
