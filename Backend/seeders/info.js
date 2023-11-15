import dotenv from 'dotenv';
dotenv.config({path: '../.env'});

export const dataSeeds = [
    {
        name: "Valentina",
        lastname: "Hormazabal",
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
    }
];