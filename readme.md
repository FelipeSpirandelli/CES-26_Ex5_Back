## Folder Structure

The folders are structured so that app.js can call both routes, public or views according to express documentation.
In this case, we are using just public and routes.

## Public folder

Holds the "companies.json" file, which has the id, name, description, GDP, HID and population for 8 capitals around
the globe. It is used by the "cidades.js" file.

## Routes folder

Holds some template files (e.g. index.js and users.js) that come with express initilization (express-generator). 

I created the "cidades.js" file, which have the "getAll" route. This route returns the "companies.json" data.