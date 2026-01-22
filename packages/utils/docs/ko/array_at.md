# at

배열의 특정 인덱스에 있는 요소를 반환합니다.

이 함수는 **순환 접근(circular access)**을 지원합니다. 즉, 인덱스가 배열의 범위를 벗어나더라도 모듈로 연산을 통해 유효한 인덱기로 변환하여 요소를 반환합니다.

## Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `array` | `T[]` | 요소가 담긴 배열입니다. |
| `at` | `number` | 가져올 요소의 인덱스입니다. |

## Returns

| Type | Description |
| :--- | :--- |
| `T \| undefined` | 해당 인덱스의 요소를 반환합니다. 배열이 비어있거나 인덱스가 정수가 아닌 경우 `undefined`를 반환합니다. |

## Examples

```typescript
import { at } from '@inf-lib-test/utils';

const array = [1, 2, 3, 4, 5];

// 양수 인덱스
at(array, 0); // 1
at(array, 1); // 2

// 음수 인덱스
at(array, -1); // 5
at(array, -2); // 4

// 범위 초과 (순환 접근)
at(array, 5); // 1 (index 0과 동일)
at(array, 6); // 2 (index 1과 동일)
at(array, -6); // 5 (index -1과 동일)
```
