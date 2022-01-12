import { NextApiRequest, NextApiResponse } from "next";
import DB_createAccount from "../../src/DB/DB_createAccount";
import DB_readAccount from "../../src/DB/DB_readAccount";

export default async function createAccount(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = JSON.parse(req.body);

  const checkIfExists = await DB_readAccount(email);
  if (checkIfExists.Item) {
    res.json({ error: "USER EXISTS" });
    res.end();
    return;
  }

  const createAccountResponse = await DB_createAccount(email, password);
  res.json(createAccountResponse);
  res.end();
  return;
}
