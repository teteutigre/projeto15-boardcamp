import connection from "../database/database.js";

export async function listarCategoria(req, res) {
  try {
    const categoria = await connection.query(`
            SELECT * FROM categoria;
        `);

    if (!categoria.rows[0]) {
      return res.sendStatus(404);
    }

    res.send(categoria.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function criarCategoria(req, res) {
  const NomeCategoria = req.body.name.trim();

  if (!NomeCategoria) {
    return res.sendStatus(400);
  }

  try {
    const CategoriaUsada = await connection.query(
      `
            SELECT name FROM categoria WHERE name=$1;
        `,
      [NomeCategoria]
    );

    if (CategoriaUsada.rows[0]) {
      return res.sendStatus(409);
    }

    await connection.query(
      `
            INSERT INTO categoria (name) VALUES ($1);
        `,
      [NomeCategoria]
    );
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
