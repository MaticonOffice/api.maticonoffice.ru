---
hide_table_of_contents: true
description: 将企业字体和颜色应用于所有幻灯片。
tags: ["Docs", "Macros", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# 应用企业品牌样式

将企业品牌样式应用到演示文稿中，包括文本颜色、字体和标志位置。

```ts
(function () {
    // 品牌样式配置对象
    let brandingConfig = {
        colors: {
            text: { r: 255, g: 111, b: 61 },
        },
        fonts: {
            text: "Arial",
        },
        logo: {
            // 示例：Base64 编码图片
            url: "data:image/png;base64, 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", // 示例：Base64 编码图片
            width: 174 * 12800,
            height: 38 * 12800,
            positionX: 608400,
            positionY: 500000,
        },
    };
    function createLogoImage(config) {
        let image = Api.CreateOleObject(config.url, config.width, config.height);
        image.SetSize(config.width, config.height);
        image.SetPosition(config.positionX, config.positionY);
        return image;
    }

    function applyTextStyles(paragraphs, fonts, colors) {
        paragraphs.forEach((paragraph) => {
            paragraph.SetColor(colors.text.r, colors.text.g, colors.text.b);
            paragraph.SetFontFamily(fonts.text);
        });
    }

    // 为幻灯片应用品牌标识的功能
    function applyBrandingToSlide(slide, config) {
        let logo = createLogoImage(config.logo);
        slide.AddObject(logo);
        let shapes = slide.GetAllShapes();

        shapes.forEach((shape) => {
            let docContent = shape.GetDocContent();
            let paragraphs = docContent.GetAllParagraphs();
            if (paragraphs) {
                applyTextStyles(paragraphs, config.fonts, config.colors);
            }
        });
    }

    function applyBrandingToPresentation() {
        let presentation = Api.GetPresentation();
        let slideCount = presentation.GetSlidesCount();
        for (let i = 0; i < slideCount; i++) {
            let slide = presentation.GetSlideByIndex(i);
            if (slide) {
                applyBrandingToSlide(slide, brandingConfig);
            }
        }
    }

    applyBrandingToPresentation();
})();
```

使用方法： [GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [SetPosition](../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [CreateOleObject](../../../office-api/usage-api/presentation-api/Api/Methods/CreateOleObject.md), [SetSize](../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetSize.md), [AddObject](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md), [GetDocContent](../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [SetColor](../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetColor.md), [SetFontFamily](../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetFontFamily.md)

## 结果

<Video src="/assets/video/macros/presentation-editor/apply-corporate-branding" dark />
