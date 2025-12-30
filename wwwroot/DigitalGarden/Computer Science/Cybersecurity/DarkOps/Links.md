# Links

- [https://temp-mail.org/en/](https://temp-mail.org/en/)
- [https://lunaproxy.com](https://lunaproxy.com)
- [https://natro92.fun/](https://natro92.fun/)
- [https://grapheneos.org/](https://grapheneos.org/)
- [https://exploit-notes.hdks.org/](https://exploit-notes.hdks.org/)
- [https://subdomainfinder.c99.nl/](https://subdomainfinder.c99.nl/)
- [Dedicated Servers | Premium Dedicated Server Hosting](https://phoenixnap.com/dedicated-servers)
- [KVM over IP - PiKVM](https://pikvm.org/)
- [GeoIP web services demo | MaxMind](https://www.maxmind.com/en/geoip-web-services-demo)
- [DNS Propagation Checker - Global DNS Testing Tool](https://www.whatsmydns.net/)
- [Simple Email Reputation](https://emailrep.io/)
- [https://www.thc.org/segfault/](https://www.thc.org/segfault/)
- [Interactsh | Web Client](https://app.interactsh.com/#/)
- [https://pfcloud.io/](https://pfcloud.io/)
- [https://github.com/jermanuts/bad-opsec](https://github.com/jermanuts/bad-opsec)
- [https://links.libroot.org/](https://links.libroot.org/)
- [https://github.com/jery0843/torforge](https://github.com/jery0843/torforge)

## Printing Password Protected PDFs

- One technique to print a password-protected PDF on MacOS is to open the file with `ColorSync Utility` and then print it. It won't bother asking for the password.

## BitLocker Encrypted Devices

If you have a BitLocker encrypted drive and you know the password (for example cracking it with `bitlocker2john`) of BitLocker but NOT any password for any account within it, this can be easily bypassed by attaching the drive as a second drive to any Windows device you own and decrypt it to access all the contents of the disk freely using [manage-bde](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/manage-bde):

```powershell
manage-bde -unlock D: -Password
```

## SOAR

In Cybersecurity literature, SOAR can be either `Security Orchestration, Automation, and Response` or `State-of-the-Art Resources`.

## docx to Markdown

https://gist.github.com/plembo/409a8d7b1bae66622dbcd26337bbb185

```bash
$ myfilename="example"
pandoc -t markdown_strict --extract-media='./attachments/$myfilename' $myfilename.docx -o $myfilename.md
```

## SSL Passthrough

[SSL Passthrough](https://www.ssl2buy.com/wiki/ssl-passthrough-work) is the opposite of [SSL Termination/Offloading](https://www.ssl2buy.com/wiki/ssl-offloading).