# Installing Docker and Docker-Compose

## Step 1 — Installing Docker

The Docker installation package available in the official Ubuntu repository may not be the latest version. To ensure we get the latest version, we’ll install Docker from the official Docker repository. To do that, we’ll add a new package source, add the GPG key from Docker to ensure the downloads are valid, and then install the package.

First, update your existing list of packages:


```bash
sudo apt update
```

Next, install a few prerequisite packages which let apt use packages over HTTPS:

```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

Then add the GPG key for the official Docker repository to your system:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

Add the Docker repository to APT sources:

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Update your existing list of packages again for the addition to be recognized:

```bash
sudo apt update
```

Make sure you are about to install from the Docker repo instead of the default Ubuntu repo:

```bash
apt-cache policy docker-ce
```

You’ll see output like this, although the version number for Docker may be different:

```bash
Output of apt-cache policy docker-ce
docker-ce:
      Installed: (none)
      Candidate: 5:20.10.14~3-0~ubuntu-jammy
      Version table:
         5:20.10.14~3-0~ubuntu-jammy 500
            500 https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages
         5:20.10.13~3-0~ubuntu-jammy 500
            500 https://download.docker.com/linux/ubuntu jammy/stable amd64 Packages
```



Notice that docker-ce is not installed, but the candidate for installation is from the Docker repository for Ubuntu 22.04 (jammy).
Finally, install Docker:

```bash
sudo apt install docker-ce
```
    
Docker should now be installed, the daemon started, and the process enabled to start on boot. Check that it’s running:

```bash
sudo systemctl status docker
```

The output should be similar to the following, showing that the service is active and running:

```bash
● docker.service - Docker Application Container Engine
         Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
         Active: active (running) since Fri 2022-04-01 21:30:25 UTC; 22s ago
    TriggeredBy: ● docker.socket
           Docs: https://docs.docker.com
       Main PID: 7854 (dockerd)
          Tasks: 7
         Memory: 38.3M
            CPU: 340ms
         CGroup: /system.slice/docker.service
                 └─7854 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
```
Installing Docker now gives you not just the Docker service (daemon) but also the docker command line utility, or the Docker client. We’ll explore how to use the docker command later in this tutorial.
    

## Step 2 — Executing the Docker Command Without Sudo (Optional)

By default, the docker command can only be run the root user or by a user in the docker group, which is automatically created during Docker’s installation process. If you attempt to run the docker command without prefixing it with sudo or without being in the docker group, you’ll get an output like this:

```bash
Output
docker: Cannot connect to the Docker daemon. Is the docker daemon running on this host?.
See 'docker run --help'.
```

If you want to avoid typing sudo whenever you run the docker
 command, add your username to the docker group:

```bash
sudo usermod -aG docker ${USER}
```
    

To apply the new group membership, log out of the server and back in, or type the following:

```bash
su - ${USER}
```

You will be prompted to enter your user’s password to continue.

Confirm that your user is now added to the docker group by typing:

```bash
groups
```

```bash
Output
'sammy' 'sudo' 'docker'
```

If you need to add a user to the docker group that you’re not logged in as, declare that username explicitly using:

```bash
sudo usermod -aG docker username
```

## Step 3 — Installing Docker Compose

To make sure you obtain the most updated stable version of Docker Compose, you’ll download this software from its official Github repository.

First, confirm the latest version available in their releases page. At the time of this writing, the most current stable version is 2.3.3.

Use the following command to download:

```bash
mkdir -p ~/.docker/cli-plugins/
curl -SL https://github.com/docker/compose/releases/download/v2.29.2/docker-compose-linux-x86_64 -o ~/.docker/cli-plugins/docker-compose
```

Next, set the correct permissions so that the docker compose command is executable:

```bash
chmod +x ~/.docker/cli-plugins/docker-compose
```

To verify that the installation was successful, you can run:

```bash
docker compose version
```

You’ll see output similar to this:

```bash
Output
Docker Compose version v2.3.3
```

Docker Compose is now successfully installed on your system.

### sources

[How To Install and Use Docker on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04 "How To Install and Use Docker on Ubuntu 20.04")

[How To Install and Use Docker on Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04 "How To Install and Use Docker on Ubuntu 22.04")

[How To Install and Use Docker Compose on Ubuntu 20.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04 "How To Install and Use Docker Compose on Ubuntu 20.04")

[How To Install and Use Docker Compose on Ubuntu 22.04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-22-04 "How To Install and Use Docker Compose on Ubuntu 22.04")

[Docker Compose Github Versions](https://github.com/docker/compose/releases "Docker Compose Github Versions")
