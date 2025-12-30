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
        timingThreshold: 120,
        sizeThreshold: 160,
        checkIntervalMs: 250,
        maxTimingAttempts: 8,
        blockedCombos: [
            { code: 'F12', name: 'F12' },
            { code: 'KeyI', ctrl: true, shift: true, alt: false, name: 'Ctrl+Shift+I / Cmd+Shift+I' },
            { code: 'KeyI', ctrl: false, meta: true, shift: true, alt: false, name: 'Cmd+Shift+I (Mac)' },
            { code: 'KeyI', ctrl: false, meta: true, alt: true, name: 'Cmd+Option+I (Mac DevTools)' },
            { code: 'KeyJ', ctrl: true, shift: true, name: 'Ctrl+Shift+J' },
            { code: 'KeyJ', ctrl: false, meta: true, alt: true, name: 'Cmd+Option+J (Mac Console)' },
            { code: 'KeyC', ctrl: true, shift: true, name: 'Ctrl+Shift+C (Inspect)' },
            { code: 'KeyU', ctrl: true, name: 'Ctrl+U (View Source)' },
            { code: 'KeyS', ctrl: true, name: 'Ctrl+S (Save)' },
            { code: 'KeyP', ctrl: true, name: 'Ctrl+P (Print)' },
            { code: 'F5', name: 'F5 (hard refresh bypass attempt)' },
            { code: 'F3', name: 'F3 (search)' }
        ]
    });

    let isActive = true;
    let timingAttempts = 0;

    const detectByTiming = () => {
        if (!isActive) return;

        const start = performance.now();
        debugger;
        const elapsed = performance.now() - start;

        if (elapsed > CONFIG.timingThreshold) { handleDevToolsDetected('timing'); return; }

        if (++timingAttempts < CONFIG.maxTimingAttempts) { setTimeout(detectByTiming, 100); }
    };

    const detectBySize = () => {
        if (!isActive) return;

        const widthDiff = Math.abs((window.outerWidth || 0) - window.innerWidth);
        const heightDiff = Math.abs((window.outerHeight || 0) - window.innerHeight);

        if (widthDiff > CONFIG.sizeThreshold || heightDiff > CONFIG.sizeThreshold) {
            handleDevToolsDetected('size');
        }
    };

    const detectByConsole = () => {
        if (!isActive) return;

        try {
            const isNative = /native code/.test(Function.prototype.toString.call(console.log));
            const isPatched = console.log.toString().includes('[Command Line API]');

            if (!isNative || isPatched) {
                handleDevToolsDetected('console');
            }
        } catch (e) { }
    };

    const checkLoop = () => {
        if (!isActive) return;

        detectBySize();
        detectByConsole();

        try { console.clear(); } catch (e) { }

        setTimeout(checkLoop, CONFIG.checkIntervalMs);
    };

    // Action when DevTools detected
    const handleDevToolsDetected = (method) => {
        if (!isActive) return;
        isActive = false;

        console.clear();
        document.documentElement.innerHTML = `
            <style>
                body { margin:0; height:100vh; display:grid; place-items:center; background:#0d1117; color:#fff; font-family:system-ui }
                div { text-align:center; padding:2rem; background:#161b22; border-radius:12px; border:1px solid #30363d; }
                h1 { margin:0 0 1rem; font-size:3rem; }
                p { margin:0; opacity:0.8; }
            </style>
            <body>
                <div>
                    <h1>Developer Tools Detected</h1>
                    <p>This page cannot be viewed with DevTools open.</p>
                    <p>Reloading in 3s...</p>
                </div>
            </body>`;

        document.addEventListener('keydown', e => e.stopPropagation(), true);
        document.addEventListener('contextmenu', e => e.stopPropagation(), true);

        setTimeout(() => {
            window.location.reload(true);
        }, 3000);
    };

    // Universal event blocker
    const block = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
    };

    // Modern key combo checker
    const isBlockedCombo = (e) => {
        if (!e.code) return false;

        return CONFIG.blockedCombos.some(combo => {
            const codeMatch = e.code === combo.code;
            const ctrlMatch = !combo.ctrl || e.ctrlKey || e.metaKey;
            const shiftMatch = combo.shift === undefined || e.shiftKey === combo.shift;
            const altMatch = combo.alt === undefined || e.altKey === combo.alt;
            const metaMatch = combo.meta === undefined || e.metaKey === !!combo.meta;

            return codeMatch && ctrlMatch && shiftMatch && altMatch && metaMatch;
        });
    };

    const handleKeyDown = (e) => {
        if (isBlockedCombo(e)) { block(e); }
    };

    const reinforceListeners = () => {
        if (!isActive) return;

        const opts = { capture: true, passive: false };

        document.removeEventListener('contextmenu', block, opts);
        document.removeEventListener('keydown', handleKeyDown, opts);
        document.removeEventListener('selectstart', block, opts);
        document.removeEventListener('dragstart', block, opts);

        document.addEventListener('contextmenu', block, opts);
        document.addEventListener('keydown', handleKeyDown, opts);
        document.addEventListener('selectstart', block, opts);
        document.addEventListener('dragstart', block, opts);

        document.documentElement.style.userSelect = 'none';
        document.documentElement.style.webkitUserSelect = 'none';

        setTimeout(reinforceListeners, 4000);
    };

    // Public API
    const init = () => {
        if (!isActive) return;
        isActive = true;

        reinforceListeners(); checkLoop(); detectByTiming();
    };

    const stop = () => { isActive = false; };

    return { init, stop };
})();

if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', DevToolsProtection.init); }
else { DevToolsProtection.init(); }

(() => {
    'use strict';

    const SINGLEFILE_DETECTION = () => {
        if (document.getElementById('singlefile-stylesheet')) { return true; }
        if (document.querySelector('meta[name="singlefile"]')) { return true; }
        if (document.getElementById('singlefile-infobar-stylesheet')) { return true; }
        if (document.documentElement && document.documentElement.innerHTML.includes('saved with SingleFile')) { return true; }

        const sfRules = Array.from(document.styleSheets).some(ss => {
            try {
                return Array.from(ss.cssRules || []).some(rule => rule.cssText && rule.cssText.includes('singlefile'));
            } catch (e) { return false; }
        });
        if (sfRules) return true;

        let detected = false;
        const observer = new MutationObserver(mutations => {
            for (const m of mutations) {
                for (const node of m.addedNodes) {
                    if (node.nodeType === 1) {
                        if (node.id?.includes('singlefile') || node.tagName === 'LINK' && node.getAttribute('rel') === 'stylesheet' && node.href?.includes('singlefile')) {
                            detected = true; observer.disconnect(); nukePage();
                        }
                    }
                }
            }
        });

        observer.observe(document.documentElement, { childList: true, subtree: true });

        const sweep = () => {
            if (!detected && (
                document.getElementById('singlefile-stylesheet') || document.querySelector('style[data-singlefile]')
            )) { detected = true; nukePage(); }
            if (!detected) setTimeout(sweep, 300);
        };
        sweep();
        return false;
    };

    const nukePage = () => {
        document.documentElement.innerHTML = `
            <style>
                body,html{margin:0;height:100%;background:#000;color:#f00;display:grid;place-items:center;font:bold 9vw/1.2 system-ui}
                div{transform:scale(1.1);animation:pulse 1.5s infinite}
                @keyframes pulse{0%,100%{transform:scale(1.1)}50%{transform:scale(1.25)}}
            </style>
            <body><div>ACCESS DENIED<br>Saving this page is prohibited.</div></body>
        `;

        window.location = 'about:blank';
        document.write('');
        window.top.location = 'about:blank';
        setTimeout(() => { window.location.replace('about:blank'); }, 50);
    };

    let attempts = 0;
    const check = () => {
        if (SINGLEFILE_DETECTION()) { nukePage(); return; }
        if (++attempts < 90) setTimeout(check, 166);
    };
    check();

    window.addEventListener('beforeunload', () => {
        if (document.getElementById('singlefile-stylesheet')) { throw new Error('SingleFile blocked') }
    })
})();
```