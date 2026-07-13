# onDocumentContentReady

The function called when the document is completely loaded.

## Parameters

This event has no parameters.

## Example

```javascript
window.Asc.plugin.attachEditorEvent("onDocumentContentReady", () => {
    let oProperties = {
        "searchString"  : "Maticon Office",
        "replaceString" : "Maticon Office is cool",
        "matchCase"     : false
    };

    window.Asc.plugin.executeMethod("SearchAndReplace", [oProperties], function() {
            window.Asc.plugin.executeCommand("close", "");
    });
});
```
