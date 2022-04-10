require('dotenv').config();
const app = require('./app');
const connection = require('./db/db_mongoose');

const PORT = process.env.PORT || 3001;

connection
  .then(() => {
    console.log('Connecting to database...');
    app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
    console.log('Database connection successful');
  })
  .catch(error => {
    console.error(`Server not running. Error message: ${error.message}`);
    process.exit(1);
  });