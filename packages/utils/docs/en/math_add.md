# add
English | [한국어](../ko/math_add.md)

Calculates and returns the sum of the input numbers.

## Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `...nums` | `number[]` | The list of numbers to calculate the sum of. |

## Returns

| Type | Description |
| :--- | :--- |
| `number` | Returns the sum of all input numbers. |

## Examples

```typescript
import { add } from '@inf-lib-test/utils';

add(1, 2, 3); // 6
add(10, 20); // 30
add(1, 2, 3, 4, 5); // 15
```
