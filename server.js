const fs = require('fs');
const path = require('path');
const express = require('express');
const { animals } = require('./data/animals');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
  console.log('Follow this link to get there http://localhost:3001')
  console.log('Follow this link to get there http://localhost:3001/animals')
  console.log('Follow this link to get there http://localhost:3001/zookeeper')
});
