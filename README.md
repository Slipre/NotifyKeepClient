# ***NotifyKeepClient***
### ***[PL]***
Prosty wieloplatformowy skrypt powiadamiający o miejscu na dysku dla *Node.js*.

- Działa na Windows, Linux oraz macOS
- Wysyła informację do *NotifyKeepServer* poprzez *WebSocket*

---

### ***[ENG]***
Easy multi-platform notificator script about disk space for *Node.js*.

- Works on Windows, Linux and macOS
- Sends informaton to *NotifyKeepServer* via *WebSocket*

## Działanie / Usage

---

### Połączenie / Connection:
```json
"connection": {
        "hostname": "name_of_that_client",
        "server_ip": "0.0.0.0",
        "port": "0000"
    }
```

---

### Przykład ścieżki / Path example:

#### Windows:
```json
"path": "C:/"
```

#### Linux:
```json
"path": "/"
```