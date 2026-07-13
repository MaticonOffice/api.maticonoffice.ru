---
description: Integrate Maticon Office Docs into Mattermost for document editing and collaboration.
tags: ["Docs", "Integration", "Ready-to-use"]
sidebar_custom_props:
  icon: /assets/images/editor/connectors/mattermost.svg
---

# Mattermost integration

This [app](https://github.com/MaticonOffice/maticonoffice-mattermost) enables users to edit office documents from [Mattermost](https://mattermost.com/) using Maticon Office Docs.

## Features

- Currently, the following document formats can be opened and edited with this app: DOCM, DOCX, DOTM, DOTX, PDF, POTM, POTX, PPSM, PPSX, PPTM, PPTX, XLSB, XLSM, XLSX, XLTM, XLTX.
- The following formats are available for viewing only: CSV, DJVU, DOC, DOT, DPS, DPT, EPUB, ET, ETT, FB2, FODP, FODS, FODT, HTM, HTML, HWP, HWPX, KEY, MD, MHT, MHTML, NUMBERS, ODG, ODP, ODS, ODT, OTP, OTS, OTT, OXPS, PAGES, POT, PPS, PPT, RTF, STW, SXC, SXI, SXW, TXT, VSDM, VSDX, VSSM, VSSX, VSTM, VSTX, WPS, WPT, XLS, XLT, XML, XPS.
- The app will create a new **Open in Maticon Office** menu option within the document library for office documents. This allows multiple users to collaborate in real time and save back those changes to Mattermost.

## Installing Maticon Office Docs

You will need an instance of Maticon Office Docs (Document Server) that is resolvable and connectable both from Mattermost and any end clients. If that is not the case, use the official [Maticon Office Docs documentation page](https://help.maticonoffice.ru/server/linux/document/linux-installation.aspx). Maticon Office Docs must also be able to POST to Mattermost directly.

Maticon Office Docs and Mattermost can be installed either on different computers, or on the same machine. If you use one machine, set up a custom port for Maticon Office Docs.

The easiest way to start an instance of Maticon Office Docs is to use [Docker](https://github.com/MaticonOffice/Docker-DocumentServer).

## Installing Maticon Office app for Mattermost

To start using Maticon Office Docs with Mattermost, follow these steps:

1. Install Node.js. [Check instructions](https://github.com/nodesource/distributions#installation-instructions)
2. Install Go. [Check instructions](https://go.dev/doc/install)
3. Install make:

    ``` sh
    sudo apt install make
    ```

4. Clone the app branch:

    ``` sh
    git clone https://github.com/MaticonOffice/maticonoffice-mattermost.git
    ```

5. Go to the project root and start the build:

    ``` sh
    cd maticonoffice-mattermost/
    make
    ```

## Configuring Maticon Office app for Mattermost

![Mattermost settings](/assets/images/editor/mattermost-settings.png)

As a Mattermost administrator, configure the app via the **System Console**. Go to **App Marketplace**, find the **Maticon Office** app, and click **Configure**.

- **Maticon Office Docs address**. To connect Maticon Office Docs, enter the following address:

  ``` sh
  https://<documentserver>:<port>/
  ```

  where **documentserver** is the name of the server and **port** is the port number with **Maticon Office Docs** installed. The address must be accessible from both the user's browser and the Mattermost server. The Mattermost server address must also be accessible from **Maticon Office Docs** for correct work. You can [register](https://www.maticonoffice.ru/docs-registration.aspx?from=api) a free Maticon Office Cloud and use its public IP address or public DNS that can be found in the **Instances** section of the cloud console.

- **Document Server JWT Secret**. Starting from version 7.2, JWT is enabled by default and the secret key is generated automatically to restrict access to Maticon Office Docs and for security reasons and data integrity. Specify your own secret key in the app configuration. In the Maticon Office Docs [config file](../../additional-api/signature/signature.md), specify the same secret key and enable the validation.

- **JWT Header**. If JWT protection is enabled, it is necessary to specify a custom header name since the Mattermost security policy blocks external **Authorization** headers. This header should be specified in the Maticon Office Docs signature settings as well. Further information about signature can be found [here](../../additional-api/signature/signature.md).

- **JWT Prefix**. Specify the Maticon Office Docs prefix.

You can also connect to the public test server of Maticon Office Docs for one month by checking the corresponding box.

## Using Maticon Office app for Mattermost

### Context menu

When files are sent in the chat message, the following actions are available in the file context menu by clicking the ⋮ symbol:

- **Open file in Maticon Office** and **Change access rights** - for the author of the message.
- **Open file in Maticon Office** - for the recipient of the message.

![Mattermost actions](/assets/images/editor/mattermost-actions.png)

### Creating a new file

Users can create new files directly in the chat by clicking the paperclip icon in the message input field and clicking Maticon Office. Next, specify the file name, select the file format (Document, Spreadsheet, Presentation), and click the Create button. A message with the created file will be sent to the chat.

### Opening the editors

Clicking the file name opens a file preview with an **Open** button.

Clicking the **Open file in Maticon Office** button opens the corresponding Maticon Office editor in the same window.

![Mattermost editor](/assets/images/editor/mattermost-editor.png)

You can also open the file via the file context menu in the message.

### Setting file access rights

<img alt="Mattermost share" src="/assets/images/editor/mattermost-share.png" width="400px" />

By default, the sender of a message has full editing access to the file, while all recipients are granted read-only access. Only the sender can modify user access rights through the context menu by selecting the **Change access rights** option.

**In personal chats:** Access rights can be adjusted using a drop-down menu. When the access level is changed, the Maticon Office bot will send a notification to the chat.

**In group chats:** A **Default access rights** option is available for quickly setting permissions for all participants. To grant specific access rights to an individual, simply type their name in the search bar and click Add.

The user will then appear in a list where you can assign their desired access level. To remove a user, click the cross icon next to their name. Their access will revert to the permissions set under **Default access rights**.

Whenever access levels are updated, the Maticon Office bot will notify the chat. For individual changes, the bot will send a personal notification to the affected participant.

### Tracking changes

Maticon Office bot sends notifications about changes in the document specifying the name of the user who made those changes.

All change notifications can be found within the message's discussion thread. Simply click the arrow on the right edge of the message to open a panel on the right, where the full history of the message's discussion is displayed.

<img alt="Mattermost bot" src="/assets/images/editor/mattermost-bot.png" width="300px" />

## How it works

The Maticon Office integration follows the API documented [here](../basic-concepts.md).

Download the Maticon Office app for Mattermost [here](https://github.com/MaticonOffice/maticonoffice-mattermost).
