---
description: Integrate Maticon Office Docs into SharePoint for document editing and collaboration.
tags: ["Docs", "Integration", "Ready-to-use"]
sidebar_custom_props:
  icon: /assets/images/editor/connectors/sharepoint.svg
---

# SharePoint integration

```mdx-code-block
import YoutubeVideo from '@site/src/components/YoutubeVideo/YoutubeVideo';

<YoutubeVideo videoId="5rN7CksWE-w"/>
```

This [solution](https://github.com/MaticonOffice/maticonoffice-sharepoint) enables users to edit office documents from [SharePoint](https://www.microsoft.com/en-us/microsoft-365/sharepoint/collaboration) using Maticon Office Docs.

## Features

- Currently, the following document formats can be edited: DOCX, XLSX, PPTX.
- The following formats are available for viewing only: PDF, DJVU, TXT, CSV, ODT, ODS, ODP, DOC, XLS, PPT, PPS, EPUB, RTF, HTML, HTM, MHT, XPS.
- The solution will create a new **Edit in Maticon Office** menu option within the context menu of the file and the ribbon for Office documents. This allows multiple users to collaborate in real time and to save back those changes to SharePoint.

## Installing Maticon Office Docs

You will need an instance of Maticon Office Docs (Document Server) that is resolvable and connectable both from SharePoint and any end clients. If that is not the case, use the official [Maticon Office Docs documentation page](https://help.maticonoffice.ru/server/linux/document/linux-installation.aspx). Maticon Office Docs must also be able to POST to SharePoint directly.

The easiest way to start an instance of Maticon Office Docs is to use [Docker](https://github.com/MaticonOffice/Docker-DocumentServer).

## Installing Maticon Office solution for SharePoint

To start using Maticon Office Docs with SharePoint, the following steps must be performed:

1. Click **Start**, point to **All Programs**, then choose **Administrative Tools**, and click **Services**. Make sure that **SharePoint Administration** service is started.

2. Click **Start -> SharePoint Management Shell**, go to the directory with the *.wsp* file.

3. Run the *Install.ps1* script:

   ``` ps1
   PS> .\Install.ps1
   ```

4. Enter your SharePoint site address:

   ``` ps1
   https://<yoursharepointsite>
   ```

   :::note
   As an alternative to steps **3** and **4**, you can type the following command:

   ``` ps1
   Add-SPSolution -LiteralPath <SolutionPath>/maticonoffice.wsp
   ```

   On the **SharePoint Central Administration** home page, click **System Settings -> Farm Management -> Manage farm solutions**. On the **Solution Management** page, click **maticonoffice.wsp -> Deploy Solution**.
   :::

5. On the **SharePoint Central Administration** home page, under **Application Management**, click **Manage web applications**.

6. Make sure you select your site and click the **Authentication Providers** icon.

7. In the **Authentication Providers** pop-up window, click **Default zone**.

8. Under **Edit Authentication**, check **Enable anonymous access** and click **Save**.

9. Go back to **Web Application Management** and click the **Anonymous Policy** icon.

10. Under **Anonymous Access Restrictions**, select your **Zone**, set the **Permissions** to *None – No policy* and click **Save**.

## Configuring Maticon Office solution for SharePoint

In SharePoint, open the */\_layouts/15/MaticonOffice/Settings.aspx* page with administrative settings. Enter the following address to connect Maticon Office Docs:

```sh
https://<documentserver>/
```

where the **documentserver** is the name of the server with the **Maticon Office Docs** installed. The address must be accessible from both the user's browser and the SharePoint server. The SharePoint server address must also be accessible from **Maticon Office Docs** for correct work. You can [register](https://www.maticonoffice.ru/docs-registration.aspx?from=api) a free Maticon Office Cloud and use its public IP address or public DNS that can be found in the **Instances** section of the cloud console.

:::note
Please note, that if you have subsites set up with SharePoint, you will need to additionally configure Maticon Office Docs connection with each of them, in order for it to work properly. Go to each subsite settings and enter the Maticon Office Docs address to the proper field.
:::

Starting from version 7.2, JWT is enabled by default and the secret key is generated automatically to restrict access to Maticon Office Docs and for security reasons and data integrity. Specify your own **Secret key** in the SharePoint administrative settings. In the Maticon Office Docs [config file](../../additional-api/signature/signature.md), specify the same secret key and enable the validation.

If JWT protection is enabled, it is necessary to specify a custom header name since the SharePoint security policy blocks external **Authorization** headers. This header should be specified in the Maticon Office Docs signature settings as well. Further information about signature can be found [here](../../additional-api/signature/signature.md).

## Compiling Maticon Office solution for SharePoint

There are two ways to compile Maticon Office solution for SharePoint:

1. Using **MS Visual Studio**:

   1. Enter the SharePoint server and open this project in Visual Studio.
   2. In **Solution Explorer**, open the shortcut menu for the project and then choose **Publish**.
   3. In the **Publish** dialog box, choose the **Publish to File System** option button.
   4. Click the **Publish** button. When the publishing process is finished, the solution *.wsp* file will be created.
   5. Copy the resulting file to the folder with the *Install.ps1* file (**BuildAndInstall** folder by default).

2. With the help of the *build.bat* file provided:

   1. Go to the **BuildAndInstall** folder.
   2. Run the *build.bat* file.
   3. The resulting solution *.wsp* file will be created and placed to the **BuildAndInstall** folder.

## How it works

The Maticon Office integration follows the API documented [here](../basic-concepts.md).

1. User navigates to a document within SharePoint and selects the **Edit in Maticon Office** action on context menu or ribbon.

2. SharePoint makes a request to the editor page (URL of the form: */\_layouts/15/MaticonOffice/editorPage.aspx?SPListItemId=\{ItemId\}\&SPListURLDir=\{ListUrlDir\}\&action=track*).

3. SharePoint prepares a JSON object with the following properties:

   - **url** - the URL that Maticon Office Docs uses to download the document;
   - **callbackUrl** - the URL that Maticon Office Docs informs about status of the document editing;
   - **DocumentServerHost** - the URL that the client needs to reply to Maticon Office Docs (can be set at the settings page);
   - **Key** - the file identifier from SharePoint;
   - **FileName** - the document title (name);
   - **CurrentUserId** - the user identifier;
   - **CurrentUserName** - the user name.

4. SharePoint constructs a page, filling in all of those values so that the client browser can load up the editor.

5. The client browser makes a request to the JavaScript library from Maticon Office Docs and sends Maticon Office Docs the DocEditor configuration with the above properties.

6. Then Maticon Office Docs downloads the document from SharePoint and the user begins editing.

7. When all users and client browsers are done with editing, they close the editing window.

8. After [10 seconds](../how-it-works/saving-file.md#save-delay) of inactivity, Maticon Office Docs sends a POST to *callbackUrl* letting Maticon Office solution for SharePoint know that the clients have finished editing the document and closed it.

9. SharePoint downloads a new version of the document, replacing the old one.

Download the Maticon Office solution for SharePoint [here](https://github.com/MaticonOffice/maticonoffice-sharepoint).
