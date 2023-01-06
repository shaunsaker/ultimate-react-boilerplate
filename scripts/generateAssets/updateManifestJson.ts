import appJson from '../../app.json'
import { createJson } from '../utils/createJson'
import { readJson } from '../utils/readJson'

type ManifestJson = {
  name: string
  short_name: string
  theme_color: string
  background_color: string
}

export const updateManifestJson = async ({ path }: { path: string }): Promise<void> => {
  const manifestJson = await readJson<ManifestJson>({ path })
  const newManifestJson = { ...manifestJson }

  newManifestJson.name = appJson.displayName
  newManifestJson.short_name = appJson.displayName
  newManifestJson.theme_color = appJson.themeColor
  newManifestJson.background_color = appJson.backgroundColor

  await createJson({ outputPath: path, data: newManifestJson })
}
