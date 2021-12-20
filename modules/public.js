'use strict';
// const AWS = require('aws-sdk');

module.exports.list = (event, context, callback) => {
    return callback(null, successResponseBuilder(JSON.stringify({
        data: 'Ok',
        region: process.env.AWS_REGION,
    })), 200);
};

const successResponseBuilder = (body) => {
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: body
    };
};