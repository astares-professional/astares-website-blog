---
title: "A custom Azure modeling tool"
date: 2025-02-06T09:00:00-07:00
lastmod: 2025-02-06T09:00:00-07:00
draft: false
categories: ["Cloud"]
tags: ["Azure","Architecture", "Infrastructure", "Modeling", "Cloud"]
description: "On building a custom modeling tool using Azure as example"
slug: "azure-modeling-tool"
---

# A custom Azure modeling tool

## The problem

As an architect I often work visualizations and diagrams. They are invaluable tools that can significantly enhance work and communication with stakeholders. Complex architectural topics require a common understanding and as often **“a picture is worth a thousand words.”**

When it comes to the cloud as an architect you also want to work with visual tools. If we talk about Azure for instance there is not much specific visual tooling available:

- **[ARM Template Viewer](https://learn.microsoft.com/en-us/answers/questions/370410/how-to-generate-architecture-diagram-from-azure-re)** - this extension in VisualStudio Code lets you visualize and edit existing ARM templates

- **[Azure Bicep Extension](https://zimmergren.net/generate-bicep-templates-from-existing-azure-resources-vscode/)** - allowing you to generate [Bicep](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview?tabs=bicep) templates (a more readable format for ARM templates)

- **[Resource Visualizer](https://learn.microsoft.com/en-us/answers/questions/370410/how-to-generate-architecture-diagram-from-azure-re)** - a tool in the Azure portal, that helps to visualize a resource group and export templates based on the architecture

But unfortunately these tools are focused on documentation or managing **existing resources** rather than serving as true visual planning tools that can generate deployment-ready templates directly from diagrams.

Checking what is available I found [https://azurediagrams.com/](https://azurediagrams.com/) which is an online tool stating that it s a platform designed for creating Azure architecture diagrams. It provides a variety of templates and Azure-specific icons to help you visually design your cloud infrastructure.

However, it primarily focuses on diagramming and visualization rather than generating deployment-ready ARM templates or enabling interactive planning processes. 

![Azure Diagrams.](../images/azurediagramscom.png)
