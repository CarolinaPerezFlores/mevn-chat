import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

export function setEnvironvent(app) {
    if (process.env.NODE_ENV !== 'production') {
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }
}

function setDevEnv(app) {
    process.env.NODE_ENV = 'development';
    process.env.DB_URL = 'mongodb://localhost:27017/vue-db';
    console.log("Setting development environment");
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(cors());
}
function setProdEnv(app) {
    process.env.DB_URL = 'mongodb://localhost:27017/prod-db';
    app.use(express.json());
    app.use(express.static(__dirname + '/../dist'));
}