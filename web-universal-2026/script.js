// Sample menu data - in a real application, this would come from an API or database
const menuItems = [
    // Cafés
    {
        id: 1,
        name: "Espresso Clásico",
        category: "cafes",
        description: "Café intenso y concentrado, servido en taza pequeña",
        price: "$2.500",
        image: "https://via.placeholder.com/300x200?text=Espresso+Clásico"
    },
    {
        id: 2,
        name: "Capuchino",
        category: "cafes",
        description: "Espresso con leche espumosa y cacao en polvo",
        price: "$3.200",
        image: "https://via.placeholder.com/300x200?text=Capuchino"
    },
    {
        id: 3,
        name: "Latte Vainilla",
        category: "cafes",
        description: "Suave latte con toque de vainilla natural",
        price: "$3.500",
        image: "https://via.placeholder.com/300x200?text=Latte+Vainilla"
    },
    {
        id: 4,
        name: "Americano",
        category: "cafes",
        description: "Espresso diluido con agua caliente",
        price: "$2.800",
        image: "https://via.placeholder.com/300x200?text=Americano"
    },
    {
        id: 5,
        name: "Mocha",
        category: "cafes",
        description: "Café con chocolate y leche vaporizada",
        price: "$3.800",
        image: "https://via.placeholder.com/300x200?text=Mocha"
    },
    // Tés
    {
        id: 6,
        name: "Té Verde Matcha",
        category: "tes",
        description: "Té verde japonés en polvo, antioxidante y energizante",
        price: "$3.000",
        image: "https://via.placeholder.com/300x200?text=Té+Verde+Matcha"
    },
    {
        id: 7,
        name: "Té de Manzanilla",
        category: "tes",
        description: "Infusión relajante de flores de manzanilla",
        price: "$2.800",
        image: "https://via.placeholder.com/300x200?text=Té+de+Manzanilla"
    },
    {
        id: 8,
        name: "Chai Latte",
        category: "tes",
        description: "Té especiado con leche y miel",
        price: "$3.300",
        image: "https://via.placeholder.com/300x200?text=Chai+Latte"
    },
    {
        id: 9,
        name: "Té Negro Earl Grey",
        category: "tes",
        description: "Té negro con bergamota, clásico y aromático",
        price: "$2.900",
        image: "https://via.placeholder.com/300x200?text=Té+Negro+Earl+Grey"
    },
    {
        id: 10,
        name: "Infusión de Frutas Rojas",
        category: "tes",
        description: "Mezcla de hibisco, frutilla y frambuesa, sin cafeína",
        price: "$3.100",
        image: "https://via.placeholder.com/300x200?text=Infusión+de+Frutas+Rojas"
    },
    // Desayunos Ecuatorianos
    {
        id: 11,
        name: "Muchín con Café",
        category: "desayunos",
        description: "Muchín (bollo de plátano verde frito) acompañado de café negro o con leche",
        price: "$4.200",
        image: "https://via.placeholder.com/300x200?text=Muchín+con+Café"
    },
    {
        id: 12,
        name: "Muchín con Té",
        category: "desayunos",
        description: "Muchín servido con té de su elección (verde, manzanilla o chai)",
        price: "$4.000",
        image: "https://via.placeholder.com/300x200?text=Muchín+con+Té"
    },
    {
        id: 13,
        name: "Corviche",
        category: "desayunos",
        description: "Bollo de pescado relleno de pescado, maní y especias, frito",
        price: "$5.000",
        image: "https://via.placeholder.com/300x200?text=Corviche"
    },
    {
        id: 14,
        name: "Humita",
        category: "desayunos",
        description: "Tamal ecuatoriano de choclo, queso y mantequilla, envuelto en hoja",
        price: "$4.500",
        image: "https://via.placeholder.com/300x200?text=Humita"
    },
    {
        id: 15,
        name: "Bolón de Verde",
        category: "desayunos",
        description: "Bollo de plátano verde relleno de chicharrón o queso, frito",
        price: "$4.800",
        image: "https://via.placeholder.com/300x200?text=Bolón+de+Verde"
    },
    {
        id: 16,
        name: "Empanada de Verde",
        category: "desayunos",
        description: "Empanada frita de masa de plátano verde con queso o carne",
        price: "$4.200",
        image: "https://via.placeholder.com/300x200?text=Empanada+de+Verde"
    },
    {
        id: 17,
        name: "Enrollado de Huevo",
        category: "desayunos",
        description: "Tortilla enrollada con jamón y queso, servida con pan",
        price: "$3.900",
        image: "https://via.placeholder.com/300x200?text=Enrollado+de+Huevo"
    },
    {
        id: 18,
        name: "Yogur con Granola y Miel",
        category: "desayunos",
        description: "Yogur natural con granola casera y miel de abeja",
        price: "$3.500",
        image: "https://via.placeholder.com/300x200?text=Yogur+con+Granola+y+Miel"
    },
    {
        id: 19,
        name: "Jugo Natural de Fruta",
        category: "desayunos",
        description: "Jugo preparado al momento de fruta de temporada (naranja, piña, mango o papaya)",
        price: "$3.200",
        image: "https://via.placeholder.com/300x200?text=Jugo+Natural+de+Fruta"
    },
    {
        id: 20,
        name: "Pan con Mantequilla y Mermelada",
        category: "desayunos",
        description: "Tostada de pan artesanal con mantequilla y mermelada de fruta",
        price: "$2.800",
        image: "https://via.placeholder.com/300x200?text=Pan+con+Mantequilla+y+Mermelada"
    },
    // Tortas (30 ejemplares)
    {
        id: 21,
        name: "Tresa Leches",
        category: "tortas",
        description: "Bizcocho esponjoso bañado en tres leches y cubierto con merengue",
        price: "$6.500",
        image: "https://via.placeholder.com/300x200?text=Tresa+Leches"
    },
    {
        id: 22,
        name: "Torta de Chocolate",
        category: "tortas",
        description: "Capas de bizcocho de chocolate con ganache y virutas",
        price: "$7.000",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Chocolate"
    },
    {
        id: 23,
        name: "Torta de Vainilla",
        category: "tortas",
        description: "Bizcocho de vainilla relleno de crema pastelera y frutas",
        price: "$6.800",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Vainilla"
    },
    {
        id: 24,
        name: "Torta de Zanahoria",
        category: "tortas",
        description: "Bizcocho húmedo de zanahoria con nueces y queso crema",
        price: "$7.200",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Zanahoria"
    },
    {
        id: 25,
        name: "Torta de Maracuyá",
        category: "tortas",
        description: "Bizcocho esponjoso con sabor a maracuyá y cobertura de merengue",
        price: "$7.500",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Maracuyá"
    },
    {
        id: 26,
        name: "Torta de Coco",
        category: "tortas",
        description: "Bizcocho de coco rallado con leche de coco y merengue suizo",
        price: "$7.300",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Coco"
    },
    {
        id: 27,
        name: "Torta de Limón",
        category: "tortas",
        description: "Bizcocho cítrico con relleno de curd de limón y merengue italiano",
        price: "$6.900",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Limón"
    },
    {
        id: 28,
        name: "Torta de Fresa",
        category: "tortas",
        description: "Bizcocho vainilla con crema de fresa y trozos de fruta fresca",
        price: "$7.400",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Fresa"
    },
    {
        id: 29,
        name: "Torta de Mango y Chile",
        category: "tortas",
        description: "Fusión tropical: mango dulce con toque de chile en polvo",
        price: "$7.600",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Mango+y+Chile"
    },
    {
        id: 30,
        name: "Torta de Café",
        category: "tortas",
        description: "Bizcocho impregnado de espresso con crema de mantequilla y café",
        price: "$7.100",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Café"
    },
    {
        id: 31,
        name: "Torta de Nuez",
        category: "tortas",
        description: "Bizcocho con nueces caramelizadas y relleno de dulce de leche",
        price: "$7.700",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Nuez"
    },
    {
        id: 32,
        name: "Torta de Piña",
        category: "tortas",
        description: "Bizcocho húmedo con piña natural y crema de queso",
        price: "$6.800",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Piña"
    },
    {
        id: 33,
        name: "Torta de Guayaba",
        category: "tortas",
        description: "Bizcocho suave con pasta de guayaba y queso crema",
        price: "$7.000",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Guayaba"
    },
    {
        id: 34,
        name: "Torta de Oreo",
        category: "tortas",
        description: "Capas de chocolate con galletas Oreo trituradas y crema",
        price: "$7.500",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Oreo"
    },
    {
        id: 35,
        name: "Torta de Red Velvet",
        category: "tortas",
        description: "Bizcocho rojo velvet con relleno de queso crema",
        price: "$8.000",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Red+Velvet"
    },
    {
        id: 36,
        name: "Torta de Choclo",
        category: "tortas",
        description: "Bizcocho de maíz dulce con queso y crema",
        price: "$6.900",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Choclo"
    },
    {
        id: 37,
        name: "Torta de Almendra",
        category: "tortas",
        description: "Bizcocho de almendra con frangipane y azúcar glass",
        price: "$8.200",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Almendra"
    },
    {
        id: 38,
        name: "Torta de Mousse de Maracuyá",
        category: "tortas",
        description: "Base de bizcocho con mousse ligero de maracuyá",
        price: "$7.800",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Mousse+de+Maracuyá"
    },
    {
        id: 39,
        name: "Torta de Queso Cremoso",
        category: "tortas",
        description: "Cheesecake estilo New York con base de galleta",
        price: "$8.500",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Queso+Cremoso"
    },
    {
        id: 40,
        name: "Torta de Frutos Rojos",
        category: "tortas",
        description: "Bizcocho vainilla con crema y mezcla de frutilla, frambuesa y arándano",
        price: "$7.900",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Frutos+Rojos"
    },
    {
        id: 41,
        name: "Torta de Plátano",
        category: "tortas",
        description: "Bizcocho húmedo de plátano maduro con nueces y caramelo",
        price: "$7.200",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Plátano"
    },
    {
        id: 42,
        name: "Torta de Coco y Limón",
        category: "tortas",
        description: "Combinación tropical de coco rallado y curd de limón",
        price: "$7.600",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Coco+y+Limón"
    },
    {
        id: 43,
        name: "Torta de Café y Avellana",
        category: "tortas",
        description: "Bizcocho de café con praliné de avellana y ganache",
        price: "$8.100",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Café+y+Avellana"
    },
    {
        id: 44,
        name: "Torta de Mango y Chili",
        category: "tortas",
        description: "Mango dulce con base de bizcocho y toque de chile en polvo",
        price: "$7.700",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Mango+y+Chili"
    },
    {
        id: 45,
        name: "Torta de Maracuyá y Coco",
        category: "tortas",
        description: "Fusión de maracuyá ácido y coco dulce en capas",
        price: "$7.900",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Maracuyá+y+Coco"
    },
    {
        id: 46,
        name: "Torta de Chocolate Blanco",
        category: "tortas",
        description: "Bizcocho blanco con ganache de chocolate blanco y frambuesa",
        price: "$7.800",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Chocolate+Blanco"
    },
    {
        id: 47,
        name: "Torta de Zarzamora",
        category: "tortas",
        description: "Bizcocho de almendra con mousse de zarzamora y glaseado",
        price: "$8.300",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Zarzamora"
    },
    {
        id: 48,
        name: "Torta de Napolitana",
        category: "tortas",
        description: "Tres sabores: vainilla, chocolate y fresa en capas",
        price: "$8.000",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Napolitana"
    },
    {
        id: 49,
        name: "Torta de Pistacho",
        category: "tortas",
        description: "Bizcocho de pistacho con crema de miel y flores comestibles",
        price: "$8.600",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Pistacho"
    },
    {
        id: 50,
        name: "Torta de Lima y Hierbabuena",
        category: "tortas",
        description: "Bizcocho cítrico con infusión de hierbabuena y merengue",
        price: "$7.500",
        image: "https://via.placeholder.com/300x200?text=Torta+de+Lima+y+Hierbabuena"
    }
];

// DOM Elements
const menuItemsContainer = document.getElementById('menu-items');
const categoryButtons = document.querySelectorAll('.category-btn');

// Initialize menu
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menuItems);

    // Add event listeners to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter menu items
            const category = button.dataset.category;
            if (category === 'todos') {
                displayMenuItems(menuItems);
            } else {
                const filteredItems = menuItems.filter(item => item.category === category);
                displayMenuItems(filteredItems);
            }
        });
    });
});

// Function to display menu items
function displayMenuItems(items) {
    menuItemsContainer.innerHTML = '';

    if (items.length === 0) {
        menuItemsContainer.innerHTML = '<p class="no-items">No hay productos disponibles en esta categoría.</p>';
        return;
    }

    // Check if we're displaying tortas to add special class
    const isTortasSection = items.length > 0 && items[0].category === 'tortas';

    items.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.className = 'menu-item' + (isTortasSection ? ' tortas-section' : '');
        menuItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="price">${item.price}</div>
            </div>
        `;
        menuItemsContainer.appendChild(menuItemElement);
    });
}