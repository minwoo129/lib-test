# useInput

[English](../en/hook_useinput.md) | **한국어**

`useInput`은 input 상태를 관리하는 커스텀 훅입니다.

## Parameters

| 이름 | 타입 | 설명 |
| --- | --- | --- |
| initialValue | `T` | input의 초기값입니다. |

## Return Value

다음 항목을 포함하는 배열을 반환합니다:

1.  `value` (`T`): 현재 값.
2.  `setValue` (`(value: T) => void`): 값을 업데이트하는 함수.

## 사용법

```tsx
import { useInput } from '@lib-test/react';

const Example = () => {
  const [value, setValue] = useInput('');

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
```
