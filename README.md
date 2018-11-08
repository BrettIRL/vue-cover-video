# Vue Background Video
A simple component to render a video background in Vue.js

## Installation
```
npm install vue-background-video --save
```

## Basic Usage
```js
import BackgroundVideo from 'vue-cover-video'
```

```html
<background-video :sources="['array', 'of', 'sources']" :autoplay="true" :loop="true" playsinline="true" muted="true" fallbackImg="path/to/image">
    <!-- Content Slot -->
</background-video>
```

## Props

### sources
**type:** Array  
**requried:** true  
Array of video sources

### autoplay
**type:** Boolean  
**default:** false  
If set to true, video will automatically begin playback as soon as it can do

### loop
**type:** Boolean  
**default:** false  
If set to true, browser will automatically seek back to the start upon reaching the end of the video

### muted
**type:** Boolean  
**default:** true  
If set to true, video audio will be silenced

### playsinline
**type:** Boolean  
**default:** false  
If set to true, video will be played withitn the elements playback area

### fallbackImg
**type:** String  
**default:** null  
Fallback image to be displayed if the browser doesn't support HTML 5 video


## License
BackgroundVideo is released under the MIT License. See the budled LICENSE file for details.
