new Promise(function(e,n){document.addEventListener("click",function(){e("First promise was resolved")}),setTimeout(function(){n("First promise was rejected")},3e3)}),new Promise(function(e){document.addEventListener("click",function(){e("Second promise was resolved")}),document.addEventListener("contextmenu",function(){e("Second promise was resolved")})}),new Promise(function(e){var n=function(n){0===n.button&&(t=!0),2===n.button&&(o=!0),t&&o&&e("Third promise was resolved")},t=!1,o=!1;document.addEventListener("click",n),document.addEventListener("contextmenu",n)});
//# sourceMappingURL=index.e2608e79.js.map