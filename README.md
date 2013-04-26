meteor-tippy
=============

A drop in tippy-esque tooltip system for meteor apps, but reactive.

## Installation:

Copy the tippy folder to your meteor app's client folder.

Add the following to the bottom of your meteor app's main &lt;body&gt; template section:

    {{> tippy}}

## Usage:

Simply add &lt;... class="tippy" data-tooltip="html code here"&gt;

## Example

    <head>
      <title>Example</title>
    </head>
    
    <body>
      <span class="tippy" data-tooltip="<b>Hello</b><br/>World">Hover for tip</span>
      {{>tippy}}
    </body>
    
## License:

Project code is released under CC0 license:

<a rel="license" href="http://creativecommons.org/publicdomain/zero/1.0/">
<img src="http://i.creativecommons.org/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0" />
</a>
