---
description: Integrate Maticon Office Docs into WordPress for document editing and collaboration.
tags: ["Docs", "Integration", "Ready-to-use"]
sidebar_custom_props:
  icon: /assets/images/editor/connectors/wordpress.svg
---

# WordPress integration

This [plugin](https://github.com/MaticonOffice/maticonoffice-wordpress) enables users to edit and view office documents from [WordPress](https://wordpress.org/) pages on the site and admin panel using Maticon Office Docs.

## Features

- Currently, the following document formats can be opened and edited with this plugin: DOCM, DOCX, DOTM, DOTX, POTM, POTX, PPSM, PPSX, PPTM, PPTX, XLSM, XLSX, XLTM, XLTX.
- The following formats are available for viewing only: CSV, DJVU, DOC, DOT, DPS, DPT, EPUB, ET, ETT, FB2, FODP, FODS, FODT, HTM, HTML, MHT, MHTML, ODP, ODS, ODT, OTP, OTS, OTT, OXPS, PDF, POT, PPS, PPT, RTF, STW, SXC, SXI, SXW, TXT, WPS, WPT, XLS, XLSB, XLT, XML, XPS.
- The plugin allows multiple users to collaborate in real time and to save back those changes to WordPress.

## Installing Maticon Office Docs

You will need an instance of Maticon Office Docs (Document Server) that is resolvable and connectable both from WordPress and any end clients. If that is not the case, use the official [Maticon Office Docs documentation page](https://help.maticonoffice.ru/server/linux/document/linux-installation.aspx). Maticon Office Docs must also be able to POST to WordPress directly.

The easiest way to start an instance of Maticon Office Docs is to use [Docker](https://github.com/MaticonOffice/Docker-DocumentServer).

## Installing Maticon Office Docs plugin for WordPress

To start using Maticon Office Docs with WordPress, follow these steps:

1. Download the zipped plugin.
2. Navigate to the **Plugins** section in your WordPress administrative dashboard.
3. Click **Add New** at the top of the page.
4. Click **Upload Plugin** at the top of the page.
5. Click **Choose File** and select the downloaded zipped plugin.
6. Once the plugin is installed, click **Activate**.

Alternatively, you can clone the main branch (and then activate the plugin from the WordPress administrative dashboard as well):

```sh
cd wp-content/plugins
git clone https://github.com/MaticonOffice/maticonoffice-wordpress
```

## Configuring Maticon Office Docs plugin for WordPress

Configure the plugin via the WordPress interface. Go to the **WordPress administrative dashboard**, open the **Maticon Office** section, and navigate to **Settings**. Specify the following parameters:

- **Document Editing Service address**. The URL of the installed Maticon Office Docs.
- **Document server JWT secret key**. Starting from version 7.2, JWT is enabled by default and the secret key is generated automatically to restrict access to Maticon Office Docs and for security reasons and data integrity. Specify your own secret key in the WordPress administrative configuration. In the Maticon Office Docs [config file](../../additional-api/signature/signature.md), specify the same secret key and enable the validation.

## Using Maticon Office Docs plugin for WordPress

The Maticon Office Docs plugin allows WordPress administrators to open files for collaborative editing using Maticon Office Docs (online document editors). In published posts, the editors are visible to all WordPress site visitors (both authorized and unauthorized) in the **Embedded** mode only.

### Editing files uploaded to WordPress

All uploaded files from the **Media** section will appear on the **Maticon Office -> Files** page. The editor opens in the same tab by clicking on the file name. Users with administrator rights are able to co-edit documents. All the changes are saved in the same file.

### Creating a post

When creating a post, you can add the Maticon Office element (block) and then upload a new file or select one from the **Media Library**. The added file will be displayed as the Maticon Office logo with the file name in the currently edited post. After the post is published (when you press the **Publish** or **Update** button), your WordPress site visitors will have access to this file for viewing in the **Embedded** mode.

## How it works

The Maticon Office integration follows the API documented [here](../basic-concepts.md).

Download the Maticon Office plugin for WordPress [here](https://github.com/MaticonOffice/maticonoffice-wordpress).
