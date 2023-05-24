import fsPromises from 'node:fs/promises'
import path from 'node:path'
import xlsx from 'xlsx'
import { PokemonDataInput } from '../src/application/repositories/pokemon-repository'
import { FixerDuplicatedUniqueKey } from './../src/shared/helpers/fix-duplicated-unique-key'

console.log(`inform the absolute path of the ".xlsx" file or use the file from the ${__dirname} directory by clicking enter\n`)
console.log('example: /path/to/file.xlsx\n')

process.stdin.on('data', async (input) => {
  let [absolutePath] = input.toString().replace(/\n/, '').split(' ')
  if (!absolutePath) {
    absolutePath = path.resolve(__dirname, 'pokemons.xlsx')
  }
  const splitedPath = absolutePath.split('/')
  const inputDirectory = splitedPath.slice(0, splitedPath.length - 1).join('/')
  const inputFileName = splitedPath.reverse()[0]
  const [outputDirectory, outputFileName] = [__dirname, 'pokemons.json']
  const outputPath = path.resolve(outputDirectory, outputFileName)
  const files = await fsPromises.readdir(inputDirectory)
  for (const file of files) {
    if (file === inputFileName) {
      const workbook = xlsx.readFile(path.resolve(inputDirectory, inputFileName))
      const worksheet = workbook.Sheets[workbook.SheetNames[0]]
      const pokemons: PokemonDataInput[] = xlsx.utils.sheet_to_json(worksheet)
      const pokemonsUniqueNonDuplicatedKey = FixerDuplicatedUniqueKey.fix(pokemons)
      await fsPromises.writeFile(outputPath, JSON.stringify(pokemonsUniqueNonDuplicatedKey), {
        encoding: 'utf-8',
      })
    }
  }
  try {
    await fsPromises.stat(outputPath)
    console.log(`\nfile "${outputFileName}" created in directory "${outputDirectory}" successfully! 🎉`)
    process.exit(0)
  } catch (error: any) {
    console.error(error.message)
    process.exit(1)
  }
})
