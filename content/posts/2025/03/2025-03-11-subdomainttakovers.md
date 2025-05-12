---
title: "Subdomain Takeover (in Azure)"
date: 2025-03-11T09:00:00-07:00
lastmod: 2025-03-13T09:00:00-07:00
draft: false
categories: ["Azure"]
tags: ["Security", "DNS", "Hosting","Azure", "Cloud"]
description: "Avoid Subdomain takeovers in the cloud"
slug: "subdomain-takovers"
---

# Subdomain Takeover (in Azure)

## What is it and why should you care

A **subdomain takeover** happens when an attacker gains control over a subdomain of a website due to improper configuration or an abandoned service. This typically occurs when a domain owner removes a resource—like a cloud-based service, hosting provider, or third-party integration — but forgets to update DNS settings. The dangling subdomain remains in existence, but without an active owner, making it vulnerable to hijacking.

## How does it look like

Especially when working in cloud environments such as **Azure**, **AWS**, **GCP**, **OCI** and other one can easily create and expose functionality via named web endpoints. 

For instance you might expose a service written in Java, JavaScript or C# using [Azure AppService](https://azure.microsoft.com/en-us/products/app-service) and give a custom name to it. So while the service is running on the side of the cloud solution provider (CSP) you do not have to apply extra work as the DNS and subdomain is automatically assigned and you might end up with a service URL like:

```
https://my-new-business-service.azurewebsites.net
```

The subdomain "my-new-business-service" is **now reserved and blocked** for your particular service.

**You feel safe** as you typically work in your own tenant with your own subscription and can therefore control what is running behind the URL. To make the service even more usable for the business you might expose it under a custom name of your own domain

```
https://service.mycompany.com
```
and even integrate it into your webpage or other services.

## Now where is the risk?

Maybe the service and name assignment was only used for a test or integration scenario. Or the service is not required anymore so it can be deleted to avoid further costs.

If you delete the service the subdomain is free again and can be used by the next customer to expose a service. If the DNS settings stay you might come into the situation that the **URL is controlled by someone other** who might abuse the situation.

Attackers can set up a fake page on the hijacked subdomain and trick users into entering sensitive information, believing it's a legitimate part of your original website or service.

## How to solve it

So when decommissioning a service, it's crucial to **clean up associated DNS records properly** to prevent a dangling subdomain that attackers could exploit.

Therefore follow a few easy principles:
- Tear down and clean up properly - check if DNS settings need to be updated
- Clean up DNS pointers or Re-claim the DNS
- Regularly audit DNS records and remove unused subdomains
- Put a [lock on resources](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources) on resources that should stay - this avoids accidential deletion
- Monitor subdomains for unexpected changes or activity
- Keep a reference list of URLs and (automatically) test what they expose
- Ideally test what is reachable under the given names

And the most important: make your team aware of possible issues [dangling DNS and subdomain takeover](https://learn.microsoft.com/en-us/azure/security/fundamentals/subdomain-takeover).

## Prevention in Azure

Microsoft in Azure is aware of the issue - now upon deletion of an **App Service** or **App Service Environment** (ASE) in Azure App Service an immediate reuse of the corresponding DNS is forbidden. [Read more here](https://learn.microsoft.com/en-us/azure/app-service/reference-dangling-subdomain-prevention).

The Azure App Service (for new web apps) also allows to create web apps with unique default hostnames.

Basically the URL is now more complex to provide uniqueness:

- a random hash is appended to the web app name with a dash “-”  
- a region name is appended too 

```
https://my-new-business-service-a4gqaeashthwfkeu.germanywestcentral-01.azurewebsites.net
```

![Azure Hashed URL](../images/takeoverprevention.png)

There is [a nice tech community article explaining](https://techcommunity.microsoft.com/blog/appsonazureblog/public-preview-creating-web-app-with-a-unique-default-hostname/4156353) this concept if you want to go further into the details.

## Summary

A subdomain takeover occurs when a subdomain remains configured after its associated service is deleted, allowing attackers to claim and misuse it. This is particularly risky in any online environment, where automated DNS assignments can expose vulnerable endpoints. You need to take proactive security measures to prevent subdomain hijacking - a professional governance can help you avoiding it.
