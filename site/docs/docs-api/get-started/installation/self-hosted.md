---
sidebar_position: -1
sidebar_label: Self-hosted
---

# Installation - Self-hosted

Maticon Office Docs is available for Windows, Linux and Docker.

To install it on your local server:

1. [Download](https://www.maticonoffice.ru/download-docs.aspx?from=api#docs-developer) Maticon Office Docs Developer and install it on your local server following the instructions in Maticon Office Help Center:

   - [Install Maticon Office Docs for Windows](https://help.maticonoffice.ru/installation/docs-developer-install-windows.aspx?from=api)
   - [Install Maticon Office Docs for Linux](https://help.maticonoffice.ru/installation/docs-developer-install-ubuntu.aspx?from=api)
   - [Install Maticon Office Docs for Docker](https://help.maticonoffice.ru/installation/docs-developer-install-docker.aspx?from=api)

2. In the target HTML file where the editors are to be embedded, specify a placeholder *div* tag, where all the information about the editor parameters will be passed:

   ```html
   <div id="placeholder"></div>
   <script type="text/javascript" src="https://documentserver/web-apps/apps/api/documents/api.js"></script>
   ```

   Where **documentserver** is the name of the server with the Maticon Office Docs installed. In this case, this is an address of you local server (`http://localhost`). You can [register](https://www.maticonoffice.ru/docs-registration.aspx?from=api) a free Maticon Office Cloud and use its public IP address or public DNS that can be found in the **Instances** section of the cloud console.

   `https://documentserver/web-apps/apps/api/documents/api.js` is the address where the API JavaScript file can normally be found.

   :::info
   Starting from version 8.1, it is recommended to add the [shardkey](/docs/docs-api/get-started/configuration/shard-key.md) parameter to the query string with the `key` value in it. For example, `?shardkey=Khirz6zTPdfd7`. This allows you to load balance requests.

   Starting from version 9.0, you can [preload](/docs/docs-api/get-started/configuration/preload.md) static assets (HTML, CSS, JS, fonts) into the browser cache before opening a document to speed up the first-time loading of the document editor.
   :::

3. Specify the page code containing the changeable parameters:

   ``` ts
   const config = {
     document: {
       fileType: "docx",
       key: "Khirz6zTPdfd7",
       title: "Example Document Title.docx",
       url: "https://example.com/url-to-example-document.docx",
     },
     documentType: "word",
     editorConfig: {
       callbackUrl: "https://example.com/url-to-callback",
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```


   From now the [`docEditor`](/docs/docs-api/usage-api/doceditor.md) object can be used to call the **document editor** [Methods](/docs/docs-api/usage-api/methods.md).

   The example above includes all the parameters necessary for Maticon Office Docs correct startup.

4. Specify the additional non-obligatory parameters that can be changed to achieve different goals with your document (change access rights for the document, display different information about the document, etc.). See the [Advanced parameters](/docs/docs-api/usage-api/advanced-parameters.md) section to find out what these parameters are and how you can change them.

5. Add an encrypted signature to the requests in the form of [token](/docs/docs-api/additional-api/signature/signature.md) to prevent the substitution of important parameters. 

## Before you start

Before working with Maticon Office Docs API documentation, it is recommended to make the following settings if necessary:

- open additional [ports](https://help.maticonoffice.ru/installation/docs-developer-open-ports.aspx?from=api);
- configure [Maticon Office Docs server settings](/docs/docs-api/get-started/configuration/server-config) in Maticon Office Docs configuration file;
- switch Maticon Office Docs to the HTTPS protocol for secure connection using [SSL Certificates](https://help.maticonoffice.ru/installation/docs-community-https-linux.aspx?from=api);
- add additional [fonts](https://help.maticonoffice.ru/installation/docs-community-install-fonts-linux.aspx?from=api) to Maticon Office Docs to enhance the work with the editors;
- add your own [color themes](../how-it-works/customizing-themes.md) for the application interface.

## Health check

To check if the editors are available, send the GET request to */healthcheck*. This request checks the availability of the databases, message broker, Redis connection, and storage.

The response must be **true**, which means that the editors are ready to use.

If something went wrong, make sure that you have followed the installation instructions above.

## Next steps

- [How to enable document forcesaving](/docs/docs-api/get-started/how-it-works/saving-file.md#force-saving)
- [How to customize the editor](/docs/docs-api/usage-api/config/editor/customization/customization-standard-branding.md)
- [How to manage the editor through Automation API](/docs/docs-api/usage-api/automation-api/automation-api.md)
- [How to install / disable plugins](/docs/docs-api/usage-api/config/editor/plugins.md)
