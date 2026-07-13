---
description: Integrate Maticon Office Docs into Moodle for document editing and collaboration.
tags: ["Docs", "Integration", "Ready-to-use"]
sidebar_custom_props:
  icon: /assets/images/editor/connectors/moodle.svg
---

# Moodle integration

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="JudgGPQo1nQ"/>
```

This [plugin](https://github.com/MaticonOffice/moodle-mod_maticonofficeeditor) enables users to edit office documents from [Moodle](https://moodle.org/) using Maticon Office Docs.

## Features

- Currently, the following document formats can be opened and edited: DOCX, XLSX, PPTX, PDF.
- The following formats are available for viewing only: TXT, CSV.
- The plugin will create a new **Maticon Office document** activity as one of the edit modes for the necessary course page. This allows multiple users to collaborate in real time and to save back those changes to Moodle.

## Installing Maticon Office Docs

You will need an instance of Maticon Office Docs (Document Server) that is resolvable and connectable both from Moodle and any end clients. If that is not the case, use the official [Maticon Office Docs documentation page](https://help.maticonoffice.ru/server/linux/document/linux-installation.aspx). Maticon Office Docs must also be able to POST to Moodle directly.

The easiest way to start an instance of Maticon Office Docs is to use [Docker](https://github.com/MaticonOffice/Docker-DocumentServer).

## Installing Maticon Office plugin for Moodle

This plugin is an **activity module**.

Follow the usual Moodle plugin installation steps to install this plugin into your *mod/maticonoffice* directory. Please see [Moodle Documentation](https://docs.moodle.org/en/Installing_plugins) for more information.

The latest compiled package files are available [here](https://github.com/MaticonOffice/moodle-mod_maticonofficeeditor/releases).

## Configuring Maticon Office plugin for Moodle

Once the plugin is installed, the settings page will be opened. Alternatively, you can find the installed plugin on the **Plugins overview** page and click **Settings**.

- Enter the name of the server with Maticon Office Docs installed in the **Document Editing Service address** field:

  ``` sh
  https://<documentserver>/
  ```

  where **documentserver** is the name of the server with **Maticon Office Docs** installed. The address must be accessible from both the user's browser and the Moodle server. The Moodle server address must also be accessible from **Maticon Office Docs** for correct work. You can [register](https://www.maticonoffice.ru/docs-registration.aspx?from=api) a free Maticon Office Cloud and use its public IP address or public DNS that can be found in the **Instances** section of the cloud console.

- Starting from version 7.2, JWT is enabled by default and the secret key is generated automatically to restrict access to Maticon Office Docs and for security reasons and data integrity. Specify your own **Document Server Secret** on the Moodle **Settings** page. In the Maticon Office Docs [config file](../../additional-api/signature/signature.md), specify the same secret key and enable the validation.

## Using Maticon Office plugin for Moodle

Once the plugin is installed and configured, you can add instances of Maticon Office activity to your course pages as per usual Moodle practice:

1. Open the necessary course page.
2. Activate the **Edit Mode** using the switcher at the top right corner.
3. Click **Add an activity or resource**.
4. Select the **Maticon Office document** activity in the pop-up window.
5. Type in the activity name, upload or drag-and-drop the necessary document from your PC, and click the **Save and display** button.

Admins and teachers can choose whether or not documents can be downloaded or printed from inside the Maticon Office editor. This can be done in the **Document permissions** section.

Clicking the activity name or link on the course page opens the Maticon Office editor in the user's browser, ready for collaborative editing.

## How it works

The Maticon Office integration follows the API documented [here](../basic-concepts.md).

Download the Maticon Office plugin for Moodle [here](https://github.com/MaticonOffice/moodle-mod_maticonofficeeditor).
