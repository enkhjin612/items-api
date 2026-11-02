const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
let items = [{ id: 1, name: 'Ном' }, { id: 2, name: 'Үзэг' }];

app.get('/', (req, res) => res.send('Items API ажиллаж байна'));
app.get('/items', (req, res) => res.json(items));
app.post('/items', (req, res) => {
  const item = { id: items.length + 1, name: req.body.name };
  items.push(item);
  res.status(201).json(item);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));