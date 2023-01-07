import * as path from 'path'

import { createFavicon } from '../utils/createFavicon'
import { createPng } from '../utils/createPng'
import { ensureFileDirExists } from '../utils/ensureFileDirExists'
import { optimisePng } from '../utils/optimisePng'
import { optimiseSvg } from '../utils/optimiseSvg'

const CURRENT_WORKING_DIRECTORY = process.env.PWD || __dirname
const LOGO_PATH = path.join(CURRENT_WORKING_DIRECTORY, './src/assets/logo.svg')
const PUBLIC_PATH = path.join(CURRENT_WORKING_DIRECTORY, './public')

// TODO: SS use sharp for image processing
async function main(): Promise<void> {
  ensureFileDirExists(PUBLIC_PATH)

  await createFavicon({
    inputPath: LOGO_PATH,
    outputPath: `${PUBLIC_PATH}/favicon.ico`,
  })

  await createPng({
    inputPath: LOGO_PATH,
    outputPath: `${PUBLIC_PATH}/icon-512.png`,
    size: 512,
  })

  await optimisePng({ path: `${PUBLIC_PATH}/icon-512.png` })

  await createPng({
    inputPath: LOGO_PATH,
    outputPath: `${PUBLIC_PATH}/icon-192.png`,
    size: 192,
  })

  await optimisePng({ path: `${PUBLIC_PATH}/icon-192.png` })

  await createPng({
    inputPath: LOGO_PATH,
    outputPath: `${PUBLIC_PATH}/apple-touch-icon.png`,
    size: 180,
  })

  await optimisePng({ path: `${PUBLIC_PATH}/apple-touch-icon.png` })

  await optimiseSvg({ path: LOGO_PATH })
}

main()
