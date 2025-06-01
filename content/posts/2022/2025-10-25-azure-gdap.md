---
title: "Granular Delegated Admin Privileges (GDAP)"
date: 2022-10-25T09:00:00-07:00
lastmod: 2022-10-25T09:00:00-07:00
draft: false
categories: ["Azure"]
tags: ["Security", "IAM", "Microsoft", "Cloud"]
description: "Switching to Granular Delegated Admin Privileges (GDAP)"
slug: "microsoft-gdap"
---

# Switch to Granular Delegated Admin Privileges (GDAP)

If your company uses **Azure**, **O365/M365** or other online services from Microsoft such as **Dynamics365** together with a Microsoft **Cloud Solution Provider (CSP) partner** then it is time to act.

## Delegated Admin Privileges (DAP) model

Because in the past the CSP partner were managing the services and your tenant using the **Delegated Admin Privileges (DAP) mode**. 

In this model the CSP partners are granted broad administrative rights, including Global Admin privileges. Basically the DAP relationships provide the CSP partner the roles of Global Admin and Helpdesk admin by default without any ability to change.

While this allows the Microsoft partner company to fully give you support on any end this bears the **risk of Over-Permission**. Also the activities of the CSP partner are not logged - so if something goes wrong you will have a hard time to reproduce.

With global admin rights the CSP partners as a third party company has **full control over an organization's cloud environment**, including user management, security settings, and data access. So there is basically an anonymous external admin. 

The DAP access remains indefinite until revoked. Global Admins have unlimited privileges, making it harder to enforce security policies. If the CSP partner is not following proper security guidelines he might screw up your cloud infrastructure and data.

All this might not be wanted and also conflict with your security guidelines and regulatory requirements. 

Also CSP partner often manage many independent clients and client tenants - if a hacker breaks into their infrastructure several companies and cloud environments are at risk.

## Granular Delegated Admin Privileges (GDAP) to the rescue

To solve the above issue Microsoft introduced **Granular Delegated Admin Privileges (GDAP)** - a new security feature that follows the **Zero Trust security model**.

GDAP works with custom timelines for how long the relationship will be in place and there a maximum timeframe of 2 years. This means every 2 years the customer would have to reaccept the relationship. 

Read more in the following article:

- [Introduction to granular delegated admin privileges (GDAP)](https://learn.microsoft.com/en-us/partner-center/customers/gdap-introduction)

### Partner Relationships in Admin Center

To check your current settings go the **Microsoft 365 Admin Center** by visiting

[http://admin.microsoft.com](http://admin.microsoft.com)

and check **Settings > Partner Relationships**.

You can audit the partners using

[https://admin.microsoft.com/#/partners/audit](https://admin.microsoft.com/#/partners/audit)

Speak to your CSP partner and remove the old DAP relationship. Then setup GDAP accordingly.

The partner has the possibility to request from you specific rights (like being a Teams Admin or Exchange Online Admin) and send you a new approval link. You as a customer must explicitly approve GDAP requests before they take effect.

Here is an [article explaining](https://docs.cloudassert.com/hybr/features/admin/microsoft-csp/granular-delegated-admin-privileges) how the partner can issue such a request.
