FindingPeenoise = function (element) {
    //credits to https://github.com/tabatkins/word-replacer/blob/master/Source/content_script.js
    var child, next;

    switch (element.nodeType) {
        case 1:
        case 9:
        case 11:
            child = element.firstChild;
            while (child) {
                next = child.nextSibling;
                FindingPeenoise(child);
                child = next;
            }
            break;

        case 3: // Text node
            ExecuteDePeenoise(element);
            break;
    }
};

function ExecuteDePeenoise(textNode) {
    var words = [
        {
            "originals": [/\bduterte\b/gi],
            "replacement": "My Butt"
        },
        {
            "originals": [/\bpnoy\b/gi, /\baquino\b/gi],
            "replacement": "Incompetence"
        },
        {
            "originals": [/\bputa\b/gi],
            "replacement": "Put Tank"
        },
        {
            "originals": [/\bbobo\b/gi],
            "replacement": "Jon Snow"
        },
        {
            "originals": [/\byellowtard\b/gi, "dilawan"],
            "replacement": "Coldplay Fan"
        }
    ];


    for (var i = 0; i < words.length; i++) {

        for (var k = 0; k < words[i].originals.length; k++) {
            textNode.nodeValue = textNode.nodeValue.replace(words[i].originals[k], words[i].replacement);
        }

    }


    //textNode.nodeValue  = textNode.nodeValue.replace(/\bDuterte\b/g, "My Butt");
}

document.addEventListener("DOMNodeInserted", function () {
    FindingPeenoise(document.body);
}, false);