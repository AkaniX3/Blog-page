---
title: 'UIU CTF 2024 writeup'
image: '/blogs/uiu_CTF_2024/uiuctf.png'
alt: 'UIUCTF'
created: 2024-7-1
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

### Chunky Boi

.
