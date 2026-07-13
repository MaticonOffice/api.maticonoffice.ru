---
description: Integrate Maticon Office Docs into Odoo for document editing and collaboration.
tags: ["Docs", "Integration", "Ready-to-use"]
sidebar_custom_props:
  icon: /assets/images/editor/connectors/odoo.svg
---

# Odoo integration

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="wkLTlJpmLQg"/>
```

This [app](https://github.com/MaticonOffice/maticonoffice-odoo) enables users to edit and collaborate on office documents within [Odoo](https://www.odoo.com/) Documents using Maticon Office Docs.

## Features

- Currently, the following document formats can be opened and edited with this app: DOCM, DOCX, DOTM, DOTX, PDF, POTM, POTX, PPSM, PPSX, PPTM, PPTX, XLSB, XLSM, XLSX, XLTM, XLTX.
- The following formats are available for viewing only: CSV, DJVU, DOC, DOCXF, DOT, DPS, DPT, EPUB, ET, ETT, FB2, FODP, FODS, FODT, HTM, HTML, HWP, HWPX, KEY, MD, MHT, MHTML, NUMBERS, ODG, ODP, ODS, ODT, OFORM, OTP, OTS, OTT, OXPS, PAGES, POT, PPS, PPT, RTF, STW, SXC, SXI, SXW, TXT, VSDM, VSDX, VSSM, VSSX, VSTM, VSTX, WPS, WPT, XLS, XLT, XML, XPS.
- The app will create a new **Open in Maticon Office** menu option within the document library for Office documents. This allows multiple users to collaborate in real time and to save back those changes to Odoo.

## Installing Maticon Office Docs

You will need an instance of Maticon Office Docs (Document Server) that is resolvable and connectable both from Odoo and any end clients. If that is not the case, use the official [Maticon Office Docs documentation page](https://help.maticonoffice.ru/server/linux/document/linux-installation.aspx). Maticon Office Docs must also be able to POST to Odoo directly.

The easiest way to start an instance of Maticon Office Docs is to use [Docker](https://github.com/MaticonOffice/Docker-DocumentServer).

## Installing Maticon Office app for Odoo

To start using Maticon Office Docs with Odoo, the following steps must be performed:

**Option 1**. Installation from the administration panel

1. [Log into](https://www.odoo.com/web/login) your existing Odoo account or [sign up](https://www.odoo.com/web/signup) for a new account.
2. Go to the Odoo administration panel and click **Apps** on the top menu bar.
3. Search for Maticon Office in the **Apps** catalog.
4. Click the **Install** button.

**Option 2**. Manual installation

1. Navigate to the [Odoo Apps catalog](https://apps.odoo.com/apps) and select the Odoo version you have installed.

2. Search for Maticon Office and download it. You can also download the latest app version from the official [GitHub repository](https://github.com/MaticonOffice/maticonoffice-odoo/releases).

3. Put Maticon Office app into */path/to/odoo/addons*. Make sure the Maticon Office folder is named as *maticonoffice_odoo*.

   Alternatively, you can add the following lines in the */path/to/odoo/config/odoo.conf* file specifying your path to the folder with *apps/addons*:

   ``` ini
   [options]
   addons_path = /mnt/extra-addons
   ```

4. Install the `pyjwt` package:

   ``` sh
   pip install pyjwt
   ```

5. Switch your Odoo to the developer mode and click **Apps -> Update Apps List** or just restart your Odoo instance.

:::note
Maticon Office demo templates will only be added to the Odoo modules that are already installed (refers to the Maticon Office Templates app). That's why we strongly recommend installing Maticon Office Templates after installing other Odoo modules such as CRM, Sales, Calendar, etc.
:::

## Configuring Maticon Office app for Odoo

To configure the app, go to **Settings**. Find **Maticon Office** on the left sidebar and click it. Specify the URL of the installed Maticon Office Docs:

```sh
https://<documentserver>/
```

where the **documentserver** is the name of the server with **Maticon Office Docs** installed. The address must be accessible from both the user's browser and the Odoo server. The Odoo server address must also be accessible from **Maticon Office Docs** for correct work. You can [register](https://www.maticonoffice.ru/docs-registration.aspx?from=api) a free Maticon Office Cloud and use its public IP address or public DNS that can be found in the **Instances** section of the cloud console.

:::caution
Starting from version 7.2, JWT is enabled by default and the secret key is generated automatically to restrict access to Maticon Office Docs and for security reasons and data integrity. Specify your own **Secret key** on the Odoo configuration page. In the Maticon Office Docs [config file](../../additional-api/signature/signature.md), specify the same secret key and enable the validation.
:::

## How it works

The Maticon Office integration follows the API documented [here](../basic-concepts.md).

## Working with forms

You can create, upload, and use fillable form templates within the **Maticon Office Templates** module in Odoo. The module allows you to generate documents with fields that can be automatically filled with data from Odoo records.

### Requirements

- An instance of **Maticon Office Docs** with support for fillable forms.
- A valid **Maticon Office license** with the **Automation API** option enabled.
- The **Maticon Office Templates** module in Odoo (automatically installs the main Maticon Office module).

:::info
For Odoo integration specifics, see the [Maticon Office Odoo connector guide](https://help.maticonoffice.ru/integration/odoo.aspx).
:::

:::note
If you are planning to deploy fillable form workflows in Odoo, make sure that your edition of Maticon Office Docs supports PDF forms. For the minimum supported versions in your environment (Community, Enterprise, Cloud), please check the [Maticon Office release notes](https://github.com/MaticonOffice/DocumentServer/releases) or contact the support team.
:::

Download the Maticon Office app for Odoo [here](https://github.com/MaticonOffice/maticonoffice-odoo).
