---
title: "Manage NodeJS using nvm"
date: 2021-12-10T09:00:00-07:00
lastmod: 2024-12-10T09:00:00-07:00
draft: false
categories: ["JavaScript"]
tags: ["Software", "Installation", "JavaScript", "NodeJS", "nvm"]
description: "Easily manage NodeJS using nvm"
slug: "nvm-nodejs"
---

If you're a Node.js developer, managing multiple versions of Node can be a hassle. If you work with [**ReactJS** ](https://react.dev/)you might require a different version than working with latest [**AngularJs**](https://angularjs.org/) or other.

Here is a list of all the Long term support (LTS) versions from NodeJS from recent years:

| Name     | Version | Released
| -------- | ------- | -------
|Jod      |v22.x |Released in 2024
|Iron     |v20.x |Released in 2023
|Hydrogen |v18.x |Released in 2022
|Gallium  |v16.x |Released in 2021
|Fermium  |v14.x |Released in 2020
|Erbium   |v12.x |Released in 2019
|Dubnium  |v10.x |Released in 2018
|Carbon   |v8.x  |Released in 2017
|Boron    |v6.x  |Released in 2016
|Argon    |v4.x  |Released in 2015


Different projects often require **different Node versions**, leading to compatibility issues and manual installations.

## nvm to the rescue

**NVM (Node Version Manager)** — a lightweight tool that makes switching between Node.js versions effortless.

It is easy to install with a single web request on Linux:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

If you work on Windows you can use [Chocolatey](https://chocolatey.org/) to install it:

```bash
choco install nvm
```

Now using the above table it should be easy to install the right NodeJS version:

```bash
nvm install 18
```

If you have two or more versions installed in parallel you can easily switch:

```bash
nvm use 16
```

If you want to check the installed versions just use

```bash
nvm list
```
