# Input

[English](../en/component_input.md) | **한국어**

Input 컴포넌트는 사용자의 입력을 받는 컴포넌트입니다.

## Props

| 이름 | 타입 | 기본값 | 설명 |
| --- | --- | --- | --- |
| labelType | `'none' \| 'basic'` | `'none'` | 라벨의 스타일을 결정합니다. |
| dataTestId | `string` | - | input 요소의 테스트 ID입니다. |

*   표준 `HTMLInputElement` 속성들을 모두 지원합니다 (`data-testid` 제외).

## 사용법

```tsx
import { Input } from '@lib-test/react';

const Example = () => {
  return (
    <Input labelType="basic" placeholder="내용을 입력하세요..." />
  );
};
```
