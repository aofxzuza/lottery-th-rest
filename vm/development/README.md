# Development Environment

## Dependencies

* A provider, either [VirtualBox](http://virtualbox.org), or libvirt (kvm, qemu, etc)
* [Vagrant](http://vagrantup.com/)
* Some Vagrant plugins:

```bash
vagrant plugin install vagrant-hostmanager
vagrant plugin install vagrant-vbguest # if using VirtualBox
```

## Usage

Start VM

```
vagrant up
```

Start VM and force a specific provider. By default a provider you have installed will be selected
```
vagrant up --provider virtualbox
vagrant up --provider libvirt
```

Use the VM
```
vagrant ssh
```

Stop the VM
```
vagrant halt
```

Destroy the VM
```
vagrant destroy
```
