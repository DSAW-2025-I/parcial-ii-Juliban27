
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const products = [
    { id: 1, name: 'Vainilla Hot Chocolate', price: 15200},
    { id: 2, name: 'Montes de Maria', price: 29900 },
    { id: 3, name: 'Marshmallow Hot Chocolate', price: 12000 },
]


app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    
    if (!product) {
        return res.status(404).json({ error: 'No se encontró el producto' });
    }
    
    res.json(product);
});

app.post('/products', (req, res) => {
    const newProduct = req.body;
    
    if (!newProduct.id || !newProduct.name || newProduct.price === undefined) {
        return res.status(400).json({ error: 'Debes ingresar todos los datos: id, name y price' });
    }
    
    const existingProduct = products.find(p => p.id === newProduct.id);
    if (existingProduct) {
        return res.status(400).json({ error: 'Ya hay un producto con ese ID' });
    }
    
    products.push(newProduct);
    
    res.status(201).json(newProduct);
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});