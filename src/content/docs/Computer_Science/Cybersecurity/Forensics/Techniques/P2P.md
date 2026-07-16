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
- The known `.met` file contains a list of files that have been downloaded by the application and files that have been shared by the application. Filenames indicative of contraband material no longer on a device can be found on a system. `eMule` deletes entries as the `.met` file increases in size to prevent the file from becoming too large. The `.met` file contains the filename, file size, and date/timestamps for when a file has been shared, along with the hash value of the files.

# Shareaza P2P

- [Shareaza](https://shareaza.sourceforge.net/), released in 2004, is an open-source P2P application that utilizes a decentralized network configuration. The application creates a `Shareaza` folder in the `Local` and `Roaming` folders of the user's profile:
  - `%USER%\AppData\Local\Shareaza`
  - `%USER%\AppData\Local\Shareaza\Incomplete`
  - `%User%\AppData\Roaming\Shareaza`
  - `%USER%\AppData\Roaming\Shareaza\Collections`
  - `%USER%\AppData\Roaming\Shareaza\Data`
  - `%USER%\AppData\Roaming\Shareaza\Torrents`
- The `Profile.xml`, inside of the `Data` folder, contains user-created and application-created artifacts. The user can complete personal information such as their name, location, and gender; this gets stored in `Profile.xml`.
- `Shareaza` creates entries in the user's `NTUSER.dat` file. It creates a `Shareaza` key with many subkeys. In the `Download` subkey, the entries `CollectionPath` and `IncompletePath` . `CollectionPath` specifies where the completed files are stored, while `IncompletePath` is where the `incomplete` files are stored.
- In the `Data` folder, there is a file called `Library1.dat` which contains a list of shared folders, shared files, and a list of partially downloaded files. `Library2.dat` is a backup of `Library1.dat` which is used if `Library1.dat` becomes corrupted.