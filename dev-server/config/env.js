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
    console.log("Setting development environment");
    app.use(express.json());
    app.use(express.urlencoded({
    extended: true
    }));
    app.use(morgan('dev'));
    app.use(cors());
}
function setProdEnv(app) {
    app.use(express.json());
    app.use(express.urlencoded({
    extended: true
    }));
    app.use(express.static(__dirname + '/../dist'));
}