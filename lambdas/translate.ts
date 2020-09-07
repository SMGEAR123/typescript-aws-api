import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const handler: APIGatewayProxyHandler = async (event) => {
    // By default, API Gateway stringifies any JSON passed in the body.
  const body = JSON.parse(event.body);
  const { text, language } = body;  

    if (!text) {
        // retrun 400
    }
    if (!language) {
        // return 400
    }
};