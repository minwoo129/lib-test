# @inf-lib-test/react

English | [한국어](./README_kr.md)

This package provides components and hooks for the `inf-lib-test` design system. It is useful for development within a React environment.

## 1. Compatibility

|  Framework   | Support | Min Version |
| :----------: | :-----: | :---------: |
|    React     |    ⭕   |    >=19     |
|   Next.js    |    ❌   |             |

## 2. Setup

### 2-1. Installation

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

## 3. Basic Usage

```tsx
import { Input, useInput } from '@inf-lib-test/react';

function App() {
  const [value, onChange] = useInput("");

  return (
    <div>
      <Input 
        placeholder="Type here..." 
        value={value}
        onChange={e => onChange(e.target.value)}
        labelType="basic"
      />
    </div>
  );
}
```

## 4. Features

### 4-1. Components

| Name | Description | Official Docs |
| :--- | :--- | :---: |
| Input | Basic input field component | [Docs](./docs/en/component_input.md) |

### 4-2. Hooks

| Name | Description | Official Docs |
| :--- | :--- | :---: |
| useInput | Input state management hook | [Docs](./docs/en/hook_useinput.md) |
