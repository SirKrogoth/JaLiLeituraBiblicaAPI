const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API JaLi Leitura Bíblica',
      version: '1.0.0',
      description: 'Esta API irá retornar os livros da Bíblia, conforme a necessidade do usuário.',
    },
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'x-access-token', // Nome do cabeçalho personalizado
        },
      },
    },
    security: [
      {
        ApiKeyAuth: [], // Exige o cabeçalho x-access-token para todas as rotas
      },
    ],
  },
  apis: ['./src/routers/*.ts'], // Caminho para os arquivos da API
};

const swaggerSpec = swaggerJsdoc(options);

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
