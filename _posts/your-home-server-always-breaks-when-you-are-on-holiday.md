---
title: 'Your home server always breaks when you are on holiday'
excerpt: 'and when you actually need it during holiday'
date: '2026-03-31'
ogImage:
  url: '/assets/lucky.jpg'
---

hello

hello

Hardware Issues


My first ever proper home server was an Orange Pi. It took me a while to set it up and a lot of trial and error, bit I eventually managed to setup a server that can store all of our family photos in Immich as well as record security cameras.

When I setup a server, it is normally on my work desk connected to my monitors, etc. After all setup (linux at least), I move it downstairs behind the TV next to where my router and the network switch lives. Then the rest of the party can continue over SSH. 

When I started importing my photo library to this server, I noticed whole server slowes down quite badly and even become completely unresponsive. To the point where I need to restart the server to being it back to life. For some reason, I thought this 8 core, 16gb ram machine is just weak and I need to limit resource usage of Immich to "fix" this issue. And it kinda did for a while. I just limited Immich docker services to use 1 cpu and 2gb ram only. Obviously that means slow image processing, but hey.

But then I go to holiday. I have setup VPN for remote access and it was working on the first day of the holiday. I was able to browse my photos that lives in a server in a random English town from the beaches of Malaga. But now, nothing works.

I go back from holiday, I restart the server and everything starts working again. And this is a time that I am trying to prove to my wife that self hosting is better than icloud or google photos or anything else that ever existed. It is a very bad look that this happens during holiday and I am basically locked out of all of my precious files.

I dig further into logs this time instead of just restarting and going on woth my day. I found some traces of logs that system tries to write to the ssd but SSD is in some sort of fail safe mode that it only allows read operations. As you guessed, I am not the only person who had these kinds of stability issues. And the solution is just to use 20W power supply. Apparently your average USB adapter (Orange Pi just works with a usb c power), would provide 15W or 25W or even 45W, but not 20W. 20W requires 5V x 4A configuration that is apparently very "special".

When I setup the server on my work desk, I use its provided adapter and everything works great. But for downstairs, I just use a random USB adapter I found on drawer. Obviously all my issues are fixed once I used proper PSU and since then no holidays were ruined.

Software Issues

That last sentence is true for orange pi only. But since then, I built a separate Intel N100 server too with its own 300W internal PSU. Can't use a random usb adapter with this one. And it works great for almost 6 months with 100% in my book. Then we go to holiday. I show off my new server to the folks during holidays on the first day. Second day, nothing works!

This one is more scary because I actually never had any instabilities on this server ever. A PSU just died once before, but that was just a bad unit. Did PSU just died again? Who knows.

This time I don't want to wait until I am back. I asked our cat sitter to restart the server over WhatsApp call. Because why not. I bet that wasn't the strangest thing people asked her to do while cat sitting.

Nothing still work after restart. Time to think. Here is the network diagram of my home servers.