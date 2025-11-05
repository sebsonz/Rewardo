# ===============================
# 🚀 Script d’installation Rewardo
# ===============================

Write-Host "=== Configuration du projet Rewardo ===`n"

# 1️⃣ Génération du JWT_SECRET
Write-Host "Génération d’un JWT_SECRET sécurisé..."
$bytes = New-Object byte[] 48
[System.Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($bytes)
$secret = [Convert]::ToBase64String($bytes)
Write-Host "JWT_SECRET généré avec succès.`n"

# 2️⃣ Création du fichier .env pour le backend
$envPath = "backend\.env"
Write-Host "Création du fichier backend\.env ..."
@"
# ===========================
# Configuration Rewardo Backend
# ===========================
PORT=3000
JWT_SECRET=
DB_USER=postgres
DB_PASSWORD=PBjXxTEEsXKmvtqTFuFEsAxJobPmsKGs
DB_HOST=postgres.railway.internal
DB_PORT=5432
DB_NAME=railway
CPX_API_KEY=<optionnel, pour les sondages partenaires>
"@ | Out-File -Encoding UTF8 $envPath

Write-Host ".env créé avec succès.`n"

# 3️⃣ Vérification de Git
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git n'est pas installé. Installe-le avant de continuer."
    exit
}

# 4️⃣ Initialisation Git
Write-Host "Initialisation du dépôt Git..."
git init
git add .
git commit -m "Initial commit - Rewardo MVP"
Write-Host "✅ Dépôt initialisé avec succès.`n"

# 5️⃣ Ajout du dépôt distant
$repoUrl = Read-Host "👉 Entre l’URL du dépôt GitHub (ex: https://github.com/sebsonz/Rewardo.git)"
if ($repoUrl -ne "") {
    git remote add origin $repoUrl
    git branch -M main
    git push -u origin main
    Write-Host "✅ Code poussé sur GitHub avec succès."
} else {
    Write-Host "⚠️  Aucune URL saisie, le dépôt n’a pas été poussé."
}

Write-Host "`n🎉 Installation terminée avec succès !"
Write-Host "Ton fichier .env est prêt et ton projet Rewardo est configuré."
