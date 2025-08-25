import app from './app.js'
import dotenv from 'dotenv'
import sequelize from './config/database.js'

dotenv.config()

export async function testConnection() {
  try {
    await sequelize.authenticate();
    const env = process.env.NODE_ENV || 'development';

    if (env === 'production') {
      console.log('Connection to Aiven PostgreSQL successful!');
    } else {
      console.log('Connection to local PostgreSQL successful!');
    }
  } catch (error) {
    console.error('Unable to connect to database:', error);
  } 
}
testConnection()

app.listen(process.env.PORT,()=>{
    console.log('Server is running')
})