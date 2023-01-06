import { execCommand } from './execCommand'
import { log } from './log'

export const optimisePng = async ({ path }: { path: string }): Promise<void> => {
  log(`Optimising ${path}...`)

  await execCommand(`optipng ${path} -out ${path}`)

  log(`Optimised!`, 'success')
}
