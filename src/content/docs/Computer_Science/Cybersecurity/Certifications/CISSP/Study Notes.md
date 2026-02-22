---
title: Study Notes
---

- There are three types of vulnerability assessments:
  - Port scan (not intensive)
  - Vulnerability scan (more intensive)
  - Penetration test (most intensive)
- Vulnerability assessments can be conducted on business processes and procedures, and are generally interview-based
- The various types of vulnerability assessments fit into a fundamental activity in information security known as `vulnerability management`, which is a formal process of assessment, vulnerability identification, and remediation within specific time-frames.
- The purpose of vulnerability management often includes `attack surface reduction`, the quest to reduce the number of systems, devices, and potentially exploitable components.
- [Flexera](https://www.flexera.com/products/security) (formerly Secunia) is an example of a system-based vulnerability scanning tool.
- Examples of application scanning tools include [HCL AppScan](https://www.hcl-software.com/appscan), [Fortify WebInspect](https://www.microfocus.com/documentation/fortify-webinspect/2540/), [Acunetix](https://www.acunetix.com/), and Burp Suite.
- [https://en.wikipedia.org/wiki/Wardialing](https://en.wikipedia.org/wiki/Wardialing)
- [https://en.wikipedia.org/wiki/Wardriving](https://en.wikipedia.org/wiki/Wardriving)
- Radiation monitoring: `Radio frequency` (`RF`) emanations are the electromagnetic radiation emitted by computers and network devices. Radiation monitoring is similar to packet sniffing and wardriving, in that someone uses sophisticated equipment to determine what data is being displayed on monitors, transmitted on local area networks (LANs), or processed in computers.
- Eavesdropping: Eavesdropping is as low-tech as dumpster diving but a little less (physically) dirty. An eavesdropper takes advantage of one or more people talking or using a computer, paying little attention to whether someone else is listening their conversations or watching them work with discrete, over-the-shoulder glances. (The technical term for the latter approach is `shoulder surfing`.)
- Packet sniffing: A `packet sniffer` is a tool that captures some or all `TCP/IP` packets on a network, not just those being sent to the system or device doing the sniffing. An `Ethernet` network is a `shared-media network`, which means that any or all devices on the LAN can (theoretically) view all packets. `Switched-media LANs` generally pick up only packets intended for the device running the sniffer. Some switches are equipped with a [span port](https://www.kentik.com/blog/what-is-port-mirroring-span-explained/) (also known as a `mirror port`) that contains all the packets passing through the switch.
- A network adapter that operates in `promiscuous mode` accepts all packets, not just the packets destined for the system, and sends them to the operating system.
- Phishing messages pretend to be something they're not. There are several specific forms of phishing, including:
  - [Pharming](https://www.proofpoint.com/us/threat-reference/pharming): An attack that results in users visiting an imposter website instead of the site they intend to visit; can be accomplished through an attack on a system's hosts file, an organization's Domain Name System (DNS), or a [domain homograph attack](https://en.wikipedia.org/wiki/IDN_homograph_attack).
  - [Spear phishing](https://www.ibm.com/think/topics/spear-phishing): Phishing messages that target a single organization (or part of an organization) with highly customized messaging.
  - [Whaling](https://www.ibm.com/think/topics/whale-phishing#732739694): Phishing messages that are sent to executives in a targeted organization.
  - [Vishing](https://www.ibm.com/think/topics/whale-phishing#732739694): Sending voicemail messages to persons in a targeted organization.
  - [Smishing](https://www.ibm.com/think/topics/smishing#732739696): Phishing messages delivered through `Short Message Service (SMS)`, also known as `texting`
  - Spam: Plain old junk mail, also known as `unsolicited commercial email` (`UCE`)
  - Spim: Spam that is delivered via `instant messaging`
  - Spit: Spam that is delivered via `Internet telephony`
- `Synthetic transactions` are `real-time` actions or events that execute on monitored objects automatically.
- Different types of code review and testing techniques include:
  - `Pair Programming`: `Pair` (or `peer`) programming is a technique commonly used in agile software development, in which two developers work together and alternate between writing and reviewing code line by line.
  - `Lightweight code review`: Often performed as part of the development process, this technique consists of conducting informal walk-throughs and email pass-around, tool-assisted, and/or over-the-shoulder reviews.
  - `Formal Inspections`: Structured processes such as the [Fagan inspection](https://en.wikipedia.org/wiki/Fagan_inspection) identify defects in design documents, requirements specifications, test plans, and source code throughout the development process.
- Unlike use case testing (in which expected behavior in a system or application is defined and tested), `abuse/misuse case testing` is the process of performing unintended and malicious actions in a system or application to produce abnormal or unexpected behavior and thereby identify potential vulnerabilities.
- `Test coverage analysis` (also called `code coverage analysis`) measures the percentage of source code tested by a given test or validation suite.
- `Interface testing` focuses on the interface between various systems and components. It ensures that functions (such as data transfer and control between systems or components) perform correctly and as expected. `Interface` testing also verifies that any execution errors are handled properly and do not expose any potential security vulnerabilities. Examples of `interfaces tested` include: `Application Programming Interfaces` (`APIs`), `Web services`, `Transaction processing gateways`, and `Physical interfaces` (such as keypads, keyboard/mouse/display, and device switches and indicators).
- A `breach and attack simulation` ([BAS](https://cymulate.com/breach-and-attack-simulation/)) is an attack on an organization that includes: `Penetration testing`, an `intrusion objective` (such as the theft of specific data), a test of `security event monitoring` to recognize the attack, and `security incident response`. The value of `BAS` comes from an exercise of defensive and detective safeguards and the steps taken after personnel recognize that an attack has occurred.
- [https://www.dfs.ny.gov/](https://www.dfs.ny.gov/)


## Key Performance and Risk Indicators

- `Key Performance Indicator` (`KPI`): _A measurable value that depicts the level of effectiveness or success of a process or procedure_
- `Key risk indicator` (`KRI`): _A measurement of a process or procedure that depicts the level of risk_
- `KPIs` and `KRIs` are meaningful measurements of key activities in an information security program that can help management at every level better how well the security program and its components are performing.
- Organizations typically develop metrics and `KRIs` for their key security-related activities to ensure that that security processes are operating as expected. `Metrics` help identify areas for improvement by alerting management to unexpected trends.
- Focus areas for `security metrics` include:
  - `Vulnerability Management`: _Operational metrics include the number of scans performed, the number of vulnerabilities identified (ranked by severity). and the number of patches applied. KRIs focus on the coverage of scans and the elapsed time between the public release of a vulnerability and the completion of patching._
  - `Incident response`: _Operational metrics focus on the numbers and categories of incidents and on whether trends suggest new weaknesses in defenses. KRIs focus on the time required to realize that an incident is in progress (known as `dwell time`) and the time required to contain and resolve the incident._
  - `Security awareness training`: _Operational metrics and KRIs generally focus on the completion rate over time._
  - `Logging and monitoring`: _Operational metrics generally focus on the numbers and types of events that occur. KRIs focus on the proportion of assets whose logs are being monitored and the elapsed time between the start of an incident and the time when personnel begin to act._
- `KRIs` are so-called because they are harbingers (_a person or thing that announces or signals the approach of another_) of information risk in an organization


## Disaster Recovery and Business Continuity

- `Information security continuous monitoring` (`ISCM`) is defined in [NIST SP 800-137](https://csrc.nist.gov/pubs/sp/800/137/final) as "_maintaining ongoing awareness of information security, vulnerabilities, and threats to support organizational risk management decisions._" An ISCM strategy helps the organization maintain an effective security management program in a dynamic environment.


# Analyze Test Output and Generate Reports

- The key for information security professionals is knowing the meaning of _data_ and transforming it for various purposes and audiences. Security professionals who perform this task well are better able to obtain funding for additional tools and staff because they can state the need for resources in business terms.

## Remediation

Steps to take upon receipt of a security assessment:

### 1. Validate

The important first step to take when receiving a final assessment report is to validate the findings. This step is especially important when an outside firm performs the assessment; that firm doesn't know the organization as well, and its understanding of the matter will likely be inappropriate. Validation is a sanity check to confirm the validity of the findings.

### 2. Prioritize

Initial prioritization is needed to give the organization an idea of which assessment findings will receive early attention and which can wait. This initial prioritization is done at face value before the details are known; sometimes, priorities will change. Priorities may be based on risk level, visibility, the perception of quick wins, or a combination of all three.

Prioritization also implicitly includes deciding whether to remediate any specific assessment finding. Further analysis may indicate that a particular issue if not as severe as previously believed.

### 3. Identify a remediation owner

When the context of the issue is identified, management assigns that task of remediation to a remediation owner. In some cases, the remediation owner performs the remediation; in other cases, the owner manages or supervises those who will do the work. Still, one person is identified as being responsible for seeing remediation through.

### 4. Develop a work plan

Subject matter experts (SMEs) get down to business, developing a detailed work plan to change the process or system to resolve the issue found in the assessment. The work plan tells management how much effort (and what kind of effort), cost, and time are required to remediate the finding. Depending on the nature of the finding, the work plan could be one line in a project or a thousand line.

### 5. Reprioritize

When the work plan has been created, the cost, effort, and time become known whether they are within initial estimates. Sometimes, remediation is easier than initially thought, and sometimes, it's harder. Reprioritizing the effort can be the right thing to do.

### 6. Remediate

This work itself resolves the issue. Whether remediation means making changes in a business process, an information system, or both, the changes are intended to resolve the issue identified in the assessment. In some cases, an assessment highlights the absence of something. Remediation consists of building the process or the system (or both) and putting it in place.

### 7. Close the issue

The work is confirmed when the owner completes the remediation effort, and the issue is marked as closed and completed.

## Exception Handling

The methodical approach to `exception handling`:

1. `Analyze the situation`: _Study the situation to validate the assertion and explore reasonable options._
2. `Analyze risk`: _Study the risk levels of various options._
3. `Get approval`: _The exception can be approved or denied. In case of a denial, a different approach is generally prescribed._
4. `Enter the records`: _Enter the request, its analysis, and final disposition into an exception register._

_Exception approvals should be time-bound, not perpetual_. 


## Conduct or Facilitate Security Audits

`Auditing` is the examination of systems and/or business processes to ensure that they've been designed properly, used properly, and considered effective.

The major factors in play for internal and external audits include:

- `Purpose and scope`: The reason for an internal audit or external audit, and the scope of an audit, need to be fully understood by both management in the audited organization and those who will be performing the audit. Scope may include one or more of the following factors: `Organization business units and departments`, `Geographic locations`, `Business processes, systems, and networks`, and `Time periods`.
- `Applicable standards or regulations`: Often, an audit is performed under the auspices of a law, regulation, or standard, which determines such matters as who may perform the audit, auditor qualifications, the type and scope of the audit, and the obligations of the audited organization at the conclusion.
- `Qualification of auditors`: The personnel who perform audits may be required to have specific work experience, possess specific training and/or certifications, or work in certain type of firms.
- `Types of auditing`: Several activities comprise an audit, including:
  - `Observation`: Auditors passively observe activities performed by personnel and/or information systems.
  - `Inquiry`: Auditors ask questions of control or process owners to understand how key activities are performed.
  - `Corroborative inquiry`: Auditors ask questions of others to ensure consistency in their responses.
  - `Inspection`: Auditors perform tasks or transactions independently to see whether the results are correct.
  - `Control self-assessment` (`CSA`): Control owners perform their own control testing and turn evidence over to auditors.
- `Sampling`: The process of selecting items in a large population is known as `sampling`. Regulations and standards often specify the `sampling types` and rates required for an audit. Sampling techniques include:
  - `Attribute sampling`: Samples are selected to determine compliance with a policy or SLA.
  - `Discovery sampling`: Samples are selected to find at least one exception.
  - `Judgemental sampling`: Samples are selected based on auditor judgment and criteria, such as `materiality` or `risk`.
  - `Statistical sampling`: Samples are selected randomly or semi-randomly.
  - `Stop-or-go sampling`: Samples are selected until the auditor is satisfied that the exception rate is acceptably low.
  - `Stratified sampling`: Samples are selected based on attribute ranges or strata.
  - `Variable sampling`: Samples are selected to determine a general characteristic of an entire population, such as the total value of sales orders.
- `Management response`: In some types of audits, management in the auditee organization is permitted to write a statement in response to an auditor's findings.

There are thee main contexts for audits of information systems and related processes:

- `Internal audit`: _Personnel in the organization conduct an audit on selected information systems and/or business processes_.
- `External audit`: _Auditors from outside firm audit one or more information systems and/or business processes_.
- `Third-party audit`: _Auditors, internal or external, perform an audit of a third-party service provider performing services on the organization's behalf._.


## Third Party Audits

Third-party audits are conducted by, or on behalf of, another organization.

Organizations that provide services to other organizations are frequently asked to participate in third-party audits. This can be quite a burden on the audited organization if they have a large number of clients. The `American Institute of Certified Public Accountants` (`AICPA`) released a standard designed to alleviate this burden. The `Statement on Standards for Attestation Engagements document 18` (`SSAE 18`), titled, `Attestation Standards: Clarification and Recodification`, provides a common standard to be used by auditors performing assessments of service organizations with the intent of allowing the organization to conduct an external assessment instead of multiple third-party assessments and then sharing the resulting report with customers and potential customers. Outside of the U.S., similar engagements are conducted under the `International Standard on Assurance Engagements` (`ISAE`) `3402`, `Assurance Reports on Controls at a Service Organization`.

`SSAE 18` and `ISAE 3402` engagements are commonly referred to as `system and organization controls` (`SOC`) audits, and they come in three forms:

- `SOC 1 Engagements`: _Assess the organization's controls that might impact the accuracy of financial reporting_.
- `SOC 2 Engagements`: _Assess the organization's controls that affect the security (`confidentiality`, `integrity`, and `availability`) and privacy of information stored in a system. `SOC 2` audits are `confidential` and are normally only shared outside the organization under and `NDA`_.
- `SOC 3 Engagements`: _Assess the organization's controls that affect the security (`confidentiality`, `integrity`, and `availability`) and privacy of information stored in a system. However, `SOC 3` audit results are intended for public disclosure_.

In addition to the three categories of `SOC` assessments, there are two different types of `SOC report`. Both reports begin with providing a description by management of the controls put in place. They differ in the scope of the opinion provided by the auditor:

- `Type I Reports`: These reports provide the auditor's opinion on the description provided by management and the suitability of the design of the controls. `Type I` reports also cover only a specific point of time, rather than an extended period. `Type I` reports are more of a documentation review where the auditor is checking things out on paper and making sure that the controls described by management are reasonable and appropriate.
- `Type II Report`: These reports go further and also provide the auditor's opinion on the operating effectiveness of the controls. That is, the auditor actually confirms that the controls are functioning properly. The `Type II` report also covers an extended period of time: at least six months of operation. `Type II` reports are more like a traditional audit. The auditors are not just checking the paperwork; they are also going in and verifying that the controls function properly.

`Type II` reports are considered much more reliable than `Type I` report because they include independent testing of controls. `Type I` reports simply take the service organization at their word that the controls are implemented as described.

Auditors generally have [carte blanche](https://www.merriam-webster.com/dictionary/carte%20blanche) access to all information within an organization, and security staff should comply with their requests, consulting with management as needed.

The Big Four didn't come into being until 2002. Up until that point, the Big Five also included the highly respected firm [Arthur Andersen](https://www.britannica.com/money/Arthur-Andersen). Andersen, however, collapsed suddenly after they were implicated in the downfall of Enron Corporation.

## Auditing Standards

One common framework for conducting audits and assessments is the [Control Objectives for Information and Related Technologies (COBIT)](https://www.isaca.org/resources/cobit). `COBIT` describes the common requirements that organizations should have in place surrounding their information systems. The `COBIT` framework is maintained by `ISACA`.

## Performing Vulnerability Assessments

### Describing Vulnerabilities

The security community depends on a common set of standards to provide a common language for describing and evaluating vulnerabilities. `NIST` provides the community with the [Security Content Automation Protocol (SCAP)](https://csrc.nist.gov/projects/security-content-automation-protocol) to meed this need. `SCAP` provides this common framework for discussion and also facilitates the automation of interactions between security systems. The components of `SCAP` most directly related to vulnerability assessment include these:

- `Common Vulnerabilities and Exposures` (`CVE`) provides a naming system for describing security vulnerabilities.
- `Common Vulnerability Scoring System` (`CVSS`) provides a standardized scoring system for describing the severity of security vulnerabilities.
- `Common Configuration Enumeration` (`CPE`) provides a naming system for operating systems, applications, and devices.
- `Extensible Configuration Checklist Description Format` (`XCCDF`) provides a language for specifying security checklists.
- `Open Vulnerability and Assessment Language` (`OVAL`) provides a language for describing security testing procedures.

### Network Discovery Scanning

- `TCP SYN Scanning`: Sends a single packet to each scanned port with the `SYN` flag set. This indicates a request to open a new connection. If the scanner receives a response that has the `SYN` and `ACK` flags set, this indicates that the system is moving to the second phase in the `three-way TCP handshake` and that the port is `open`. `TCP SYN` scanning is also known as `half-open` scanning.
- `TCP Connect Scanning`: Opens a full connection to the remote system on the specified port. This scan type is used when the user running the scan does not have the necessary permissions to run a `half-open scan`. Most other scan types require the ability to send `raw packets`, and a user may be restricted by the OS from sending `handcrafted packets`.
- `TCP ACK Scanning`: Sends a packet with the `ACK` flag set, indicating that it is part of an open connection. This type of scan may be done in an attempt to determine the rules enforced by a firewall and the firewall methodology.
- `UDP Scanning`: Performs a scan of the remote system using the `UDP protocol`, checking for active `UDP services`. This scan types does not use the `three-way handshake`, because `UDP` is a `connectionless protocol`.
- `Xmas Scanning`: Sends a packet with the `FIN`, `PSH`, and `URG` flags set. A packet with so many flags is said to be "lit up like a Christmas tree," leading to the scan's name.

- Port `515` is used by the `Line Printer Daemon` for network printing via the `LPR (Line Printer Remote)/LDP` protocol.
- Port `1720` is used by `H.323`, a TCP-based `Voice over IP` and video conferencing protocol suite used for real-time audio, video, and data communication over IP networks.
- Port `1723` is used by `PPTP`, the `Point-to-Point Tunneling Protocol` is a VPN protocol used to create encrypted tunnels over IP networks.
- Port `9100` is used by `HP JetDirect printing` for raw, direct network printing (also called `RAW printing` or `AppSocket`). `HP JetDirect` is a network printing technology developed by `HP` that allows printers to receive print jobs directly over the network without extra protocols like `LPR`.

### Vulnerability Management Workflow

Organizations that adopt a vulnerability management system should also adopt a workflow approach to managing vulnerabilities. The basic steps in this workflow should include the following:

1. `Detection`: _The initial identification of a vulnerability normally takes place as the result of a vulnerability scan_.
2. `Validation`: _Once a scanner detects a vulnerability, administrators should confirm that vulnerability to determine that it is not a false positive report_.
3. `Remediation`: _Validated vulnerabilities should then be remediated. This may include applying a vendor-supplied security patch, modifying a device configuration, implementing a workaround to avoid the vulnerability, or installing a web application firewall or other control that prevents the exploitation of the vulnerability_.

###