/*jshint node:true*/
"use strict";

var CSV = require('csv-string');

var stream = CSV.createStream();

stream.on('data', function (row) {
    process.stdout.write(CSV.stringify(row));
  }
);

process.stdin.pipe(stream);

