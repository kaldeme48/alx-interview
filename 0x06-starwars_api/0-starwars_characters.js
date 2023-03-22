#!/usr/bin/node
const request = require('request');

const arg = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${arg}`;

async function makeAnApiCall (bdy) {
  const promise = bdy.map(ele => {
    return new Promise((resolve, reject) => {
      request(ele, (error, response, body) => {
        if (error) {
          reject(error);
        } else if (response.statusCode === 200) {
          resolve((JSON.parse(body)).name);
        }
      });
    });
  });
  const results = await Promise.all(promise);
  results.forEach(ele => {
    console.log(ele);
  });
}

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const bdy = JSON.parse(body).characters;
    makeAnApiCall(bdy);
  }
});
