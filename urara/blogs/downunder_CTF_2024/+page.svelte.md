---
title: 'DownUnder CTF 2024 writeup'
image: '/blogs/downunder_CTF_2024/ductf.png'
alt: 'DUCTF'
created: 2024-7-8
updated: 2024-7-8
tags:
  - 'CTF'
  - 'Forensics'
  - 'Misc'
---

My writeup on DownUnder CTF 2024, it was a big and competitive CTF but still really fun and a lot of learning! My focus was more on the Forensics and Misc Section this time.

---

## Forensics:

### Baby's First Forensics

> They've been trying to breach our infrastructure all morning! They're trying to get more info on our covert kangaroos! We need your help, we've captured some traffic of them attacking us, can you tell us what tool they were using and its version?

> NOTE: Wrap your answer in the `DUCTF{}`, e.g. `DUCTF{nmap_7.25}`

> File: "capture.pcap"

So I need to find the tool which they are using, for this I'll start up my wireshark for analysing the pcap file.

![image](https://raw.githubusercontent.com/AkaniX3/Blog-page/main/urara/blogs/downunder_CTF_2024/ductf_bff1.png)

Checking the Statistics/Conversations, they are mostly TCP packets so need to narrow down the search to those.

![image](https://raw.githubusercontent.com/AkaniX3/Blog-page/main/urara/blogs/downunder_CTF_2024/ductf_bff2.png)

Following the TCP stream, at the start, `User-Agent:` header mentions `(Nikto/2.1.6)` that's version of something, looking into it. It's actually a vulnerability scanner tool.

So that's the answer! Wrapping it in format, we get the flag.

Flag: `DUCTF{Nikto_2.1.6}`

### SAM I AM

> The attacker managed to gain Domain Admin on our rebels Domain Controller! Looks like they managed to log on with an account using WMI and dumped some files.

> Can you reproduce how they got the Administrator's Password with the artifacts provided?

> File: "samiam.zip"

On unzipping the given file, we have `sam.bak` and `system.bak` file to work with. We need to find the Administrator password with the given artifacts.

For this, I'll use **impacket** `impacket-secretsdump` file which finds secrets from the artifacts.

![image](https://raw.githubusercontent.com/AkaniX3/Blog-page/main/urara/blogs/downunder_CTF_2024/ductf_sam1.png)

We got the Administrator password hash, now this can be decoded using **Hashcat** or [crackstation.net](https://crackstation.net/)

![image](https://raw.githubusercontent.com/AkaniX3/Blog-page/main/urara/blogs/downunder_CTF_2024/ductf_sam2.png)

And we got the password!

Flag: `DUCTF{!checkerboard1}`

### Bad Policies

> Looks like the attacker managed to access the rebels Domain Controller.

> Can you figure out how they got access after pulling these artifacts from one of our Outpost machines?

> File: "badpolicies.zip"

On opening the zip file, we are given a file directory with Group policy files in it. 

![image](https://raw.githubusercontent.com/AkaniX3/Blog-page/main/urara/blogs/downunder_CTF_2024/ductf_bad1.png)

Upon analyzing the files, we can find a cpassword in the `Groups.xml` file.

Upon a little google search about this, it can be decrypted using `gpp-decrypt` in kali.

![image](https://raw.githubusercontent.com/AkaniX3/Blog-page/main/urara/blogs/downunder_CTF_2024/ductf_bad2.png)

And that's the flag!

Flag: `DUCTF{D0n7_Us3_P4s5w0rds_1n_Gr0up_P0l1cy}`

