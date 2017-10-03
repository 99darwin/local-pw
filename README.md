# local-pw
Save, retrieve, update, and delete your passwords locally

## Setup
### Install dependencies
To install all dependencies within ```package.json``` at once run:
```
npm i
```
**Optional:** It is recommended that your use ```nodemon``` to run the localhost server from the command line:
```
npm i nodemon
```
**Please Note**
You will also need a MySQL client like **Pro Sequel** or **MySQL Workbench**, this program assumes you already have an understanding of how MySQL works.

Update ```config.json``` with your database password and username

## How to use
While in your root directory run:
```
nodemon server.js
```
Access the site from your browser:
```
http://localhost:2900
```
Enter your data into the respective fields. You can now see your data within your local MySQL database, or alternatively, search for your information using the form.

This project is a work in progress. Upcoming features:
1. Update
2. Delete
3. View all passwords
