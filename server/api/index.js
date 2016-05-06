'use strict';
const fetch = require('node-fetch');

exports.register = function (server, options, next) {

    server.route({
        method: 'POST',
        path: '/',
        handler: (request, reply) => {
            const url = request.payload.url;

            fetch( url, {
                timeout: 1000
            })
            .then((res) => {
                return res.json();
            }).then((json) => {
                return reply(json);
            })
            .catch((err) => {
                reply({
                    message: '出包了',
                    error: err
                });
            });
        }
    });

    next();
};

exports.register.attributes = {
    name: 'api'
};
