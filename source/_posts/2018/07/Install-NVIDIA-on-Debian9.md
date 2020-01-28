---
title: Install NVIDIA on Debian9
tags:
  - Linux
  - Debian9
  - NVIDIA
categories:
  - 笔记
abbrlink: e925b6c5
date: 2018-07-05 16:09:48
---

Step 1: vi /etc/apt/source.list
Step 2: add 163 release
Step 3: # apt update
Step 4: # apt list –upgradable -a
Step 5: # apt upgrade
Step 6: # dpkg-reconfigure tzdata
Step 7: # apt install linux-headers=$(uname -r|sed s/[^-]-[^-]-//) nvidia-driver
Step 8: # reboot now
