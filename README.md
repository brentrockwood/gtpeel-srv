# GtPeel NodeJs Tutorial Project

This is a tutorial project for GtPeel.

## To install

    git clone https://github.com/brentrockwood/gtpeel-srv.git
    npm install

## Set up environment variables

The following environment variables are required for startup.

- `COOKIE_SECRET`: This can be any string value.

    export COOKIE_SECRET = 'someStringValue'

You may wish to put these variables in your shell profile to avoid having
to set them repeatedly.

## To start mongo

    mongod --dbpath=[relative path to an existing directory]

## To start the app

    npm start

