---
title: "Switching Git Fork"
date: 2024-12-13T09:00:00-07:00
lastmod: 2024-12-13T09:00:00-07:00
draft: false
categories: ["git"]
tags: ["git", "Migrate","CI/CD", "Pharo", "Releases"]
description: "Update git forks to newer branches"
slug: "switch-git-fork"
---

*It's may 2025 already and following our usual release cycle a new version of [Pharo](https://www.pharo.org) will soon be pushed out of the door. Before the real release is happening as usual the next iteration is already in preparation.*

## Iterations and Branching 

Since a few years each iteration is mapped in an own git branch and the new git branch for Pharo14 is already available.

[https://github.com/pharo-project/pharo/tree/Pharo14](https://github.com/pharo-project/pharo/tree/Pharo14)

This new branch is now the **new default branch** on the standard **upstream** Pharo repo: 

[https://github.com/pharo-project/pharo](https://github.com/pharo-project/pharo)

And there is already a code freeze - so the Pharo 13 branch is only accepting very important hotfixes and (important) backports from P14.

## Update your fork

To be able to continue contributing one has to update and also use this new branch. 

Basically this can be done by retrieving the new branch locally and pushing it into the own GH fork. Here is a short script to help you with that:

```bash
git clone https://github.com/astares/pharo.git
git remote add upstream https://github.com/pharo-project/pharo.git
git fetch upstream

git checkout -b Pharo14 upstream/Pharo14

git push origin Pharo14
```

## Switch of default branch

My custom fork still shows the P13 iteration as default:

![P13 iteration](../images/p_branch_13.png)

So once the new branch is pushed, one needs to update the default branch manually via GitHub’s web UI:

- Go to your custom repository on GitHub: https://github.com/<YOUR_ACCOUNT>/pharo
- Click on **Settings**
- Navigate to the **General** and **Default branch** section
- Click on **Switch to another branch** and change the default branch to **Pharo14**

![14 default branch](.l/images/p_branch_14.png)

## New image location

The location for new image builds is now on https://files.pharo.org/image/140/

For Jenkins CI/CD the new build is now available on 
https://ci.inria.fr/pharo-ci-jenkins2/job/Test%20pending%20pull%20request%20and%20branch%20Pipeline/job/Pharo14/

while the old one keeps running on 

https://ci.inria.fr/pharo-ci-jenkins2/job/Test%20pending%20pull%20request%20and%20branch%20Pipeline/job/Pharo13/

![Jenkins](../images/p_ci_13.png)

While checking I found a synch issue between the builds and the file area. I [opened an issue for it to track](https://github.com/pharo-project/pharo/issues/18175).








