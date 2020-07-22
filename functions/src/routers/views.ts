const express = require('express');
import { Request, Response, NextFunction } from 'express';

const view = express.Router();

view.get('/', (req : Request, res: Response ) => {
    res.render('index', { title: 'Index' });
});

export { view };