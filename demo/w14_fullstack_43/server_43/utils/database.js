import pkg from "pg";

const { Pool } = pkg;

const pool = new Pool({
  host: "localhost",
  port: "5432",
  user: "pure90719",
  database: "js_demo_43",
});

// console.log("connect db", pool.options);

export default pool;
