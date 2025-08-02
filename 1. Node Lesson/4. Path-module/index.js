
const path = require('path');

console.log(`Directory Name: ${path.dirname(__filename)}`);

console.log(`File name: ${path.basename(__filename)}`);

console.log(`File extension : ${path.extname(__filename)}`);

const joinedPath = path.join("/user", "documents", "node", "projects");
console.log("joined path:", joinedPath);

const resolvePAth = path.resolve('user', 'documents', 'node', 'project')
console.log("Resolve path:", resolvePAth)

const normalizePath = path.normalize("/user/.document/../node/projects")
console.log(`normalize path: ${normalizePath}`)