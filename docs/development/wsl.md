---
sidebar_position: 2
title: WSL
---

# Windows Subsystem for Linux

You may have experienced that Windows isn't particularly user-friendly for terminal-based workflows. That's why working inside **WSL 2** (Windows Subsystem for Linux) is highly recommended — it gives you a full Linux environment while still running inside Windows.

If you're using macOS, you can skip this entirely — your system already runs a Unix-like shell environment natively via Terminal.

---

## Setup Instructions for WSL 

Open PowerShell **as Administrator**, then run:

```powershell
wsl --install
wsl --update
wsl --set-default-version 2
wsl --install -d Ubuntu
```

## Windows Settings
---
## Problems and Debugging

Setting up and working with WSL sometimes produced some issues. Here a compiled list of my experiences and to watch out for.

### Backups

### Memory allocation / Freezes