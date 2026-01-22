# chunk

Splits an array into smaller arrays of the specified size.

The last chunk may contain fewer elements if the array cannot be evenly divided by the size.

## Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `array` | `readonly T[]` | The array to process. |
| `size` | `number` | The length of each chunk. Must be a positive integer. |

## Returns

| Type | Description |
| :--- | :--- |
| `T[][]` | Returns a new array containing the chunks. |

## Examples

```typescript
import { chunk } from '@inf-lib-test/utils';

const array = [1, 2, 3, 4, 5, 6, 7];

// Split by size
chunk(array, 3);
// [[1, 2, 3], [4, 5, 6], [7]]

chunk(array, 2);
// [[1, 2], [3, 4], [5, 6], [7]]

// size larger than array length
chunk(array, 10);
// [[1, 2, 3, 4, 5, 6, 7]]
```
