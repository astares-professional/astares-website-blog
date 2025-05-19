---
title: "Mail Security"
date: 2024-12-13T09:00:00-07:00
lastmod: 2024-12-13T09:00:00-07:00
draft: false
categories: ["E-Mail"]
tags: ["Security", "E-Mail","Azure", "Cloud", "Exchange Online"]
description: "Provide secure mail infrastructure - why SPF, DKIM, and DMARC Matter"
slug: "mail-security"
---

# Mail 

*In today's digital world, email remains a critical communication tool, both personally and professionally. However, the convenience of email also comes with risks—spam, phishing attacks, spoofing, and business email compromise. Unfortunately I've often seen administrators and companies already struggeling with the basics. So lets dive in to improve security.*

## Mail addresses
### Personal mail

For personal email one can rely on Outlook, GMail, GMX and other services these days easily. Even unpaid and free services already offer a lot regarding security and SPAM protection as well as classification.

I personally use several mail addresses (GMX, GMail for Google accounts) but also using mail addresses with my own personal domain and brand identity. 

Initially I worked with [1&1/IONOS](https://webmailer.1und1.de/) but later migrated to **Microsoft Exchange Online** as it is more convinient, especially with the integration into Office, M365 and Azure cloud infrastructure.

### Business mail

I received my first mail account when studying computer science at the university. This is also where I learned about protocols and standards like [POP3](https://en.wikipedia.org/wiki/Post_Office_Protocol), [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) and [IMAP](https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol) first time.

As an IT and enteprise architect I can tell you: when it comes to enterprise mail the topic is often a different story. 

Already as a consultant I've seen various good and bad mail infrastructure in larger companies - ranging from country wide Lotus Domino server rollouts up to **Microsoft Exchange** in large and small-sized on-premise installations.

Working in critical infrastructure the mail topic differs more significantly as you have to **safeguarded** against leaks, hacking, and unauthorized access. With GDPR and other regulations you have to **govern** how emails should be stored, transmitted, and accessed. 

In industries like finance, healthcare, and government you must also follow strict **email retention policies** (e.g., GDPR, HIPAA, SOX). You may need to preserve emails for legal cases or audits and **require specific archiving mechanisms**.

I've also seen how the e-mail topic is handled differently here in Europe but also in areas like the middle-east.

*As an example:*

**In Italy companies are required to have a certified email** (PEC - Posta Elettronica Certificata) for the company register registration, ensuring legal validity and security. So you will find there more use of certified email services like [legalmail.it](https://legalmail.it), PosteCert or [pec.it](https://pec.it) (Aruba) when it comes to business communication. A PEC address ensures that official communications are legally recognized and securely traceable.

In Germany, there is no universal requirement for companies to use a certified email service like De-Mail, but it is available for secure and legally recognized communication if you want to decide for it.

While over the years e-mail has not changed much regarding ports, technologies people are getting more aware of it regarding security these days.

## Spam and Spoofing

Already at university with Unix tools like [sendmail]() it was easy to send mails or apply some dirty tricks like

```
echo "Test email" | sendmail -f fake-sender@example.com recipient@example.com
```

In the 1990s, email became widely available, and with it came spam—unsolicited bulk messages filling inboxes. Early spam was often harmless, advertising products or services, sometimes in comically poor English. 

One famous example is the "Nigerian Prince" scam, which lured victims into sending money in exchange for promised riches. I can only recommend you to [watch the TED talk from James Veitch](https://www.youtube.com/watch?v=4o5hSxvN_-s) on this topic.

As technology advanced, spammers automated their tactics, using bots to flood inboxes with ads, phishing attempts, and fraudulent offers. Businesses fought back with spam filters and other.

Spoofing, where attackers manipulate email headers to disguise the sender's identity, became more common and sharing knowledge should be part of any security training these days. AI-assisted techniques will attackers give the chance in the future to provide even more tailored attacks.

## Mail Security

*To be able to send and receive emails any mail infrastructure is by definition exposed to the web. Basically this is done with MX (Mail Extension) Records for a domain pointing to the infrastructure.*

*Finding out about these MX records is easily done on pages like:
https://mxtoolbox.com/*

*Just enter your domain name and check where it ends up. This is public information also available to anyone who would like to break in or harm your infrasttructure in other ways.*

*What can you do to make your business mail system and mail infrastructure more secure?*

### The basics of mail security

So if you own and run own mail infrastructure the rule of thumb is: **"keep it updated"**. As usual apply the latest updates and security patches to keep you away from someone abusing vulnerabilities. If you can afford also regulary **run a professional pentest** to see how secure it is. 

Also there are **three key email authentication protocols** that help protect against spam, phishing, and spoofing:

- **SPF** (Sender Policy Framework)
- **DKIM** (DomainKeys Identified Mail) and
- **DMARC** (Domain-based Message Authentication, Reporting and Conformance)

You can do a simple domain check on 

[https://dmarcadvisor.com/domain-check/](https://dmarcadvisor.com/domain-check/)

It's easy to learn about them, often people only know and have setup the first one (SPF).

