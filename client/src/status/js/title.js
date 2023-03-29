// (function() {
//     var addEvent = function(object, type, callback) {
//       if (object == null || typeof object === "undefined") return;
//       if (object.addEventListener) {
//         object.addEventListener(type, callback, false);
//       } else if (object.attachEvent) {
//         object.attachEvent("on" + type, callback);
//       } else {
//         object["on" + type] = callback;
//       }
//     };
  
//     function detectMouseMove() {
//       var container = document.querySelector(".container");
//       var containerWidth = container.offsetWidth;
//       document.addEventListener("mousemove", function(e) {
//         var hover = document.querySelector(".hover");
//         hover.style.left = e.pageX + "px";
  
//         var leftSide = document.querySelector(".left-side");
//         leftSide.style.left = e.pageX + 75 + "px";
  
//         var rightSide = document.querySelector(".right-side");
//         var rightSideLeft = containerWidth - e.pageX;
//         rightSide.style.right = rightSideLeft + "px";
//       });
//     }
//     detectMouseMove();
  
//     function detectTouch() {
//       var container = document.querySelector(".container");
//       var containerWidth = container.offsetWidth;
//       document.addEventListener("touchmove", function(e) {
//         var hover = document.querySelector(".hover");
//         hover.style.left = e.pageX + "px";
  
//         var leftSide = document.querySelector(".left-side");
//         leftSide.style.left = e.pageX + 75 + "px";
  
//         var rightSide = document.querySelector(".right-side");
//         var rightSideLeft = containerWidth - e.pageX;
//         rightSide.style.right = rightSideLeft + "px";
//       });
//     }
//     detectTouch();
  
//     function detectInput(inputType) {
//       addEvent(window, "resize", function(event) {
//         var container = document.querySelector(".container");
//         var containerWidth = container.offsetWidth;
//         document.addEventListener(inputType, function(e) {
//           var hover = document.querySelector(".hover");
//           hover.style.left = e.pageX + "px";
  
//           var leftSide = document.querySelector(".left-side");
//           leftSide.style.left = e.pageX + 75 + "px";
  
//           var rightSide = document.querySelector(".right-side");
//           var rightSideLeft = containerWidth - e.pageX;
//           rightSide.style.right = rightSideLeft + "px";
//         });
//       });
//     }
  
//     detectInput("mousemove");
//     detectInput("touchmove");
//   })();
 