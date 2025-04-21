const express = require('express');
const cors = require('cors');
const petsRoutes = require('./routes/pets');
const { sequelize } = require('./models/Pet');

const app = express(); 

app.use(cors());
app.use(express.json());


app.use('/api/pets', petsRoutes);

// Rota inicial
app.get('/', (req, res) => {
  res.send('API de Pets está funcionando!');
});

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

// Banco + servidor
sequelize.sync().then(() => {
  console.log('Banco sincronizado com sucesso!');

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
