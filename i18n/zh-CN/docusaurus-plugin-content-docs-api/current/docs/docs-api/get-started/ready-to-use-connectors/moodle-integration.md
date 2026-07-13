---
sidebar_custom_props:
  icon: /assets/images/editor/connectors/moodle.svg
---

# Moodle 集成

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="JudgGPQo1nQ"/>
```

这个[插件](https://github.com/MaticonOffice/moodle-mod_maticonofficeeditor)允许用户使用Maticon Office 文档在[Moodle](https://moodle.org/)平台上编辑办公文档。

## 功能特点

- 目前，可编辑的文档格式包括：DOCX、XLSX、PPTX、PDF。
- 仅支持查看的格式有：TXT、CSV。
- 该插件会在所需课程页面上创建一个新的**Maticon Office 文档**活动，作为其中一种编辑模式。这使得多个用户可以实时协作，并将所做的更改保存回Moodle平台。

## 安装Maticon Office 文档

您需要有一个Maticon Office 文档（文档服务器）实例，该实例必须能从Moodle和任何终端客户端解析并连接。如果无法满足此条件，请使用官方的[Maticon Office 文档安装指南](https://help.maticonoffice.ru/server/linux/document/linux-installation.aspx)。Maticon Office 文档还必须能够直接向Moodle发送POST请求。

使用[Docker](https://github.com/MaticonOffice/Docker-DocumentServer)是安装Maticon Office 文档实例的最简单方法。

## 安装Moodle Maticon Office集成插件

该插件是一个**活动模块**。

按照Moodle插件的常规安装步骤，将此插件安装到您的 *mod/maticonoffice* 目录中。更多信息，请参阅[Moodle文档](https://docs.moodle.org/en/Installing_plugins)。

最新的编译包文件可在[此处](https://github.com/MaticonOffice/moodle-mod_maticonofficeeditor/releases)获得。

## 配置Moodle与Maticon Office集成插件

插件安装完成后，会打开插件设置页面。或者，您也可以在**插件概览**页面上找到已安装的插件，然后点击**设置**。

- 在**文档编辑服务地址**字段中输入安装了Maticon Office 文档的服务器名称：

  ``` sh
  https://<documentserver>/
  ```

  其中，**documentserver**是安装了**Maticon Office 文档**的服务器名称。该地址必须能被用户浏览器和Moodle服务器访问。Moodle服务器地址也必须能被**Maticon Office 文档**访问，以确保正常工作。您可以[注册](https://www.maticonoffice.ru/zh/docs-registration.aspx?from=api)一个免费的 Maticon Office 云，并使用其公共 IP 地址或公共 DNS，这些地址或 DNS 可以在云控制台的**实例**部分找到。

- 从7.2版本开始，JWT默认启用，并且会自动生成密钥，用于限制对Maticon Office 文档的访问，保障安全性和数据完整性。在Moodle的**设置**页面指定您自己的**文档服务器密钥**。在Maticon Office 文档的[配置文件](../../additional-api/signature/signature.md)中，指定相同的密钥并启用验证。

## 使用Moodle Maticon Office集成插件

插件安装并配置完成后，您可以按照Moodle的常规操作，在课程页面添加Maticon Office活动实例：

1. 打开所需的课程页面。
2. 使用右上角的切换器激活**编辑模式**。
3. 点击**添加活动或资源**。
4. 在弹出窗口中选择**Maticon Office 文档**活动。
5. 输入活动名称，从电脑上传或拖放所需文档，然后点击**保存并显示**按钮。

管理员和教师可以在**文档权限**部分选择是否允许从Maticon Office编辑器内下载或打印文档。

点击课程页面中的活动名称或链接，会在用户浏览器中打开Maticon Office编辑器，准备进行协作编辑。

## 工作原理

Maticon Office集成遵循[此处](../basic-concepts.md)记录的API。

在[此处](https://github.com/MaticonOffice/moodle-mod_maticonofficeeditor)下载Moodle的Maticon Office插件。
