# Webpack-React-Practice
A small single-page application (SPA) for searching and browsing recipes, developed using React, Redux Toolkit and Mantine UI, built with a custom Webpack. [g](https://tereshchenko-trin.github.io/Webpack-React-Practice/).

# Tech stack
- **React**: The primary library for building user interfaces.
- **TypeScript**: Strong typing for robust code.
- **Redux Toolkit (RTK)**: Global state management.
- **RTK Query**: Retrieving, caching, and managing recipe data with the DummyJSON API.
- **React Router**: Client-side routing.
- **Webpack**: Custom project build configuration.
- **Mantine**: A UI library for building interfaces and providing responsive design.
- **DummyJSON API**: Recipe data source (`dummyjson.com`).

# Initialization
Clone the repository and install dependencies:
```
git clone https://github.com/Tereshchenko-Trin/Calculator.git
cd Webpack-React-Practice
npm install
```

# Development mode
This script starts Webpack Dev Server in development mode. The application will be accessible at `http://localhost:3000/`
```
npm run start
```

# Production build
This script creates an optimized, ready-to-deploy build of the project in production mode. The build results will be located in the build/ folder.
```
npm run build:prod
```
