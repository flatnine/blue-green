BlueGreen 
=========

To build:

`> docker build -t bluegreen:latest .`

To Run:

`> docker run -e VERSION=1 -p 3000:3000 bluegreen`

To View:

`http http://localhost:3000`

This will return text showing 

"Hello, This is version: <VERSION>"

