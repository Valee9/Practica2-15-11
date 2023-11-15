// import express from 'express';
// import cors from 'cors';

// import dataRoutes from './routes/info.js';
// import dataModel from './models/info.js';

// dotenv.config();
// const app = express();app.use(cors());
// app.use(express.json());
// app.use(morgan("common"));

import express from 'express'
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
const profile = 
    {
        name: "Valentina Natalia",
        lastname: "Hormazabal Bahamondes",
        email: "valentina.hormazabal@alumnos.ucn.cl",
        city: "Antofagasta",
        country: "Chile",
        summary: "Estudiante de Ingerniería Civil en computación e Informática",
        frameworks: [
            {
                name: "Svelte",
                level: "Medio",
                year: 2023
            }
        ],
        hobbies: [
            {
                name: "Pololear",
                description: "Salir a pasear y a comer con mi pololo"
            },
            {
                name: "Crochet",
                description: "Tejer a crochet"
            }
        ]
    };

//When the enter at base direction, show a text like answer
app.get('/', (req,res) => {
    res.send('Node JS API');
});

//Print the profile in his format json
app.get('/api/profile', (req,res) => {
    res.send(profile);
});

const port = 3002
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`));

import { dataSeeds } from './seeders/info.js';

// const PORT = process.env.PORT || 6001;
// mongoose.connect(process.env.MONGO_URL,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
// const db = mongoose.connection;

// db.on('connected', async() => {
//   console.log('Conexión correcta a la base de datos');

//   try {
//     await dataModel.deleteMany();
//     await dataModel.insertMany(dataSeeds),
//     console.log('Datos cargados exitosamente en la base de datos');
//   }
//   catch (err) {
//     console.error('Error al cargar los datos:', err);}
// });

// db.on('error', (err) => {
//   console.error('Error de conexión a la base de datos:', err);
// });

// app.listen(PORT,() => console.log(`Server Port: ${PORT}`));
