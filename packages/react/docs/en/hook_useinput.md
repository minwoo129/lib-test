# useInput

**English** | [한국어](../ko/hook_useinput.md)

`useInput` is a custom hook to manage input state.

## Parameters

| Name | Type | Description |
| --- | --- | --- |
| initialValue | `T` | The initial value of the input. |

## Return Value

Returns an array containing:

1.  `value` (`T`): The current value.
2.  `setValue` (`(value: T) => void`): A function to update the value.

## Usage

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
