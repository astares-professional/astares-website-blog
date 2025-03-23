---
title: "Spring Dependencies Import"
date: 2024-08-22T09:00:00-07:00
lastmod: 2024-08-22T09:00:00-07:00
draft: false
categories: ["Java", "Spring"]
tags: ["Java", "Spring", "Dependencies"]
description: "Dependencies in Spring"
slug: "spring-dependencies"
---

# Spring Dependencies Import

## The Problem

When you use Spring Initializr you will notice that it defines a maven parent for your project. This parent is **spring-boot-starter-parent** which has itself another parent **spring-boot-dependencies** defined in the POM.

The POM in **spring-boot-dependencies** defines many dependencies already.

But having it available only from the parent POM might be limiting as you want to use your own custom parent POM.

So ideally do not use this predefined Spring Initializr code:

![The predefined spring parent prevents to have an own and custom one.](../images/spring-parent.png)


## The Solution

The solution actually is very easy as Maven allows you to import the definitions of another POM.

Use the <dependencyManagement> node for that. You can either import in your project POM or in your custom parent POM.

![Use import as a solution.](../images/spring-import.png)

