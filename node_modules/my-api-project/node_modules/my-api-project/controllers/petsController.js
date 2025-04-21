const { Pet } = require('../models/Pet');

const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.findAll(); // Puxando do banco!
    res.status(200).json(pets);
  } catch (error) {
    console.error('Erro ao buscar pets:', error);
    res.status(500).json({ message: 'Erro ao buscar pets' });
  }
};


// Cria um pet
const createPet = async (req, res) => {
  const { name, species } = req.body;
  if (!name || !species) {
    return res.status(400).json({ message: 'Nome e espécie são obrigatórios' });
  }

  const newPet = await Pet.create({ name, species });
  res.status(201).json(newPet);
};

// Atualiza um pet
const updatePet = async (req, res) => {
  const { id } = req.params;
  const { name, species } = req.body;

  if (!name || !species) {
    return res.status(400).json({ message: 'Nome e espécie são obrigatórios' });
  }

  const pet = await Pet.findByPk(id);
  if (!pet) return res.status(404).json({ message: 'Pet não encontrado' });

  pet.name = name;
  pet.species = species;
  await pet.save();

  res.status(200).json(pet);
};

// Deleta um pet
const deletePet = async (req, res) => {
  const { id } = req.params;
  const pet = await Pet.findByPk(id);
  if (!pet) return res.status(404).json({ message: 'Pet não encontrado' });

  await pet.destroy();
  res.status(200).json({ message: `Pet com ID ${id} foi deletado` });
};

module.exports = { getAllPets, createPet, updatePet, deletePet };
