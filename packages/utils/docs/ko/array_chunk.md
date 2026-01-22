# chunk

배열을 지정된 크기(size)만큼의 작은 배열들로 나누어 반환합니다.

마지막 청크는 남은 요소들로 구성되므로 지정된 크기보다 작을 수 있습니다.

## Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| `array` | `readonly T[]` | 분할할 배열입니다. |
| `size` | `number` | 각 청크의 길이입니다. 양의 정수여야 합니다. |

## Returns

| Type | Description |
| :--- | :--- |
| `T[][]` | 분할된 청크들을 담은 새로운 배열을 반환합니다. |

## Examples

```typescript
import { chunk } from '@inf-lib-test/utils';

const array = [1, 2, 3, 4, 5, 6, 7];

// size에 맞춰 분할
chunk(array, 3);
// [[1, 2, 3], [4, 5, 6], [7]]

chunk(array, 2);
// [[1, 2], [3, 4], [5, 6], [7]]

// size가 배열 길이보다 큰 경우
chunk(array, 10);
// [[1, 2, 3, 4, 5, 6, 7]]
```
