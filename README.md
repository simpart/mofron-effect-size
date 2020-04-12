# mofron-effect-size
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

size effect for mofron

## Attention
 - speed parameter is invalid if the width or height specify null

# Install
```
npm install mofron mofron-effect-size
```

# Sample
```html
<require>
    <tag load="mofron-comp-frame">Frame</tag>
    <tag load="mofron-effect-size">Size</tag>
</require>

<Frame>
    <effect>
        <Size speed=1000 delay=1000>(2rem,2rem)</Size>
    </effect>
</Frame>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | width | string (size) | width |
| ◯  | height | string (size) | height |

