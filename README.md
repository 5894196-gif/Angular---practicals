# Practical 09: Angular Installation Guide

## Prerequisites: Node.js and npm installation

### Step 1: Update System Packages
```bash
sudo apt update
sudo apt upgrade
```

### Step 2: Install Node.js (Recommended via NodeSource)
```bash
# Add NodeSource PPA
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Install Node.js and npm
sudo apt install -y nodejs
```

### Step 3: Verify Installation
```bash
node -v
npm -v
```

If npm is not installed:
```bash
sudo apt install npm
```

### Step 4: Install build-essential (Optional)
```bash
sudo apt install -y build-essential
```

### Step 5: Install Angular CLI Globally
```bash
sudo npm install -g @angular/cli
```

Check version:
```bash
ng version
```

### Step 6: Create a New Angular Project
```bash
ng new my-angular-app
```

It will ask:
- Would you like to add Angular routing? (y/n)
- Which stylesheet format? (CSS, SCSS, etc.)

Choose as per your preference.

### Step 7: Navigate to the Project Directory
```bash
cd my-angular-app
```

### Step 8: Serve the Application
```bash
ng serve
```

Then open your browser and go to: `http://localhost:4200`

---

## Advanced Steps

### To build the project:
```bash
ng build
```

### To generate components/services/modules:
```bash
ng generate component my-component
ng generate service my-service
ng generate module my-module
```

---

## Installation on Windows

### 1. Download Node.js
- Windows 32-bit Installer: https://nodejs.org/dist/v22.17.0/node-v22.17.0-x86.msi
- Windows 64-bit Installer: https://nodejs.org/dist/v22.17.0/node-v22.17.0-x64.msi

After installing Node.js, follow the next step.

### 2. Enable PowerShell
1. Press the Windows Key to open the Start menu.
2. Type "PowerShell".
3. Right-click on the PowerShell result and select "Run as administrator".
4. After opening the PowerShell window, execute `get-executionpolicy` to know the current execution policy.
5. Chances are it will say "Restricted". This means the scripts are blocked.
6. In the PowerShell window, execute the `set-executionpolicy remotesigned` command.
7. Type "A" next to the confirmation message and press "Enter".

### 3. Install Angular CLI
```bash
npm install -g @angular/cli
```
