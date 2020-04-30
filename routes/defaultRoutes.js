module.exports = app => {
  app.get('/api/test', (req, res) => {
    const testResponse = [
      { id: 1, name: 'john', lastName: 'smith' },
      { id: 2, name: 'john', lastName: 'smith' },
      { id: 3, name: 'john', lastName: 'smith' },
    ];

    res.json(testResponse);
  });
}