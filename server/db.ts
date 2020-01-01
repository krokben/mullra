import { Pool } from "pg";

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

function getDuration(start): number {
  return Date.now() - start;
}

export const queryDB = (text, params): Promise<any> => {
  const start = Date.now();

  return new Promise((resolve, reject) => {
    pool
      .query(text, params)
      .then(res => {
        console.log("executed query", {
          text,
          duration: getDuration(start),
          rows: res.rowCount,
        });
        return resolve(res);
      })
      .catch(err => {
        console.log("failed to execute query", {
          text,
          duration: getDuration(start),
        });
        return reject(err);
      });
  });
};
