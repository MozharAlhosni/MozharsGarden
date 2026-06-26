---
title: Links
---

# The Kubernetes Book

# Chapter 2

- Kubernetes (K8s) is an orchestrator of containerized cloud-native microservices applications.
- An orchestrator is a system that deploys applications and dynamically responds to changes.
- K8s was developed by a group of Google engineers partly in response to AWS and Docker.
- In 2014, the Google engineers open-sourced K8s and donated it to the newly formed Cloud Native Computing Foundation.
- K8s abstracts infrastructure and simplifies application portability
- All early versions of K8s shipped with Docker as its container runtime, however, later on, the K8s project created the container runtime interface (CRI) to make the runtime layer pluggable.
- K8s 1.24 removed support for Docker as a runtime as it was bloated and overkill for what K8s needed. Since then, most new K8s clusters ship with containerd as the default runtime.
- containerd is a light version of Docker optimized for K8s, that fully supports applications containerized by Docker.
- Docker, containerd, and K8s all work with images and containers that implement the [Open Container Initiative](https://opencontainers.org/).
- In 2016 and 2017, Docker Swarm, Mesosphere DCOS, and K8s competed to become the industry standard container orchestrator. K8s won.
- Google ran containers at massive scale for a very long time using two in-house orchestrators, Borg and Omega.
- K8s is not an open-source version of Borg or Omega; K8s shares its DNA and family history with them.
- The word Kubernetes originates from the Greek word for helmsman, which is the person who steers a ship. The K8s logo has seven spokes because it is a subtle reference to the Star Trek: Voyager character, Seven of Nine.
- K8s is the de facto platform for cloud-native apps, sometimes called the OS of the cloud because it abstracts the differences between cloud platforms the same way that OSs like Linux and Windows abstract the differences between servers: `Linux and Windows abstract server resources and schedule application processes`, while `K8s abstracts cloud resources and schedules app microservices`. One can schedule apps on K8s without caring if they're running on AWS, Azure, Civo Cloud, GCP, or an on-prem data center. 
- K8s makes it easier to deploy to one cloud today and migrate to another cloud tomorrow.
- K8s is both a cluster and an orchestrator
- A K8s cluster is one or more nodes providing CPU, memory, and other resources for application use.
- K8s supports two node types: `Control plane nodes` and `Worker nodes`. Both nodes can be physical servers, virtual machines, or cloud instances, and both can run on ARM and AMD64/x86-64. `Control plane nodes` must be `Linux`, but `worker nodes` can be `Linux` or `Windows`.
- `Control plane nodes` implement the K8s intelligence, and every cluster needs at least one. Three or five are required for High Availability (HA).
- Every `control plane node` runs every control plane service; these include the API server, the scheduler, and the controllers that implement cloud-native features such as self-healing, autoscaling, and rollouts.
- `Worker nodes` are where the business apps are run.
- It is common to run user apps on `control plane nodes` in development and test environments. However, many production environments restrict user apps to `worker nodes` so that `control plane nodes` can focus their resources on cluster operations. Doing this allows `control plane nodes` to focus on managing the cluster.
- K8s is the industry-standard orchestrator and can intelligently deploy apps across nodes and failure zones for optimal performance and availability. K8s can also fix things when they break, scale things when demand changes, and manage rollouts and rollbacks.
- The `control plane` is a collection of system services that implement the brains of K8s. It exposes the API, schedules apps, implements self-healing, manages scaling operations, and more.
- The simplest clusters can run a single `control plane node` and are best suited for labs and testing. For production clusters, one should run three or five `control plane nodes` and spread them across availability zones for high availability.
- It's a production best practice to run all user apps on `worker nodes`, allowing `control plane nodes` to allocate their resources to cluster-related operations.
- Most clusters run every `control plane service` on every `control plane node` for HA.
- The `API server` is the front end of K8s, and all commands and requests go through it. Even internal `control plane services` communicate with each other via the `API server`.
- The `API server` exposes a `RESTful` `API` over `HTTPs`, and all requests are subject to authentication and authorization.
- The `cluster store` holds the desired state of all applications and cluster components, and it's the only `stateful` part of the `control plane`. The `cluster store` is based on the `etcd` distributed database, and most K8s clusters run an `etcd` replica on every control plane node for HA. However, large clusters that experience a high rate of change may run a separate `etcd` cluster for better performance.
- `etcd` prefers an odd number of replicas to help avoid `split-brain` conditions. This is where replicas experience communication issues and cannot be sure if they have a quorum (`majority`). If a `split-brain` occurs, `etcd` goes into `read-only` mode preventing updates to the cluster. User apps will continue working, but K8s won't be able to scale or update them.
- As with all `distributed databases`, `consistency` of writes is vital. For example, multiple writes from different sources to the same destination can cause corruption. `etcd` uses the `RAFT` `consensus algorithm` to prevent this from happening.
- K8s uses `controllers` to implement a lot of `cluster intelligence`. Each controller runs as a process on the `control plane`, and some of the more common ones include: `The Deployment controller`, `The StatefulSet controller`, and `The ReplicaSet controller`.
- `Controllers` run as background watch loops, reconciling observed state with desired state.
- `K8s` runs a `controller manager` that is responsible for spawning and managing the individual `controllers`.
- The `scheduler` watches the `API server` for new work tasks and assigns them to healthy `worker nodes`. It implements the following process: `Watch the API server for new tasks`, `Identify capable nodes`, and `Assign tasks to nodes`.
  - Identifying `capable nodes` involves predicative checks, filtering, and a ranking algorithm.
  - The `scheduler` checks for taints, `affinity` and `anti-affinity` rules, network port availability, and available CPU and memory.
  - The `scheduler` ignores nodes incapable of running the tasks and ranks the remaining ones according to factors such as whether it already has the required image, the amount of available CPU and memory, and number of tasks it's currently running. Each is worth points, and the nodes with the most points are selected to run the tasks.
  - The `scheduler` marks tasks as pending if it can't find a suitable node.
  - If the `cluster` is configured for `node autoscaling`, the pending task kicks off a cluster autoscaling event that adds a new node to the `cluster` and the `scheduler` assigns the task to the new node.

### Cloud Controller Manager

- If the cluster is on a public cloud, it will run a `cloud controller manager` that integrates the cluster with cloud services, such as instances, load balancers, and storage.

### Control Plane Manager

- The control plane implements the brains of `K8s`, including the `API Server`, the `scheduler`, and the `cluster store`. It also implements `controllers` that ensure the cluster runs always.
- Three or five control plane nodes should be ran for high availability, and large busy clusters might run a separate `etcd` cluster for better cluster store performance.

### Worker Nodes

- `Worker nodes` run the business application.
- A `worker node` is composed of `Kubelet`, `Runtime`, `Network proxy` (`kube-proxy`), and `OS`.

#### Kubelet

- The `kubelet` is the main `K8s` agent and handles all communication with the `cluster`.
- The `kubelet` performs the key tasks of:
  - _Watching the `API Server` for new tasks_
  - _Instructs the appropriate `runtime` to execute tasks_
  - _Reports task status to the `API Server`_
- If a task won't run, the `kubelet` reports the problem to the `API Server` and lets the `control plane` decide what actions to take.

#### Runtime

- Every `worker node` has one or more `runtimes` for executing tasks.
- Most new `K8s` clusters pre-install the `containerd` `runtime` and use it to execute tasks. These tasks include:
  - _Pulling container images_
  - _Managing lifecycle operations such as starting and stopping containers_
- Older clusters shipped with the `Docker runtime`, but this is no longer supported. `RedHat OpenShift` clusters use [CRI-O ](https://cri-o.io/) runtime.

#### Kube-proxy

- Every `worker node` runs a `kube-proxy` service that implements cluster networking and load balance traffic to tasks running on the node.

## Packaging apps for K8s

- `K8s` runs `containers`, `VMs`, `Wasm apps`, and more. However, all of them need wrapping in `Pods` before they'll run on `K8s`.

### The declarative model and desired state

- The `declarative model` and `desired state` are at the core of how K8s operates. They work on three basic principles:
  - `Desired state`
  - `Observed state`
  - `Reconciliation`
- In `K8s`, the `declarative model` works like this:
  - The state of an application is described in a `YAML` manifest file
  - The `YAML` manifest file is posted to the `API Server`
  - `K8s` records this in the `cluster store` as a record of intent
  - A `controller` notices the `observed state` of the cluster doesn't match the `new desired state`
  - The `controller` makes the necessary changes to `reconcile` the differences
  - The `controller` keeps running the background, ensuring `observed state` always matches the `desired state`
- In contrast to the traditional `imperative model` which requires complex scripts of platform-specific commands to achieve an `end-state`, the `declarative model` is a simple platform-agnostic way of `describing` an `end-state`
- `K8s` supports both the `imperative` and `declarative` models, however, it prefers the latter because it integrates with version control systems and enable `self-healing`, `autoscaling`, and `rolling updates`.

## Pods

- The atomic unit of scheduling in `VMWare` is the `virtual machine` (VM). In `K8s`, it's the `Pod`.

### Pods and Containers

- The simplest configuration run a single container per `Pod`, which is why the term `Pod` is used interchangeably with `container`.
- Powerful use cases for `multi-container` `Pods` include:
  - _Service meshs_
  - _Helper services that initialize environments_
  - _Apps with tightly coupled helper functions such as log scrapers_
- A multi-container `Pod` can include the main application container and a `service mesh sidecar`. `Sidecar` is a helper container that runs in the same `Pod` as the `main app container` and provides additional services such as encrypting network traffic and providing telemetry.
- `Multi-container` `Pods` also help in implementing the `single responsibility principle` where every container performs a _single task_.

### Pod anatomy

- Each `Pod` is a shared `execution environment` for one or more `containers`.
- The `execution environment` includes a `network stack`, `volumes`, `shared memory`, and more.
- `Containers` in a `single-container` `Pod` have the `execution environment` to themselves, whereas `containers` in a `multi-container` `Pod` share it. For example, in a `Pod` with two containers, they can share the same IP of the `Pod`. The main application container is accessible outside the `Pod` on `192.168.1.50:9000`, and the sidecar on `192.168.1.50:9090`. If the two containers need to communicate with each other, `container-to-container` within the `Pod`, they can use the `Pod's` `localhost interface`.
- Choose a `multi-container` `Pod` when the application has _tightly coupled_ components needing to share resources such as memory or storage. In most other cases, use `single-container` `Pods` and loosely couple them over the network.

### Pod scheduling

- `K8s` always schedules `containers` in the same `Pod` to a `single node`; this is because `K8s` schedules `Pods`, not individual `containers`. But also because `Pods` are a shared `execution environment`.
- Starting a `Pod` is an `atomic operation`.
- `K8s` only marks a `Pod` as ready when all its containers are running.

### Pods as the unit of scaling

- `Pods` are the minimum unit of `scheduling` in `K8s`. As such, `scaling` an application `up` _adds_ more `Pods`, and `scaling` it `down` _deletes_ `Pods`. One does not `scale` by adding more `containers` to existing `Pods`.

### Pod lifecycle

- `Pods` are _mortal_ - they're created, they live, and they die.
- Anytime a `Pod` dies, `K8s` replaces it with a new one. Although it is the same `Pod`, it will always have a new `ID` and new `IP`.

### Pod immutability

- `Pods` are immutable, thus, once running, they are never changed.

## Deployments

- Even though `K8s` works with `Pods`, they are always deployed via higher-level `controllers` such as `Deployments`, `StatefulSets`, and `DaemonSets`. These are all `control plane` services that operate as background watch loops, `reconciling` `observed state` with `desired state`.
- `Deployments` add `self-healing`, `scaling`, `rolling updates`, and `versioned rollbacks` to `stateless apps`.

## Service objects and stable networking

- If a failed `Pod` is managed by a `controller`, it gets replaced by a new `Pod` with a new `ID` and a new `IP` address. The same thing happens with `rollouts` and `scaling` operations:
  - _Rollouts replace old `Pod` with new ones with new IPs_
  - _Scaling up adds new `Pods` with new IPs_
  - _Scaling down deletes existing `Pods`_
- Events like these generates [IP churn](https://en.wikipedia.org/wiki/DHCP_churn) and make `Pods` _unreliable_. For example, clients cannot make reliable connections to individual `Pods` as `K8s` doesn't guarantee they'll exist.
- `Services` provide _reliable networking_ for `groups` of `Pods`. A `K8s` `Service` provides a reliable name and IP, and load balances requests to the `Pods` behind it.
- `Services` keep a list of _healthy_ `Pods` as `scaling` events, `rollouts`, and `failures` cause `Pods` to come and go. This means they'll always direct traffic to active _healthy_ `Pods`. The `Service` also guarantees the `name`, `IP`, and `port` of the `Service` will never change.

# Chapter 3: Getting K8s

