import type {GetProjectPackageJSON} from "./GetProjectPackageJSON.d.mts"
import type {GetFourtuneConfiguration} from "./GetFourtuneConfiguration.d.mts"
import type {GetProject} from "./GetProject.d.mts"

export type ExportObject = {
	getProjectPackageJSON: GetProjectPackageJSON,
	getFourtuneConfiguration: GetFourtuneConfiguration,
	getProject: GetProject
}
