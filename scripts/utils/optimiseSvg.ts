import { execCommand } from './execCommand'
import { log } from './log'

export const optimiseSvg = async ({ path }: { path: string }): Promise<void> => {
  log(`Optimising ${path}...`)

  await execCommand(`npx svgo --multipass ${path}`)

  log(`Optimised!`, 'success')
}
