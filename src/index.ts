#!/usr/bin/env node
// NOTE: You can remove the first line if you don't plan to release an
// executable package. E.g. code that can be used as cli like prettier or eslint

import * as http from 'http';

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f2f5;
        }
        .container {
            text-align: center;
            padding: 2rem;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #1a73e8;
            margin-bottom: 1rem;
        }
        p {
            color: #5f6368;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello World</h1>
        <p>Welcome to your landing page!</p>
    </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

// This was just here to force a linting error for now to demonstrate/test the
// eslint pipeline. You can uncomment this and run "yarn lint:check" to test the
// linting.
// const x: number[] = [1, 2];
// const y: Array<number> = [3, 4];
// if (x == y) {
//   console.log("equal!");
// }
