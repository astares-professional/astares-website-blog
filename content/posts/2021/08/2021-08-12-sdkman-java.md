---
title: "Java Setup with SDKMan"
date: 2021-08-12T09:00:00-07:00
lastmod: 2021-08-12T09:00:00-07:00
draft: false
categories: ["Java"]
tags: ["Software", "Installation", "Java", "SDKMan"]
description: "Easy Java installation with SDKMan"
slug: "sdkman-java"
---

# Java Setup with SDKMan

*When setting up Java on your (development) system, the process can sometimes feel complicated — from downloading the right version to managing multiple installations. Also one requires additional tools like Maven or Ant. SDKMan - a simple command line tool makes installing and managing Java versions effortless.*

## What is SDKMan

**SDKMan (Software Development Kit Manager)** is a command-line tool that simplifies the installation and management of programming languages and development kits, including Java. It works across multiple operating systems and eliminates the hassle of manual downloads. Just visit

[https://sdkman.io/](https://sdkman.io/)

to check it out.

### SDKMan Installation

It provide a **zero conf script** - which means you can easily install and configure it with a simple web request:

```bash
curl -s "https://get.sdkman.io" | bash
```

On any Linux this creates a (hidden) folder *.sdkman* and if you do not want to restart just run

```bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```
to initialize SDKMan.

Now check that the **sdk command** works on your command line.
```bash
sdk help
```

## Installation of Java

Once **SDKMan** is installed you can **list all available Java distributions** using

```bash
sdk list java
```

With a simple command you can **install Java**

```bash
sdk install java 
```
or gives a **specific version** like Java 17 using the [Temurin JDK](https://adoptium.net/en-GB/temurin/releases) from Eclipse Foundation.

```bash
sdk install java 17.0.8-tem
```

If you have more than one JDK installed you can easily switch to another using

```bash
sdk use java 11.0.19-tem
```

to show the current one just use:

```bash
sdk current java
```

You will find the installation(s) in *~/.sdkman/candidates/java* folder

## Install Maven

Typically for a larger project you might require akso a [Maven](https://maven.apache.org/) installation - a Java package and dependency manager. You can easily install it using:

```bash
sdk install maven
```

You will find the installation under *~/.sdkman/candidates/maven/* with a subfolder for each version, where *~/.sdkman/candidates/maven* points to the current version.

## Install Ant

If you still use [Apache Ant](https://ant.apache.org/) then you can also install it with a simple command:

```bash
sdk install ant
```

You will find the installation under *~/.sdkman/candidates/ant/*.

## Install other related tooling

SDKMan provides many more installations. You can get an overview by using the 

```bash
sdk list
```

command which list all installation packages. 

So for instance you can easily install **Groovy**

```bash
sdk install groovy
```

for scripting or [**JMeter**](https://jmeter.apache.org/) for load and performance testing:

```bash
sdk install jmeter
```