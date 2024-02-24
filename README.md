
## Usage

- **Get all items:** `GET /items`
- **Get a specific item by ID:** `GET /items/:id`
- **Create a new item:** `POST /items`
  - Body:
    ```json
    {
      "name": "Item Name",
      "description": "Item Description"
    }
    ```
- **Update an existing item:** `PUT /items/:id`
  - Body (fields to update):
    ```json
    {
      "name": "New Item Name",
      "description": "New Item Description"
    }
    ```
- **Delete an item:** `DELETE /items/:id`

## Validation

- Validation is performed for input parameters using express-validator middleware.
- Name is required for creating an item.
- ID must be a valid MongoDB ID for routes that require ID parameter.

## Error Handling

- Error handling middleware is implemented to catch and log errors.

