import { NextApiRequest, NextApiResponse } from "next";
import DB_readAccount from "../../src/DB/DB_readAccount";

export default async function createAccount(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = JSON.parse(req.body);

  const checkIfExists = await DB_readAccount(email);

  if (!checkIfExists.Item) {
    console.log("user doesn't exist");

    res.json({ error: "User doesn't exist." });
    res.end();
    return;
  }

  if (checkIfExists.Item.password === password) {
    console.log("success");

    res.json({ message: "success" });
    res.end();
    return;
  } else {
    console.log("password doesn't match");

    res.json({ error: "Please enter valid credentials." });
    res.end();
    return;
  }
}
