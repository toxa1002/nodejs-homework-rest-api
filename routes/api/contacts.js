const express = require('express');
const router = new express.Router();


const {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  updateFavorite,
  removeContact,
} = require('../../controllers/contacts');

router.get('/', getContacts).post('/', addContact);

router
  .get('/:contactId', getContactById)
  .put('/:contactId', updateContact)
  .delete('/:contactId', removeContact);

router.patch('/:contactId/favorite', updateFavorite);

module.exports = router;