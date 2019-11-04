const allowed = [
    "a", "b", "c", "d", "e", "f", "g", "h", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "0"];

function clean(element){
    return element
            .split("")
            .map(c=>c.charCodeAt(0)|0x20)
            .filter(c=>allowed.indexOf(String.fromCharCode(c))>-1);
}

module.exports = {
    isPalindrome: function(element){
        if(element === null || element === undefined){
            return false;
        }
        
        let chars = clean(element.toString());
        if(chars.length <= 1){
            return true;
        }
        var length = chars.length;
        while(length > 0){
            if (chars[chars.length - length] != chars[--length])
                return false;
        }
        return true;
    }
}