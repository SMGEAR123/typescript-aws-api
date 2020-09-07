import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import apiResponses from './common/apiResponses';
import * as AWS from 'aws-sdk';

const translate = new AWS.Translate();

export const handler: APIGatewayProxyHandler = async (event) => {
    // By default, API Gateway stringifies any JSON passed in the body.
  const body = JSON.parse(event.body);
  const { text, language } = body;  
try {
    if (!text) {
        return apiResponses._400({ message: 'missing text fom the body' });
    }
    if (!language) {
        return apiResponses._400({ message: 'missing language from the body' });    }
    } catch(error) {
        console.warn("Error: ", error);
    }
};