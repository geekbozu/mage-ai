# Terraform Amazon Web Services (AWS)

## Environment variables

If you don’t have the AWS CLI installed, you’ll need to create this file: `~/.aws/credentials`.

In that file, add the following values:

```
[default]
aws_access_key_id = XXX
aws_secret_access_key = XXX
```

<br />

## Configurable settings

<b>Docker image</b>

In the file [./scripts/deploy/terraform/aws/variables.tf](https://github.com/mage-ai/mage-ai/blob/master/scripts/deploy/terraform/aws/variables.tf),
you can change the default Docker image:

```
variable "docker_image" {
  description = "Docker image url used in ECS task."
  default     = "mageai/mageai:latest"
}
```

<b>Region</b>

In the file [./scripts/deploy/terraform/aws/variables.tf](https://github.com/mage-ai/mage-ai/blob/master/scripts/deploy/terraform/aws/variables.tf),
you can change the region:

```
variable "aws_region" {
  type        = string
  description = "AWS Region"
  default     = "us-west-2"
}
```

<b>More</b>

Other variables defined in [./scripts/deploy/terraform/aws/variables.tf](https://github.com/mage-ai/mage-ai/blob/master/scripts/deploy/terraform/aws/variables.tf)
can also be customized to your needs.

<br />

## Configurable variables

In the [`mage-ai/scripts/deploy/terraform/aws/env_vars.json`](https://github.com/mage-ai/mage-ai/blob/master/scripts/deploy/terraform/aws/env_vars.json)
file, you can edit the following variables, which are used by the tool while running in the cloud:

Change the value of the variables with the following names to match the actual values you want
the tool to use while running in the cloud:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

These variable values are used by the tool to retrieve AWS resources like CloudWatch events, etc.

<br />

## Deploying

<b>Using CLI</b>

1. Change directory into scripts folder:
    ```bash
    cd scripts/deploy/terraform/aws
    ```
1. Initialize Terraform:
    ```bash
    terraform init
    ```
    - If you run into errors like the following:
        ```
        │ Error: Failed to install provider
        │
        │ Error while installing hashicorp/template v2.2.0: the local package for registry.terraform.io/hashicorp/template 2.2.0 doesn't match any of the checksums previously recorded in the dependency lock file (this might be because the available checksums are for packages targeting different
        │ platforms); for more information: https://www.terraform.io/language/provider-checksum-verification
        ```
        then run the following commands to resolve this:
        ```
        brew install kreuzwerker/taps/m1-terraform-provider-helper
        m1-terraform-provider-helper activate
        m1-terraform-provider-helper install hashicorp/template -v v2.2.0
        rm .terraform.lock.hcl
        terraform init --upgrade
        ```
1. Deploy:
    ```bash
    terraform apply
    ```

Once it’s finished deploying, you can access Mage in your browser.

1. Open your EC2 dashboard.
1. View all load balancers.
1. Click on the load balancer with the name `mage-data-prep` in it
(if you changed the app name, then find the load balancer with that app name).
1. Find the public DNS name, copy that, and paste it in your browser.

<br />

<b>Using Docker</b>

From the root directory of Mage, run the following commands:

1. Initialize Terraform:
```bash
docker run -i -t -v $(pwd):/mage --workdir="/mage/scripts/deploy/terraform/aws" \
  hashicorp/terraform:latest init
```

2. Deploy:
```bash
docker run -i -t -v $(pwd):/mage --workdir="/mage/scripts/deploy/terraform/aws" \
  --env AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID \
  --env AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY \
  hashicorp/terraform:latest apply
```

<br />

### Errors

<b>Page isn’t loading</b>
If you run into connection issues, check to see if your IP is whitelisted in the appropriate
[security group](#security).

<b>503 Forbidden</b>
Check to see if the service task in your EMR cluster is running or if it stopped.

503 typically means that the service task isn’t running and that can be caused by a variety of things.

Open the service task that stopped running and click on the "Logs" tab to see what issues occurred.

<br />

## Security

- Update security group name `mage-data-prep-sg` to whitelist IPs. Add a new inbound rule for
HTTP port 80 and use your IP address.

<br />