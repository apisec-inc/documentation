```markdown
# Adding Self-Signed CA Certificates to a Running Docker Container

This document outlines the steps to dynamically add self-signed CA certificates to a running Docker container without modifying the Docker image. The process includes mounting the certificates, updating the trusted certificates, and verifying the installation.

## Prerequisites

- A running Docker container.
- A self-signed CA certificate (e.g., `my-ca.crt`).
- Docker CLI installed on the host machine.

## Steps to Add Self-Signed CA Certificates

### 1. Prepare the Self-Signed CA Certificate

Ensure that you have the self-signed certificate file, e.g., `my-ca.crt`, available on your host machine.

### 2. Start the Docker Container with Certificate Mount

You can mount the certificate directly into the running container by using a volume. Run or restart the container with the following command:

```bash
docker run --name apisec-scanner -d -e FX_HOST=scanner.apisec.ai -e FX_PORT=443 -e FX_IAM=kljXaR6FRBIdztHfFIUnb+KAuf5HKuto -e FX_KEY=<FX_KEY> -v /host/path/to/my-ca.crt:/usr/local/share/ca-certificates/my-ca.crt:ro apisec/scanner:latest
```

**Explanation:**
- `/host/path/to/my-ca.crt`: Path on the host machine where the certificate is located.
- `/usr/local/share/ca-certificates/my-ca.crt`: Path inside the container where certificates are typically stored.
- `:ro`: Mounts the certificate as read-only inside the container.

Alternatively, you can copy the certificate directly to the container:

```bash
docker cp /root/opt/my-ca.crt <container_id>:/usr/local/share/ca-certificates/my-ca.crt
```

**Set read-only permissions inside the container:**

```bash
docker exec -it <container_id> chmod 444 /usr/local/share/ca-certificates/my-ca.crt
```

**Explanation:**
- `chmod 444`: Makes the file readable by everyone but not writable or executable.

### 3. Update Trusted Certificates Inside the Running Container

After mounting or copying the certificate, you need to update the trusted certificate store inside the container. Execute the following commands:

```bash
docker exec -it my_container bash
```

Once inside the container:

```bash
update-ca-certificates
```

This will update the trusted certificates store to include your newly added certificate.

Exit the container by typing:

```bash
exit
```

### 4. Verify the Certificate is Added

To confirm that the CA certificate has been successfully added, you can run the following command to check the connection to a secure site:

```bash
docker exec my_container openssl s_client -connect some-secure-site:443 -CAfile /etc/ssl/certs/ca-certificates.crt
```

This command will verify that the container is able to establish a secure connection using the newly added certificate.

## Notes
- This method avoids the need to rebuild the Docker image.
- The certificate will persist only while the container is running. Restarting the container with the volume mount will ensure the certificate is included again.
