const parseDataFile = require('../../libs/parseDataFile')
const createGenerator = require('../../libs/random')

const DOCTYPE_OPERATIONS = 'io.cozy.bank.operations'

/**
 * This script can be used to import Cozy banks operations.
 * The use of parameters allows choosing specific category IDs.
 * This can be used to fill an instance with only bank operations of a specific kind.
 *
 * The parameters of the script use the following format :
 * @param {string} filepath - The path to the JSON fixtures file
 * @param {string[]} categories - A comma-separated list of category IDs
 * @param {number} nOperations - Optional maximum number of records to import
 * @param {boolean | string} randomOrder - Can be a seed, true to use the default order, or false for fully random
 */
module.exports = {
  getDoctypes: function() {
    return [DOCTYPE_OPERATIONS]
  },
  run: async function(ach, dryRun, parameters) {
    // Parsing script parameters
    const [filepath, categories, nOperations, randomOrder] = parameters

    // Using a seeded PRNG when randomOrder is a seed
    let randomGenerator
    if (typeof randomOrder === 'string') {
      randomGenerator = createGenerator(randomOrder)
    }

    const client = ach.client
    const categoriesList = categories.split(',')
    const data = parseDataFile(filepath)[DOCTYPE_OPERATIONS]
    const filteredData = data
      .filter(e => {
        // Category ID are explained here :
        // https://github.com/cozy/cozy-doctypes/blob/master/docs/io.cozy.bank.md#categories
        if (e.manualCategoryId) {
          return categoriesList.includes(e.manualCategoryId)
        } else if (e.localCategoryId) {
          return categoriesList.includes(e.localCategoryId)
        } else {
          return categoriesList.includes(e.cozyCategoryId)
        }
      })
      .map(e => ({ ...e, _type: DOCTYPE_OPERATIONS }))
      .slice(0, nOperations)
      .sort(() => {
        if (typeof randomOrder === 'string') {
          return randomGenerator() - 0.5
        } else {
          return randomOrder ? Math.random() - 0.5 : 0
        }
      })

    if (dryRun) {
      console.log(`${filteredData.length} would have been uploaded`)
    } else {
      return await client.saveAll(filteredData)
    }
  }
}
