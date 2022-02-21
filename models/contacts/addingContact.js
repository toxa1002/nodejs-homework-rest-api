const listContacts = require('./listContacts');
const { randomUUID } = require('crypto');
const DB = require('../../db/storageAdapter');
const db = new DB('contacts.json');

const addingContact = async body => {
  const contacts = await listContacts();
  const newContact = {
    id: randomUUID(),
    ...body,
  };
  contacts.push(newContact);
  await db.write(contacts);
  return newContact;
};

module.exports = addingContact;