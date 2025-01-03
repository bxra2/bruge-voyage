// Get the current host (e.g., 'localhost:5173' or 'example.com')
const host = window.location.host

// Set the baseUrl dynamically based on the host
const baseUrl = window.location.protocol + '//' + host
export const airlineImages1 = [
    {
        id: 1,
        src: `${baseUrl}/airlines/vueling.png`,
        alt: 'Vueling',
        width: 150,
        height: 50,
        fit: 'object-fit: cover;',
    },
    {
        id: 2,
        src: `${baseUrl}/airlines/Tunis-air.png`,
        alt: 'Tunis Air',
        width: 150,
        height: 100,
        fit: 'object-fit: cover;',
    },
    {
        id: 3,
        src: `${baseUrl}/airlines/air-maroc.png`,
        alt: 'Air Maroc',
        width: 100,
        height: 80,
        fit: 'object-fit: contain;',
    },
    {
        id: 4,
        src: `${baseUrl}/airlines/air-senegal.png`,
        alt: 'Air Senegal',
        width: 150,
        height: 50,
        fit: 'object-fit: cover;',
    },
    {
        id: 5,
        src: `${baseUrl}/airlines/fly-emirates.png`,
        alt: 'Fly Emirates',
        width: 150,
        height: 70,
        fit: 'object-fit: contain;',
    },
    {
        id: 6,
        src: `${baseUrl}/airlines/iberia.png`,
        alt: 'Iberia',
        width: 150,
        height: 50,
        fit: 'object-fit: contain;',

    },
    {
        id: 7,
        src: `${baseUrl}/airlines/mauritania-airlines.png`,
        alt: 'Mauritania Airlines',
        width: 150,
        height: 80,
        fit: 'object-fit: contain;',

    },
]

export const airlineImages2 = [
    {
        id: 8,
        src: `${baseUrl}/airlines/qatar-airways.png`,
        alt: 'Qatar Airways',
        width: 150,
        height: 50,
        fit: 'object-fit: cover;',

    },
    {
        id: 9,
        src: `${baseUrl}/airlines/air-france.png`,
        alt: 'Air France',
        width: 120,
        height: 50,
        fit: 'object-fit: contain;',

    },
    {
        id: 10,
        src: `${baseUrl}/airlines/turkish-airlines.png`,
        alt: 'Turkish Airlines',
        width: 200,
        height: 100,
        fit: 'object-fit: cover;',

    },
    {
        id: 11,
        src: `${baseUrl}/airlines/air-algerie.png`,
        alt: 'Air Algerie',
        width: 150,
        height: 50,
        fit: 'object-fit: contain;',

    },
    {
        id: 12,
        src: `${baseUrl}/airlines/binter.png`,
        alt: 'Binter',
        width: 150,
        height: 50,
        fit: 'object-fit: contain;',

    },
    {
        id: 13,
        src: `${baseUrl}/airlines/saudi-airlines.png`,
        alt: 'Saudi Airlines',
        width: 150,
        height: 80,
        fit: 'object-fit: cover;',

    },
]

export const heroImages = {
    link: `${baseUrl}/LINK.png`,
    prj1: `${baseUrl}/prj1.png`,
    GSM: `${baseUrl}/GSM.png`,
}
export const logo = `${baseUrl}.png`
export const plane = `${baseUrl}/header.png`

export const dest_1 = `${baseUrl}/destination-1.jpg`
export const dest_2 = `${baseUrl}/destination-2.jpg`
export const dest_3 = `${baseUrl}/destination-3.jpg`

export const showcase = `${baseUrl}/showcase.jpg`
