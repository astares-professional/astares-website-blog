---
title: "Azure AppService Deployment"
date: 2024-12-13T09:00:00-07:00
lastmod: 2024-12-13T09:00:00-07:00
draft: false
categories: ["Azure"]
tags: ["JavaScript", "Express", "VisualStudio Code", "IDE", "Azure", "Cloud"]
description: "Azure AppService Deployment using VisualStudio Code"
slug: "appservice-deployment"
---

# Azure AppService

[Azure AppService](https://azure.microsoft.com/en-gb/products/app-service) is a managed platform that allows you to deploy webapps easily using [Azure](https://azure.com) cloud. Choose your favourite programming environment like .NET, Java, Node.js, Python or PHP and simply deploy your project to Azure.

## Create a simple ExpressJS app

For instance you can easily use **npx** to create an [ExpressJS](https://expressjs.com/) application (here I use [EJS](https://ejs.co) template lib to create HTML views):

```
npx express-generator azure-app-service-app --view ejs
```

Then convert the generated folder into a [git](https://git-scm.com/) repo:

```
cd azure-app-service-app
git init 
git add * 
git commit -m "Initial code"
```

Create an empty project in your [GitHub](https://github.com/) or [GitLab](https://gitlab.com) account, connect the remote and use *main* as the standard branch:
```
git remote add origin git@github.com:astares/azure-app-service-app.git
git branch -M main
git push -u origin main
```
You can install the dependencies locally
```
npm install 
```
which gives you the regular "node_modules" folder. Typically you should create a .gitignore files that ignores this one.

```
echo "node_modules/" > .gitignore
git add .gitignore
git commit -m "Ignore modules"
```

Now you can run and develop locally
```
npm start
```

## Deploy to Azure AppService

The easiest way to **deploy to Azure AppService directly via VisualStudio Code** is by using the Azure App Service plugin.

You can get the plugin from the marketplace:

[https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice)

In the Azure view just right click on AppService to deploy. 

![Azure AppService Plugin.](../images/azureappserviceplugin.png)

The plugin will ask your about

- the subscription
- the resource group
- the app service plan (one can use the free tier here)
- the application insights resource

to use and deploy the application.

Following proper governance it is recommended to group the resources in a common resource group and following the prefix notation: 

|Prefix|Subject|
|---|---|
|rg-|Resource Group|
|air-|Azure Insight Resource|   
|asp-|App Service plan

![Azure AppService Plugin.](../images/azureappservicedeployment.png)

## Pro Tip:
As VisualStudio Code provides its own settings in your projects folder under a *.code* directory you can easily define the deployment target directly in the **settings.json** file. 

Here is an example:

```JSON
{
    "appService.defaultWebAppToDeploy": "/subscriptions/3deca001-52f1-0d00-828a-841605b460f1/resourceGroups/rg-webapp-homepage/providers/Microsoft.Web/sites/azure-app-service-app",
    "appService.deploySubpath": "."
}
```

This allows to deploy quickly during development but also gives you an easy way to connect to an already existing deployed AppService. So just for the case you already have started to create the ARM resources on the Azure side you can easily add the settings with your own subscription ID afterwards and deploy whenever you like. 

*For security reasons the ID published here is not a real one.*

