---
title: "Mongo on docker"
date: 2025-01-15T09:00:00-07:00
lastmod: 2025-01-04T09:00:00-07:00
draft: false
categories: ["Virtualization", "Database"]
tags: ["MongoDB","NoSQL", "Database"]
description: "Running recent Mongo with docker might fail"
slug: "docker-mongo"
---

# Running Mongo in docker
## Pull the image and run

Running an instance of MongoDB in docker typically should be easy. Just pull the image using database:

```
docker pull mongo
```
on the commandline

and run the docker container for the popular NoSQL using:

```
docker run --name mongodb -p 27017:27017 -d mongo
```
This maps the local port 27017 to the same container port and starts the container using *"mongodb"* as name.

## Trouble with VirtualBox due to AVX

Depending on hardware you might notice that the container did not start. I run VirtualBox here with several Linux
distros inside. For a simple elementaryOS development VM I run into trouble using the above commands. Mongo was
not started. A double check using

```
docker ps -a
```

revealed an "Exited (132)" - which means the container exited with an error and exit code 132. In such a case check the
logs for the container using:

```
docker logs mongodb
```

and it easily revealed the issue:

```sh
WARNING: MongoDB 5.0+ requires a CPU with AVX support, and your current system does not appear to have that!
  see https://jira.mongodb.org/browse/SERVER-54407
  see also https://www.mongodb.com/community/forums/t/mongodb-5-0-cpu-intel-g4650-compatibility/116610/2
  see also https://github.com/docker-library/mongo/issues/485#issuecomment-891991814
```
AVX is the abbreviation for **Advanced Vector Extensions** - an extended instruction set for x86 that your CPU must support.
The VirtualBox image I was using did not have AVX enabled.

## Solution 1: Downgrade MongoDB version

You can easily fix the issue by downgrading MongoDB if you do not rely on a recent version. Just pull a specific version before
MongoDB5+:

```
docker pull mongo:4.4
```
and starting a fresh container:
```
docker run --name mongodb -p 27017:27017 -d mongo:4.4
```
now gives a proper MongoDB instance:
```output
CONTAINER ID   IMAGE       COMMAND                  CREATED         STATUS         PORTS                                           NAMES
824434da9cd0   mongo:4.4   "docker-entrypoint.s…"   7 seconds ago   Up 5 seconds   0.0.0.0:27017->27017/tcp, :::27017->27017/tcp   mongodb
```
and you will also notice that the size of the image is around half the size of a recent one.

## Solution 2: Enable AVX for the VM

The other option is to enable AVX for the specific virtual machine in VirtualBox. This can be done using the following command:

```
VBoxManage modifyvm <Your_VM_Name> --hwvirtex on
```

