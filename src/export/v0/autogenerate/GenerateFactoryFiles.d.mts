import type {GenerateFactoryFilesOptions} from "./GenerateFactoryFilesOptions.d.mts"
import type {FourtuneConfigAutogenerator} from "@fourtune-types/fourtune/v0"

export type GenerateFactoryFiles = (
	options: GenerateFactoryFilesOptions
) => {
	[key: string]: FourtuneConfigAutogenerator<"user">
}
