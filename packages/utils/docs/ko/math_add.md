# add
[English](../en/math_add.md) | 한국어

입력된 숫자들의 합계를 계산하여 반환합니다.

## Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `...nums` | `number[]` | 합계를 구할 숫자들의 목록입니다. |

## Returns

| Type | Description |
| :--- | :--- |
| `number` | 입력된 모든 숫자의 합계를 반환합니다. |

## Examples

```typescript
import { add } from '@inf-lib-test/utils';

add(1, 2, 3); // 6
add(10, 20); // 30
add(1, 2, 3, 4, 5); // 15
```
