import * as AWS from "aws-sdk";
import awsConfig from "./config";

AWS.config.update(awsConfig);

const docClient = new AWS.DynamoDB.DocumentClient();

export default async function createAccount(email: string, password: string) {
  let finalData: any;
  const newDate = Math.round(new Date().getTime() / 1000);

  if (!email || !password) return;

  const params = {
    TableName: "USERS",
    Item: {
      email,
      password,
      createdAt: newDate,
    },
  };

  const result = new Promise((resolve, reject) => {
    docClient.put(params, (err, data) => {
      if (err) {
        resolve(err);
      } else {
        if (!data) {
          resolve({ error: "error!!" });
        }

        resolve(data);
      }
    });
  });

  await result.then((data) => {
    finalData = data;
  });

  return finalData;
}
