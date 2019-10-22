const path = require("path");
const sassResourcesLoader = require("craco-sass-resources-loader");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@(.*)$": "<rootDir>/src$1"
      }
    }
  },
  compilerOptions: {
    baseUrl: "src",
    paths: {
      "@/*": ["./*"]
    },
    exclude: ["node_modules", "**/node_modules/*"]
  },
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: "./src/assets/styles/_variables.scss"
      }
    }
  ]
};
