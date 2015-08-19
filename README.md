Example [DaSpec JS](http://daspec.com) setup running inside Node for testing javascript projects.


[![Build Status](https://travis-ci.org/daspec/daspec-js-npm-example.svg?branch=master)](https://travis-ci.org/daspec/daspec-js-npm-example)

Check out the git repository, then do 

    npm install

to pull the dependencies. You should be able to run

    npm test

and DaSpec will execute the spec files from the [specs](specs) folder, saving them into __daspec-output__.

For configuration details, see the scripts part of [package.json](package.json) and the [custom-daspec.json](custom-daspec.json) config file.
