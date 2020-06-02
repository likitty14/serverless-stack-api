import AWS from "aws-sdk";

var proxy = require('proxy-agent');
AWS.config.update({
    httpOptions: {
        agent: proxy(process.env.http_proxy)
    }
});
const client = new AWS.DynamoDB.DocumentClient();

export default {
  get   : (params) => client.get(params).promise(),
  put   : (params) => client.put(params).promise(),
  query : (params) => client.query(params).promise(),
  update: (params) => client.update(params).promise(),
  delete: (params) => client.delete(params).promise(),
};