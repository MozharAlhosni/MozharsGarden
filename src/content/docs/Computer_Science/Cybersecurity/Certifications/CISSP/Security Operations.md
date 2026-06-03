---
title: Security Operations
---

# Evidence collection and handling

- `Evidence` is _information presented in a court of law to confirm or dispel a fact that's under contention._

## Types of Evidence

- Sources of legal evidence that can be presented in a court of law generally falls into one of four major categories:
  - `Direct Evidence`: _Oral testimony or a written statement based on information gathered through a witness's five senses (in other words, an eyewitness account) that proves or disproves a specific fact or issue_.
  - `Real (or physical) Evidence`: _Tangible objects from the actual crime, such as the tools or weapons used and any stolen or damaged property; may also include visual or audio surveillance tapes generated during or after the event. Physical evidence from a computer crime is not always available_.
  - `Documentary Evidence`: _Includes originals and copies of business records, computer-generated and computer-stored records, manuals, policies, standards, procedures, and log files. Most evidence presented in a computer crime case is documentary evidence. The hearsay rule is an extremely important test of documentary evidence that must be understood and applied to this type of evidence_.
  - `Demonstrative Evidence`: _Used to aid the court's understanding of a case. Opinions are considered to be demonstrative evidence and may be expert (based on personal expertise and facts) or nonexpert (based on facts only). Other examples of demonstrative evidence includes models, simulations, charts, and illustrations_.
- Other types of evidence that may fall into one or more of the major categories include:
  - `Best evidence`: _Original, unaltered evidence, which courts prefer over secondary evidence_.
  - `Secondary evidence`: _A duplicate or copy of evidence, such as a tape backup, screen capture, or photograph_.
  - `Corroborative evidence`: _Evidence that supports os substantiates other evidence presented in a case_.
  - `Conclusive evidence`: _Incontrovertible and irrefutable evidence_.
  - `Circumstantial evidence`: _Relevant facts that can't be directly or conclusively connected to other events, but about which a reasonable person can make a reasonable inference_.

## Rules of evidence

### Best Evidence Rule

- The best evidence rule, defined in the [US Federal Rules of Evidence](https://www.uscourts.gov/forms-rules/current-rules-practice-procedure/federal-rules-evidence), states that "_to prove the content of a writing, recording, or photograph, the original writing, recording, or photograph is [ordinarily] required_."
- The Federal Rules of Evidence, however, define an exception to this rule as "_[if] data are stored in a computer or similar device, any printout or other output readable by sight, shown to reflect the data accurately, is an 'original'_."
- Thus, data extracted from a computer - if that data is a fair and accurate representation of the original data - satisfies the best evidence rule and may be introduced into court proceedings as such.

### Hearsay Rule

- `Hearsay evidence` is evidence that's not based on personal, firsthand knowledge of a witness but comes from other sources.
- Under the Federal Rules of Evidence, `hearsay evidence` normally is not `admissible` in court. This rule exists to prevent unreliable testimony from improperly influencing the outcome of a trial.
- Several courts have acknowledged that the `hearsay rules` are applicable to `computer-stored records` containing human statements but are not applicable to `computer-generated records` untouched by human hands.
- Perhaps the most successful and commonly applied test of `admissibility` for `computer records`, in general, has been the `business records exception`, established in the `Federal Rules of Evidence` for records or regularly conducted activity that meet the following criteria:
  - _Made at (contemporaneously) or near the time when the act occurred_
  - _Made by a person who has knowledge of the business process or from information transmitted by a person who has knowledge of the business process_
  - _Made and relied on during the regular conduct of business or in the furtherance of the business, as verified by the custodian or other witness who is familiar with the records' use_
  - _Kept for motives that tend to ensure their accuracy_
  - _In the custody of the witness on a regular basis (as required by the chain of evidence)_
- The `chain of evidence` _establishes accountability for the handling of evidence throughout the evidence life cycle_.
  
## Admissibility of Evidence

- To be admissible, `computer-generated evidence` must be:
  - `Relevant`: _It must tend to prove or disprove facts that are relevant and material to the case_.
  - `Reliable`: _It must be reasonably proved that what is presented as evidence is what was originally collected and that the evidence itself is reliable. This proof is established in part through proper evidence handling and the chain of custody._.
  - `Legally Permissible`: _It must be obtained through legal means. Evidence that's not legally permissible may include evidence obtained through the following means_:
    - `Illegal search and seizure`: _Law enforcement personnel must obtain a court order. But non-law enforcement personnel, such as a supervisor or system administrator, may be able to conduct an authorized search under some circumstances_.
    - `Illegal wiretaps or phone taps`: _Anyone conducting wiretaps or phone taps must obtain a court order_.
    - `Entrapment` or `Enticement`: _Entrapment encourages a person to commit a crime that they may have had no intention of committing. Conversely, enticement lures a person toward certain evidence (e.g., honeypot) after they have already committed a crime. Enticement isn't necessarily illegal, but it does raise certain ethical arguments and may not be admissible in court_.
    - `Coercion`: _Coerced testimony or confessions are not legally permissible. Coercion involves compelling a person to provide evidence involuntarily through the use of threats, violence (torture), bribery, trickery, or intimidation_.
    - `Unauthorized or improper monitoring`: _Active monitoring must be properly authorized and conducted in a standard manner; users must be notified that they may be subject to monitoring_.

## Chain of Custody and the Evidence Life Cycle

- The `chain of custody` (or `chain of evidence`) provides `accountability` and `protection` for `evidence` throughout its `entire life cycle` and includes the following information, which is normally kept in an `evidence log`:
  - `People involved (who)`: _Identify any and all people who discovered, collected, seized, analyzed, stored, preserved, transported, or otherwise controlled the evidence; also identify any witness or other people who were present during any of these activities_
  - `Description of evidence (what)`: _Provide specific information about the evidence's location when it was discovered, analyzed, stored, or transported_
  - `Date/time (when)`: _Record the date and time when evidence is discovered, collected, seized, analyzed, stored, or transported; also record date-and-time information for any evidence log entires associated with the evidence_
  - `Methods used (how)`: _Provide specific information about how evidence was discovered, collected, stored, preserved, or transported_
- The `evidence life cycle` describes the various phases of evidence, from its initial discovery to its final disposition. The `evidence life cycle` has the following five stages:
  - `Collection and identification`
  - `Analysis`
  - `Storage, preservation, and transportation`
  - `Presentation in court`
  - `Final disposition, such as return to owner or destroy (for copies)`

### Collection and Evidence

- `Collecting evidence` involves taking that `evidence` _into custody_.
- In general, law enforcement officials can search and/or `seize` computers and other electronic devices under any of four circumstances:
  - `Voluntary` or `Consensual`: _The owner of the computer or electronic evidence can freely surrender the evidence_.
  - `Subpoena`: _A court issues a subpoena to a person, ordering that person to deliver the evidence to the court_.
  - `Search warrant` or `Anton Piller order`: _A search warrant is issued to a law enforcement official by the court, allowing that official to search and seize specific evidence. An Anton Piller order allows the premises to be searched and evidence seized without warning, usually to prevent possible destruction of evidence_.
  - `Exigent circumstances`: _If possible causes exists and the destruction of evidence is imminent, that evidence may be searched or seized without a warrant_.
- When evidence is `collected`, it must be `marked` and `identified` properly to ensure that it can be presented in court properly as `actual evidence` gathered from the scene or incident. The collected evidence must be recorded in an evidence log with the following information:
  - _A description of the piece of evidence, including specific information such as make, model, serial number, physical appearance, material condition, and preexisting damage_
  - _The name(s) of the person or people who discovered and collected the evidence_
  - _The exact date and time, specific location, and circumstances of the discovery/collection_
- Additionally, the evidence must be `marked` according to the following guidelines:
  - `Mark the evidence`. _If possible, without damaging the evidence, mark the piece of evidence with the collecting person's initials, the date, and the case number (if known). Seal the evidence in an appropriate container, and again, mark the container with the same information_
  - `Use an evidence tag`. _If the actual evidence cannot be marked, attach an evidence tag with the information in the preceding item, seal the evidence, and tag it in an appropriate container, and mark the container with the same information_.
  - `Seal the evidence`. _Seal the container with evidence tape, and mark the tape in a manner that will clearly indicate any tampering or altering of the evidence_.
  - `Protect the evidence`. _Use extreme caution when collecting and marking evidence, to ensure that it's not damaged. If you're using plastic bags for evidence containers, make sure they're static-free, to protect magnetic media_.

### Analysis

- `Analysis` involves examining the evidence for information pertinent to the case.
- `Analysis` should be conducted with extreme caution - and only be experienced properly trained personnel - to ensure the evidence is not altered, damaged, or destroyed.

### Storage, Preservation, and Transportation

- All `evidence` must be stored properly in a secure facility and preserved to prevent damage or contamination from various hazards, including intense heat or cold, extreme humidity, water, magnetic fields, and vibration.
- `Evidence` not properly protected may be `inadmissible` in court, and the party responsible for `collection` and `storage` may be _liable_.
- Care must be exercised during `transportation` to ensure that `evidence` is not `lost`, `temporarily misplaced`, `damaged`, or `destroyed`.

### Presentation in Court

- `Evidence` to be presented in court must continue to follow the `chain of custody` and be handled with the same care at all other times in the `evidence life cycle`. This process continues throughout the trial `until all testimony related to the evidence is completed` and the trials has `concluded`, or the case is settled or dismissed.

### Final Disposition

- After the conclusion of the trial or other disposition, `evidence` is normally returned to its proper owner.
- Under some circumstances, however, certain `evidence` may be `ordered destroyed`, such as `contraband`, `drugs`, or `drug paraphernalia`.
- Any `evidence` obtained through a `search warrant` is legally under the control of the `court`, possibly requiring the `original owner` to `petition` the court for its return.

## Reporting and Documentation

- Complete and accurate recordkeeping is critical to each investigation.
- An investigation's report is intended to be a complete record of an investigation and usually includes:
  - _Incident investigators, including their qualifications and contact information_
  - _Names of the parties interviewed, including their roles, involvement, and contact information_
  - _List of all evidence collected, including chain(s) of custody_
  - _Tools used to examine or process evidence, including versions_
  - _Samples and sampling methodologies used, if applicable_
  - _Computers used to examine, process, or store evidence, including a description of configuration_
  - _Root-cause analysis of the incident, if applicable_
  - _Conclusions and opinions of the investigators_
  - _Hearings or proceedings_
  - _Parties to whom the report is delivered_

# Investigative Techniques

- An `investigation` should begin immediately upon report of an alleged `computer crime`, `policy violation`, or `incident`.
- Any `incident` should be handled, at least initially, as a `computer crime investigation` or `policy violation` until a `preliminary investigation` determines otherwise.
- Various `investigative techniques` may be required, depending on the goal of the `investigation` or applicable laws and regulations.
- The `general steps` of the `investigative process` are:
  1. `Detect and contain an incident`. _Early detection is critical to a successful investigation. Unfortunately, `computer-related incidents` usually involve `passive` or `reactive` detection techniques (such as the review of `audit trails` and `accidental discovery`), which often leave a `cold evidence trail`. Containment minimizes further loss or damage. The computer incident response team (CIRT), normally is responsible for conducting an investigation. The CIRT should be notified or activated as quickly as possible after a computer crime is detected or suspected._
  2. `Notify management`. _Management must be notified of any investigations as soon as possible. Knowledge of the investigations should be limited to as few people as possible and on a `need-to-know` basis. `Out-of-band` communication methods (reporting in person) should be used to ensure that an intruder does not intercept sensitive communications about the investigation._
  3. `Conduct a preliminary investigation`. _This preliminary analysis determines whether an incident or crime actually occurred. Most incidents turn out to be honest mistakes rather the malicious conduct. This step includes reviewing the complaint or report, inspecting damage, interviewing witnesses, examining logs, and identifying further investigation requirements._
  4. `Determine whether the organization should disclose that the crime occurred`. _First, and most important, determine whether laws or regulations require that organization to disclose a crime or incident. Next, by coordinating with a public relations or public affairs official of the organization, determine whether the organization wants to disclose this information_.
  5. `Conduct the investigation`. _Conducting the investigation involves three activities_:
     1. `Identify potential suspects`. _Potential suspects include organization insiders and outsiders. One standard discriminator that helps identify and eliminate potential suspects is the `MOM` (`Motive`, `Opportunity`, and `Means`) test: Did the suspect have the `motive`, `opportunity`, and `means`?_ 
     2. `Identify potential witnesses`. _Determine whom can be interviewed and should conduct the interviews. One should be careful not to alert any potential suspects to the investigation; one needs to focus on obtaining facts, not opinions, in witness statements_.
     3. `Prepare for search and seizure`. _Identify the types of systems and evidence planned to be searched or seized, designate and train the search and seizure team members (normally, members of the CIRT), obtain and serve proper search warrants (if required), and determine the potential risk to the system during a search-and-seizure effort_.
  6. `Report your findings`. _The results of the investigation, including evidence, should be reported to management and turned over to proper law enforcement officials or prosecutors as appropriate_.

# Digital forensics tools, tactics, and procedures

- `Digital forensics` is the science of conducting a computer incident investigation to determine what has happened and who is responsible, and to collect legally admissible evidence for use in subsequent legal proceedings, such as criminal investigations, internal investigation, or lawsuit.
- The types of `forensic` `data-gathering techniques` include:
  - `Hard drive forensics`: _Specialized tools are used to create one or more forensically identical copies of a computer's hard drive. A device called a write blocker is typically used to prevent any possible alterations to the original drive. Cryptographic checksums can be used to verify that a forensic copy is an exact duplicate of the original. Then tools are used to examine the contents of the hard drive to determine_:
    - `Last known state of the computer`
    - `History of files accessed`
    - `History of files created`
    - `History of files deleted`
    - `History of programs executed`
    - `History of websites visited by a browser`
    - `History of attempts by the user to remove evidence`
  - `Live forensics`: _Specialized tools are used to examine a running system, including_:
    - `Running processes`
    - `Currently open files`
    - `Contents of main storage (RAM)`
    - `Keystrokes`
    - `Communications traffic in and out of the computer`
  - `Live forensics` _are difficult to perform because the tools used to collect information can affect the system being examined_.

## Artifacts

- Key `artifacts` that may be collected during an investigation may include `data`, `computers`, `mobile devices`, `servers` (physical or virtual), `network equipment` (such as routers and switches), and `security equipment` (such as firewalls). These `artifacts` may contain `indicators of compromise` (`IoC`) that can be preserved as evidence to support an `investigation`.

# Conduct Logging and Monitoring Activities

## Intrusion Detection and Prevention Systems (IDPs)

- `Intrusion detection` is a `passive technique` used to detect `unauthorized activity` on a network.
- Three types of `Intrusion Detection Systems` (`IDSs`) can be found in data centers:
  - `Network-based`: _Consists of a separate device attached to a network that listens to all network traffic by using various methods to detect anomalous activity_.
  - `Host-based`: _A subset of `network-based` IDS in which only the network traffic destined for a particular host is monitored_.
  - `Wireless`: _Another type of network intrusion detection that focuses on `wireless intrusion` by scanning for `rogue access points`_
- Both `network`- and `host`-based `IDS` use a couple of techniques:
  - `Signature-based`
  - `Reputation-based`
  - `Anomaly-based`

## Security Information and Event Management (SIEM)

- `Security Information and Event Management` (`SIEM`) solutions provide `real-time` collection, analysis, correlation, and presentation of security logs and alerts generated by various network sources.

## Security Orchestration, Automation, and Response (SOAR)

- A `Security Orchestration, Automation, and Response` (`SOAR`) solution takes a `SIEM` one step further through the automation of repeatable tasks as a result of an event that has been detected.

## Continuous Monitoring and Tuning


## Egress Monitoring

- `Egress monitoring` (or `extrusion detection`) is the process of monitoring `outbound traffic` to discover potential `data leakage` (or `loss`).
- `Data loss prevention` (`DLP`) systems are often used to detect the `exfiltration` of `sensitive data`, such as `Personally Identifiable Information` (`PII`), or `Protected Health Information` (`PHI`) in email messages, data uploads, PNG or JPEG images, and other form of communication. `DLP` technologies perform `deep packet inspection` (`DPI`) to decrypt and inspect `outbound traffic` that is `TLS` encrypted.
- `DLP` systems can be used to disable the use of `removable media driver interfaces` on servers and workstations, as well as to `encrypt data` written to `removable media` so that only systems with the same organization's `DLP` agent can read the contents of the `removable media drive`.
- `Static DLP` tools are used to `discover sensitive` and `proprietary` data in `databases`, `file servers`, and other `data storage systems`.

## Log Management

- To the greatest extent possible, log information should be synchronized to a `network time` (`NTP`) server to ensure that log data from disparate sources can be correlated accurately.
- `Logs` should be stored centrally and securely to ensure that the data collected is immutable and can be readily ingested into various security analytics platforms, `SIEM` solutions, and other security tools for `log aggregation`, `analysis`, and `correlation`.
- Appropriate `retention periods` for `log information` should be defined and implemented based on _legal_ or _regulatory_ `compliance requirements`.

## Threat Intelligence

- Security analysts may use tools to proactively search for perviously unknown `Indicators of Compromise` (`IoC`) or ongoing (unremediated) threats in an activity known as `threat hunting`.
- Machine-readable `threat intel feeds` use any of several formats, including `CSV`, `Structured Threat Information Exchange` (`STIX`), `Extensible Markup Language` (`XML`), `JSON`, `Open Indicators of Compromise` (`OpenIOC`), and `Trusted Automated Exchange of Indicator Information` (`TAXII`).
- `Threat intel` tools enable an organization to detect the `tactics`, `techniques`, and `procedures` (`TTPs`) that `threat actors` use to attack networks and systems.

## Perform Configuration Management (CM)

- Security planning and analysis must be integral part of every organization's resource `provisioning` processes, as well as throughout the `life cycle` of all resources. Important security considerations include:
  - `Provisioning`: _Security should be consulted any time the organization is considering introducing new equipment, such as a Wi-Fi access point or network router from a manufacturer whose products have not previously been deployed in the environment. This approach ensures that security can assess any known risks associated with the new equipment and its impact on the organization's overall security posture_.
  - `Asset management (or inventory)`: _Maintaining a complete, accurate `inventory` is critical to ensure that all potential vulnerabilities and risks in an environment can be identified, assessed, and addressed_.
  - `Baselining`: _Establishing a baseline helps security teams tune security events and alerts that are received and can also be used to feed `user and entity behavior analysis/capabilities (UEBA)` in security tools deployed throughout the environment_.
  - `Change management`: _Change management processes are used to strictly control changes to systems in production environments so that only duly requested and approved changes are made_.
  - `Configuration management`: _Configuration management processes need to be implemented and strictly enforced to ensure that information resources are operated in a safe and secure manner. Organizations typically implement an `automated configuration management database` (`CMDB`) that is part of a system configuration management system used to manage asset inventory data. Often, this database is also used to manage the configuration history of systems_.
  - `Drift`: _In the context of configuration management, drift is the gradual change in a system's configuration from an established baseline or standard_.
  - `Physical assets`: _Physical assets must be protected against loss, damage, or theft. Valuable or sensitive data stored on physical asset may far exceed the value of the asset itself_.
  - `Virtual assets`: _`VM sprawl` has increasingly become an issue for organizations with the popularity of `virtualization` technology and `software-defined networks` (`SDN`)_.
  - `Cloud assets`: _It is important to keep track of cloud assets, such as `SaaS`, `PaaS`, and `IaaS` solutions. Ultimately, an organization is the one responsible for the security and privacy of its applications and data - not the cloud service provider. Issues of data residency and transborder data flow need to be considered. `Cloud access security brokers` (`CASB`), can detect access and use of `cloud-based services`. `CASBs` give an organization more visibility into its sanctioned and unsanctioned use of cloud services_.
  - `Applications`: _This category includes commercial and custom applications, private clouds, web services, SaaS products, and the interfaces and integrations among application components. Securing the provisioning of these assets requires strict access controls; only designated administrators should be able to deploy and configure them_.
  - `Automation`

## Apply Foundational Security Operations Concept
q


# Change Management

- Common tasks within a change management process are:
  
  1. `Request the change`
  2. `Review the change`
  3. `Approve/reject the change`
  4. `Test the change`
  5. `Schedule and implement the change`
  6. `Document the change`

# Patch Management

- Common steps within an effective `patch management program:

  - `Evaluate patches`
  - `Test patches`
  - `Approve the patches`
  - `Deploy the patches`
  - `Verify that patches are deployed`

- `Patch Tuesday` and `Exploit Wednesday`


# Vulnerability Management

- Two common elements of a `vulnerability management program` are `routine vulnerability scans` and `periodic vulnerability assessments`.




# Incident Manageme