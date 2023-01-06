import * as fs from 'fs'

import { log } from './log'

export const createJson = async <T extends object>({
  outputPath,
  data,
}: {
  outputPath: string
  data: T
}): Promise<void> => {
  log(`Creating json at ${outputPath} with data ${data}...`)

  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2))

  log(`Created!`, 'success')
}
