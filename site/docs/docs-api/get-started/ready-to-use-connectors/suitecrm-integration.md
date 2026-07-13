---
description: Integrate Maticon Office Docs into SuiteCRM for document editing and collaboration.
tags: ["Docs", "Integration", "Ready-to-use"]
sidebar_custom_props:
  icon: /assets/images/editor/connectors/suitecrm.svg
---

# SuiteCRM integration

This [plugin](https://github.com/MaticonOffice/maticonoffice-suitecrm) enables users to edit office documents from [SuiteCRM](https://suitecrm.com/) using Maticon Office Docs.

## Features

- Currently, the following document formats can be edited: DOCX, XLSX, PPTX.
- The following formats are available for viewing only: PDF, ODT, ODS, ODP, DOC, XLS, PPT, PPS, EPUB, RTF, HTML, HTM, TXT, CSV.
- The plugin allows users to edit documents, spreadsheets, and presentations, and to create and fill out digital forms.
- The plugin will create a new **Open in Maticon Office** menu option within the document library for office documents. This allows multiple users to collaborate in real time and to save back those changes to SuiteCRM.

## Installing Maticon Office Docs

You will need an instance of Maticon Office Docs (Document Server) that is resolvable and connectable both from SuiteCRM and any end clients. If that is not the case, use the official [Maticon Office Docs documentation page](https://help.maticonoffice.ru/server/linux/document/linux-installation.aspx). Maticon Office Docs must also be able to POST to SuiteCRM directly.

The easiest way to start an instance of Maticon Office Docs is to use [Docker](https://github.com/MaticonOffice/Docker-DocumentServer).

## Installing SuiteCRM Maticon Office integration plugin

The latest compiled package files of the Maticon Office integration plugin are available [here](https://github.com/MaticonOffice/maticonoffice-suitecrm/releases).

To start using Maticon Office Docs with SuiteCRM, follow these steps:

1. Launch your SuiteCRM, switch to **Admin -> Admin Tools -> Module Loader** and upload the Maticon Office plugin archive.
2. Install the uploaded module by pressing the **Install** button.
3. Switch to **Admin -> Admin Tools -> Repair** and run **Quick Repair and Rebuild**.

## Configuring SuiteCRM Maticon Office integration plugin

The plugin settings page is available after installation: **Admin -> Maticon Office -> Maticon Office Settings**.

Enter the following address to connect Maticon Office Docs:

```sh
https://<documentserver>/
```

where the **documentserver** is the name of the server with the **Maticon Office Docs** installed. The address must be accessible from both the user's browser and the SuiteCRM server. The SuiteCRM server address must also be accessible from **Maticon Office Docs** for correct work. You can [register](https://www.maticonoffice.ru/docs-registration.aspx?from=api) a free Maticon Office Cloud and use its public IP address or public DNS that can be found in the **Instances** section of the cloud console.

Starting from version 7.2, JWT is enabled by default and the secret key is generated automatically to restrict access to Maticon Office Docs and for security reasons and data integrity. Specify your own **Secret key** on the SuiteCRM **Maticon Office Settings** page. In the Maticon Office Docs [config file](../../additional-api/signature/signature.md), specify the same secret key and enable the validation.

## Using SuiteCRM Maticon Office integration plugin

Once the plugin is installed and configured, you can edit and collaborate on office files in the **Documents** module:

1. Go to the **Documents** module.
2. Open the **Detail View** page by clicking the file name.
3. On the **Detail View** page, click **Open in Maticon Office** in the drop-down **ACTIONS** menu - the file will open in a new tab.

## How it works

The Maticon Office integration follows the API documented [here](../basic-concepts.md).

Download the SuiteCRM Maticon Office integration plugin [here](https://github.com/MaticonOffice/maticonoffice-suitecrm).
