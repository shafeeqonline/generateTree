$.fn.generateTree = function(data, nestedKey, toDisplay){
    var str = [];
    var traverse = function (_obj) {
        str[str.length] = "<ul>";
        (function (obj) {
            str[str.length] = "<li>" + obj[toDisplay];
            var t = obj[nestedKey];
            if (t instanceof Array && t.length > 0) {
                for (var i = 0, l = t.length; i < l; i++) {
                    traverse(t[i]);
                }
            }
            str[str.length] = "</li>";
        })(_obj);
        str[str.length] = "</ul>";
    };
    traverse(data);
    $(this).append(str.join(''));
}