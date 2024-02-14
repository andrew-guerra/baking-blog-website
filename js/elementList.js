function transformLeft(button) {
    let $elementsList = getElementListElementsFromButton(button);
    let htmlList = []
    
    for(let i = 0; i < $elementsList.length; i++) {
        htmlList[i] = $elementsList.eq(i).html();
    }

    for(let i = $elementsList.length - 1; i >= 0; i--) {
        if(i == $elementsList.length - 1) {
            $elementsList.eq(i).html(htmlList[0]);
        } else {
            $elementsList.eq(i).html(htmlList[i + 1]);
        }
        
    }
}

function transformRight(button) {
    let $elementsList = getElementListElementsFromButton(button);
    let htmlList = []
    
    for(let i = 0; i < $elementsList.length; i++) {
        htmlList[i] = $elementsList.eq(i).html();
    }

    for(let i = 0; i < $elementsList.length; i++) {
        if(i == 0) {
            $elementsList.eq(i).html(htmlList[$elementsList.length - 1]);
        } else {
            $elementsList.eq(i).html(htmlList[i - 1]);
        }
        
    }
}

function getElementListElementsFromButton(button) {
    return $(button).parent().find(".element-list-elements").eq(0).children();
}