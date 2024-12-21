import type {ProjectAsset} from "./ProjectAsset.d.mts"

/**
 * @brief Synchronously load a project asset
 * @description
 * Synchronously load the asset at `url`.
 * @param url URL of the asset.
 * @return
 * The asset's content.
 */
export type GetAsset = (url : string) => ProjectAsset
