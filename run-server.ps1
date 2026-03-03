# PowerShell script to run a simple HTTP server (requires Python 3)
# Run: Right-click -> Run with PowerShell or from an elevated PowerShell prompt
python -m http.server 8000
Write-Host "Server stopped. Press Enter to close..."
Read-Host | Out-Null
