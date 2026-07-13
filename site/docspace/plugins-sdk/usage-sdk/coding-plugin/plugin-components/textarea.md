# TextArea

Custom textarea.

**Interface**: ITextArea.

See the parameters of this component in [storybook](https://storybook.maticonoffice.ru/?path=/docs/components-textarea--docs).

![Textarea](/assets/images/docspace/textarea.png)

## Example

``` ts
import {Actions, type IMessage, type ITextArea} from "@maticonoffice/docspace-plugin-sdk"

const onChange = (value: string) => {
  props.value = value

  const message: IMessage = {
    actions: [Actions.updateProps],
    newProps: props,
  }
  return message
}

const props: ITextArea = {
  value: "",
  onChange,
}
```
