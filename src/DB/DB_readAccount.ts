import * as AWS from "aws-sdk";
import awsConfig from "./config";

AWS.config.update(awsConfig);

const docClient = new AWS.DynamoDB.DocumentClient();

export default async function readAccount(email: string) {
  let finalData: any;

  if (!email) return;

  const params = {
    TableName: "USERS",
    Key: {
      email,
    },
  };

  const result = new Promise((resolve, reject) => {
    docClient.get(params, (err, data) => {
      if (err) {
        resolve(err);
      } else {
        resolve(data);
      }
    });
  });

  await result.then((data) => {
    finalData = data;
  });

  return finalData;
}
