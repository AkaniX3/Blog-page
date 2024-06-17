---
title: 'VSCTF 2024 writeup'
image: '/blogs/akasec_CTF_2024/akasec1.png'
alt: 'VSCTF'
created: 2024-6-15
tags:
  - 'CTF'
  - 'Reverse Engineer'
  - 'Miscellaneous' 
---

Our team, 'Bits & Pieces', had a blast participating in the VSCTF event, and we placed 44th rank this time, It was a great run and we tackled some really interesting challenges! Here's my writeup on the challs i solved in the CTF.

---

## Reverse:

### intro-reversing

> Flag will be printed out straight away when you run the binary.
> 
> File: [chall](https://github.com/AkaniX3/Blog-page/blob/main/urara/blogs/vs_CTF_2024/chall)

We are given an elf 64-bit file, and as you know it's a rev chall. Boot up that disassembler! On opening the file in binary ninja.

image](https://github.com/AkaniX3/Blog-page/blob/main/urara/blogs/vs_CTF_2024/vs1.png)

First thing we can see in the main function, its printing something and then sleeps for god knows how long XD

it's pretty straightforward, we just patch and rmeove that sleep command, then save it and run the file.

image](https://github.com/AkaniX3/Blog-page/blob/main/urara/blogs/vs_CTF_2024/vs2.png)

Flag: `vsctf{1nTr0_r3v3rR51ng!}`

---

### awa-jelly

> [JellyCTF](https://jellyc.tf/) has some amazing challenges on [Jelly Hoshiumi](https://x.com/jellyhoshiumi) (星海ジェリー), one of the few VTubers who loves CTF. Inspired by a challenge, I made one based on [AWA5.0](https://github.com/TempTempai/AWA5.0). Can you find the redacted input that matches the screenshot?
> 
> image](https://github.com/AkaniX3/Blog-page/blob/main/urara/blogs/vs_CTF_2024/vs3.png)
> 
> [awawa.txt](https://github.com/AkaniX3/Blog-page/blob/main/urara/blogs/vs_CTF_2024/awawa.txt)

Looking at the image, I immediately started experimenting with the output and given txt file.

First I wasn't able to understand much on how the awa code works, so i tried to work around this by by running a test string as input to see what output we get. Running a few iterations,

```py
1st: abcdefghijlmnoprstuwy0123456789_ -> rlstuwyc01f2i3m4eb56g789_oadhjnp
2nd: rlstuwyc01f2i3m4eb56g789_oadhjnp -> 4feb56gs78w90_2ouladyhjnp3rtc1im
3rd: 4feb56gs78w90_2ouladyhjnp3rtc1im -> owuladyehj6n7p935frtgc1im_4bs802
4th: owuladyehj6n7p935frtgc1im_4bs802 -> 365frtguc1dihmn_aw4bys802polej79
```

I noticed it just transposes text and is easy to just map out.

```py
position_mapping = [17, 11, 15, 16, 18, 20, 21, 2, 22, 23, 5, 24, 8, 25, 12, 26, 4, 1, 27, 28, 6, 29, 30, 31, 32, 13, 0, 3, 7, 9, 14, 19]
```

Now reversing this mapping and applying it on output string 

```py
1o1i_awlaw_aowsay3wa0awa!iJlooHi -> J3lly_0oooosHii11i_awawawawaawa!
```
And there you have it, the flag! 

Flag: `vsctf{J3lly_0oooosHii11i_awawawawaawa!}
