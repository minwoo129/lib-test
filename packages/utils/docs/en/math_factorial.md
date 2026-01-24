# factorial

English | [한국어](../ko/math_factorial.md)

Calculates and returns the factorial of the input number.

## Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `num` | `number` | The integer to calculate the factorial of. |

## Returns

| Type | Description |
| :--- | :--- |
| `number` | Returns the factorial of the input number. |

## Error

Throws an error if `num` is negative or not an integer.

## Examples

```typescript
import { factorial } from '@inf-lib-test/utils';

factorial(3); // 6
factorial(5); // 120
factorial(0); // 1
```
