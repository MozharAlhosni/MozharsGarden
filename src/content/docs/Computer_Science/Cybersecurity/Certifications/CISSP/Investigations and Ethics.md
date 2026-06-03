---
title: Investigations and Ethics
---

# Investigations

## Investigation Types

### Administrative Investigations

- `Administrative investigations` are `internal investigations` that examine either `operational issues` or the `organization's policies`.
- `Operational investigations` examine issues related to the organization's `computing infrastructure` and have the primary goal of `resolving operational issues`.
- `Administrative investigations` may quickly transition to another type of `investigation`.
- `Operational investigations` have the _loosest standards_ for `collection of information`. They are _not intended to produce `evidence`_ because they are for `internal operational` purposes only.
- In addition to resolving the `operational issue`, `operational investigations` often conduct a `root cause analysis` that seeks to _identify_ the _reason_ that an `operational issue` occurred.
- The `root cause analysis` often highlights issues that require `remediation` to prevent similar incidents in the future.
- `Administrative investigations` that are not `operational` in nature may require a stronger standard of evidence, especially if they may result in `sanctions` against the individual.

### Criminal Investigations

- `Criminal investigations`, typically conducted by `law enforcement personnel`, investigate the alleged `violation` of `criminal law`.
- `Criminal investigation` may result in _charging suspects_ with a crime and the `prosecutions` of those charges in `criminal court`.
- Most `criminal` cases must meet the [beyond a reasonable doubt](https://www.law.cornell.edu/wex/beyond_a_reasonable_doubt) standard of evidence. Following this standard, the `prosecution` must demonstrate that the `defendant` _committed the crime by presenting facts from there are no other logical conclusions_. For this reason, `criminal investigation` must follow _strict evidence collection_ and _preservation process_.

### Civil Investigations

- `Civil investigations` typically do not involve `law enforcement` but rather involve `internal employees` and `outside consultants` working on behalf of a `legal team`. They prepare the `evidence` necessary to present a case in `civil court` resolving a dispute between two parties.
- Most `civil cases` _do not follow the `beyond a reasonable doubt` standard of proof_. Instead, they use the weaker [preponderance of the evidence](https://www.law.cornell.edu/wex/preponderance_of_the_evidence) standard. Meeting this evidence simply requires that the evidence _demonstrate that the outcome of the case is more likely than not_. For this reason, `evidence collection standards` for `civil investigations` are _not as rigorous as those used in criminal investigation_.

### Regulatory Investigations

- Government agencies may conduct `regulatory investigations` when they believe that an individual or corporation has _violated_ `administrative law`. Regulators typically conduct these investigations with a `standard` of proof _commensurate_ with the venue where they expect to try their case.
- `Regulatory investigations` vary widely in scope and procedure and are often conducted by government agents.

### Industry Standards

- Some regulatory investigations may not involve government agencies. These are based on `industry standards`, such as the `Payment Card Industry Data Security Standard` (`PCI DSS`).
- These `industry standards` are _not laws_ but are `contractual obligations` entered into by the participating organizations.
- In some cases, including `PCI DSS`, the organization may be required to submit the `audits`, `assessments`, and `investigations` conducted by an _independent third-party_.
- Failure to participate in these investigations or `negative investigations results` _may lead to fines or other sanctions_. Therefore, `investigations` into `violations of industry standards` should be treated in a similar manner as regulatory investigations.

### Electronic Discovery

- In `legal proceedings`, each side has a duty to preserve evidence related to the case and, through the `discovery process`, share information with their adversary in the proceedings.
- This `discovery process` applies to both paper records and electronic records, and the `electronic discovery` (`eDiscovery`) process facilitates the processing of `electronic information` for `disclosure`.
- The [Electronic Discovery Reference Model](https://edrm.net/edrm-model/current/) (`EDRM`) describes a standard process for conducting `eDiscovery` with nine aspects:
  - `Information Governance` - Ensures that information is well organized for future `eDiscovery` efforts
  - `Identification` - Locates the information that may be responsive to a discovery request when the organization believes that `litigation` is likely
  - `Preservation` - Ensures that potentially discoverable information is protected against `alteration` or `deletion`
  - `Collection` - Gathers the relevant information centrally for use in the `eDiscovery` process
  - `Processing` - Screens the collected information to perform a "rough cut" of irrelevant information, reducing the amount of information requiring detailed screening
  - `Review` - Examines the remaining information to determine what information is relevant to the request and removes any information protected by [attorney-client privilege](https://www.law.cornell.edu/wex/attorney-client_privilege)
  - `Analysis` - Performs deeper inspection of the content and context of remaining information
  - `Production` - Places the information into a format that may be shared with others and delivers it to other parties, such as opposing counsel
  - `Presentation` - Displays the information to the witnesses, the court, and other parties
- Conducting `eDiscovery` is a _complex process and requires careful coordination between IT professionals and legal counsel_.

## Evidence

### Admissible Evidence

- The three basic requirements for evidence to be presented into a court of law. To be considered `admissible evidence`, is must meet all three of these requirements, as determined by a judge, prior to being discussed in open court:
  - _The evidence must be `relevant` to determining a fact_.
  - _The fact that the evidence seeks to determine must be `material` (that is, related) to the case_.
  - _The evidence must be `competent`, meaning it must have been obtained legally. Evidence that results from an illegal search would be inadmissible because it is `not competent`_.

### Types of Evidence

- Many different types of evidence can be used in a court of law.
- The four major categories of evidence types are `real evidence`, `documentary evidence`, `testimonial evidence`, and `demonstrated evidence`. Each category has slightly different additional requirements for `admissibility`.



# Ethics and the Internet

## RFC 1087

- In January 1989, the `Internet Architecture Board` (`IAB`) issued a statement of policy concerning the proper use of the Internet. 
- The basic contents of the document, titled `Ethics and the Internet`, `request for comments` (`RFC`) `1087`, is from which most codes of `ethics` can trace their roots back to this document.
- The statement is a brief lust of practices considered unethical. Whereas a code of `ethics` states what one should do, `RFC 1087` states what one _should not do_.
- `RFC 1087` states that any activity with the following purposes is _unacceptable_ and _unethical_:
  
  - _Seeks to gain unauthorized access to the resources of the Internet_
  - _Disrupts the intended use of the Internet_
  - _Wastes resources (people, capacity, computer) through such actions_
  - _Destroys the integrity of computer-based information_
  - _Compromises the privacy of users_
  
## ISC2 Code of Ethics

### Code of Ethics Preamble

- _The safety and welfare of society and the common good, duty to our principals, and duty to each other, require that we adhere, and be seen to adhere, to the highest ethical standards of behavior_.
- _Therefore, strict adherence to this Code is a condition of certification_.

### Code of Ethics Canon

- _Protect society, the common good, necessary public trust and confidence, and the infrastructure_.
- _Act honorably, honestly, justly, responsibly, and legally_.
- _Provide diligent and competent service to principals_.
- _Advance and protect the profession_.