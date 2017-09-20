#powershell script to deploy the bundled javascript into the server
#should also version the bundle

param([string]$source, [string]$destination)
# $fileName = "main.bundle.js"
# $source = "./dist/" + $fileName
# $destination = "C:/git/YOYO/YOYO-Industrial-Team-Project/public/js"
Write-Host "INFO: Starting Deployment to " $destination -ForegroundColor White -BackgroundColor DarkGreen

#tests source and destination paths
if (!(Test-Path $source)) {
    Write-Host "Error: Could not find source path: " + $source -ForegroundColor White -BackgroundColor DarkRed
    return 1
}
elseif (!(Test-Path $destination)) {
    Write-Host "Could not find destination path: " + $destination -ForegroundColor White -BackgroundColor DarkRed
    return 1
}
#find the new bundle file
$newBundle = Get-ChildItem -Path $source -Filter *main.bundle.js

#no longer versioning as would have to get link to bundle to update
$VersionedNewBundle = $newBundle
#copies the file
Copy-Item -Path $source/$VersionedNewBundle -Destination $destination/
#if the file copy failed (new bundle could not be found)
if (!(Test-Path $destination/$VersionedNewBundle)) {
    Write-Host "ERROR: Could not find Bundle file in directory: " $destination/$VersionedNewBundle -ForegroundColor White -BackgroundColor DarkRed
    Write-Host "INFO: Check filenames and paths are correct" -ForegroundColor White -BackgroundColor DarkRed
    Write-Host "Deployment Failed..." -ForegroundColor White -BackgroundColor DarkRed
    return 1
}
Write-Host "INFO: Bundle Successfully Deployed To: " $destination/$VersionedNewBundle -ForegroundColor White -BackgroundColor DarkGreen
return 0
