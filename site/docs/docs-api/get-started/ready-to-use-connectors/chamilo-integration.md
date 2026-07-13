---
description: Integrate Maticon Office Docs into Chamilo for document editing and collaboration.
tags: ["Docs", "Integration", "Ready-to-use"]
sidebar_custom_props:
  icon: /assets/images/editor/connectors/chamilo.svg
---

# Chamilo integration

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="gl3gmhOKFk8"/>
```

This [plugin](https://github.com/MaticonOffice/maticonoffice-chamilo) enables users to edit office documents within [Chamilo](https://chamilo.org/en/) using Maticon Office Docs.

## Features

- Currently, the following document formats can be edited: DOCX, ODP, ODS, ODT, PPTX, XLSX.
- The following formats are available for viewing only: CSV, DJVU, DOC, EPUB, HTM, HTML, MHT, PDF, PPS, PPT, RTF, TXT, XLS, XPS.
- The plugin will create a new **Open with Maticon Office** menu option within the document library for Office documents. This allows multiple users to collaborate in real time and to save back those changes to Chamilo.

## Installing Maticon Office Docs

You will need an instance of Maticon Office Docs (Document Server) that is resolvable and connectable both from Chamilo and any end clients. If that is not the case, use the official [Maticon Office Docs documentation page](https://help.maticonoffice.ru/server/linux/document/linux-installation.aspx). Maticon Office Docs must also be able to POST to Chamilo directly.

Maticon Office Docs and Chamilo can be installed either on different computers, or on the same machine. If you use one machine, set up a custom port for Document Server as by default both Maticon Office Docs and Chamilo work on port 80.

The easiest way to start an instance of Maticon Office Docs is to use [Docker](https://github.com/MaticonOffice/Docker-DocumentServer).

## Download a more recent version of the Maticon Office plugin for Chamilo

When approved by Chamilo and integrated as an official plugin, the Chamilo team strives to provide the latest stable version of the plugin within the Chamilo package. Downloading another version of the plugin might have negative effects on your installation. However, if you believe you need to download a more recent version from the third party, here is the recommended procedure:

1. Get the latest version of the [repository](https://github.com/MaticonOffice/maticonoffice-chamilo) running the command:

   ``` sh
   git clone https://github.com/MaticonOffice/maticonoffice-chamilo
   cd maticonoffice-chamilo
   ```

2. Get submodules:

   ``` sh
   git submodule update --init --recursive
   ```

3. Get plugin dependencies:

   ``` sh
   composer install
   ```

4. Collect all files:

   ``` sh
   mkdir /tmp/maticonoffice-deploy
   mkdir /tmp/maticonoffice-deploy/maticonoffice
   cp -r ./ /tmp/maticonoffice-deploy/maticonoffice
   cd /tmp/maticonoffice-deploy/maticonoffice
   rm -rf ./.git*
   rm -rf */.git*
   ```

5. Archive the files obtained in the previous step:

   ``` sh
   cd ../
   zip maticonoffice.zip -r maticonoffice
   ```

## Installing Maticon Office plugin for Chamilo

To start using Maticon Office Docs with Chamilo, the following steps must be performed:

1. Go to Chamilo **Administration** and choose the **Plugins** section.

2. Select the Maticon Office plugin and click the **Enable the selected plugins** button.

   If you want more up-to-date versions of the plugin, you need to replace the pre-installed default plugin folder with the newly collected plugin:

   ``` sh
   /var/www/html/chamilo-1.11.16/plugin/maticonoffice
   ```

   where **chamilo-1.11.16** is your current Chamilo version.

### For Chamilo versions lower than 1.11.16

1. Go to Chamilo **Administration**, choose the **Plugins** section, and click the **Upload plugin** button.
2. Upload *maticonoffice.zip* from the **Releases** section. You will see the plugin list.
3. Launch `composer install` from the Chamilo root folder.
4. Return to the plugin list, select the Maticon Office plugin, and click the **Enable** button.

## Configuring Maticon Office plugin for Chamilo

On the **Plugins** page, find Maticon Office and click **Configure**. You will see the **Settings** page. Enable the plugin and specify the Maticon Office Docs address:

```sh
https://<documentserver>/
```

where the **documentserver** is the name of the server with **Maticon Office Docs** installed. The address must be accessible from both the user's browser and the Chamilo server. The Chamilo server address must also be accessible from **Maticon Office Docs** for correct work. You can [register](https://www.maticonoffice.ru/docs-registration.aspx?from=api) a free Maticon Office Cloud and use its public IP address or public DNS that can be found in the **Instances** section of the cloud console.

Starting from version 7.2, JWT is enabled by default and the secret key is generated automatically to restrict access to Maticon Office Docs and for security reasons and data integrity. Specify your own **Secret key** on the Chamilo **Settings** page. In the Maticon Office Docs [config file](../../additional-api/signature/signature.md), specify the same secret key and enable the validation.

## How it works

The Maticon Office integration follows the API documented [here](../basic-concepts.md).

### For teachers/trainers

1. To create a new file, teachers can open the documents folder and click the **Create new** Maticon Office icon.

2. The user is redirected to the file creation page where they need to enter the file name and format (document, spreadsheet, or presentation). The browser calls the */plugin/maticonoffice/create.php* method. It adds a copy of an empty file to the course folder.

3. To open an existing file, the user chooses the **Open with Maticon Office** icon next to the normal edit icon.

4. The request is sent to */plugin/maticonoffice/editor.php?docId="document identifier"*. The server processes the request, generates the editor initialization configuration with the following properties:

   - **url** - the URL that Maticon Office Docs uses to download the document;
   - **callbackUrl** - the URL that Maticon Office Docs uses to inform about the status of document editing;
   - **documentServerUrl** - the URL that the client needs to respond to Maticon Office Docs (can be set at the administrative settings page);
   - **key** - the etag to instruct Maticon Office Docs whether to download the document again or not.

5. The server returns a page with a script to open the editor.

6. The browser opens this page and loads the editor.

7. The browser makes a request to Maticon Office Docs and passes the document configuration to it.

8. Maticon Office Docs loads the document and the user starts editing.

9. Maticon Office Docs sends a POST request to *callbackUrl* to inform Chamilo that the user is editing the document.

10. When all the users have finished editing, they close the editor window.

11. After [10 seconds](../how-it-works/saving-file.md#save-delay) of inactivity, Maticon Office Docs makes a POST request to *callbackUrl* with the information that editing has ended and sends a link to a new document version.

12. Chamilo loads a new version of the document and overwrites the file.

### For learners

1. Learners have access to a new Maticon Office icon next to all documents supported by Maticon Office in the documents tool.

2. In the learning paths, the viewer seamlessly integrates with Chamilo to open the supported documents.

Download the Maticon Office plugin for Chamilo [here](https://github.com/MaticonOffice/maticonoffice-chamilo/tree/master).
