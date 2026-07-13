# CreateInstance

创建 `CDocBuilder` 类的实例。

:::note
此方法仅适用于 **COM**。
:::

## 语法

```cpp
HRESULT CreateInstance();
```

## 示例

```cpp
CoInitialize(NULL);
IMATICONOFFICEDocBuilder* oBuilder = NULL;
CoCreateInstance(__uuidof(CMATICONOFFICEDocBuilder), NULL, CLSCTX_INPROC_SERVER, __uuidof(IMATICONOFFICEDocBuilder), (void**)&oBuilder);
oBuilder->Initialize();
oBuilder->CreateInstance();
oBuilder->Dispose();
```
