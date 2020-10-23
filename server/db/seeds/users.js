const { generateHash } = require("authenticare/server");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(() => Promise.all([
    generateHash('lex'),
    generateHash('vicky')
 ]))
 .then(([lexHash, vickyHash]) =>
 knex('users').insert([
   { id: 1, username: 'lex', hash: lexHash },
   { id: 2, username: 'vicky', hash: vickyHash }
 ])
 )
};

