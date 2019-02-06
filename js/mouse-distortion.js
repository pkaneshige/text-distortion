function createBlotterText(speed, volatility) {
  var text = new Blotter.Text("Inspire", {
    family: "Helvetica, sans-serif",
    size: 60,
    fill: "#fff",
    paddingRight: 50,
  });
  
  var material = new Blotter.LiquidDistortMaterial();
  
  material.uniforms.uSpeed.value = speed;
  
  material.uniforms.uVolatility.value = volatility;
  
  var blotter = new Blotter(material, {
    texts: text
  });
  
  var elem = document.getElementById("distorted-text");
  var scope = blotter.forText(text);
  
  elem.innerHTML = '';
  scope.appendTo(elem);
};

document.addEventListener("DOMContentLoaded", function() {
  createBlotterText(0, 0);
  
  var imageFrame = document.querySelector('.image-frame');
  
  imageFrame.addEventListener("mouseover", function() {
    createBlotterText(0.1, 0.3);
  });

  imageFrame.addEventListener("mouseleave", function() {
    createBlotterText(0, 0);
  });
});