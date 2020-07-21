function override(url){
    if (url.indexOf("licensing.bitmovin.com/licensing") > -1) return "/player/bm/license";
    return url;
}

var open = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function() {
        var url = override(arguments[1]);
        arguments[1] = url;
        return open.apply(this, arguments);

}

function base64DecodeUint8Array(input) {
    var raw = window.atob(input);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for(i = 0; i < rawLength; i++){
        array[i] = raw.charCodeAt(i);
    }

    return array;
}

function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
}

function _Base64(t) {
    var e;
    if ("string" == typeof t)
        e = t;
    else if (t instanceof ArrayBuffer)
        e = String.fromCharCode.apply(null, new Uint8Array(t));
    else {
        if (!(t instanceof Uint8Array))
            return "";
        e = String.fromCharCode.apply(null, t)
    }
    return window.btoa(e)
}
