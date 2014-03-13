# Roundabout

**Note: Roundabout is no longer under active development. I've moved the documentation over here to support the exists plugin, but there are known issues and such that won't be fixed. Use at your own risk.**

Roundabout is a jQuery plugin that easily converts unordered lists & other nested HTML structures into entertaining, interactive, turntable-like areas.

It’s ready-to-go straight out of the box, but if you want to get crazy, Roundabout is highly-customizable with an extensive API that allows for some pretty amazing results.

Roundabout requires jQuery (at least version 1.2).


## Add-Ons

Roundabout is equipped to play nicely with a couple of other plugins if they’re made available.

- [Roundabout Shapes](http://fredhq.com/projects/roundabout-shapes) by Fred LeBlanc
  Roundabout can move in more ways than just a turntable. With Shapes, you have many other ways you can move your content around the page.
  
- [jQuery Easing](http://gsgd.co.uk/sandbox/jquery/easing/) by George McGinley Smith
  jQuery comes with two easing styles built in, but this plugin adds many, many more. Include this script and use any of its defined easing functions in your Roundabout animations.
  
- [Event.drag](http://threedubmedia.com/code/event/drag) & [Event.drop](http://threedubmedia.com/code/event/drop) by ThreeDubMedia
  In addition to rotating on click, Roundabout can also move by clicking and dragging on the Roundabout element itself. Include these scripts and turn on enableDrag.
  
  
### But That’s Not All!
The list above is only a list of the plugins that have support baked in, but Roundabout will play nicely with many other plugins. (It’s up to you to integrate those yourself.)


## Using Roundabout

Include the `jquery.roundabout.js` JavaScript file on your page after you include jQuery itself. Also, either link to the included CSS file, or copy the CSS styles from that file and paste them into your site's CSS file.

To activate Roundabout in its simplest form, you can do this:

```javascript
$('ul').roundabout();
```

Of course, this will change *all* of your `ul` elements into Roundabouts, which probably isn't what you want, but you can easily change the selector to only target the elements you wish to convert


### Setting Options

You can set options on Roundabout to change how it behaves. Do this by passing in an object of options into the main Roundabout call upon initialization, like so:

```javascript
$('ul').roundabout({
    btnNext: ".next"
});
```


### Incorporating Roundabout Shapes

If you're using the sister plugin Roundabout Shapes, be sure to include the `jquery.roundabout-shapes.js` file after you include the main Roundabout JavaScript file. Next, you'll select the shape as on of the options that you pass into Roundabout upon initialization:

```javascript
$('ul').roundabout({
    btnNext: ".next",
    shape: "figure8"
});
```

### Calling Roundabout Methods

Roundabout comes with a number of methods you can call to better control how it works. Calling those methods are done by re-calling `roundabout` on the element that Roundabout is already working on and passing in the name of the method to use as the first parameter. If the method requires other parameters, pass those in as subsequent parameters.

For example, instead of using the `btnNext` option, you can manually implement this yourself like this:

```javascript
$('.btnNext', function(e) {
    e.stopPropagation();
    e.preventDefault();
    
    // this is the action
    $('ul#myRoundabout').roundabout('animateToNextChild');
    
    return false;
});
```

### Enabling Drag & Drop

Lately it seems that this doesn't work as well as it once did. Not sure why, but you can still enable it. To do this, you'll need to grab v2 of the `jquery.event.drag` and `jquery.event.drop` plugins by ThreeDubMedia. Include them on your page after Roundabout is included.

Next, enable your Roundabout to use drag and drop like so:

```javascript
$('ul').roundabout({
    enableDrag: true
});
```

### Using Autoplay

Autoplay lets you have Roundabout automatically animate on an interval. This functionality is included with the Roundabout core, so no additional scripts are needed to get this working.

To enable autoplay, there are three options you can set:

```javascript
$('ul').roundabout({
    autoplay: true,
    autoplayDuration: 5000,
    autoplayPauseOnHover: true
});
```

The first option, `autoplay` will turn on autoplay. The second, `autoplayDuration` is the length of time in milliseconds between animation triggers. The final option, `autoplayPauseOnHover` will force autoplay never to figure while the user has their cursor over the Roundabout itself.


## Support

Version 2 (the current version) works reasonably well, although if you look in the issues you'll see a number of things that don't work for some people. As mentioned above, this plugin is no longer under active development. Feel free to continue submitting issues for others to see, but no further official action can be guaranteed at all.

## API

### Settable Options

Roundabout comes with many settable configuration options that let you customize how it operates.

<table>
	<thead>
		<tr>
			<th scope="col">Option</th>
			<th scope="col">Description</th>
			<th scope="col">Data Type</th>
			<th scope="col" class="default-value">Default</th>
		</tr>
	</thead>
	<tbody>
		<tr id="bearing">
			<td class="option"><code>bearing</code></td>
			<td>
				The starting direction in which Roundabout should
				face relative to the <code>focusBearing</code>.
			</td>
			<td class="data-type">float</td>
			<td class="default-value"><code>0.0</code></td>
		</tr>

		<tr id="tilt">
			<td class="option"><code>tilt</code></td>
			<td>
				Slightly alters the calculations of moving elements.
				In the default <code>shape</code>,
				it adjusts the apparent <code>tilt</code>. Other shapes
				will differ.
			</td>
			<td class="data-type">float</td>
			<td class="default-value"><code>0.0</code></td>
		</tr>

		<tr id="minZ">
			<td class="option"><code>minZ</code></td>
			<td>
				The lowest z-index that will be assigned to a moving
				element. This occurs when the moving element is
				opposite of (that is, 180° away from) the 
				<code>focusBearing</code>.
			</td>
			<td class="data-type">integer</td>
			<td class="default-value"><code>100</code></td>
		</tr>

		<tr id="maxZ">
			<td class="option"><code>maxZ</code></td>
			<td>
				The greatest z-index that will be assigned to a
				moving element. This occurs when the moving element
				is at the same bearing as the 
				<code>focusBearing</code>.
			</td>
			<td class="data-type">integer</td>
			<td class="default-value"><code>280</code></td>
		</tr>

		<tr id="minOpacity">
			<td class="option"><code>minOpacity</code></td>
			<td>
				The lowest opacity that will be assigned to a moving
				element. This occurs when the moving element is
				opposite of (that is, 180° away
				from) the <code>focusBearing</code>.
			</td>
			<td class="data-type">float</td>
			<td class="default-value"><code>0.4</code></td>
		</tr>

		<tr id="maxOpacity">
			<td class="option"><code>maxOpacity</code></td>
			<td>
				The greatest opacity that will be assigned to a
				moving element. This occurs when the moving element
				is at the same bearing as the
				<code>focusBearing</code>.
			</td>
			<td class="data-type">float</td>
			<td class="default-value"><code>1.0</code></td>
		</tr>

		<tr id="minScale">
			<td class="option"><code>minScale</code></td>
			<td>
				The lowest size (relative to its starting size) that
				will be assigned to a moving element. This occurs
				when the moving element is opposite of (that is, 180°
				away from) the
				<code>focusBearing</code>.
			</td>
			<td class="data-type">float</td>
			<td class="default-value"><code>0.4</code></td>
		</tr>
	
		<tr id="maxScale">
			<td class="option"><code>maxScale</code></td>
			<td>
				The greatest size (relative to its starting size)
				that will be assigned to a moving element. This
				occurs when the moving element is at the same bearing
				as the
				<code>focusBearing</code>.
			</td>
			<td class="data-type">float</td>
			<td class="default-value"><code>1.0</code></td>
		</tr>
	
		<tr id="duration">
			<td class="option"><code>duration</code></td>
			<td>
				The length of time Roundabout will take to move from
				one child element being in focus to another (when an
				animation is triggered). This value acts as the
				default for Roundabout, but each animation action can
				be given a custom duration for that animation.
			</td>
			<td class="data-type">integer</td>
			<td class="default-value"><code>600</code></td>
		</tr>
	
		<tr id="btnNext">
			<td class="option"><code>btnNext</code></td>
			<td>
				A jQuery selector of page elements that, when
				clicked, will trigger the Roundabout to animate to
				the next moving element.
			</td>
			<td class="data-type">string</td>
			<td class="default-value"><code>null</code></td>
		</tr>
	
		<tr id="btnNextCallback">
			<td class="option"><code>btnNextCallback</code></td>
			<td>
				A function that will be called once the animation
				triggered by a
				<code>btnNext</code>-related 
				click has finished.
			</td>
			<td class="data-type">function</td>
			<td class="default-value"><code>function() {}</code></td>
		</tr>
	
		<tr id="btnPrev">
			<td class="option"><code>btnPrev</code></td>
			<td>
				A jQuery selector of page elements that, when
				clicked, will trigger the Roundabout to animate to
				the previous moving element.
			</td>
			<td class="data-type">string</td>
			<td class="default-value"><code>null</code></td>
		</tr>
	
		<tr id="btnPrevCallback">
			<td class="option"><code>btnPrevCallback</code></td>
			<td>
				A function that will be called once the animation
				triggered by a
				<code>btnPrev</code>-releated 
				click has finished.
			</td>
			<td class="data-type">function</td>
			<td class="default-value"><code>function() {}</code></td>
		</tr>
	
		<tr id="btnToggleAutoplay">
			<td class="option"><code>btnToggleAutoplay</code></td>
			<td>
				A jQuery selector of page elements that, when
				clicked, will toggle the Roundabout’s <a
				href="#autoplay"><code>autoplay</code></a> state
				(either starting or stopping).
			</td>
			<td class="data-type">string</td>
			<td class="default-value"><code>null</code></td>
		</tr>
	
		<tr id="btnStartAutoplay">
			<td class="option"><code>btnStartAutoplay</code></td>
			<td>
				A jQuery selector of page elements that, when
				clicked, will start the Roundabout’s 
				<code>autoplay</code> feature
				(if it’s currently stopped).
			</td>
			<td class="data-type">string</td>
			<td class="default-value"><code>null</code></td>
		</tr>
	
		<tr id="btnStopAutoplay">
			<td class="option"><code>btnStopAutoplay</code></td>
			<td>
				A jQuery selector of page elements that, when
				clicked, will stop the Roundabout’s
				<code>autoplay</code>
				feature (if it’s current playing).
			</td>
			<td class="data-type">string</td>
			<td class="default-value"><code>null</code></td>
		</tr>
	
		<tr id="easing">
			<td class="option"><code>easing</code></td>
			<td>
				The easing function to use when animating Roundabout.
				With no other plugins, the standard jQuery easing
				functions are available. When using the 
				jQuery easing plugin, 
				all of its easing functions will also be available.
			</td>
			<td class="data-type">string</td>
			<td class="default-value"><code>"swing"</code></td>
		</tr>
	
		<tr id="clickToFocus">
			<td class="option"><code>clickToFocus</code></td>
			<td>
				When <code>true</code>, Roundabout will bring
				non-focused moving elements into focus when they’re
				clicked. Otherwise, click events won’t be captured
				and will be passed through to the moving child
				elements.
			</td>
			<td class="data-type">boolean</td>
			<td class="default-value"><code>true</code></td>
		</tr>
	
		<tr id="clickToFocusCallback">
			<td class="option"><code>clickToFocusCallback</code></td>
			<td>
				A function that will be called once the 
				<code>clickToFocus</code> 
				animation has completed.
			</td>
			<td class="data-type">function</td>
			<td class="default-value"><code>function() {}</code></td>
		</tr>
	
		<tr id="focusBearing">
			<td class="option"><code>focusBearing</code></td>
			<td>
				The bearing that Roundabout will use as the focus
				point. All animations that move Roundabout between
				children will animate the given child element to this
				bearing.
			</td>
			<td class="data-type">float</td>
			<td class="default-value"><code>0.0</code></td>
		</tr>
	
		<tr id="shape">
			<td class="option"><code>shape</code></td>
			<td>
				The path that moving elements follow. By default,
				Roundabout comes with one shape, which is
				<code>lazySusan</code>. When using Roundabout with the
				Roundabout Shapes
				plugin, there are many other shapes available.
			</td>
			<td class="data-type">string</td>
			<td class="default-value"><code>"lazySusan"</code></td>
		</tr>
	
		<tr id="debug">
			<td class="option"><code>debug</code></td>
			<td>
				When <code>true</code>, Roundabout will replace the
				contents of moving elements with information about
				the moving elements themselves.
			</td>
			<td class="data-type">boolean</td>
			<td class="default-value"><code>false</code></td>
		</tr>
	
		<tr id="childSelector">
			<td class="option"><code>childSelector</code></td>
			<td>
				A jQuery selector of child elements within the elements Roundabout
				is called upon that will become the moving elements within
				Roundabout. By default, Roundabout works on unordered lists, but it
				can be changed to work with any nested set of child elements.
			</td>
			<td class="data-type">string</td>
			<td class="default-value"><code>"li"</code></td>
		</tr>
	
		<tr id="startingChild">
			<td class="option"><code>startingChild</code></td>
			<td>
				The child element that will start at the Roundabout’s 
				<code>focusBearing</code>
				on load. This is a zero-based counter based on the
				order of markup.
			</td>
			<td class="data-type">integer</td>
			<td class="default-value"><code>0</code></td>
		</tr>
	
		<tr id="reflect">
			<td class="option"><code>reflect</code></td>
			<td>
				When <code>true</code>, reverses the direction in which
				Roundabout will operate. By default, <em>next</em>
				animations will rotate moving elements in a clockwise
				direction and <em>previous</em> animations will be
				counterclockwise. Using reflect will flip the two.
			</td>
			<td class="data-type">boolean</td>
			<td class="default-value"><code>false</code></td>
		</tr>
	
		<tr id="floatComparisonThreshold">
			<td class="option"><code>floatComparisonThreshold</code></td>
			<td>
				The maximum distance two values can be from one
				another to still be considered equal by Roundabout’s
				standards. This prevents JavaScript rounding errors.
			</td>
			<td class="data-type">float</td>
			<td class="default-value"><code>0.001</code></td>
		</tr>
	
		<tr id="autoplay">
			<td class="option"><code>autoplay</code></td>
			<td>
				When true, Roundabout will automatically advance the
				moving elements to the next child at a regular
				interval (settable as
				<code>autoplayDuration</code>).
			</td>
			<td class="data-type">boolean</td>
			<td class="default-value"><code>false</code></td>
		</tr>
	
		<tr id="autoplayInitialDelay">
			<td class="option"><code>autoplayInitialDelay</code><small>added in v2.4</small></td>
			<td>
				The length of time (in milliseconds) to delay the start of 
				Roundabout’s configured <code>autoplay</code>
				option. This only works with setting <code>autoplay</code> to
				<code>true</code>, and only on the first start of <code>autoplay</code>.
			</td>
			<td class="data-type">integer</td>
			<td class="default-value"><code>0</code></td>
		</tr>
	
		<tr id="autoplayDuration">
			<td class="option"><code>autoplayDuration</code></td>
			<td>
				The length of time (in milliseconds) between
				animation triggers when a
				Roundabout’s <code>autoplay</code>
				is playing.
			</td>
			<td class="data-type">integer</td>
			<td class="default-value"><code>1000</code></td>
		</tr>
	
		<tr id="autoplayPauseOnHover">
			<td class="option"><code>autoplayPauseOnHover</code></td>
			<td>
				When <code>true</code>, Roundabout will pause 
				<code>autoplay</code> when the
				user moves the cursor over the Roundabout container.
			</td>
			<td class="data-type">boolean</td>
			<td class="default-value"><code>false</code></td>
		</tr>
	
		<tr id="enableDrag">
			<td class="option"><code>enableDrag</code></td>
			<td>
				Requires event.drag 
				and 
				event.drop
				plugins by 
				ThreeDubMedia. 
				Allows a user to rotate Roundabout be clicking and
				dragging the Roundabout area itself.
			</td>
			<td class="data-type">boolean</td>
			<td class="default-value"><code>false</code></td>
		</tr>
	
		<tr id="dropDuration">
			<td class="option"><code>dropDuration</code></td>
			<td>
				The length of time (in milliseconds) the animation
				will take to animate Roundabout to the appropriate
				child when the Roundabout is “dropped.”
			</td>
			<td class="data-type">integer</td>
			<td class="default-value"><code>600</code></td>
		</tr>
	
		<tr id="dropEasing">
			<td class="option"><code>dropEasing</code></td>
			<td>
				The easing function to use when animating Roundabout
				after it has been “dropped.” With no other plugins, 
				the standard jQuery easing functions are available. 
				When using the 
				jQuery easing plugin
				all of its easing functions will also be available.
			</td>
			<td class="data-type">string</td>
			<td class="default-value"><code>"swing"</code></td>
		</tr>
	
		<tr id="dropAnimateTo">
			<td class="option"><code>dropAnimateTo</code></td>
			<td>
				The animation method to use when a dragged Roundabout
				is “dropped.” Valid values are <em>next</em>,
				<em>previous</em>, or <em>nearest</em>.
			</td>
			<td class="data-type">string</td>
			<td class="default-value"><code>"nearest"</code></td>
		</tr>
	
		<tr id="dropCallback">
			<td class="option"><code>dropCallback</code></td>
			<td>
				A function that will be called once the dropped
				animation has completed.
			</td>
			<td class="data-type">function</td>
			<td class="default-value"><code>function() {}</code></td>
		</tr>
	
		<tr id="dragAxis">
			<td class="option"><code>dragAxis</code></td>
			<td>
				The axis along which drag events are measured. Valid
				values are <em>x</em> and <em>y</em>.
			</td>
			<td class="data-type">string</td>
			<td class="default-value"><code>"x"</code></td>
		</tr>
	
		<tr id="dragFactor">
			<td class="option"><code>dragFactor</code></td>
			<td>
				Alters the rate at which dragging moves the
				Roundabout’s moving elements. Higher numbers will
				cause the moving elements to move less.
			</td>
			<td class="data-type">integer</td>
			<td class="default-value"><code>4</code></td>
		</tr>
	
		<tr id="triggerFocusEvents">
			<td class="option"><code>triggerFocusEvents</code></td>
			<td>
				When <code>true</code>, a <code>focus</code> event will
				be triggered on the child element that moves into
				focus when it does so.
			</td>
			<td class="data-type">boolean</td>
			<td class="default-value"><code>true</code></td>
		</tr>
	
		<tr id="triggerBlurEvents">
			<td class="option"><code>triggerBlurEvents</code></td>
			<td>
				When <code>true</code>, a <code>blur</code> event will be
				triggered on the child element that moves out of the
				focused position when it does so.
			</td>
			<td class="data-type">boolean</td>
			<td class="default-value"><code>true</code></td>
		</tr>
	
		<tr id="responsive">
			<td class="option"><code>responsive</code><small>added in v2.1</small></td>
			<td>
				When <code>true</code>, attaches a resize event onto the 
				window and will automatically relayout Roundabout’s
				child elements as the holder element changes size.
			</td>
			<td class="data-type">boolean</td>
			<td class="default-value"><code>false</code></td>
		</tr>
	</tbody>
</table>

### Callable Methods

Roundabout does a lot on its own, but all of the methods it uses internally to perform actions are publicly usable as well. Manually calling these methods give even more control over how Roundabout functions.

---

#### `roundabout`

Starts the Roundabout.

##### Usage

```javascript
.roundabout()
.roundabout(options)
.roundabout(callback)
.roundabout(options, callback)
```

##### Parameters
<table class="parameters">
	<tbody>
		<tr>
			<td class="type">object</td>
			<td class="parameter">
				<code>options</code> is an object of
				options to configure how
				Roundabout acts
			</td>
		</tr>
		<tr>
			<td class="type">function</td>
			<td class="parameter">
				<code>callback</code> is a function 
				that is called once the Roundabout is ready
			</td>
		</tr>
	</tbody>
</table>

Returns a *jQuery object*.

---

#### `setBearing`

Changes the `bearing` of the Roundabout.

##### Usage

```javascript
.roundabout("setBearing", bearing)
.roundabout("setBearing", bearing, callback)
```

##### Parameters

<table class="parameters">
	<tbody>
		<tr>
			<td class="type">float</td>
			<td class="parameter">
				<code>bearing</code> is a value
				between <code>0.0</code> and <code>359.9</code>
			</td>
		</tr>
		<tr>
			<td class="type">function</td>
			<td class="parameter">
				<code>callback</code> is a function 
				that is called once the change&nbsp;completes
			</td>
		</tr>
	</tbody>
</table>

Returns a *jQuery object*.

---

#### `adjustBearing`

Alters the `bearing` of the Roundabout by a given amount, either positive or negative degrees.

##### Usage

```javascript
.roundabout("adjustBearing", delta)
.roundabout("adjustBearing", delta, callback)
```

##### Parameters

<table class="parameters">
	<tbody>
		<tr>
			<td class="type">float</td>
			<td class="parameter">
				<code>delta</code> is the amount by
				which the <code>bearing</code> will change
				(either positive or&nbsp;negative)
			</td>
		</tr>
		<tr>
			<td class="type">function</td>
			<td class="parameter">
				<code>callback</code> is a function 
				that is called once the change&nbsp;completes
			</td>
		</tr>
	</tbody>
</table>

Returns a *jQuery object*.

---

#### `setTilt`

Changes the `tilt` of the Roundabout.

##### Usage

```javascript
.roundabout("setTilt", tilt)
.roundabout("setTilt", tilt, callback)
```

##### Parameters

<table class="parameters">
	<tbody>
		<tr>
			<td class="type">tilt</td>
			<td class="parameter">
				<code>tilt</code> is a value 
				typically between <code>-2.0</code> and 
				<code>10.0</code>
			</td>
		</tr>
		<tr>
			<td class="type">function</td>
			<td class="parameter">
				<code>callback</code> is a function 
				that is called once the change&nbsp;completes
			</td>
		</tr>
	</tbody>
</table>

Returns a *jQuery object*.

---

#### `adjustTilt`

Alters the `tilt` of the Roundabout by a given amount, either in positive or negative mounts.

##### Usage

```javascript
.roundabout("adjustTilt", delta)
.roundabout("adjustTilt", delta, callback)
```

##### Parameters

<table class="parameters">
	<tbody>
		<tr>
			<td class="type">tilt</td>
			<td class="parameter">
				<code>delta</code> is the amount by
				which the <code>tilt</code> will change
				(either positive or&nbsp;negative)
			</td>
		</tr>
		<tr>
			<td class="type">function</td>
			<td class="parameter">
				<code>callback</code> is a function 
				that is called once the change&nbsp;completes
			</td>
		</tr>
	</tbody>
</table>

Returns a *jQuery object*.

---

#### `animateToNearestChild`

Animates the Roundabout to the nearest child. This animation will not move the Roundabout if any child is already in focus.

##### Usage

```javascript
.roundabout("animateToNearestChild")
.roundabout("animateToNearestChild", callback)
.roundabout("animateToNearestChild", duration, easing, callback)
```

##### Parameters

<table class="parameters">
	<tbody>
		<tr>
			<td class="type">integer</td>
			<td class="parameter">
				<code>duration</code> is the length
				of time (in milliseconds) that the animation
				will take to&nbsp;complete; uses Roundabout’s
				configured <code>duration</code> if no value
				is set&nbsp;here
			</td>
		</tr>
		<tr>
			<td class="type">string</td>
			<td class="parameter">
				<code>easing</code> is the name of
				the easing function to use for&nbsp;movement;
				uses Roundabout’s configured <code>easing</code>
				if no value is set&nbsp;here
			</td>
		</tr>
		<tr>
			<td class="type">function</td>
			<td class="parameter">
				<code>callback</code> is a function 
				that is called once the change&nbsp;completes
			</td>
		</tr>
	</tbody>
</table>

Returns a *jQuery object*.

---

#### `animateToChild`

Animates the Roundabout to the given `childPosition`, which is a zero-based counter of children based on the order of markup.

##### Usage

```javascript
.roundabout("animateToChild", childPosition)
.roundabout("animateToChild", childPosition, callback)
.roundabout("animateToChild", childPosition, duration, easing)
.roundabout("animateToChild", childPosition, duration, easing, callback)
```

##### Parameters

<table class="parameters">
	<tbody>
		<tr>
			<td class="type">integer</td>
			<td class="parameter">
				<code>childPosition</code> is the
				zero-based child to which Roundabout 
				will&nbsp;animate
			</td>
		</tr>
		<tr>
			<td class="type">integer</td>
			<td class="parameter">
				<code>duration</code> is the length
				of time (in milliseconds) that the animation
				will take to&nbsp;complete; uses Roundabout’s
				configured <code>duration</code> if no value
				is set&nbsp;here
			</td>
		</tr>
		<tr>
			<td class="type">string</td>
			<td class="parameter">
				<code>easing</code> is the name of
				the easing function to use for&nbsp;movement;
				uses Roundabout’s configured <code>easing</code>
				if no value is set&nbsp;here
			</td>
		</tr>
		<tr>
			<td class="type">function</td>
			<td class="parameter">
				<code>callback</code> is a function 
				that is called once the change&nbsp;completes
			</td>
		</tr>
	</tbody>
</table>

Returns a *jQuery object*.

---

#### `animateToNextChild`

Animates the Roundabout to the next child element.

##### Usage

```javascript
.roundabout("animateToNextChild")
.roundabout("animateToNextChild", callback)
.roundabout("animateToNextChild", duration, easing)
.roundabout("animateToNextChild", duration, easing, callback)
```

##### Parameters

<table class="parameters">
	<tbody>
		<tr>
			<td class="type">integer</td>
			<td class="parameter">
				<code>duration</code> is the length
				of time (in milliseconds) that the animation
				will take to&nbsp;complete; uses Roundabout’s
				configured <code>duration</code> if no value
				is set&nbsp;here
			</td>
		</tr>
		<tr>
			<td class="type">string</td>
			<td class="parameter">
				<code>easing</code> is the name of
				the easing function to use for&nbsp;movement;
				uses Roundabout’s configured <code>easing</code>
				if no value is set&nbsp;here
			</td>
		</tr>
		<tr>
			<td class="type">function</td>
			<td class="parameter">
				<code>callback</code> is a function 
				that is called once the change&nbsp;completes
			</td>
		</tr>
	</tbody>
</table>

Returns a *jQuery object*.
Returns a *jQuery object*.

---

#### `animateToPreviousChild`

Animates the Roundabout to the previous child element.

##### Usage

```javascript
.roundabout("animateToPreviousChild")
.roundabout("animateToPreviousChild", callback)
.roundabout("animateToPreviousChild", duration, easing)
.roundabout("animateToPreviousChild", duration, easing, callback)
```

##### Parameters

<table class="parameters">
	<tbody>
		<tr>
			<td class="type">integer</td>
			<td class="parameter">
				<code>duration</code> is the length
				of time (in milliseconds) that the animation
				will take to&nbsp;complete; uses Roundabout’s
				configured <code>duration</code> if no value
				is set&nbsp;here
			</td>
		</tr>
		<tr>
			<td class="type">string</td>
			<td class="parameter">
				<code>easing</code> is the name of
				the easing function to use for&nbsp;movement;
				uses Roundabout’s configured <code>easing</code>
				if no value is set&nbsp;here
			</td>
		</tr>
		<tr>
			<td class="type">function</td>
			<td class="parameter">
				<code>callback</code> is a function 
				that is called once the change&nbsp;completes
			</td>
		</tr>
	</tbody>
</table>

Returns a *jQuery object*.

---

#### `animateToDelta`

Animates the Roundabout to the given amount of degrees away from its current `bearing` (either positive or negative degrees).

##### Usage

```javascript
.roundabout("animateToDelta", degrees)
.roundabout("animateToDelta", degrees, callback)
.roundabout("animateToDelta", degrees, duration, easing)
.roundabout("animateToDelta", degrees, duration, easing, callback)
```

##### Parameters

<table class="parameters">
	<tbody>
		<tr>
			<td class="type">float</td>
			<td class="parameter">
				<code>degrees</code> is the amount
				by which the <code>bearing</code> will change
				(either positive or&nbsp;negative)
			</td>
		</tr>
		<tr>
			<td class="type">integer</td>
			<td class="parameter">
				<code>duration</code> is the length
				of time (in milliseconds) that the animation
				will take to&nbsp;complete; uses Roundabout’s
				configured <code>duration</code> if no value
				is set&nbsp;here
			</td>
		</tr>
		<tr>
			<td class="type">string</td>
			<td class="parameter">
				<code>easing</code> is the name of
				the easing function to use for&nbsp;movement;
				uses Roundabout’s configured <code>easing</code>
				if no value is set&nbsp;here
			</td>
		</tr>
		<tr>
			<td class="type">function</td>
			<td class="parameter">
				<code>callback</code> is a function 
				that is called once the change&nbsp;completes
			</td>
		</tr>
	</tbody>
</table>

Returns a *jQuery object*.

---

#### `animateBearingToFocus`

Animates the Roundabout so that a given `bearing` ends at the configured `focusBearing`.

##### Usage

```javascript
.roundabout("animateBearingToFocus", degrees)
.roundabout("animateBearingToFocus", degrees, callback)
.roundabout("animateBearingToFocus", degrees, duration, easing)
.roundabout("animateBearingToFocus", degrees, duration, easing, callback)
```

##### Parameters

<table class="parameters">
	<tbody>
		<tr>
			<td class="type">float</td>
			<td class="parameter">
				<code>degrees</code> is a value
				between <code>0.0</code> and <code>359.9</code>
			</td>
		</tr>
		<tr>
			<td class="type">integer</td>
			<td class="parameter">
				<code>duration</code> is the length
				of time (in milliseconds) that the animation
				will take to&nbsp;complete; uses Roundabout’s
				configured <code>duration</code> if no value
				is set&nbsp;here
			</td>
		</tr>
		<tr>
			<td class="type">string</td>
			<td class="parameter">
				<code>easing</code> is the name of
				the easing function to use for&nbsp;movement;
				uses Roundabout’s configured <code>easing</code>
				if no value is set&nbsp;here
			</td>
		</tr>
		<tr>
			<td class="type">function</td>
			<td class="parameter">
				<code>callback</code> is a function 
				that is called once the change&nbsp;completes
			</td>
		</tr>
	</tbody>
</table>

Returns a *jQuery object*.

---

#### `startAutoplay`

Starts the Roundabout’s `autoplay` feature.

##### Usage

```javascript
.roundabout("startAutoplay")
.roundabout("startAutoplay", callback)
```

##### Parameters

<table class="parameters">
	<tbody>
		<tr>
			<td class="type">function</td>
			<td class="parameter">
				<code>callback</code> is a function 
				that is called after each autoplay
				animation&nbsp;completes
			</td>
		</tr>
	</tbody>
</table>

Returns a *jQuery object*.

---

#### `stopAutoplay`

Stops the Roundabout’s `autoplay` feature.

##### Usage

```javascript
.roundabout("stopAutoplay")
.roundabout("stopAutoplay", keepAutoplayBindings)
```

##### Parameters

<table class="parameters">
	<tbody>
		<tr>
			<td class="type">boolean</td>
			<td class="parameter">
				<code>keepAutoplayBindings</code> — when <code>true</code> —
				will not destroy any autoplay <code>mouseenter</code> and <code>mouseleave</code>
				event bindings that were set by <code>autoplayPauseOnHover</code>
			</td>
		</tr>
	</tbody>
</table>

Returns a *jQuery object*.

---

#### `toggleAutoplay`

Starts or stops the Roundabout’s `autoplay` feature (based upon its current state).

##### Usage

```javascript
.roundabout("toggleAutoplay")
.roundabout("toggleAutoplay", callback)
```

##### Parameters

<table class="parameters">
	<tbody>
		<tr>
			<td class="type">function</td>
			<td class="parameter">
				<code>callback</code> is a function 
				that is called after each autoplay
				animation&nbsp;completes
			</td>
		</tr>
	</tbody>
</table>

Returns a *jQuery object*.

---

#### `isAutoplaying`

Checks to see if the Roundabout’s `autoplay` feature is currently playing or not.

##### Usage

```javascript
.roundabout("isAutoplaying")
```

##### Parameters

*No parameters.*

Returns a *boolean*.

---

#### `changeAutoplayDuration`

Changes the length of time (in milliseconds) that the Roundabout’s `autoplay` feature waits between attempts to animate to the next child.

##### Usage

```javascript
.roundabout("changeAutoplayDuration", duration)
```

##### Parameters

<table class="parameters">
	<tbody>
		<tr>
			<td class="type">integer</td>
			<td class="parameter">
				<code>duration</code> is a length of
				time (in milliseconds) between attempts to have
				autoplay animate to the next child element
			</td>
		</tr>
	</tbody>
</table>

Returns a *jQuery object*.

---

#### `relayoutChildren`

Repositions child elements based on new contextual information. This is most helpful when the Roundabout element itself changes size and moving child elements within need readjusting.

##### Usage

```javascript
.roundabout("relayoutChildren")
```

##### Parameters

*No parameters.*

Returns a *jQuery object*.

---

#### `getNearestChild`

Gets the nearest child element to the `focusBearing`. This number is a zero-based counter based on order of markup.

##### Usage

```javascript
.roundabout("getNearestChild")
```

##### Parameters

*No parameters.*

Returns a *integer*.

---

#### `getChildInFocus`

Gets the child currently in focus. This number is a zero-based counter based on order of markup.

##### Usage

```javascript
.roundabout("getChildInFocus")
```

##### Parameters

*No parameters.*

Returns a *integer*.


### Hookable Events

Roundabout is equipped to trigger events on both the Roundabout element itself and the moving child elements.

#### `ready`

This event fires on the Roundabout element once it and its child elements have been initialized. It also fires on each child element once it has been initialized.

#### `focus`

This event fires on child elements that land in the `focusBearing` at the end of an animation. Will only fire if `triggerFocusEvents` is set to `true`.

#### `blur`

This event fires on child elements that move away from the `focusBearing` at the start of an animation. Will only fire if `triggerBlurEvents` is set to `true`.

#### `childrenUpdated`

This event fires on the Roundabout element when its child elements have been repositioned and are in place.

#### `reposition`

This event fires on child elements that have been repositioned and are in place.

#### `bearingSet`

This event fires on the Roundabout element when its `bearing` has been set.

#### `moveClockwiseThroughBack`

This event fires on moving child elements when an animation causes them pass through the point that is opposite (or 180°) from the `focusBearing` in a clockwise motion.

#### `moveCounterclockwiseThroughBack`

This event fires on moving child elements when an animation causes them to pass through the point that is opposite (or 180°) from the `focusBearing` in a counterclockwise motion.

#### `animationStart`

This event fires on the Roundabout element at the start of any animation.

#### `animationEnd`

This event fires on the Roundabout element at the end of any animation.

#### `autoplayStart`

This event fires on the Roundabout element when the `autoplay` feature starts.

#### `autoplayStop`

This event fires on the Roundabout element when the `autoplay` feature stops.