export type PackageJSON = {
	name: string
	version: string
	description?: string
	author?: string
	license?: string

	[prop : string] : any
}
