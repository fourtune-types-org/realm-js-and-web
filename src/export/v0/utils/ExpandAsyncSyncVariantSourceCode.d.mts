export type ExpandAsyncSyncVariantSourceCode = (
	code: string,
	variant: "async" | "sync",
	input_source_file_name?: string
) => string
