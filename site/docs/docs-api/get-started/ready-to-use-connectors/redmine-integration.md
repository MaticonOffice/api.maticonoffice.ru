---
description: Integrate Maticon Office Docs into Redmine for document editing and collaboration.
tags: ["Docs", "Integration", "Ready-to-use"]
sidebar_custom_props:
  icon: /assets/images/editor/connectors/redmine.svg
---

# Redmine integration

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="_1Q86nRnumo"/>
```

This [plugin](https://github.com/MaticonOffice/maticonoffice-redmine) enables users to edit attachments from [Redmine](https://www.redmine.org/) using Maticon Office Docs.

The plugin is available in the official [Redmine Plugins Directory](https://www.redmine.org/plugins/maticonoffice_redmine).

## Features

- Viewing and editing documents, spreadsheets, presentations, PDFs, and forms.
- Co-editing documents in real time using two co-editing modes (Fast and Strict), Track Changes, comments, built-in chat.
- Settings page to set up connection to the server and JWT authentication, customize the editor's appearance.
- Mobile view for licensed editors.
- Creating new attachments using templates that consider the user's language preference.
- Converting attachments and saving or downloading them.

## Supported formats

|        | djvu | doc | docm | docx | dot | dotm | dotx | epub* | fb2* | fodt | htm | html* | mht | mhtml | odt* | ott* | oxps | pdf | rtf* | stw | sxw | txt* | wps | wpt | xml | xps | csv* | et | ett | fods | ods* | ots* | sxc | xls | xlsb | xlsm | xlsx | xlt | xltm | xltx | dps | dpt | fodp | odp* | otp* | pot | potm | potx | pps | ppsm | ppsx | ppt | pptm | pptx | sxi |
|:-------|:----:|:---:|:----:|:----:|:---:|:----:|:----:|:-----:|:----:|:----:|:---:|:-----:|:---:|:-----:|:----:|:----:|:----:|:---:|:----:|:---:|:---:|:----:|:---:|:---:|:---:|:---:|:----:|:--:|:---:|:----:|:----:|:----:|:---:|:---:|:----:|:----:|:----:|:---:|:----:|:----:|:---:|:---:|:----:|:----:|:----:|:---:|:----:|:----:|:---:|:----:|:----:|:---:|:----:|:----:|:---:|
| View   |  +   |  +  |  +   |  +   |  +  |  +   |  +   |   +   |  +   |  +   |  +  |   +   |  +  |   +   |  +   |  +   |  +   |  +  |  +   |  +  |  +  |  +   |  +  |  +  |  +  |  +  |  +   | +  |  +  |  +   |  +   |  +   |  +  |  +  |  +   |  +   |  +   |  +  |  +   |  +   |  +  |  +  |  +   |  +   |  +   |  +  |  +   |  +   |  +  |  +   |  +   |  +  |  +   |  +   |  +  |
| Edit   |  -   |  -  |  +   |  +   |  -  |  +   |  +   |   +   |  +   |  -   |  -  |   +   |  -  |   -   |  +   |  +   |  -   |  +  |  +   |  -  |  -  |  +   |  -  |  -  |  -  |  -  |  +   | -  |  -  |  -   |  +   |  +   |  -  |  -  |  -   |  +   |  +   |  -  |  +   |  +   |  -  |  -  |  -   |  +   |  +   |  -  |  +   |  +   |  -  |  +   |  +   |  -  |  +   |  +   |  -  |
| Create |  -   |  -  |  -   |  +   |  -  |  -   |  -   |   -   |  -   |  -   |  -  |   -   |  -  |   -   |  -   |  -   |  -   |  -  |  -   |  -  |  -  |  -   |  -  |  -  |  -  |  -  |  -   | -  |  -  |  -   |  -   |  -   |  -  |  -  |  -   |  -   |  +   |  -  |  -   |  -   |  -  |  -  |  -   |  -   |  -   |  -  |  -   |  -   |  -  |  -   |  -   |  -  |  -   |  +   |  -  |

\* *- to be able to open the format for editing, check it in the [formats settings](#formats). Due to some format restrictions, data loss may occur.*

## Installing Maticon Office Docs

Before you proceed to the plugin installation, make sure you have an instance of Maticon Office Docs (Document Server) that is resolvable and connectable both from Redmine and any end clients. Additionally, ensure that Maticon Office Docs can directly POST to Redmine.

We recommend using [Docker](https://github.com/MaticonOffice/Docker-DocumentServer) to install Maticon Office Docs. Alternatively, you can follow [these instructions](https://help.maticonoffice.ru/server/linux/document/linux-installation.aspx) for Debian, Ubuntu, or derivatives.

## Installing Maticon Office plugin for Redmine

To install the plugin, you will need Redmine version 4.2 or higher, or version 5.0 or higher. It is also important to note that the plugin is compatible with Ruby version 2.7.2 or higher, or 3.0.0 or higher. We recommend using Redmine 5 along with Ruby 3.

Additionally, you may need [zstd](https://github.com/facebook/zstd) to unzip the plugin.

1. If you are new to Redmine, install it by following [these instructions](https://www.redmine.org/projects/redmine/wiki/RedmineInstall).

2. Download the [plugin](https://github.com/MaticonOffice/maticonoffice-redmine/releases):

   ``` sh
   curl --location https://github.com/MaticonOffice/maticonoffice-redmine/releases/latest/download/maticonoffice_redmine.tar.zst --output maticonoffice_redmine.tar.zst
   ```

3. Unzip it into the plugins directory:

   ``` sh
   tar --extract --file maticonoffice_redmine.tar.zst --directory plugins
   ```

4. Install the dependencies of the plugin if Redmine did not do it automatically:

   ``` sh
   bundle install
   ```

5. Perform the migration:

   ``` sh
   RAILS_ENV=production bundle exec rake redmine:plugins:migrate NAME=maticonoffice_redmine
   ```

6. Restart Redmine.

Read more about the plugin installation on the Redmine [Wiki page](https://www.redmine.org/projects/redmine/wiki/plugins#Installing-a-plugin).

## Configuring Maticon Office plugin for Redmine

Configure the plugin via the Redmine interface. Go to **Administration -> Plugins**, find the Maticon Office integration plugin for Redmine and click **Configure**:

![Redmine settings](/assets/images/editor/redmine-settings.png)

### General settings

- **Document Editing Service address**. The URL of the installed Maticon Office Docs (Document Server). Leave blank to disable the plugin.

### Advanced server settings

- **Maticon Office Docs address for internal requests from the server.**
- **Server address for internal requests from Maticon Office Docs.**
- **Connect to the demo Maticon Office Docs server.**

### Security

- **Secret key**. Starting from version 7.2, JWT is enabled by default and the secret key is generated automatically to restrict access to Maticon Office Docs and for security reasons and data integrity. Specify your secret key in the Maticon Office Docs [config file](../../additional-api/signature/signature.md), then specify the same key in the settings page of the plugin. Leave blank to disable authentication.
- **Authorization header.**
- **Disable certificate verification (insecure).**

### Editor customization settings

- Display Chat menu button.
- Display the header more compact.
- Display Feedback & Support menu button.
- Display Help menu button.
- Display monochrome toolbar header.

### Formats

- Specify the list of formats allowed to be opened directly for editing.

## How it works

The plugin uses the [Maticon Office Docs API](../basic-concepts.md) and is integrated into various Redmine pages, including [Documents](#documents), [Attachments](#attachments), [Files](#files), [Issues](#issues), [News](#news), [Wiki](#wiki), and [Forums](#forums). Additionally, the plugin adds general pages such as ["Create in Maticon Office"](#create-in-maticonoffice) and ["Convert with Maticon Office"](#convert-with-maticonoffice).

### Documents

![Documents page](/assets/images/editor/documents-page.png)

On the **Documents** page, users can open the attachment to view, edit, create, or convert it. The options displayed in the interface may vary depending on the user's permissions.

| Option            | Permissions                    |
|-------------------|--------------------------------|
| View              | View documents                 |
| Edit              | View documents, Edit documents |
| Create            | View documents, Edit documents |
| Convert: Save     | View documents, Edit documents |
| Convert: Download | View documents                 |

### Attachments

![Attachment page](/assets/images/editor/attachment-page.png)

On the **Attachment** page, users can open the attachment to view, edit, or convert it. The options displayed in the interface may vary depending on the user's permissions for the module where the attachment is located.

### Files

![Files page](/assets/images/editor/files-page.png)

On the **Files** page, users can open the attachment to view, edit, or convert it. The options displayed in the interface may vary depending on the user's permissions.

| Option            | Permissions              |
|-------------------|--------------------------|
| View              | View files               |
| Edit              | View files, Manage files |
| Convert: Save     | View files, Manage files |
| Convert: Download | View files               |

### Issues

![Issues page](/assets/images/editor/issues-page.png)

On the **Issues** page, users can open the attachment to view, edit, or convert it. The options displayed in the interface may vary depending on the user's permissions.

| Option            | Permissions                  |
|-------------------|------------------------------|
| View              | View issues                  |
| Edit              | View issues, Edit own issues |
| Convert: Save     | View issues, Edit own issues |
| Convert: Download | View issues                  |

### News

![News page](/assets/images/editor/news-page.png)

On the **News** page, users can open the attachment to view, edit, or convert it. The options displayed in the interface may vary depending on the user's permissions.

| Option            | Permissions            |
|-------------------|------------------------|
| View              | View news              |
| Edit              | View news, Manage news |
| Convert: Save     | View news, Manage news |
| Convert: Download | View news              |

### Wiki

![Wiki page](/assets/images/editor/wiki-page.png)

On the **Wiki** page, users can open the attachment to view, edit, or convert it. The options displayed in the interface may vary depending on the user's permissions.

| Option            | Permissions                |
|-------------------|----------------------------|
| View              | View wiki                  |
| Edit              | View wiki, Edit wiki pages |
| Convert: Save     | View wiki, Edit wiki pages |
| Convert: Download | View wiki                  |

### Forums

![Forums page](/assets/images/editor/forums-page.png)

On the **Forums** page, users can open the attachment to view, edit, or convert it. The options displayed in the interface may vary depending on the user's permissions.

| Option            | Permissions                  |
|-------------------|------------------------------|
| View              | View messages                |
| Edit              | View messages, Edit messages |
| Convert: Save     | View messages, Edit messages |
| Convert: Download | View messages                |

### View or Edit in Maticon Office

![View or Edit in Maticon Office](/assets/images/editor/view-or-edit.png)

On the **View or Edit in Maticon Office** page, users can view or edit the attachment. The visibility of this page depends on the user's permissions for the module where the attachment is located.

### Create in Maticon Office

![Create in Maticon Office](/assets/images/editor/create-page.png)

On the **Create in Maticon Office** page, users can create the attachment using templates that consider the user's language preference. Take a look at [supported formats](#formats). The visibility of this page depends on the user's permissions for the module.

### Convert with Maticon Office

![Convert with Maticon Office](/assets/images/editor/convert-page.png)

On the **Convert with Maticon Office** page, the user can convert the attachment. The visibility of this page depends on the user's permissions for the module where the attachment is located.

Download the Maticon Office plugin for Redmine [here](https://github.com/MaticonOffice/maticonoffice-redmine).
