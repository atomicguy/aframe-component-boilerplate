## aframe-fence-component

An Fence component for [A-Frame](https://aframe.io) VR.

### Properties

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Usage

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
    <a-entity fence="exampleProp: exampleVal"></a-entity>
  </a-scene>
</body>
```

#### NPM Installation

Install via NPM:

```bash
npm install aframe-fence-component
```

Then register and use.

```js
require('aframe');
require('aframe-fence-component');
```
