// routes/pets.js
const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petsController');

// Definindo as rotas
router.get('/', petsController.getAllPets); // Listar todos os pets
router.post('/', petsController.createPet);  // Criar um novo pet
router.put('/:id', petsController.updatePet); // Atualizar pet
router.delete('/:id', petsController.deletePet); // Deletar pet

module.exports = router;
