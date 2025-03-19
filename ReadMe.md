# How to start

## Prod

1. `npm install`
2. Create `.env.prod` file and set values

```
PORT=

DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```
3. `npm run prod:start`

4. (Optional) To test 10000 requests with 100 connections run `npm run load-test`

## Dev

1. `npm install`
2. Create `.env.dev` file and set values

```
PORT=

DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```
3. `npm run watch`

4. (Optional) To test 10000 requests with 100 connections run `npm run load-test`