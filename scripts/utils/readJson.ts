import * as fs from 'fs'

import { log } from './log'

export const readJson = async <T extends object>({ path }: { path: string }): Promise<T> => {
  log(`Reading json at ${path}...`)

  const string = fs.readFileSync(path, 'utf-8')
  const data = JSON.parse(string) as T

  log(`Read!`, 'success')

  return data
}
