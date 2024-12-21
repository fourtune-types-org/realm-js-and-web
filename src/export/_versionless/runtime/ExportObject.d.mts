import type {UseContext} from "./UseContext.d.mts"
import type {GetContextMetaData} from "./GetContextMetaData.d.mts"

export type ExportObject = {
	useContext: UseContext,
	getContextMetaData: GetContextMetaData
}
