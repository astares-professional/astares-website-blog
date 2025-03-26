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

Other drawing tools like [Draw.io](https://draw.io/) or [Lucidchart](https://www.lucidchart.com/) are also not very helpful here.

## The solution

So if I want to model a domain (the artefacts from the Azure domain) a real modeling and diagraming tool would be required.

Gladly within the [Eclipse IDE](https://www.eclipsel.org) corner there is a nice platform called ["Papyrus"](https://eclipse.dev/papyrus/) available. Basically this is a set of plugins on top of 
- [Eclipse Modeling Framework (EMF)](https://projects.eclipse.org/projects/modeling.emf.emf)
- [Eclipse Graphical Editing Framework (GEF)](https://projects.eclipse.org/projects/tools.gef)

**Papyrus** is particularly known for its strong support for UML (Unified Modeling Language), SysML (System Modeling Language) - both you get out of the box.

And the cool thing is that it allows for customization through UML profiles, making it a versatile tool towards model-based engineering for Azure.

### Creation of a custom profile

So if you want to model your own domain in Papyrus, the recommended approach is to create a **custom UML profile**. A UML profile allows you to extend the standard UML elements to suit the specific needs of your domain by defining stereotypes, tagged values, and constraints.

Just create a *Papyrus model project* and then choose *"Profile"*

![Custom UML Profile creation](../images/umlprofile.png)

With the newly created profile definition now the work starts on the meta-level. After importing an appropriate Metaclass like **Component** I've build up a model of Azure. Here is a part of the model:

![The domain model on the meta level](../images/azuredomainmodel.png)

Now we can add attributes and relations but also design shapes (SVG)and icons (based on PNG).

It is now possible to save the model as a dynamic model definition under the versioned profile definition. 

![Custom UML Profile creation](../images/profiledefinition.png)

### Applying the profile to a real project

Once the custom profile is defined you can apply directly to a new model project. 

![Custom UML Profile creation](../images/profileproperties.png)