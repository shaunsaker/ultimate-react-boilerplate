import { execCommand } from './execCommand'
import { log } from './log'

export const createPng = async ({
  inputPath,
  outputPath,
  size,
}: {
  inputPath: string
  outputPath: string
  size: number
}): Promise<void> => {
  log(`Creating png from ${inputPath} at ${outputPath} with size ${size}px...`)

  await execCommand(`inkscape ${inputPath} --export-width=${size} --export-filename=${outputPath}`)

  log(`Created!`, 'success')
}
