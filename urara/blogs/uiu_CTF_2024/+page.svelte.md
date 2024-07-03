---
title: 'UIU CTF 2024 writeup'
image: '/blogs/uiu_CTF_2024/uiuctf.png'
alt: 'UIUCTF'
created: 2024-7-1
updated: 2024-7-4
tags:
  - 'CTF'
  - 'OSINT'
---

My writeup on UIU CTF 2024 on the challs solved by my team 'Bits & Pieces', it was quite tough CTF but I got to learn a lot from it!

---

## OSINT:

### Night

> That was quite a pretty night view, can you find where I took it? Flag format: `uiuctf{street name, city name} Example: uiuctf{East Green Street, Champaign}`

> File: chal.jpg

![image](https://raw.githubusercontent.com/AkaniX3/Blog-page/main/urara/blogs/uiu_CTF_2024/uiu_night.jpg)

For this given image, I need to find it's street and city name. So to start off, I hop on the google image search and try to find some clues.

![image](https://raw.githubusercontent.com/AkaniX3/Blog-page/main/urara/blogs/uiu_CTF_2024/uiu_night1.png)

We can clearly find that this is the **Prudential Tower** in **Boston**.

Next, there's two key things to notice in the image that is, the "dome-like building" just adjacent to Prudential Tower and the underway.

![image](https://raw.githubusercontent.com/AkaniX3/Blog-page/main/urara/blogs/uiu_CTF_2024/uiu_night2.png)

Opening `Google Earth` to preview this area, there's just this directions, where you can find the buildings aligned in this specific way.

![image](https://raw.githubusercontent.com/AkaniX3/Blog-page/main/urara/blogs/uiu_CTF_2024/uiu_night3.png)

Here, you can see it's the **I90 Road** we need to follow.

![image](https://raw.githubusercontent.com/AkaniX3/Blog-page/main/urara/blogs/uiu_CTF_2024/uiu_night4.png)

For confirming the specific location, you can notice in the image, that there's sign board and the road merges here, that means- yes! it's an intersection. Now it's really easy to narrow down the position by looking for intersection where a glass building is present as well.

![image](https://raw.githubusercontent.com/AkaniX3/Blog-page/main/urara/blogs/uiu_CTF_2024/uiu_night5.png)

Searching a bit along the road, I found the location

![image](https://raw.githubusercontent.com/AkaniX3/Blog-page/main/urara/blogs/uiu_CTF_2024/uiuctf_night6.png)

So there you go, its 157 Arlington Street in Boston.

Flag: `uiuctf{Arlington Street, Boston}`

---

### Chunky Boi

> Now that's a BIG plane! I wonder where it is. Flag format: `uiuctf{plane type, coordinates of the aircraft} Example: uiuctf{Airbus A380-800, 40.036, -88.264}`

> For coordinates, just omit the digits, do not round up. Precision is the same as the one in the example. The aircraft name is the same as Wikipedia page title. You can extract enough information from this image to answer this. You DO NOT need to register any accounts, all the information is public.

> File: chal.jpg

![image](https://raw.githubusercontent.com/AkaniX3/Blog-page/main/urara/blogs/uiu_CTF_2024/chunkyboi.jpg)

In the image, It seems like the image is captured near the runway of some airport. Vroom to google image search and we find that its **Boeing airplane** of the **Alaska Airlines**.

![image](https://raw.githubusercontent.com/AkaniX3/Blog-page/main/urara/blogs/uiu_CTF_2024/uiu_chunkyboi1.png)

Now looking for the other aircraft

![image](https://raw.githubusercontent.com/AkaniX3/Blog-page/main/urara/blogs/uiu_CTF_2024/uiu_chunkyboi2.png)

It's pretty obvious that it's the **Boeing C-17 Globemaster III** <br>

Searching up on `Google Earth` for the Alaska Airlines, we can find this located in **Seattle, Washington**.

I was roaming around the whole area but nothing really helped, I checked almost all the locations which were present in the google earth view but it's no luck. Here my teammate `@Cha0s` came in clutch, who found this document in the [government website](https://www.faa.gov/air_traffic/flight_info/aeronav/acf/media/Presentations/14-02-RD286_SEA_Airport%20Diagram.pdf).

We mapped out where the location would be and came up with this.

![image](https://raw.githubusercontent.com/AkaniX3/Blog-page/main/urara/blogs/uiu_CTF_2024/uiu_chunkyboi3.png)

Immediately went to look at the google earth view aound that location, and bingo!

![image](https://raw.githubusercontent.com/AkaniX3/Blog-page/main/urara/blogs/uiu_CTF_2024/uiu_chunkyboi4.png)

You can see the how this place matches the given image, marked in the red.

The coordinates of this location are `47.4627762,-122.3041687`

So there you go!

Flag: `uiuctf{Boeing C-17 Globemaster III, 47.462, -122.303}`

---

### New Dallas

> hiii
