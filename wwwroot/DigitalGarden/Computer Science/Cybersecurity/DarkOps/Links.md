# Links

- [https://temp-mail.org/en/](https://temp-mail.org/en/)
- [https://lunaproxy.com](https://lunaproxy.com)
- [https://natro92.fun/](https://natro92.fun/)
- [https://grapheneos.org/](https://grapheneos.org/)
- [https://exploit-notes.hdks.org/](https://exploit-notes.hdks.org/)
- [https://subdomainfinder.c99.nl/](https://subdomainfinder.c99.nl/)
- [Dedicated Servers | Premium Dedicated Server Hosting](https://phoenixnap.com/dedicated-servers)
- [KVM over IP - PiKVM](https://pikvm.org/)
- [GeoIP web services demo | MaxMind](https://www.maxmind.com/en/geoip-web-services-demo)
- [DNS Propagation Checker - Global DNS Testing Tool](https://www.whatsmydns.net/)
- [Simple Email Reputation](https://emailrep.io/)
- [https://www.thc.org/segfault/](https://www.thc.org/segfault/)
- [Interactsh | Web Client](https://app.interactsh.com/#/)
- [https://pfcloud.io/](https://pfcloud.io/)
- [https://github.com/jermanuts/bad-opsec](https://github.com/jermanuts/bad-opsec)
- [https://links.libroot.org/](https://links.libroot.org/)
- [https://github.com/jery0843/torforge](https://github.com/jery0843/torforge)
- [https://github.com/gildas-lormeau/SingleFile](https://github.com/gildas-lormeau/SingleFile)

## Printing Password Protected PDFs

- One technique to print a password-protected PDF on MacOS is to open the file with `ColorSync Utility` and then print it. It won't bother asking for the password.

## BitLocker Encrypted Devices

If you have a BitLocker encrypted drive and you know the password (for example cracking it with `bitlocker2john`) of BitLocker but NOT any password for any account within it, this can be easily bypassed by attaching the drive as a second drive to any Windows device you own and decrypt it to access all the contents of the disk freely using [manage-bde](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/manage-bde):

```powershell
manage-bde -unlock D: -Password
```

## SOAR

In Cybersecurity literature, SOAR can be either `Security Orchestration, Automation, and Response` or `State-of-the-Art Resources`.

## docx to Markdown

https://gist.github.com/plembo/409a8d7b1bae66622dbcd26337bbb185

```bash
$ myfilename="example"
pandoc -t markdown_strict --extract-media='./attachments/$myfilename' $myfilename.docx -o $myfilename.md
```

## SSL Passthrough

[SSL Passthrough](https://www.ssl2buy.com/wiki/ssl-passthrough-work) is the opposite of [SSL Termination/Offloading](https://www.ssl2buy.com/wiki/ssl-offloading).

## Disable Copy-Pasting, DevTools, and SingleFile

Below is a snippet that might be helpful:

```js
document.addEventListener('copy', function (e) {
    e.preventDefault();
    e.clipboardData.setData('text/plain', 'Copying is Prohibited');
});

const DevToolsProtection = (() => {
    'use strict';

    const CONFIG = Object.freeze({
        timingThreshold: 100,
        sizeThreshold: 160,
        checkIntervalMs: 300,
        maxTimingAttempts: 6,
        blockedCombos: [
            { code: 'F12' },
            { code: 'KeyI', ctrl: true, shift: true },
            { code: 'KeyI', meta: true, shift: true },
            { code: 'KeyI', meta: true, alt: true },
            { code: 'KeyJ', ctrl: true, shift: true },
            { code: 'KeyJ', meta: true, alt: true },
            { code: 'KeyC', ctrl: true, shift: true },
            { code: 'KeyC', meta: true, shift: true },
            { code: 'KeyU', ctrl: true },
            { code: 'KeyU', meta: true },
            { code: 'KeyS', ctrl: true },
            { code: 'KeyS', meta: true },
            { code: 'KeyP', ctrl: true },
            { code: 'KeyP', meta: true },
            { code: 'F3' }
        ]
    });

    let isActive = true;
    let timingAttempts = 0;
    let detectionCount = 0;

    const detectByTiming = () => {
        if (!isActive) return;

        const start = performance.now();
        debugger;
        const elapsed = performance.now() - start;

        if (elapsed > CONFIG.timingThreshold) {
            handleDevToolsDetected('timing');
            return;
        }

        if (++timingAttempts < CONFIG.maxTimingAttempts) {
            setTimeout(detectByTiming, 150);
        }
    };

    const detectBySize = () => {
        if (!isActive) return false;

        const widthDiff = Math.abs((window.outerWidth || 0) - window.innerWidth);
        const heightDiff = Math.abs((window.outerHeight || 0) - window.innerHeight);

        return widthDiff > CONFIG.sizeThreshold || heightDiff > CONFIG.sizeThreshold;
    };

    const detectByConsole = () => {
        if (!isActive) return false;

        try {
            const element = new Image();
            let isOpen = false;

            Object.defineProperty(element, 'id', {
                get: function() {
                    isOpen = true;
                    return 'detect';
                }
            });

            requestAnimationFrame(() => console.dir(element));
            
            return isOpen;
        } catch (e) {
            return false;
        }
    };

    const checkLoop = () => {
        if (!isActive) return;

        const sizeOpen = detectBySize();
        const consoleOpen = detectByConsole();

        if (sizeOpen || consoleOpen) {
            detectionCount++;
            if (detectionCount >= 2) {
                handleDevToolsDetected('detection');
                return;
            }
        } else {
            detectionCount = Math.max(0, detectionCount - 1);
        }

        try { console.clear(); } catch (e) { }

        setTimeout(checkLoop, CONFIG.checkIntervalMs);
    };

    const handleDevToolsDetected = (method) => {
        if (!isActive) return;
        isActive = false;

        console.clear();
        document.documentElement.innerHTML = `
            <style>
                * { margin:0; padding:0; box-sizing:border-box; }
                body { height:100vh; display:grid; place-items:center; background:#0d1117; color:#fff; font-family:system-ui,-apple-system,sans-serif; overflow:hidden; }
                .container { text-align:center; padding:3rem 2rem; background:#161b22; border-radius:16px; border:1px solid #30363d; box-shadow:0 8px 32px rgba(0,0,0,0.5); max-width:500px; }
                h1 { margin:0 0 1rem; font-size:2.5rem; font-weight:700; color:#f85149; }
                p { margin:0.5rem 0; opacity:0.85; font-size:1.1rem; line-height:1.6; }
                .countdown { margin-top:1.5rem; font-size:0.9rem; opacity:0.6; }
            </style>
            <body>
                <div class="container">
                    <h1>⚠️ Developer Tools Detected</h1>
                    <p>This page cannot be viewed with DevTools open.</p>
                    <p class="countdown">Reloading in 3 seconds...</p>
                </div>
            </body>`;

        document.addEventListener('keydown', e => e.stopPropagation(), true);
        document.addEventListener('contextmenu', e => e.stopPropagation(), true);

        setTimeout(() => {
            window.location.reload(true);
        }, 3000);
    };

    const block = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
    };

    const isBlockedCombo = (e) => {
        if (!e.code) return false;

        return CONFIG.blockedCombos.some(combo => {
            // Must match key code
            if (e.code !== combo.code) return false;

            // Check Ctrl/Cmd requirement
            if (combo.ctrl !== undefined || combo.meta !== undefined) {
                const needsCtrlOrMeta = combo.ctrl || combo.meta;
                const hasCtrlOrMeta = e.ctrlKey || e.metaKey;
                if (needsCtrlOrMeta && !hasCtrlOrMeta) return false;
            }

            // Check Shift requirement
            if (combo.shift !== undefined && e.shiftKey !== combo.shift) {
                return false;
            }

            // Check Alt requirement
            if (combo.alt !== undefined && e.altKey !== combo.alt) {
                return false;
            }

            return true;
        });
    };

    const handleKeyDown = (e) => {
        if (isBlockedCombo(e)) {
            block(e);
        }
    };

    const reinforceListeners = () => {
        if (!isActive) return;

        const opts = { capture: true, passive: false };

        ['contextmenu', 'selectstart', 'dragstart'].forEach(event => {
            document.removeEventListener(event, block, opts);
            document.addEventListener(event, block, opts);
        });

        document.removeEventListener('keydown', handleKeyDown, opts);
        document.addEventListener('keydown', handleKeyDown, opts);

        document.documentElement.style.userSelect = 'none';
        document.documentElement.style.webkitUserSelect = 'none';
        document.documentElement.style.mozUserSelect = 'none';
        document.documentElement.style.msUserSelect = 'none';

        setTimeout(reinforceListeners, 4000);
    };

    const init = () => {
        if (!isActive) return;
        
        reinforceListeners();
        checkLoop();
        detectByTiming();
    };

    const stop = () => { isActive = false; };

    return { init, stop };
})();

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', DevToolsProtection.init);
} else {
    DevToolsProtection.init();
}

// SingleFile Protection
(() => {
    'use strict';

    const MARKERS = [
        'singlefile-stylesheet',
        'singlefile-infobar-stylesheet',
        'single-file-stylesheet',
        'data-singlefile',
        'saved with SingleFile',
        'data-single-file'
    ];

    const checkDOM = () => {
        // Check for elements
        for (const marker of MARKERS) {
            if (document.getElementById(marker)) return true;
            if (document.querySelector(`[id*="${marker}"]`)) return true;
        }

        // Check meta tags
        if (document.querySelector('meta[name="singlefile"]')) return true;
        if (document.querySelector('meta[content*="SingleFile"]')) return true;

        // Check HTML content
        const html = document.documentElement.innerHTML;
        if (MARKERS.some(m => html.includes(m))) return true;

        return false;
    };

    const checkStyleSheets = () => {
        try {
            for (const sheet of document.styleSheets) {
                try {
                    const rules = sheet.cssRules || sheet.rules;
                    for (const rule of rules) {
                        if (rule.cssText && rule.cssText.toLowerCase().includes('singlefile')) {
                            return true;
                        }
                    }
                } catch (e) {
                    // Cross-origin stylesheet, skip
                }
            }
        } catch (e) {
            return false;
        }
        return false;
    };

    const nukePage = () => {
        document.documentElement.innerHTML = `
            <style>
                * { margin:0; padding:0; }
                body,html { height:100%; background:#000; color:#f00; display:grid; place-items:center; font:bold clamp(2rem,8vw,6rem)/1.2 system-ui; overflow:hidden; }
                .warn { text-align:center; transform:scale(1); animation:pulse 1.2s ease-in-out infinite; text-shadow:0 0 20px #f00; }
                @keyframes pulse { 0%,100% { transform:scale(1); opacity:1; } 50% { transform:scale(1.15); opacity:0.8; } }
            </style>
            <body>
                <div class="warn">⛔<br>ACCESS<br>DENIED</div>
            </body>
        `;

        setTimeout(() => {
            try {
                window.location.href = 'about:blank';
                window.location.replace('about:blank');
                if (window.top !== window.self) {
                    window.top.location.href = 'about:blank';
                }
            } catch (e) {
                document.write('');
            }
        }, 100);
    };

    let detected = false;
    let checkAttempts = 0;
    const maxChecks = 120;

    const performCheck = () => {
        if (detected) return;

        if (checkDOM() || checkStyleSheets()) {
            detected = true;
            nukePage();
            return;
        }

        if (++checkAttempts < maxChecks) { setTimeout(performCheck, 200);}
    };

    const observer = new MutationObserver(mutations => {
        if (detected) return;

        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    const id = node.id || '';
                    const className = node.className || '';
                    
                    if (MARKERS.some(m => id.includes(m) || className.includes(m))) {
                        detected = true;
                        observer.disconnect();
                        nukePage();
                        return;
                    }
                }
            }
        }
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['id', 'class', 'data-singlefile']
    });

    window.addEventListener('beforeunload', () => {
        if (checkDOM()) { nukePage(); throw new Error('SingleFile blocked'); }
    }, { capture: true });

    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && checkDOM()) { nukePage(); }
    });
})();
```