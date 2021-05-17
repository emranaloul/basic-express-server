'use strict';

const express = require( 'express' );
const app = express();
const notFOundHandler = require( './error-handlers/404' );
const errorHandler = require( './error-handlers/500' );
const logger = require( './middleware/logger' );
const validator = require( './middleware/validator' );


app.use( logger );
app.use( validator );

//localhost:3000/person?name=emran
app.get( '/person', ( req,res )=>{
    const output ={
        name: req.query.name
    };
    res.json( output );
} );

function start( port ){
    app.listen( port, ()=>{
        console.log( `litening on PORT ${port}` );
    } );
}

app.use( '*', notFOundHandler );
app.use( errorHandler );

module.exports ={
    app: app,
    start: start
};


