---
title: P2P
---

- P2P file sharing tools/platforms use a SHA-1 variation that uses the Base32 numbering system. Forensic tools use Base16 numbering system.
- [https://github.com/qbittorrent/qBittorrent/wiki/How-to-convert-base32-to-base16-info-hashes](https://github.com/qbittorrent/qBittorrent/wiki/How-to-convert-base32-to-base16-info-hashes)

# Ares Galaxy

- [Ares Galaxy](https://sourceforge.net/projects/aresgalaxy/) is an open-source P2P application.
- `Ares` creates entries in the user's local profile path `%USER\AppData\Local\Ares\`. In the `Data` folder, there are two files `ShareH.net` and `ShareL.dat`. These files track the filename, hash value, date/timestamp of when the file was downloaded, and the sharing status of the file. Although these files are encrypted but can be decrypted using the [Magnet Forensics AXIOM tool](https://www.magnetforensics.com/products/magnet-axiom/).
- Ares creates entries in the user's `NTUSER.dat` file `\ntuser (ROOT)\Software\Ares`.

# eMule

- [eMule](https://www.emule-project.com) is an open-source P2P application utilizing the decentralized network configuration and was released in 2002 as an alternative to eDonkey2000.
- `eMule` create an `eMule` folder containing two subfolders, `Incoming` and `Temp`.
- `eMule` stores its configuration files in the user's local profile `%USER%\AppData\Local\eMule`.
- In the `config` subdirectory, the `preferences.ini` file contains the user's nickname and the location of the incoming and temporary directories.
- The `shareddir.dat` contains the user-created shared directories `%USER%\Downloads`. The `sharedfiles.dat` contains a list of files being currently shared.
- The `AC_SearchStrings.dat` file will store the last 30 searched terms entered by the user.
- 


# Shareaza P2P

[SHAREAZA P2P](https://shareaza.sourceforge.net/)