# 🚀 Script PowerShell pour redémarrer proprement le backend Rewardo
# Auteur : ChatGPT x Sebastien
# Date : 2025-11-05

Write-Host "---------------------------------------------"
Write-Host " 🔄 Redémarrage du backend Rewardo (port 3000)"
Write-Host "---------------------------------------------`n"

# Étape 1 : Vérifie si un processus utilise le port 3000
$process = netstat -ano | findstr ":3000" | ForEach-Object {
    ($_ -split "\s+")[-1]
} | Select-Object -First 1

if ($process) {
    Write-Host "🛑 Port 3000 utilisé par le processus PID $process. Arrêt en cours..."
    Stop-Process -Id $process -Force
    Start-Sleep -Seconds 2
    Write-Host "✅ Port 3000 libéré."
} else {
    Write-Host "✅ Aucun processus sur le port 3000."
}

# Étape 2 : Relance du backend Rewardo
Write-Host "`n🚀 Lancement du backend Rewardo..."
cd "$PSScriptRoot\backend"
npm run dev

Write-Host "`n🎉 Rewardo backend redémarré avec succès !"
