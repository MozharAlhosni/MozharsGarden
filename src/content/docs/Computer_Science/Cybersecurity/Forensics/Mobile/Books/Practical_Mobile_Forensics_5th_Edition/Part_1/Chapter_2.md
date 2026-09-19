---
title: Chapter 2 iOS Architecture, Security, and Filesystem Overview
---

# iOS Architecture, Security, and Filesystem Overview


## Introduction to the iOS ecosystem

- Apple's **iOS ecosystem** is a tightly integrated and highly controlled environments that includes both hardware and software. Unlike many other mobile platforms, Apple designs its own hardware (**SoCs**, **Secure Enclaves**, and **custom silicon**), builds the operating system (iOS, iPadOS, and watchOS), and controls the distribution of applications through the App Store.
- At the center of the mobile ecosystem is iOS, which shares foundational technologies with macOS. Both are build on **Darwin**, an open-source operating system foundation that combines the **XNU kernel** with components derived from **Mach** and **BSD**.
- Key elements of the **iOS ecosystem** that a forensic examiner must understand:
  - **iOS versions and supported devices**: _Each version of iOS supports specific hardware models. Older devices may be vulnerable to publicly known exploits (such as bootrom vulnerabilities affecting certain chipsets), whereas newer devices incorporate stronger hardware-backed security features that significantly limit forensic acquisition options. As a result, tool support often depends on both the device model and the installed iOS version. Conversely, devices running the latest versions of iOS, including iOS26, generally provide the fewest publicly available acquisition options because of continually evolving hardware and software protection._
  - **Apple ID and iCloud**: _The Apple ID is central to the user's identity and ties together backups, messages, photos, and app data across devices using iCloud. Gaining lawful access to iCloud data can be an important source of evidence when on-device acquisition is not possible. Users may also enable advanced data protection (ADP), which extends end-to-end encryption to many additional categories of iCloud data. When ADP is enabled, Apple cannot decrypt or provide this protected data, which can significantly limit the evidence available through lawful requests. Understanding whether ADP is enabled is therefore an important consideration during an iOS forensic investigation._
  - (**Tip**: _Never evaluate acquisition options based on the iOS version alone, Record the exact device model, chip generation, iOS version and build, lock state, and available authentication material before selecting an acquisition method. Two devices running the same iOS version may support very different acquisition techniques._)
  - **App Store and sandboxing**: _Each application normally operates within its own container and has limited access to data belonging to other applications. Authorized data sharing may occur through system APIs, entitlements, App Groups, extensions, user-selected files, or other controlled mechanisms. During analysis, the forensic investigator may therefore need to examine an application's primary container, shared containers, preferences, caches, and related system records._
  - **Secure Enclave**: _Supported Apple devices use the Secure Enclave as an isolated security subsystem for sensitive operations involving passcode, biometrics, and cryptographic key management._
  - **Secure Boot chain**: _Every iPhone verifies each stage of the boot process using cryptographic signatures before executing code. This chain of trust helps prevent unauthorized firmware or operating system from loading and plays a significant role in limiting low-level forensic acquisition techniques._

## iOS architecture layers

- iOS is built on a layered architecture that abstracts the complexity of hardware interaction and provides a controlled, secure, and scalable environment for apps.
- Apple categorizes the iOS architecture into four primary layers, each serving a distinct role of the operating system:
  - **Cocoa Touch**
  - **Media Layer**
  - **Core Services**
  - **Core OS**
- Each layer of the iOS architecture has a distinct role in the operation of the operating system and presents unique forensic considerations.

### Core OS layer

- **Core OS layer** is the lowest level and closest to the hardware. It includes the **XNU kernel** (_a hybrid kernel derived from Mach microkernel and components of BSD_), **device drivers**, **filesystems**, and the foundational security infrastructure, including **sandboxing**, **code signing**, and **encryption**.
- One of the most critical components of this layer is the **Secure Enclave Processor** (**SEP**), which handles sensitive operations such as **passcode management**, **biometric authentication**, and **key generation/storage**. The **SEP** operates independently of the main processor, running its own microkernel-based OS.
- From a forensic perspective, the **core OS layer** defines many of the boundaries that determine what can be accessed during acquisition. Sensitive operations involving passcode verification, biometric authentication, and cryptographic key management are protected by the **Secure Enclave** and **hardware-backed** security mechanisms. Accessing data protected by these mechanisms generally requires the appropriate authentication state, cryptographic keys, or a device-specific acquisition technique.

### Core services layer

- **Core services layer** provides essential services such as networking, threading, file access, and inter-process communication. It also includes key frameworks luke **CoreFoundation**, **CFNetwork**, and **SQLite**. Applications rely on this layer for storing data, accessing preferences, and interacting with local or remote resources.
- Forensic tools often extract artifacts from this layer, such as SQLite databases (like SMS, call history, Safari history), Property list (plist) files and Preference files stored in the **sandboxed app containers** (such as in Library/Preferences).

### Media layer

- **Media layer** provides audio, video, and graphics rendering capabilities. Frameworks like **AVFoundation**, **CoreAudio**, and **CoreGraphics** live here.
- While it may seem less relevant to forensics, **media metadata** (**EXIF data** in photos, **timestamps** in video files, **cached media content**) often contain important timeline and location evidence.

### Cocoa touch layer

- At the top is the **cocoa touch layer**, which contains the **UIKit framework** for UI development and the frameworks that support gesture recognition, multitasking, and push notifications.
- Applications heavily interact with the **cocoa touch layer**, which defines how data is presented and managed by the user. Artifacts generated here include application-specific caches, notification logs, and user preferences, which are useful when attempting to reconstruct user activity.
  
- Apple complements this four-layered architecture with multiple layers of hardware and software security designed to protect user data, enforce application isolation, and maintain system integrity.

## iOS security model

- Apple has built a multi-layered security model that integrates hardware and software components tightly within the **iOS ecosystem**. For forensic investigators, understanding the **iOS security model** is critical for identifying what types of data can be recovered, under what conditions, and through what techniques.

### Hardware security

- At the heart of **iOS security** lies **hardware-based encryption**, which ensures that sensitive data is protected at all times. Two key hardware elements include the **Secure Enclave** and **UID/GID encryption keys**.

#### Secure Enclave Processor (SEP)

- Secure Enclave is an isolated security subsystem integrated into supported Apply systems on a chip. It runs its own protected operating environment and participates in sensitive operations involving passcode processing, biometric authentication, data protection, and cryptographic key management. Its exact capabilities vary by hardware generation.
- The **Secure Enclave** helps enforce passcode-attempt delays and protects key material from direct access by the main operating system. If the user has enabled the **Erase Data** option, **iOS** can render passcode-protected data inaccessible after ten consecutive failed passcode attempts. These protections make straightforward offline passcode guessing impractical and significantly constrain forensic acquisition.

#### UID and GID keys

- Each Apple system on a chip contains hardware-bound cryptographic material, including a **device-unique** **UID key**. Apple also uses **GID keys** associated with a class of processors. These keys are not directly available to software and _participate in hardware cryptographic operations and key derivation._
- The **UID** helps bind protected data to the specific device. As a result, copying encrypted storage to another device does not provide the hardware-bound material required to decrypt it. The **UID** should therefore be described as **hardware-bound** key used by cryptographic architecture, not as a key that a forensic tool can extract or transfer.

#### Memory integrity enforcement

- Apple introduce **memory integrity enforcement** (**MIE**) on supported newer hardware alongside **iOS 26**.
- **MIE** combines hardware and operating-system protections intended to make memory-corruption exploitation more difficult. It complements existing mechanisms such as **Pointer Authentication Codes**, **Kernel Text Read-Only Region protections**, and **execution controls**, although the available protections vary by device generation.
- From a forensic perspective, strong memory-integrity protections may reduce the reliability or availability of exploit-based acquisition methods on supported devices. Their effect depends on the exact hardware, iOS build, vulnerability, and acquisition technique; **MIE** should not be described as eliminating kernel exploitation altogether.

### System security

- Apple's system security covers critical processes such as the **Secure Boot process**, **software update integrity**, and the protection of core components like the CPU, memory, storage, applications, and user data.

#### Secure Boot Chain

- The **Secure Boot Chain** process verifies that integrity and authenticity of each software component as the device starts up. It begins with immutable code embedded in the hardware called the **Boot ROM**, which is trusted by default.
- The **Boot ROM** establishes the hardware root of trust and verifies the next stage of the boot process. Each subsequent stage verifies the cryptographic signature and integrity of the software that follows it, ultimately establishing a chain of trust through the bootloader, kernel, and operating system components.
- At every step, cryptographic signatures are validated to ensure the code has not been tampered with. If any part of this chain is compromised or unsigned, the boot process halts, preventing untrusted software from running. This chain of trust ensure that only Apple-signed and verified components are loaded at every stage of the boot process, making it extremely difficult for malware or modified operating systems to persist on a device.

#### Software updates

- To maintain system integrity after boot, **iOS** also enforces strict rules around **software updates**. Updates can only be installed if they are cryptographically signed by Apple. Devices also include protections to prevent downgrading to older, potentially vulnerable versions of iOS.

#### Kernel integrity

- The **kernel** is the core of the iOS operating system. It manages memory, schedule processes, controls communication with hardware, and enforces many of the operating system's security policies.
- Because the **kernel** operates within the highest level of privilege, compromising it could allow an attack to bypass security controls, access protected data, or execute unauthorized code. To prevent this, Apple has introduced multiple **kernel protection mechanisms** that work together to preserve system integrity and make **kernel-level** attacks significantly more difficult:
  - **Kernel text read-only region** (**KTRR**): Introduced with devices based on the **A10 chip** and later, **KTRR** protects the kernel's executable code by making it as permanently read-only after the system has booted. Once enabled, even code running with **kernel privileges** cannot modify protected **kernel memory**. This significantly increase the difficulty of developing persistent kernel exploits and modern jailbreaks that rely on patching the kernel.
  - **Apple mobile file integrity** (**AMFI**): _AMFI enforces Apple's code-signing policy by verifying that executable code has been digitally signed by Apple or an authorized developer before it is allowed to run. If an application or system components fails signature verification, iOS prevents it from executing. This mechanism prevents unauthorized software, malware, and modified system binaries from running on the device. Most jailbreak techniques attempt to bypass or disable AMFI to allow unsigned code to execute._
  - **Pointer authentication codes** (**PAC**): _Modern Apple processors include hardware support for pointer authentication, a security feature that protects important memory pointers from being modified by attackers. The processor generates and verifies cryptographic signatures for selected pointers before they are used. If a pointer has been tampered with, authentication fails and execution is stopped. PAC helps mitigate many memory corruption attacks that previously enabled privilege escalation and kernel exploitation._
  - **Data execution prevention** (**DEP**): _DEP prevents data stored in memory from being executed as program code. Memory regions intended for storing data, such as the stack and heap, are marked as non-executable. As a result, even if an attacker injects malicious code into these regions, the processor refuses to execute it. DEP forces attackers to rely on more sophisticated exploitation techniques and provides an additional layer of protection against arbitrary code execution._

### Application security

- Apple complements its hardware and system security with a comprehensive application security model.
- Every application is isolated from the operation system and from other apps, ensuring that a compromised or malicious app cannot freely access sensitive data elsewhere on the device. This model is enforced through mechanisms such as application sandboxing, mandatory code signing, and entitlements, all of which play an important role in determining what a forensic investigator can and cannot access during a forensic examination.

#### App sandboxing

- Each iOS application runs within its own sandbox, a restricted environment that isolates the application's files, memory, and system resources from the rest of the OS. By default, an app can only access its own data directory and has no visibility into the data stored by other apps. Access to protected resources such as contacts, photos, camera, microphone, calendars, or location services requires explicit user permission and appropriate application entitlements.
- 