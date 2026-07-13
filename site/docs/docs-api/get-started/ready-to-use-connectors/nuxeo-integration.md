---
description: Integrate Maticon Office Docs into Nuxeo for document editing and collaboration.
tags: ["Docs", "Integration", "Ready-to-use"]
sidebar_custom_props:
  icon: /assets/images/editor/connectors/nuxeo.svg
---

# Nuxeo integration

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="W6z0475IxCU"/>
```

This [package](https://github.com/MaticonOffice/maticonoffice-nuxeo) enables users to edit office documents from [Nuxeo](https://www.nuxeo.com/) using Maticon Office Docs.

## Features

- Currently, the following document formats can be edited: DOCM, DOCX, DOTM, DOTX, HTM, XML, XLSM, XLSX, XLTM, XLTX, POTM, POTX, PPSM, PPSX, PPTM, PPTX.
- The following formats are available for viewing only: DJVU, DOC, DOT, EPUB, FB2, FODT, HTML, MHT, ODT, OTT, OXPS, PDF, RTF, TXT, XPS, CSV, FODS, ODS, OTS, XLS, XLT, FODP, ODP, OTP, POT, PPS, PPT.
- The following formats are available for converting to Office Open XML formats: DOC, DOCM, DOT, DOTM, DOTX, EPUB, FB2, FODT, HTM, HTML, MHT, ODT, OTT, OXPS, PDF, RTF, XML, XPS, FODS, ODS, OTS, XLS, XLSM, XLT, XLTM, XLTX, FODP, ODP, OTP, POT, POTM, POTX, PPS, PPSM, PPSX, PPT, PPTM.
- The package allows multiple users to collaborate in real time and to save back those changes to Nuxeo.

## Installing Maticon Office Docs

You will need an instance of Maticon Office Docs (Document Server) that is resolvable and connectable both from Nuxeo and any end clients. If that is not the case, use the official [Maticon Office Docs documentation page](https://help.maticonoffice.ru/server/linux/document/linux-installation.aspx). Maticon Office Docs must also be able to POST to Nuxeo directly.

The easiest way to start an instance of Maticon Office Docs is to use [Docker](https://github.com/MaticonOffice/Docker-DocumentServer).

## Installing Maticon Office addon package for Nuxeo

You have two options:

**Option 1**. Nuxeo Marketplace (recommended)

Install directly from [Nuxeo Marketplace](https://connect.nuxeo.com/nuxeo/site/marketplace)

**Option 2**. [nuxeoctl](https://doc.nuxeo.com/nxdoc/installing-a-new-package-on-your-instance/)

```sh
nuxeoctl mp-install /path/to/maticonoffice-nuxeo-package-x.x.zip
```

## Configuring Maticon Office addon package for Nuxeo

Open the [nuxeo.conf](https://doc.nuxeo.com/nxdoc/configuration-parameters-index-nuxeoconf/) file and enter the name of the server with Maticon Office Docs installed:

``` ini
maticonoffice.docserv.url=http://documentserver/
```

where the **documentserver** is the name of the server with **Maticon Office Docs** installed. The address must be accessible from both the user's browser and the Nuxeo server. The Nuxeo server address must also be accessible from **Maticon Office Docs** for correct work. You can [register](https://www.maticonoffice.ru/docs-registration.aspx?from=api) a free Maticon Office Cloud and use its public IP address or public DNS that can be found in the **Instances** section of the cloud console.

Starting from version 7.2, JWT is enabled by default and the secret key is generated automatically to restrict access to Maticon Office Docs and for security reasons and data integrity. Specify your own secret key by adding the **maticonoffice.jwt.secret=yoursecret** line to the `nuxeo.conf` file. In the Maticon Office Docs [config file](../../additional-api/signature/signature.md), specify the same secret key and enable the validation.

## Compiling Maticon Office addon package for Nuxeo

To build Nuxeo package, the following steps must be performed for Ubuntu:

1. The stable Java version is necessary for the successful build. If you do not have it installed, use the following commands to install **Open JDK 8**:

   ``` sh
   sudo apt-get update
   sudo apt-get install openjdk-8-jdk
   ```

2. Install the latest **Maven**. Installation process is described [here](https://maven.apache.org/install.html).

3. Download the Maticon Office addon package for Nuxeo source code:

   ``` sh
   git clone https://github.com/MaticonOffice/maticonoffice-nuxeo.git
   ```

4. Compile Maticon Office addon package for Nuxeo:

   ``` sh
   cd maticonoffice-nuxeo/
   mvn clean install
   ```

5. Built package is located here `./maticonoffice-nuxeo-package/target/maticonoffice-nuxeo-package-x.x.zip`.

## How it works

The Maticon Office integration follows the API documented [here](../basic-concepts.md).

### Create a new file

1. Open the target workspace/folder.
2. Click Create new (Maticon Office icon).
3. Choose Document / Spreadsheet / Presentation, name it, and confirm.
4. The editor opens - start working immediately.

### Open an existing file

1. Locate your file in Nuxeo.
2. Click **Open with Maticon Office** (or the editor icon).
3. The file opens in the embedded editor for viewing or editing (per your permissions).

### Auto-save and versioning

Changes are sent back to Nuxeo; Nuxeo handles repository updates/versioning.

Download the Maticon Office addon package for Nuxeo [here](https://github.com/MaticonOffice/maticonoffice-nuxeo).
