# percent

[English](../en/math_percent.md) | 한국어

주어진 값(`num`)이 기준 값(`decimal`)의 몇 퍼센트인지 계산하여 반환합니다.

## Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `num` | `number` | 퍼센트를 계산할 값입니다. |
| `decimal` | `number` | 기준이 되는 값입니다. 0이 될 수 없습니다. |
| `unit` | `number` | (Optional) 반올림할 소수점 자릿수입니다. 기본값은 0입니다. |

## Returns

| Type | Description |
| :--- | :--- |
| `string` | 계산된 퍼센트 값을 문자열로 반환합니다. |

## Error

- `decimal`이 0인 경우 에러를 발생시킵니다.
- 계산 결과가 0 미만이거나 100을 초과하는 경우 에러를 발생시킵니다.

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
