---
title: "Azure ARM Templates"
date: 2021-05-08T09:00:00-07:00
lastmod: 2021-05-08T09:00:00-07:00
draft: false
categories: ["Azure"]
tags: ["ARM", "Cloud", "Microsoft", "Azure", "Automation"]
description: "Azure ARM Templates"
slug: "arm-templates"
---

# Azure ARM Templates

**Azure Resource Manager (ARM)** is the deployment and management service for Azure, the cloud service from Microsoft. Typically one can use the web admin interface on [https://portal.azure.com](https://portal.azure.com) to create cloud resources.

But you will also notice that it is possible to **download a template** before you finally create a resource (like a VM or VNet) by clicking on the "Review + Create" button. 

If you download the template you will receive a ZIP with with two files

- template.json
- parameters.json

You will notice that such an ARM template is just a simple JSON file. An empty template looks like:

```JSON
{

  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",

  "contentVersion": "1.0.0.0",

  "parameters": {

  },

  "variables": {

  },

  "resources": [

  ],

  "outputs": {

  }

}
```
and beside the definition of Azure resources it also allows users to define dynamic values at deployment time.

So for a simple example if you require an Azure **resource group** with the name *"rg-simple"* tagged for production stage you might want to use a template like:

```JSON
{
    "$schema": "https://schema.management.azure.com/schemas/2018-05-01/subscriptionDeploymentTemplate.json#",
    "contentVersion": "1.0.0.1",
    "parameters": {
        "rgName": {
            "type": "string"
        },
        "rgLocation": {
            "type": "string"
        },
        "tags": {
            "type": "object",
            "defaultValue": {}
        }
    },
    "variables": {},
    "resources": [
        {
            "type": "Microsoft.Resources/resourceGroups",
            "apiVersion": "2018-05-01",
            "location": "[parameters('rgLocation')]",
            "name": "[parameters('rgName')]",
            "properties": {},
            "tags": "[parameters('tags')]"
        }
    ],
    "outputs": {}
}
```
with a **parameter definition** file:
```JSON
{
    "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentParameters.json#",
    "contentVersion": "1.0.0.0",
    "parameters": {
        "rgName": {
            "value": "rg-simple"
        },
        "rgLocation": {
            "value": "Germany West Central"
        },
        "tags": {
            "value": {
                "stage": "production"
            }
        }
    }
}
```

## Deploy from a template

Once you created the JSON files deploying necessary resources from a template is very easy. Just use the [cloud shell](https://portal.azure.com/#cloudshell/) within the azure portal.

1. Visit [https://portal.azure.com/#cloudshell/](https://portal.azure.com/#cloudshell/)
2. Upload your files
3. Run

```bash
az deployment sub create --location "Germany West Central" --template-file template.json
```

If you just provide the template then you will be asked line by line for any of the necessary parameters:

![Cloud Shell](../images/cloudshell.png)

If you want to pass in a file with the necessary parameters then specify this additionally on the CLI:

```bash
az deployment sub create --location "Germany West Central" --template-file template.json --parameters parameters.json
```

![Cloud Shell](../images/cloudshell2.png)

and again you will get a JSON in return:

```JSON
{
  "id": "/subscriptions/55f91b2f-1a7b-4bf5-a448-538f1a36643b/providers/Microsoft.Resources/deployments/template",
  "location": "germanywestcentral",
  "name": "template",
  "properties": {
    "correlationId": "3057311f-fd21-4d31-94c5-ae90af0ece95",
    "debugSetting": null,
    "dependencies": [],
    "duration": "PT2.430893S",
    "error": null,
    "mode": "Incremental",
    "onErrorDeployment": null,
    "outputResources": [
      {
        "id": "/subscriptions/55f91b2f-1a7b-4bf5-a448-538f1a36643b/resourceGroups/rg-simple"
      }
    ],
    "outputs": {},
    "parameters": {
      "rgLocation": {
        "type": "String",
        "value": "Germany West Central"
      },
      "rgName": {
        "type": "String",
        "value": "rg-simple"
      },
      "tags": {
        "type": "Object",
        "value": {
          "stage": "production"
        }
      }
    },
    "parametersLink": null,
    "providers": [
      {
        "id": null,
        "namespace": "Microsoft.Resources",
        "providerAuthorizationConsentState": null,
        "registrationPolicy": null,
        "registrationState": null,
        "resourceTypes": [
          {
            "aliases": null,
            "apiProfiles": null,
            "apiVersions": null,
            "capabilities": null,
            "defaultApiVersion": null,
            "locationMappings": null,
            "locations": [
              "germanywestcentral"
            ],
            "properties": null,
            "resourceType": "resourceGroups",
            "zoneMappings": null
          }
        ]
      }
    ],
    "provisioningState": "Succeeded",
    "templateHash": "1956942179878927632",
    "templateLink": null,
    "timestamp": "2025-06-01T13:24:12.084892+00:00",
    "validatedResources": null
  },
  "tags": null,
  "type": "Microsoft.Resources/deployments"
}
```

## The ARM template editor

If you visit

[https://portal.azure.com/#view/HubsExtension/TemplateEditorBladeV2](https://portal.azure.com/#view/HubsExtension/TemplateEditorBladeV2)

you can use a comfortable **Online Editor** to edit the ARM templates.

# Template repo

There is a **GitHub repo** with all currently available **Azure Resource Manager QuickStart templates** from the community.

Check it out at: [https://github.com/Azure/azure-quickstart-templates](https://github.com/Azure/azure-quickstart-templates)