---
title: Preventing and Responding to Incidents
---

# Incident Management Steps

- `Detection`
- `Response`
- `Mitigation`
- `Reporting`
- `Recovery`
- `Remediation`
- `Lessons Learned`


## Denial-of-Service Attacks

- A `distributed reflective denial-of-service` (`DRDoS`) attack is a variant of a `DoS`. It uses a `reflected approach` to an attack. `DRDoS` don't attack the victim directly but instead manipulates traffic or a network service so that the attacks are reflected back to the victim from other sources.

### SYN Flood Attack

- The `SYN flood` attack is a common `DoS` attack. It disrupts the standard `three-way handshake` used by `Transmission Control Protocol` (`TCP`) to initiate communication sessions.
- Normally, a client sends a `SYN` (`synchronize`) packet to a server, the server responds with a `SYN/ACK` (`synchronize/acknowledge`) packet to the client, and the client then responds with an `ACK` (`acknowledge`) packet back to the server. This `three-way handshake` establishes a communication session that the two systems use for `data transfer` until the `session` is terminated with the `FIN` (`finish`) or the `RST` (`reset`) packet.
- However, in a `SYN flood` attack, the attackers send multiple `SYN` packets but never complete the connection with an `ACK`.
- An attacker sends multiple `SYN` packets and the server will respond to each. For each of these requests, the server reserves `system resources` to wait for the `ACK` packet. Servers often wait for the `ACK` packet for as long as `3 minutes` before aborting the attempted session, though this value can be adjusted.
- Using `SYN cookies` is one method of blocking this attack. These small records consume very few system resources versus the typical resources set aside by a server upon the receipt of a `SYN` packet from a client. When the server receives an `ACK`, it checks the `SYN cookies` and establishes a session.
- `Firewalls` often include mechanisms to check for `SYN` attacks, as do `intrusion detection and prevention` systems.
- Another method of blocking this attack is to reduce the amount of time a server will wait for an `ACK`. It is typically `3 minutes` by default, but in normal operations it rarely takes a legitimate system three minutes to send the `ACK` packet. By reducing the time, `half-open` sessions are `flushed` from the system's memory more quickly.

### TCP Reset Attack

- Another type of attack that manipulates the `TCP session` is the `TCP` `reset attack`.
- `Sessions` are normally terminated with either the `FIN` (`finish`) or the `RST` (`reset`) packet. Attackers can spoof the `source IP address` in a `RST` packet and `disconnect active session`. The two systems then need to reestablish the `session`.
- This is primarily a threat for systems that need `persistent sessions` to maintain data with other systems. When the session is reestablished, they need to re-create the data.

### Smurf and Fraggle Attacks

- `Smurf` and `Fraggle` attacks are both `DoS` attacks.
- A `Smurf` attack is another type of `flood` attack, but it floods the victim with `Internet Control Message Protocol` (`ICMP`) `echo reply` packets instead of with `TCP` `SYN` packets. More specifically, it is a `spoofed broadcast ping` request using the `IP` address of the victim as the `source IP address`.
- `Smurf` attacks take advantage of an `amplifying network` (also called a `Smurf amplifier`) by sending a directed broadcast through a router. All systems on the `amplifying network` then attack the victim (i.e., by replying with an `echo reply` packets). However, [RFC 2644](https://www.rfc-editor.org/rfc/rfc2644), released in 1999, changed the standard default for routers so that they do not forward `directed broadcast traffic`. When administrators correctly configure routers in compliance with `RFC 2644`, a network cannot be a `amplifying network` (i.e., `Smurf amplifier`).
- `Fraggle` attacks are similar to `Smurf` attacks. However, instead of using `ICMP`, a `Fraggle` attack uses `UDP` packets over `UDP` port `7` (`echo` protocol) and port `19` (`character generator` protocol).
- The `Fraggle` attack will broadcast a `UDP` packet using the spoofed IP address of the victim. All systems on the network will then send traffic to the victim, just as with `Smurf` attacks.
- A variant of `Fraggle` attack is a `UDP flooding` attack using `random UDP ports`.

### Ping Flood

- A `ping flood` attack floods a victim with `ping requests`. This can be very effective when launched by bots within a botnet as a `DDoS` attack.
- A common way that systems handle this today is by blocking `ICMP` `echo request` packets. This blocks the `ping` traffic but not all `ICMP` traffic.
- Active `intrusion detection systems` can detect a `ping flood` and modify the environment to block `ICMP` `echo requests` during the attack.

### Legacy Attacks

- `Ping of Death`: _A `Ping-of-Death` attack uses `oversized ping` packets. Some OSs couldn't handle them. In some cases, the systems crashed, and in other cases, the attack caused ` buffer overflow` error_.
- `Teardrop`: _A `Teardrop` attack fragments IP data packets, making them difficult or impossible to be put back together by the receiving system. This often caused systems to crash_.
- `LAND`: _In a `LAND` (`local area network denial`) attack, the attack sends spoofed `SYN` packets to a victim using the victim's IP address as both the source and destination IP address. A variant is a `Banana` attack, which redirects outgoing messages from a system back to the system, shutting down all external communication_.

# IDPS

## IDS Response

- `Passive Response`
- `Active Response`

- _An IDS that uses an `active response` is sometimes referred to as an `IPS`. This is accurate in some situations. However, an `IPS` is placed `inline` with the traffic. If an `active IDS` is placed `inline` with the traffic, it is an `IPS`. If it not placed `inline` with the traffic, it isn't a true `IPS` because it can only respond to the attack after it has detected an attack in progress. `NIST SP 800-94` recommends placing all active `IDSs` `in line` with the traffic so that they function as `IPSs`_.
- _Switches are often used as a preventive measure against rogue sniffers. If the IDS is connected to a normal port on the switch, it will capture only a small portion of the network traffic, which isn't very useful. Instead, the switch can be configured to `mirror` all traffic to a specific `port` (commonly called `port mirroring`) used by the `IDS`. On `Cisco` switches, the port used for `port mirroring` is referred to as a `Switched Port Analyzer` (`SPAN`) port_.


## Intrusion Prevention Systems

### Firewalls

- Basic network firewalls filter traffic based on IP addresses, ports, and some protocols using protocol numbers.
- `Second-generation firewalls` add additional filtering capabilities. For example, an `application-level gateway firewall` filters traffic based on specific `application requirements` and `circuit-level gateway firewalls` filter traffic based on the `communications circuit`.
- `Third-generation firewalls` (also known as `stateful inspection firewalls` and `dynamic packet filtering firewalls`) filter traffic based on its state within a stream of traffic.
- A `Next-generation firewall` (`NGFW`) functions as a `unified threat management` (`UTM`) device and combines several `filtering capabilities`. It includes traditional functions of a `firewall` such as `packet filtering` and `stateful inspection`. However, a `NGFW` is able to perform `packet inspection` techniques, allowing it to identify and block `malicious traffic`. It can filter `malware` using definition files and/or whitelists and blacklists. It also includes `intrusion detection` and/or `intrusion prevention` capabilities.

# Logging and Monitoring

- _Logs are often referred to as `audit logs`, and `logging` is often called `audit logging`. However, it is important to realize that `auditing` is more than just `logging`. `Logging` will record `events`, and `auditing` examines or inspects an environment for compliance_.


# The Role of Monitoring

## Audit Trails

- `Audit trails` are records created when information about `events` and `occurrences` is stored in one or more `databases` or `log files`. They provide a record of system activity and can reconstruct activity leading up to and during `security events`.
- `Audit trails` allow security professionals to examine and trace events in forward or reverse order.


# Automating Incident Response

## Understanding SOAR

- `Security Orchestration, automation, and response` (`SOAR`) allows security administrators to define incidents and the response, typically using `playbooks` and `runbooks`.
- A `playbook` is a document or checklist that defines how to verify an `incident`. Additionally, it gives details on the response.
- A `Runbook` implements the `playbook` data into an `automated tool`.


# Threat Intelligence

## Kill Chain

- `Reconnaissance`
- `Weaponization`
- `Delivery`
- `Exploitation`
- `Installation`
- `Command and Control`
- `Actions on objectives`


## Mitre Attack

