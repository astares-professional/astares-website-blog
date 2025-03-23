---
title: "Spring Dependencies Import"
date: 2024-08-22T09:00:00-07:00
lastmod: 2024-08-22T09:00:00-07:00
draft: false
categories: ["Java"]
tags: ["Java", "Spring", "Dependencies", "Maven"]
description: "Dependencies in Spring"
slug: "spring-dependencies"
---

# Spring Dependencies Import

## The Problem

When you use Spring Initializr you will notice that it defines a maven parent for your project. This parent is **spring-boot-starter-parent** which has itself another parent **spring-boot-dependencies** defined in the POM.

The POM of **spring-boot-dependencies** defines many dependencies already that are useful.

But having it available only from the parent POM might be limiting as you want to use your own custom parent POM.

So ideally do not use this predefined Spring Initializr code:

![The predefined spring parent prevents to have an own and custom one.](../images/spring-parent.png)


## The Solution

The solution is actually very easy as Maven allows you to import the definitions of another POM.

Using this mechanism one can import the necessary definitions in the <dependencyManagement> node and having an own custom parent POM definition at the same time. It is possible to do the import from within the projects POM or from within the own parent POM. Here is an example:

![Use import as a solution.](../images/spring-import.png)