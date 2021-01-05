let count = 0;

function getHtml() {
    let htmlComplete = document.getElementById('description1');
    let htmlNew = document.getElementById('description2');
    let htmlFinal = document.getElementById('description3');

    const domparser = new DOMParser()
    var parsed = domparser.parseFromString(htmlComplete.value.toString(), 'text/html');

    // conteudo html
    let rootParsed = parsed.getRootNode();
    htmlNew.appendChild(rootParsed.body);


    if (count === 0) {
        component();
        htmlFinal.value = htmlNew.innerHTML;
        count++;
    }

}

function component() {
    let src = document.getElementsByTagName('img');
    let source = document.getElementsByTagName('source');

    let format = (data, type) => {

        for (let index = 0; index < data.length; index++) {
            if (type === 'img') {
                data[index].src  = "<?php echo $block->getViewFileUrl( images" + data[index].attributes['src'].value  + " '); ?>"
            }else {
                data[index].srcset  = "<?php echo $block->getViewFileUrl( images" + data[index].srcset  + " '); ?>"
            }
        }
    }

    format(src, 'img');
    format(source, 'source');
}