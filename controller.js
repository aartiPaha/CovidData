const http = require('http');
const fetch = require('node-fetch')


const timeseries = async (req, res, next) => {
    let path =
      'https://api.covid19india.org/v4/min/timeseries.min.json';
    try {
      // //console.log(path);
      const response = await fetch(path);
        const json = await response.json();
        var count = Object.keys(json).length;
        let AN = json.AN
        res.json({count,AN, timeseries:json})
    } catch (error) {
      console.log(error);
    }
};

const getFAQ = async (req, res, next) => {
    let path = 'https://api.covid19india.org/website_data.json'
    try {
        const response = await fetch(path);
        const json = await response.json();
        res.json({faq:json.faq})
    } catch (error) {
        res.json(error)
    }
}

const latestUpdate = async (req, res, next) => {
    let path = 'https://api.covid19india.org/updatelog/log.json'
    try {
        const response = await fetch(path);
        const json = await response.json();
        res.json({ news: json })
    } catch (error) {
       res.json(error)
    }
}

// count - state and district wise
const stateDistrict = async (req, res, next) => {
    let path = 'https://api.covid19india.org/state_district_wise.json'
    try {
        const response = await fetch(path)
        const json = await response.json()
        res.json({state_district_wise: json})
    } catch (error) {
        res.json(error)
    }
}
  
module.exports = {
    timeseries,
    getFAQ,
    latestUpdate,
    stateDistrict
}