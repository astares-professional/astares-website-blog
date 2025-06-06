---
title: "DNS Caching"
date: 2023-10-08T09:00:00-07:00
lastmod: 2023-10-08T09:00:00-07:00
draft: false
categories: ["DNS"]
tags: ["Network", "Migrate","Applications", "Caching", "Security"]
description: "Avoid DNS Cache issues"
slug: "dns-cache"
---

# Avoid DNS Caching issues

*When migrating infrastructure or applications you might face the challenge to ensure that users could access the new environment without being redirected to old outdated URLs.
This is where DNS (Domain Name System) and DNS caching play a role.*

## Smooth Infrastructure and Application Migration

### DNS and DNS Caching

*Domain Name System (DNS)* acts as the internet's address book, translating human-friendly domain names (like astares.com) into IP addresses that computers use to locate servers and services.

It will not do that for every request. *"DNS caching"* helps to optimize this translation procedure, it is intended to reduce the time and network resources needed for repeated lookups. Basically it is storing previously resolved DNS queries locally in a cache.


### Smooth DNS transitions

When performing a migration it can happen that after setting up the new environment, you update the domain’s DNS records to point to the new servers.
While everything looked great on our end, some early users might report accessibility issues — still landing on the old instance despite the changes.

Reason is often very simple: instead of searching the internet for the IP address the system checks its own DNS cache first. So the user type a web address (e.g., astares.com) into a browser and the system first checks its local DNS cache.

### Verify 

#### Clean the cache 
So whenever you update DNS records you may want to check if your updates have been propagated correctly. In such a case you should not rely on outdated data on your computer from previous DNS requests. You might therefore want to delete the local cache.
On Windows the following commds help you with that:

```PowerShell
ipconfig /flushdns
```

or 

```PowerShell
rundll32.exe dnsapi.dll,DnsFlushResolverCache
```

#### TTL of DNS entries

Another tip is to **lower the TTL (Time-To-Live) value** before migration. Such value determines how long a DNS response is cached before a new query is made. So you can actively ensure cached records expire quickly. 


Lowering the TTL before migration ensures that outdated IP addresses do not linger in DNS caches. 

Typically, TTL values range from a few seconds to several days, depending on the configuration. Reducing the TTL to a shorter duration—like 300 seconds (5 minutes)—before a migration can force faster updates across networks.

#### DNS Propagation Checker

There are tools that help to verify whether DNS changes (such as updating an IP address or modifying records) have been applied across global DNS servers.

1. *whatsmydns.net* lets you instantly perform a DNS lookup to check a domain name's current IP address and DNS record information against multiple nameservers located in different parts of the world.
Try it out for your domain or subdomain: 

    https://www.whatsmydns.net/#A/astares.com

2. *NsLookup.io* – Provides detailed DNS record checks and propagation status. Here an example for my domain:

   https://www.nslookup.io/domains/astares.com/dns-propagation/a/


3. *DNSMap* – Offers worldwide DNS resolution testing. Again an example for my domain:

    https://dnsmap.io/#A/astares.com

So flushing DNS caches is a simple but important step and it prevent users from being directed to outdated infrastructure.