# percent

English | [한국어](../ko/math_percent.md)

Calculates what percentage `num` is of `decimal`.

## Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `num` | `number` | The value to calculate the percentage for. |
| `decimal` | `number` | The base value. Cannot be 0. |
| `unit` | `number` | (Optional) The number of decimal places to round to. Defaults to 0. |

## Returns

| Type | Description |
| :--- | :--- |
| `string` | Returns the calculated percentage as a string. |

## Error

- Throws an error if `decimal` is 0.
- Throws an error if the result is less than 0 or greater than 100.

## Examples

```typescript
import { percent } from '@inf-lib-test/utils';

percent(1, 2); // '50'
percent(1, 3); // '33'
percent(1, 3, 2); // '33.33'

// Error cases
percent(1, 0); // Error: invalid decimal(infinite)
percent(-1, 100); // Error: out of range
percent(200, 100); // Error: out of range
```
