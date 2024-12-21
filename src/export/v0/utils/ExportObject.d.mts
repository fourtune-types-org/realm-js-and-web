import type {IsExpandableName} from "./IsExpandableName.d.mts"
import type {IsExpandableFilePath} from "./IsExpandableFilePath.d.mts"
import type {ExpandAsyncSyncVariantName} from "./ExpandAsyncSyncVariantName.d.mts"
import type {ExpandAsyncSyncVariantFilePath} from "./ExpandAsyncSyncVariantFilePath.d.mts"
import type {ExpandAsyncSyncVariantSourceFile} from "./ExpandAsyncSyncVariantSourceFile.d.mts"
import type {ExpandAsyncSyncVariantSourceCode} from "./ExpandAsyncSyncVariantSourceCode.d.mts"

export type ExportObject = {
	isExpandableName: IsExpandableName,
	isExpandableFilePath: IsExpandableFilePath,
	expandAsyncSyncVariantName: ExpandAsyncSyncVariantName,
	expandAsyncSyncVariantFilePath: ExpandAsyncSyncVariantFilePath,
	expandAsyncSyncVariantSourceFile: ExpandAsyncSyncVariantSourceFile,
	expandAsyncSyncVariantSourceCode: ExpandAsyncSyncVariantSourceCode
}
