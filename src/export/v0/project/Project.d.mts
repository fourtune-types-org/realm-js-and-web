import type {PackageJSON} from "./PackageJSON.d.mts"
import type {FourtuneConfig} from "@fourtune-types/fourtune/v0"

export type Project = {
	package_json : PackageJSON,
	fourtune_configuration : FourtuneConfig
}
