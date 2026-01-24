# Input

**English** | [한국어](../ko/component_input.md)

Input component is a component that receives user input.

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| labelType | `'none' \| 'basic'` | `'none'` | Determines the style of the label. |
| dataTestId | `string` | - | The test ID for the input element. |

*   It also accepts all standard `HTMLInputElement` attributes (excluding `data-testid`).

## Usage

```tsx
import { Input } from '@lib-test/react';

const Example = () => {
  return (
    <Input labelType="basic" placeholder="Enter text..." />
  );
};
```
