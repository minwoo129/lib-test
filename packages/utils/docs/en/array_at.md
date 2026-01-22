# at

Returns the item at the specified index in an array.

This function supports **circular access**. If the index is out of the array's bounds, it uses modulo arithmetic to wrap around and access a valid index.

## Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `array` | `T[]` | The array to query. |
| `at` | `number` | The index of the item to retrieve. |

## Returns

| Type | Description |
| :--- | :--- |
| `T \| undefined` | The item at the specified index. Returns `undefined` if the array is empty or the index is not an integer. |

## Examples

```typescript
import { at } from '@inf-lib-test/utils';

const array = [1, 2, 3, 4, 5];

// Positive index
at(array, 0); // 1
at(array, 1); // 2

// Negative index
at(array, -1); // 5
at(array, -2); // 4

// Out of bounds (Circular access)
at(array, 5); // 1 (equivalent to index 0)
at(array, 6); // 2 (equivalent to index 1)
at(array, -6); // 5 (equivalent to index -1)
```
