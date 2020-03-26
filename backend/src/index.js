const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes')



/**
 * Para acessar o codigo atraves do PowerShell
 * Set-Location -Path C:\www\semanaomnistack11\aulas 
 * cd backend ou cd frontend
 * Para iniciar o Visual Studio Code
 * code .
 */

/** 
 * Rota / Recurso
 */

/**
 * Metodos HTTP:
 * 
 * GET: Buscar uma informacao do back-end
 * POST: Criar uma informacao no back-end
 * PUT: Alterar uma informacao no back-end
 * DELETE: Deletar uma informacao no back-end
 */

 /**
  * Tipos de parametros:
  * 
  * Query Params: Parametro nomeados enviados na rota apos "?" (Filtros, paginacao)
  * Route Params: Parametros utilizados para identificar recursos ex: "/users/:id"
  * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
  */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * 
 */

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);