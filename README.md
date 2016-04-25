## aframe-fence-component

A Camera Fence component for [A-Frame](https://aframe.io) VR.

### Properties

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|   width  | fence width |        10     |
|   depth  | fence depth |        10     |
|   x0     | starting corner, x | 0      |
|   z0     | starting corner, z | 0      |

### Usage

The fence-component sets bounds for the camera, which fences the camera in a restricted area.

Setting the `width` and `depth` values establishes the size of the fenced area.
Setting `x0` and `z0` establishes the starting (x,z) corner of the fenced area.

#### Browser Installation

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
  <script src="https://rawgit.com/atomicguy/aframe-fence-component/master/dist/aframe-fence-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity fence="width: 10; depth: 10; x0: -1; z0: 2"></a-entity>
  </a-scene>
</body>

```
Install via NPM:

```bash
npm install aframe-fence-component
```

Then register and use.

```js
require('aframe');
require('aframe-fence-component');
```
