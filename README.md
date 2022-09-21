# ImageProcessingAPI

This is my first project working with TypeScript and Node.js. It uses the external sharp library to resize images via url parameters

## How to Use the app

1. change working directory to node-app

```bash
cd node-app
```

2. Install all dependencies

```bash
npm install
```

3. Start the local server
   ```bash
   npm start
   ```

````
4. Go to the Browser and get the images
The URL has to have following format: http://localhost:3001/api/images/imagename?&width=number&height=number
Imagenames: "klettern","kraxeln","wandern" und "bergsteigen"
Examples:
- http://localhost:3001
- http://localhost:3001/asdfasdfasdfad
- http://localhost:3001/api/images/klettern?width=222&height=222
- http://localhost:3001/api/images/bergsteigen?width=444&height=444
- http://localhost:3001/api/images/brgstgn?width=444&height=444

5. Testing:
There are three tests in the set. To run them write
 ```bash
npm test
````

6. Compile to Javascript

```bash
npm run build
```
