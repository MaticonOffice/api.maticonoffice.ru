# CreateInstance

Creates an instance of the `CDocBuilder` class.

:::note
This method is only available for **COM**.
:::

## Syntax

```cpp
HRESULT CreateInstance();
```

## Example

```cpp
CoInitialize(NULL);
IMATICONOFFICEDocBuilder* oBuilder = NULL;
CoCreateInstance(__uuidof(CMATICONOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IMATICONOFFICEDocBuilder), (void**)&oBuilder);
oBuilder->Initialize();
oBuilder->CreateInstance();
oBuilder->Dispose();
```
