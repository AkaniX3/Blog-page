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

> File: [chall](https://github.com/AkaniX3/Blog-page/blob/main/urara/blogs/vs_CTF_2024/chall)

We are given an elf 64-bit file, and as you know it's a rev chall. Boot up that disassembler! On opening the file in binary ninja.

![image](https://github.com/AkaniX3/Blog-page/blob/main/urara/assets/vsctf2024/vs1.webp)

First thing we can see in the main function, its printing something and then sleeps for god knows how long XD

it's pretty straightforward, we just patch and rmeove that sleep command, then save it and run the file.

![image](https://github.com/AkaniX3/Blog-page/blob/main/urara/assets/vsctf2024/vs2.webp)

Flag: `vsctf{1nTr0_r3v3rR51ng!}`

---


