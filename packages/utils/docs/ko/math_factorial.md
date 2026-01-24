# factorial

[English](../en/math_factorial.md) | 한국어

입력된 숫자의 팩토리얼을 계산하여 반환합니다.

## Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `num` | `number` | 팩토리얼을 계산할 정수입니다. |

## Returns

| Type | Description |
| :--- | :--- |
| `number` | 입력된 숫자의 팩토리얼 값을 반환합니다. |

## Error

`num`이 음수이거나 정수가 아닌 경우 에러를 발생시킵니다.

## Examples

```typescript
import { factorial } from '@inf-lib-test/utils';

factorial(3); // 6
factorial(5); // 120
factorial(0); // 1
```
