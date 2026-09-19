---
title: Chapter 1 Introduction to Mobile Forensics
---

- Mobile device forensics is a specialized branch of digital forensics dedicated to extracting, preserving, and analyzing data from mobile devices in ways that are both legally sound and technically reliable.
- The discipline of acquiring, preserving, examining, analyzing, and reporting digital evidence from mobile devices is known as mobile forensics.

## Forensic principles and evidence integrity

- Digital forensics is the application of forensic methods to data stored, processed, or transmitted by electronic systems. Its branches include computer, network, cloud, IoT, and mobile-device forensics.
- The objective of digital forensics is to identify, acquire, preserve, examine, analyze, and report relevant data through methods that produce reliable and reproducible results.
- Forensic soundness implies that evidence must be handled using methods that preserve its integrity and product results that can be independently reviewed and reproduced.
- Forensic soundness does not mean claiming that no change occurred. It means understanding and minimizing any changes, documenting the actions that caused them, and demonstrating that they did not compromise the reliability of the acquired evidence or the forensic investigator's findings.
- The forensic investigator should maintain detailed examination notes, acquisition logs, tool and version information, configuration settings, timestamps, hash values, and chain-of-custody records throughout the investigation. Proper documentation allows another examiner to review the methodology, reproduce relevant steps where practical, evaluate any changes introduced during acquisition, and assess the reliability of the conclusions.

## Mobile forensic investigation process

- A mobile forensic investigation generally progresses through several interconnected phases.
- Although the exact workflow varies according to the device, legal authority, investigative objectives, and available tools, the following phases provide a useful framework:
  - **Evidence intake and legal authority**: _Establish the investigative objectives, record known case information, and confirm the authority under which the device and associated data may be examined._
  - **Identification and preservation**: _Document the evidence, accessories, physical condition, power state, lock state, network status, and other characteristics that may affect preservation and acquisition._
  - **Preparation**: _Once the device has been secured, examiners search the device and develop an acquisition strategy. This typically involves identifying the make, model, operating system version, security patch level, storage configuration, and security mechanisms present on the device. They also asses potential risks such as encryption, screen locks, remote wipe capabilities, and acquisition-related data modification. Based on these findings, appropriate tools and techniques are selected for the examination._
  - **Isolation**: _Reduce the risk of remote commands, synchronization, incoming communications, or other activity that could alter evidence, while considering the consequences of interacting with or powering down the devices._
  - **Acquisition**: _Collect relevant and authorized data using logical, backup-based, filesystem, physical, cloud, or other supported methods._
  - **Verification**: _Confirm that the acquisition completed as expected, document its contents and limitations, and generate cryptographic hashes to protect the integrity of acquired datasets and working copies._
  - **Examination and analysis**: _Identify, recover, validate, correlate, and interpret artifacts relevant to the investigative questions._
  - **Documentation and reporting**: _Maintain contemporaneous examination notes and produce a report explaining the methods, findings, limitations, and conclusions._
  - **Archiving**: _Preserve the acquired data, working materials, tool logs, notes, reports, hash values, and chain-of-custody documentation for future reviews._
- These phases are not always performed in a strictly linear order. The forensic investigator may return to an earlier phase when new information is discovered, an acquisition method fails, or additional legal authority is required.

## The forensic pyramid classification system

- Mobile phone forensic acquisition and analysis involve manual effort and the use of automated tools.
- When identifying the appropriate method for the forensic acquisition and analysis of mobile phones, a mobile device forensic tool classification system developed by Sam Brothers comes in handy: 
  - **Micro Read**
  - **Chip-Off**
  - **Hex Dump**
  - **Logical Analysis**
  - **Manual Extraction**

### Manual extraction

- **Manual extraction** involves scrolling through the data on the devices and viewing the data on the phone directly using the device's keypad or touchscreen. The information discovered is then photographically documented. The extraction process is fast and easy to use, and it will work on almost every phone.
- This method is prone to human error, such as missing certain data due to unfamiliarity with the interface. At this level, it is not possible to recover deleted information and grab all the data. The are some tools, such as **Project-A-Phone**, that have been developed to help an examiner easily document manual extraction. However, this might also result in modification of data, like viewing an unread SMS will mark it as read.

### Logical extraction

- **Logical analysis** involves connecting the mobile device to forensic hardware or to a forensic workstation via a USB cable, an RJ-45 cable, infrared, or Bluetooth. Once connected, the computer initiates a command and sends it to the devices, which is then interpreted by the device's processor. Next, the requested data is received from the device's memory and sent back to the forensic workstation.
- Most of the forensic tools currently available work at this level of the classification system. The **extraction** process is fast and easy to use and requires little training. However, the process may write data to the mobile and might change the integrity of the evidence. In addition, deleted data is not generally accessible with this procedure.

### Hex dump / physical extraction

- The terms **hex dump** and **physical extraction** are closely related and are sometimes user interchangeably.
- **Physical extraction** refers broadly to acquiring data at the lowest accessible storage level, traditionally as _bit-for-bit_ copy of the device's storage.
- A **hex dump** refers more specifically to the resulting raw binary data represented or examined as hexadecimal values and can therefore be considered an output of **physical extraction** rather than a distinct acquisition method.
- Traditionally, physical extraction involved using a **custom bootloader**, **recovery environment**, **forensic agent**, or **exploit** to access storage at a lower level than **logical extraction**.
- Modern mobile security has significantly reduced the effectiveness of traditional **physical extraction**. Mechanisms such as **Verified Boot**, **Secure Boot**, **hardware-backed encryption**, the **Secure Enclave**, **TrustZone**, and **file-based encryption** (**FBE**) can prevent access to decrypted user data even when raw storage is successfully acquired. Therefore, obtaining a physical image does not necessarily provide usable evidence.
- The forensic value of physical acquisition depends on the device state, encryption status, operation system version, hardware security implementation, and available device-specific techniques. However, it remains an important acquisition concept because it represents one of the deepest levels of software-based access available to investigators.
  
### Chip-off/ISP

- **Chip-off** and **in-system programming** (**ISP**) are advanced hardware acquisition techniques used when conventional software-based extraction methods are unavailable or unsuccessful.
- **Chip-off** involves physically removing the storage chip from the devices and reading it using specialized hardware. This technique requires significant expertise because improper handling can permanently damage the chip and destroy evidence. Since the storage device is physically removed, **chip-off** is generally considered a destructive acquisition method and is typically reserved for severely damaged devices or situations where no alternative acquisition method is available.
- **ISP** provides a less invasive alternative. Rather than removing the storage chip, the investigator connects directly to storage test points on the device's motherboard and acquires data while the chip remains installed. This approach is commonly used with supported **eMMC** and certain **UFS-based** devices and may reduce the risk associated with chip removal.
- Historically, **joint test action group** (**JTAG**) acquisition was widely used to access device memory through processor debugging interfaces known as **test access ports** (**TAPs**). However, modern device architectures, secure hardware implementations, and the widespread adoption of hardware-backed encryption have significantly reduced the practical applicability of **JTAG** acquisition. While **JTAG** remains an important technique from a historical and educational perspective, **ISP** has largely replaced it in many contemporary hardware acquisition scenarios.
- Although **chip-off** and **ISP** may provide access to raw storage contents, modern Android and iOS devices typically employ hardware-backed encryption and secure key management systems. Consequently, obtaining a raw memory dump does not necessarily provide access to decrypted user data. For this reason, these techniques are no primarily used in specialized investigations involving damaged devices, legacy devices, unsupported devices, or cases when other acquisition methods are not feasible.

### Micro read

- The **micro read** process involves manually viewing and interpreting data seen on the memory chip.The examiner uses an electron microscope and analyze the physical gates on the chip and then translates the gate status to 0s and 1s to determine the resulting ASCII characters.
- Due to the extreme technicalities involved in **micro read**, it is only attempted for high-profile cases equivalent to a national security crisis after all other levels of extraction techniques have been exhausted. The process is rarely performed and is not well documented, nor are there commercial tools available to perform **micro reading**.

## Types of evidence extracted from mobile devices

- Mobile phones are rich sources of evidence, with data residing in various locations such as the **SIM card**, **external memory cards**, and the **phone's internal memory**. While service providers also retain communication records, forensic investigations primarily focus on data extracted from the device's memory.
- Although the exact data recovered depends on the phone model and OS, most mobile devices typically store the following categories of information, often tagged with **timestamps**, which are valuable to investigations:
  - **Contacts**: _Names, phone numbers, emails, addresses, social media handles, and other address book entries._
  - **Call logs**: _Records of dialed, received, and missed calls, along with call durations and associated contacts._
  - **SMS and MMS**: _Text messages plus multimedia content (photos, videos, audio) exchanged via messaging applications._
  - **Emails**: _Sent, received, and draft messages stored on the device, often from various email clients._
  - **Browser history**: _Websites visited, search queries performed, cached web data, cookies, and bookmarks._
  - **Photos and videos**: _Images and videos captured by the phone, downloaded, received, or transferred from other devices. This includes screenshots and screen recordings._
  - **Audio files**: _Music, voice recordings, and audio messages obtained through downloads or transfers._
  - **Documents**: _Files created, downloaded, or received through office apps, cloud storage apps, and messaging._
  - **Calendar entries**: _Scheduled events, appointments, and associated notes._
  - **Location data**: _Precise GPS coordinates, Wi-Fi access point history, cell tower logs, navigation searches, and map caches showing travel history and frequented locations. This is often a critical artifact._
  - **App data**: _Extensive data from third-party applications, including the following:_
    - **Messaging apps**: _WhatsApp, Signal, Telegram, Facebook Messenger, WeChat (chats, media, call logs specific to the apps)_
    - **Social networking apps**: _Facebook, X, Instagram, LinkedIn (posts, direct messages, contacts, media)_
    - **Cloud storage apps**: _Google Drive, Dropbox, OneDrive (cached files, sync logs)_
    - **Financial/payment apps**: _Banking apps, Google Pay, Apply Pay, PayPal, cryptocurrency wallets (transaction history, account details, usage logs)_
    - **Health and fitness apps**: _Data from health trackers, step counts, heart rate, sleep patterns, and medical records._
    - **Productivity apps**: _Office suites, note-taking apps (such as Obsidian, Notepad++, Notepad, etc.)_
    - **Gaming apps**: _Scores, in-app purchases, chat logs_
  - **System logs and event files**: _These can provide crucial metadata about device activity, app usage, network connections, battery statistics, and crash reports, often revealing abnormal behavior or malware presence._
  - **Network connection logs**: _Records of Wi-Fi access points connected to, Bluetooth pairings, and VPN connection history._
  - **Deleted data**: _This can include deleted messages or call history etc._
- Once the data is extracted from the devices, the forensic investigator needs to understand how to examine and analyze it.

## Examining and analyzing extracted data

- This is the crucial phase of the investigation where the investigator thoroughly examines the data extracted to uncover evidence relevant to the case. Examination involves applying established forensic techniques to identify, validate, and isolate meaningful data from large volumes of information that my be present on the device.
- Effective analysis requires understanding the context of the case. A fraud investigation may prioritize financial records and communications, while an insider-threat investigation may focus on file access, cloud-storage activity, messaging, and event timelines. The goal is often to perform timelines analysis, reconstructing the sequence of events across various data sources, and link analysis, identifying relationships between individuals, devices, and activities.

## Legal rules and handling of evidence

- As courts increasingly rely on digital data from mobile devices, the investigator must ensure that evidence meets established legal standards. While laws very by country, the following five core rules generally apply to digital evidence and failing to follow them can render evidence inadmissible:
  - **Admissible**: _Evidence must be collected in a lawful manner and preserved according to established procedures. This usually means acquiring proper legal authorization, such as a search warrant that specifically covers the seizure and analysis of a mobile device and its data. Evidence obtained without the necessary legal authority, or through improper handling (such as searching beyond what the warrant allows, or exceeding the scope of consent), is often ruled inadmissible. The can cause the entire investigation to collapse._
  - **Authentic**: _Evidence must clearly be tied to the incident under investigation. This means proving that the data came from the specific device seized and that it was not tampered with or mixed with unrelated information. Maintaining a solid chain of custody is essential. Each handoff of the device or evidence must be documented, including who handled it, when, and why. Cryptographic hashes are crucial here._
  - **Complete**: _Evidence must present the full picture, not just selective parts that support one argument. Incomplete or cherry-picked data can mislead, potentially resulting in wrongful conclusions or justice being denied. A thorough forensic examination looks at all potentially relevant data, even if some findings do not support the case theory (including exculpatory evidence)._
  - **Reliable**: _The methods and tools used to collect and analyze evidence must be dependable and scientifically accepted. Processes should be repeatable by other experts, yielding the same results. Using untested or flawed tools can lead to evidence being challenged. This is especially critical for advanced or destructive methods like chip-off or JTAG. These should be documented carefully, and only performed by trained professionals, because improper execution can destroy evidence. Tool validation frameworks like NIST mobile device forensics guidelines are crucial._
  - **Believable**: _The investigator must be able to clearly explain what was done, why it was done, and how the integrity of the evidence was protected. Findings should be presented in a logical, easy-to-understand manner that makes sense to judges and juries, who often lack technical expertise/understandings. The forensic examiner often serves as an expert witness._

## Best practices for mobile forensic investigations

- Good forensic practices are the backbone of any credible digital investigations. Improper handling can compromise evidence and make it inadmissible in court. Even minor mistakes, whether intentional or accidental, can later critical data and weaken a case. Following rigorous and standardized practices is essential for all forensic examiners.

### Securing evidence

- Modern smartphones include features such as **Find My iPhone**, **Android's Find My Device**, and **remote wipe capabilities**. These allow owners or attackers to erase data remotely. Additionally, as long as a device is powered on and connected, it continues to receive new data that could overwrite or change existing information.
- The forensic investigator needs to follow specific steps to protect evidence:
  - _Isolate the device immediately using Faraday bags or shielding enclosures that block network signals. If possible and if the device is unlocked, switch it to airplane mode. Avoid taking actions that could alter data if the device is locked._
  - _If the phone is connected to a computer for synching or charging, do not disconnect it abruptly. First, capture a memory image of the computer, which may contains logs or temporary files linked to the device._
  - _Collect all peripherals, memory cards including SD cards and SIM cards, cables, chargers, docks, and nearby computers or drives. These may contain backups or other related data._
  - _In some cases, collecting fingerprints or other biometrics is necessary to link the device to a person, often performed before any other handling._
- Properly securing a device is the first step in protecting potential evidence from loss, modification, or remote access. Once the device has been secured, the next priority is ensuring that the evidence remains unchanged throughout the examination process.

### Preserving evidence

- Evidence must be kept in its original state to be accepted by a court. Forensic guidelines recommend following these practices:
  - _Avoid working directly on original evidence. Instead, create a forensic image (bit-by-bit copy) of the device's storage._
  - _Use cryptographic hashes to verify the integrity of the data. Compute hashes like SHA-256 or SHA-512 for both the original acquired image and the working copies. This demonstrates they are identical. Re-verify these hashes at different stages of the investigation._
  - _Store the original device and the master copies in sealed, secure storage with restricted access. Perform all examinations on verified copies using a dedicated, forensically sound workstation that is isolated from external networks._
  - _Any change to evidence, no matter how minor, must be documented and explained._
- Preserving evidence helps maintain its integrity and admissibility throughout the investigation. Equally important is documenting every action taken, ensuring that the examination process can be reviewed, validated, and reproduced if necessary.

### Documenting the evidence and changes

- Detailed documentation is critical to ensure that the forensic investigator's work can be reviewed or repeated by another examiner. This strengthens the credibility of their findings. The forensic investigator follows certain practices to ensure this:
  - _Take photographs of the device before touching it, including its surroundings and any other connected hardware. Continue documenting the device from seizure to transport to lab intake._
  - _Keep careful, contemporaneous notes of every action taken. Record who handled the device, when, what tools were used (including version numbers), what settings were applied, and observations such as whether the phone was on or locked._
  - _Note any changes made. For example, if the forensic tool used breaks a disk image into segments or if the device had to be powered off and on, this must be logged._
  - _Maintain a chain of custody log that proves the evidence remained secure and unaltered from collection to presentation in court._
- Thorough documentation provides a complete record of the investigation and supports the credibility of the findings. The final step is to communicate those findings clearly through a well-structured forensic report.

### Reporting

- A strong forensic report describes what was done, how it was done, and what was found. It should include evidence that both supports and challenges the case narrative (including exculpatory findings). A clear, balanced report is more persuasive than one that only present selective findings.
- Typically, a forensic report includes the following details:
  - _Case identifiers such as agency name, case number, investigator, and submitter_
  - _Date the evidence was received and a detailed list of items with serial numbers, make model, and physical condition_
  - _Information on the tools and software used, including version numbers and validation records_
  - _A step-by-step record of acquisition and examination procedures_
  - _Chain of custody records_
  - _Findings from the investigation, such as call logs, SMS, app data, deleted files, location history, and recovered artifacts, are often presented with timeline analysis and link analysis_
  - _Photos or screenshots captured during the process_
  - _Hash values to show data integrity_
  - _A clear conclusion explaining how the findings relate to the investigation_

## Challenges in modern mobile investigations

- Key challenges in modern mobile investigations:
  - **Hardware diversity**
  - **Operating system fragmentation**
  - **In-built security features**: _Modern mobile platforms are deliberately designed to protect user data through sophisticated security architectures. Features like full-disk encryption (FDE) and particularly File-based encryption (FBE), Secure Enclaves/TrustZones, hardware-backed key stores, biometric locks, app sandboxing, and signed firmware/Verified Boot are excellent for user privacy but present major obstacles to forensic extraction. Two important features:_
    - _Secure Enclave (iOS) or TrustZone (Android) are dedicated, isolated hardware subsystems that handle cryptographic operations and protect sensitive data (like encryption keys and biometric information) even if the main processor is compromised. This make it exceedingly difficult to bypass passcode protection without the user's explicit input or a highly specific hardware vulnerability._
    - _Bootloader locking and signed boot chains prevent the flashing of unauthorized firmware or custom recovery, which are often used in advanced acquisition techniques._
  - **Preventing data modification**
  - **Anti-forensics and user manipulation**
  - **Passcode and biometric locks**
  - **Tool and accessory challenges**
  - **Dynamic, fragile evidence**
  - **Communication shielding**
  - **Malware and rogue applications**
  - **Legal and jurisdictional complexities**
- While these challenges can significantly complicate mobile forensic investigations, they are not insurmountable. Successful examinations require a combination of technical expertise, sound forensic methodology, appropriate tools, and a thorough understanding of modern mobile platforms.