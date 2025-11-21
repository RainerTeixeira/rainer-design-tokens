// Servidor simples para Token Editor
// Roda na porta 3000

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  // Parse URL
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(BASE_DIR, filePath.split('?')[0]);

  // Verificar se arquivo existe
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - Arquivo não encontrado</h1>');
      return;
    }

    // Ler arquivo
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>500 - Erro interno do servidor</h1>');
        return;
      }

      // Determinar tipo MIME
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      // Headers CORS para desenvolvimento
      res.writeHead(200, {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });

      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log('\n╔════════════════════════════════════════════════════════════════════╗');
  console.log('║     TOKEN EDITOR - SERVIDOR INICIADO                              ║');
  console.log('╚════════════════════════════════════════════════════════════════════╝\n');
  console.log(`✅ Servidor rodando em: http://localhost:${PORT}`);
  console.log(`📁 Diretório: ${BASE_DIR}`);
  console.log(`\n🌐 Abra no navegador: http://localhost:${PORT}\n`);
});

