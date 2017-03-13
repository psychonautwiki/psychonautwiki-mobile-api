const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;
const substancesQuery = require('../queries/substances');

const client = new Lokka({
  transport: new Transport('https://api.psychonautwiki.org/')
});

const getSubstances = () => new Promise(function(resolve, reject) {
  client.query(substancesQuery).then((result) => {
    resolve(result.substances);
  }).catch(reject);
});

module.exports = {
  getSubstances
};