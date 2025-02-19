const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.length('/', (req, res) => {
    res.send('Job Notifier App is running.')
});

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
})