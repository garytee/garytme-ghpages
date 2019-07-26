---
hide: false
path: "/posts/install-os-rpi/"
category: "Raspberry-Pi"
tags: [""]
title: "Installing an OS on your Raspberry Pi"
date: "2018-01-09T00:00:00.000Z"
summary: "There's several ways to install an operating system on your Raspberry Pi - Here's how."
images: ["images/3.png"]
heroimages: 
    - "./heroimage.png"
---

Installing Raspbian OS to a Raspberry Pi is easy enough, but with some extra tools we can streamline this process. Here are some of the different ways you can install Raspbian onto your Raspberry Pi.

## Terminal Based Installs

### Using dd install

This is the official method from the Raspberry Pi Foundation (https://www.raspberrypi.org/documentation/installation/installing-images/mac.md)  

1. plug your SD card into your computer.
2. open the terminal app and run 'diskutil list'

```js
diskutil list
```

![heroimage](./terminal.png)[]()
&nbsp;
3. Locate your usb from the list. (in my case it is the 'boot' volume on disk2)
4. Open Disk Utility and unmount your SD card

![diskutility](./diskutility.png)[]()
