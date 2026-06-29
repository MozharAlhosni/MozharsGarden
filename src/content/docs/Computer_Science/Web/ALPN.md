---
title: ALPN
---

`Application-Layer Protocol Negotiation` (`ALPN`) is a `TLS` extension for identifying what application-layer protocol is negotiating the encrypted connection, without requiring additional round trips to do so.

| Protocol | Identification Sequence |
| :--- | :--- |
| `HTTP/1.1` | `0x68 0x74 0x74 0x70 0x2F 0x31 0x2E 0x31` ("`http/1.1`") |
| `HTTP/2` | `0x68 0x32` ("`h2`") |
| `HTTP/2 over cleartext TCP` | `0x68 0x32 0x63` ("`h2c`") |
| `HTTP/3` | `0x68 0x33` ("`h3`") |

- [https://developer.mozilla.org/en-US/docs/Glossary/ALPN](https://developer.mozilla.org/en-US/docs/Glossary/ALPN)
- [https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml](https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml)