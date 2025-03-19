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

## Update User Balance

**`PUT {host}/users/:id/balance/:amount`**

Updates a user's balance by `amount` (positive = add, negative = subtract).

### Request

- **`id`** → User ID
- **`amount`** → Balance change (cannot go below 0)

### Example

```http
PUT {host}/users/123/balance/50   → Increases by 50
PUT {host}/users/123/balance/-30  → Decreases by 30
```

### Response

```json
{ "balance": 250 }
```
