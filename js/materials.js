// Use Blotter to render undistorted text
var plainText = new Blotter.Text("Plain text rendered by Blotter", {
  family: "Helvetica, sans-serif",
  size: 24,
  fill: "#ffffff"
});

var plainMaterial = new Blotter.Material();

var plainBlotter = new Blotter(plainMaterial, {
  texts: plainText
});

var plainElement = document.getElementById("plain-text");
var plainScope = plainBlotter.forText(plainText);

plainScope.appendTo(plainElement);

// Use Blotter to render text distorted by a liquid effect
var liquidText = new Blotter.Text("Liquid text rendered by Blotter", {
  family: "Helvetica, sans-serif",
  size: 24,
  fill: "#ffffff",
  paddingLeft: 40,
  paddingRight: 40
});

var liquidMaterial = new Blotter.LiquidDistortMaterial();

// uSpeed value determines animation speed.
// Low = slow, high = quick, 0 = stopped
liquidMaterial.uniforms.uSpeed.value = 0.25;

// uVolatility determines effect volatility
// Low = less dramatic changes, high = more dramatic changes
// Probably want to keep this below 1.0.
liquidMaterial.uniforms.uVolatility.value = 0.10;

var liquidBlotter = new Blotter(liquidMaterial, {
  texts: liquidText
});

var liquidElement = document.getElementById("liquid-text");
var liquidScope = liquidBlotter.forText(liquidText);

liquidScope.appendTo(liquidElement);

// Use Blotter to render text distorted by a channel split effect
var channelText = new Blotter.Text("Channel split text rendered by Blotter", {
  family: 'Helvetica, sans-serif',
  size: 24,
  fill: "#ffc0cb"
});

var channelMaterial = new Blotter.ChannelSplitMaterial();

// uOffset determines the spread for RGB values
// Green remains in original position, while R
// and B spread in opposite directions away from
// one another along the axis descriped by uRotation.
channelMaterial.uniforms.uOffset.value = 0.08;

// uRotation describes the angle, in degrees, upon
// which channel splitting should occur.
channelMaterial.uniforms.uRotation.value = 45;

// uApplyBlur is a boolean telling the effect whether
// or not to blur the splitting of RGB values.
// Either 0.0 (false) or 1.0 (true)
channelMaterial.uniforms.uApplyBlur.value = 1.0;

// uAnimateNoise applies animation effects to the noise
// distortion of sampled RGB channels.
// Either 0.0 (false) or 1.0 (true)
channelMaterial.uniforms.uAnimateNoise.value = 1.0;

var channelBlotter = new Blotter(channelMaterial, {
  texts: channelText
});

var channelElement = document.getElementById("channel-split-text");
var channelScope = channelBlotter.forText(channelText);

channelScope.appendTo(channelElement);