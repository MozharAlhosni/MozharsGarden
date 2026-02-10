---
title: Misc
---

# Misc

To get the long and short names of paths in windows:

```powershell
dir /x "C:\"

02/20/2025  12:34 PM    <DIR>          PROGRA~1     Program Files
02/20/2025  12:34 PM    <DIR>          PROGRA~2     Program Files (x86)
```

## Python

To replace a specific string with another using python, use [named match groups](https://www.regular-expressions.info/named.html):

```python
pattern = r"!\[\[(?P<imageName>\S*)\]\]";
patternToReplaceWith = r'![\g<imageName>][assets\\HTB Walkthroughs\\Blazorized\\\g<imageName>]'
life = re.sub(pattern, patternToReplaceWith, xx)
```

## wget

To download a website:

```bash
wget --mirror --convert-links --adjust-extensions --page-requisites --no-parent https://website
```