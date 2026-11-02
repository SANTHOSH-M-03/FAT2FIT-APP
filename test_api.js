const https = require('https');
https.get('https://world.openfoodfacts.org/cgi/search.pl?search_terms=banana&search_simple=1&action=process&json=1&page_size=1', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(JSON.parse(data).products[0].nutriments));
});
