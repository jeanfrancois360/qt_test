
# Task Management System (TMS)

## Introduction
Welcome to the Task Management System (TMS) built using Frappe framework. TMS is a robust web-based application designed to streamline task management within organizations. With its intuitive user interface and powerful features, TMS simplifies task assignment, tracking, and collaboration, ultimately boosting productivity and efficiency.

## Features
### User Management Module
- **User Registration**: Easily add new users to the system with basic details and permissions.
- **User Authentication**: Secure login system with authentication mechanisms to protect user data.
- **User Roles and Permissions**: Assign roles and permissions to users based on their responsibilities within the organization.
- **User Profile Management**: Users can update their profile information and preferences.

### Task Management Module
- **Task Creation**: Create tasks with detailed descriptions, deadlines, priorities, and assignees.
- **Task Assignment**: Assign tasks to individual users or teams within the organization.
- **Task Tracking**: Track the progress of tasks through various stages from creation to completion.
- **Task Prioritization**: Set priority levels for tasks to ensure the most critical tasks are addressed first.
- **Task Comments and Attachments**: Collaborate effectively by adding comments and attaching relevant files to tasks.
- **Task Filters and Search**: Easily find and filter tasks based on various criteria such as status, priority, assignee, etc.
- **Task Reports**: Generate reports to analyze task performance, workload distribution, and productivity metrics.

## Getting Started
To set up the Task Management System on your server, follow these steps:

1. **Prerequisites**: Make sure you have the following prerequisites installed:
   - Python
   - Frappe framework
   - MariaDB database server
     
# Setting Up Frappe on Ubuntu 22.04

In this guide, we'll walk through the steps to configure a fresh installation of Ubuntu 22.04 to set up an environment and install Frappe version 14 and the project management app. Let's get started!

## Prerequisites

Before we begin, ensure you have the following prerequisites in place for optimal functionality of ERPNext on your server.

### Software Requirements

- Updated Ubuntu 22.04
- A user with sudo privileges
- Python 3.10+
- Node.js 16

### Hardware Requirements

- 4GB RAM
- 40GB Hard Disk

## Server Settings

### Update and Upgrade Packages

```sh
sudo apt-get update -y
sudo apt-get upgrade -y
```

### Create a New User (Bench User)

```sh
sudo adduser [frappe-user]
usermod -aG sudo [frappe-user]
su [frappe-user]
cd /home/[frappe-user]
```

Replace `[frappe-user]` with your desired username.

### Install Required Packages

#### Install GIT

```sh
sudo apt-get install git
```

#### Install Python

```sh
sudo apt-get install python3-dev python3.10-dev python3-setuptools python3-pip python3-distutils
```

#### Install Python Virtual Environment

```sh
sudo apt-get install python3.10-venv
```

#### Install Software Properties Common

```sh
sudo apt-get install software-properties-common
```

#### Install MariaDB

```sh
sudo apt install mariadb-server mariadb-client
```

#### Install Redis Server

```sh
sudo apt-get install redis-server
```

#### Install Other Packages

```sh
sudo apt-get install xvfb libfontconfig wkhtmltopdf
sudo apt-get install libmysqlclient-dev
```

### Configure MYSQL Server

#### Setup the Server

```sh
sudo mysql_secure_installation
```

Follow the prompts to complete the setup.

#### Edit MYSQL Default Config File

```sh
sudo nano /etc/mysql/my.cnf
```

Add the following block of code and save:

```ini
[mysqld]
character-set-client-handshake = FALSE
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci

[mysql]
default-character-set = utf8mb4
```

#### Restart the MYSQL Server

```sh
sudo service mysql restart
```

### Install CURL, Node, NPM and Yarn

#### Install CURL

```sh
sudo apt install curl
```

#### Install Node

```sh
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.profile
nvm install 16.15.0
```

#### Install NPM

```sh
sudo apt-get install npm
```

#### Install Yarn

```sh
sudo npm install -g yarn
```

### Install Frappe Bench

```sh
sudo pip3 install frappe-bench
```

### Initialize Frappe Bench

```sh
bench init --frappe-branch version-14 frappe-bench
```

### Change User Directory Permissions

```sh
chmod -R o+rx /home/[frappe-user]
```

### Enter bench directory

```sh
cd frappe-bench
```

### Create a New Site

```sh
bench new-site [site-name]
```

Replace `[site-name]` with your desired site name.

### Get the qt_test app

```sh
bench get-app --branch main qt_test https://github.com/jeanfrancois360/qt_test
```

### Install the qt_test app on your Site

```sh
bench --site [site-name] install-app qt_test
```

### Set your Site as the default

```sh
bench use [site-name]
```

### Start the application

```sh
bench start
```
```

7. **Access TMS**: Open a web browser and navigate to `http://localhost:8000` to access the Task Management System.

8. **Login**: Use the default administrator credentials to log in and start managing tasks.

## System Screenshots
<img width="1438" alt="Screenshot 2024-05-08 at 12 18 07" src="https://github.com/jeanfrancois360/qt_test/assets/23524232/1573d746-c512-4992-ae71-b470eba5b343">
<img width="1438" alt="Screenshot 2024-05-08 at 12 18 40" src="https://github.com/jeanfrancois360/qt_test/assets/23524232/af6c02f6-9cb3-46ad-9080-349d3807a98e">
<img width="1438" alt="Screenshot 2024-05-08 at 12 33 41" src="https://github.com/jeanfrancois360/qt_test/assets/23524232/c5f3a1bf-fcfa-4853-b82f-e3f5d8af18e5">
<img width="1438" alt="Screenshot 2024-05-08 at 12 19 13" src="https://github.com/jeanfrancois360/qt_test/assets/23524232/bf93e242-a614-4a6b-b0b8-bb1c8bd97188">
<img width="1438" alt="Screenshot 2024-05-08 at 12 19 29" src="https://github.com/jeanfrancois360/qt_test/assets/23524232/47c938fb-d864-4bb9-9052-a0ae26f4f235">
<img width="1438" alt="Screenshot 2024-05-08 at 12 19 40" src="https://github.com/jeanfrancois360/qt_test/assets/23524232/ec064ae0-209d-468d-a71d-0d1f26b5a7d8">
<img width="1438" alt="Screenshot 2024-05-08 at 12 19 55" src="https://github.com/jeanfrancois360/qt_test/assets/23524232/d9df154f-14a1-49ad-9894-db52554c72ee">
<img width="1438" alt="Screenshot 2024-05-08 at 12 20 08" src="https://github.com/jeanfrancois360/qt_test/assets/23524232/0730f31f-ee23-4796-a859-1c0b2dcf2ce0">
<img width="1438" alt="Screenshot 2024-05-08 at 12 20 20" src="https://github.com/jeanfrancois360/qt_test/assets/23524232/37ad8b11-e289-423a-8824-2b30c72dc348">







