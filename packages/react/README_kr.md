# @inf-lib-test/react

[English](./README.md) | 한국어

이 패키지는 `inf-lib-test` 디자인 시스템을 위한 컴포넌트들과 Hook들을 제공하는 패키지입니다. React 환경 내에서 개발시 유용하게 사용하실 수 있습니다.

## 1. 호환성

|  프레임워크  | 사용가능여부 | 최소버전 |
| :----------: | :----------: | :------: |
|    React     |      ⭕      |   >=19   |
|   Next.js    |      ❌      |          |

## 2. 초기 설정 절차

### 2-1. 설치 방법

- npm
  ```bash
  npm i @inf-lib-test/react
  ```
- yarn
  ```bash
  yarn add @inf-lib-test/react
  ```
- pnpm
  ```bash
  pnpm add @inf-lib-test/react
  ```

## 3. 기본 사용법

```tsx
import { Input, useInput } from '@inf-lib-test/react';

function App() {
  const [value, onChange] = useInput("");

  return (
    <div>
      <Input 
        placeholder="입력하세요" 
        value={value}
        onChange={e => onChange(e.target.value)}
        labelType="basic"
      />
    </div>
  );
}
```

## 4. 제공되는 기능

### 4-1. 컴포넌트

| 이름 | 설명 | 공식문서 |
| :--- | :--- | :---: |
| Input | 기본적인 입력 필드 컴포넌트 | [공식문서](./docs/ko/component_input.md) |

### 4-2. Hooks

| 이름 | 설명 | 공식문서 |
| :--- | :--- | :---: |
| useInput | Input 상태 관리 훅 | [공식문서](./docs/ko/hook_useinput.md) |


