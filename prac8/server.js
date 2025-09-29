const http = require('http');
let count = 0;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Rep Counter</title>
        <style>
          body { text-align: center; font-family: Arial; padding-top: 50px; }
          #count { font-size: 60px; margin: 20px; }
          button { font-size: 20px; margin: 5px; padding: 10px 20px; }
        </style>
      </head>
      <body>
        <h1>Gym Rep Counter</h1>
        <div id="count">0</div>
        <button onclick="update(-1)">-1</button>
        <button onclick="update(1)">+1</button>
        <button onclick="reset()">Reset</button>

        <script>
          function update(val) {
            fetch('/change?by=' + val)
              .then(res => res.json())
              .then(data => document.getElementById('count').innerText = data.count);
          }
          function reset() {
            fetch('/reset')
              .then(res => res.json())
              .then(data => document.getElementById('count').innerText = data.count);
          }
          // Get initial count
          fetch('/current')
            .then(res => res.json())
            .then(data => document.getElementById('count').innerText = data.count);
        </script>
      </body>
      </html>
    `);
  } else if (req.url.startsWith('/change')) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const by = parseInt(url.searchParams.get('by') || '0');
    count += by;
    if (count < 0) count = 0;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ count }));
  } else if (req.url === '/reset') {
    count = 0;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ count }));
  } else if (req.url === '/current') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ count }));
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
