 var char = '';
 var bosluq = '';
 var n = Number(prompt('Eded daxil edin.'))
 for (var i = 0; i < n; i++) {
     char = char + '#';
     for (var j = 0; j < n * 2 - (i + 1) * 2; j++) {
         bosluq = bosluq + '&nbsp;&nbsp;';
     }
     document.write(char + bosluq + char + '<br>');
     bosluq = '';
 }