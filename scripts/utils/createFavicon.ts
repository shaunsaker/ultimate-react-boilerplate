import * as path from 'path'

import { execCommand } from './execCommand'
import { log } from './log'

const CURRENT_WORKING_DIRECTORY = process.env.PWD || __dirname
const TEMP_PATH = path.join(CURRENT_WORKING_DIRECTORY, './temp.png')

export const createFavicon = async ({
  inputPath,
  outputPath,
}: {
  inputPath: string
  outputPath: string
}): Promise<void> => {
  // convert the image to png
  log(`Converting ${inputPath} to png...`)
  await execCommand(
    `inkscape ${inputPath} --export-width=32 --export-height=32 --export-filename=${TEMP_PATH}`,
  )
  log(`Converted!`, 'success')

  // convert the png to ico
  log(`Converting ${TEMP_PATH} to favicon at ${outputPath}...`)
  await execCommand(`convert ${TEMP_PATH} ${outputPath}`)
  log(`Converted!`, 'success')

  // remove the temporary image
  log(`Removing temp file at ${TEMP_PATH}...`)
  await execCommand(`rm ${TEMP_PATH}`)
  log(`Removed!`, 'success')
}
