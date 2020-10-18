miApp.directive('mathJaxBind', function() {
  var refresh = function(element) {
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, element]);
  };
  return {
    link: function(scope, element, attrs) {
      scope.$watch(attrs.mathJaxBind, function(newValue,oldValue) {
        
        element.text("$ "+(math.parse(''+newValue).toTex()=='undefined'?'':math.parse(''+newValue).toTex())+"$");
        refresh(element[0]);
      });
    }
  };
})