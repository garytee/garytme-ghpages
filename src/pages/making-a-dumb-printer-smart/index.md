---
hide: true
path: "/posts/making-a-dumb-printer-smart/"
category: "Raspberry-Pi"
tags: ["tag"]
title: "Make Any Old Printer Wireless"
date: "2018-01-09T00:00:00.000Z"
summary: "Add a wireless connection to your old printer with the help of a Raspberry Pi"
images: ["images/3.png"]
heroimages: 
    - "./3.png"
---

I've had many wireless printers over the past decade and all of them have broken at some point. The oldest printer I own is still going strong, however, it doesn't have WiFi so I can't print wirelessly. Rather than buy another printer that will inevitably fail, I figured I would be better served if I could just make my old printer work wirelessly. All I would need is a Raspberry Pi Zero W ($10) and I could easily remedy this. 

## Step 1: Install Raspbian OS

The first step in any Raspberry Pi project is to install an Operating System. There are several ways to do this, but I recommend using the ApplePiBaker method from my article [here](https://www.garyt.me/posts/installing-an-os-on-your-pi/). 

## Step 2: Install CUPS

CUPS is an open source printing system developed by Apple that supports printing to both local and network printers. After installing Raspbian on your Pi, run this command to install CUPS:

```js
sudo apt-get install cups
```

Once that's installed, you'll need to give administrative rights to the user "pi". 