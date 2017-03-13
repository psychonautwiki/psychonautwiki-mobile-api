const substancesService = require('../services/substances');

const getSubstances = () => new Promise(function(resolve, reject){
    substancesService.getSubstances().then(result => {
       resolve(result);
    }).catch((err) => {
        reject(err);
    });
});

module.exports = {
    getSubstances
};