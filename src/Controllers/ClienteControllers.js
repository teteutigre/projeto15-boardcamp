import connection from "../database/database.js";

export async function listarTodos(req, res) {
  const { cpf } = req.query;

  try {
    let Cliente = [];

    if (!cpf) {
      Cliente = await connection.query(`
                SELECT * FROM customers;
            `);
    } else {
      Cliente = await connection.query(
        `
                SELECT * FROM customers WHERE customers.cpf LIKE $1;
            `,
        [cpf + "%"]
      );
    }

    if (!Cliente.rows[0]) {
      return res.sendStatus(404);
    }

    res.send(Cliente.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function listarUnica(req, res) {
  const { id } = req.params;

  try {
    const customer = await connection.query(
      `
            SELECT * FROM customers WHERE customers.id=$1;
        `,
      [id]
    );

    if (!customer.rows[0]) {
      return res.sendStatus(404);
    }

    res.send(customer.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function addCliente(req, res) {
  const { name, phone, cpf, birthday } = req.body;

  try {
    const customerExists = await connection.query(
      `
            SELECT * FROM customers WHERE cpf=$1;
        `,
      [cpf]
    );
    if (customerExists.rows[0]) {
      return res.sendStatus(409);
    }

    await connection.query(
      `
            INSERT INTO customers (name, phone, cpf, birthday) VALUES ($1, $2, $3, $4);
        `,
      [name, phone, cpf, birthday]
    );
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function atualizarCliente(req, res) {
  const { id } = req.params;
  const { name, phone, cpf, birthday } = req.body;

  try {
    const customerExists = await connection.query(
      `
            SELECT * FROM customers WHERE cpf=$1 AND NOT id=$2;
        `,
      [cpf, id]
    );
    if (customerExists.rows[0]) {
      return res.sendStatus(409);
    }

    await connection.query(
      `
            UPDATE customers SET name=$1, phone=$2, cpf=$3, birthday=$4 WHERE id=$5;
        `,
      [name, phone, cpf, birthday, id]
    );
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
