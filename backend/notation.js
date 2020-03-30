/**
 * http:// Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar/filtrar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 */

/**
 * Tipo de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

/**
 * Banco de Dados
 *
 * Query Builder mais utilizado knexjs.org
 * npm install knex
 * npm install sqlite3 - instalação do driver conforme o banco que vai utilizar
 *
 * para fazer a conexão com o banco de dados
 *  npx knex init
 */

 /**
  * Entidades
  * 
  * ONG -> cadastro de ONG´s
  * Caso (incident) -> cadastro de casos
  */

  /**
   * Funcionalidades
   * 
   * Login de ONG
   * Logout de ONG
   * Cadastro de ONG
   * Cadastrar novos casos(incident)
   * Deletar casos
   * Listar casos especificos de uma ONG
   * Listar todos os casos 
   * Entrar em contato com a ONG (whatsapp, email)
   */

   /**
    * Migrations Knex
    * 
    * Criar a migration -> npx knex migrate:make create_ongs
    * Executar a migration -> npx knex migrate:latest
    * 
    * Lista todos os comandos knex -> npx knex
    */