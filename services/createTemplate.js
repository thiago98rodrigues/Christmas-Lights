export function elementFromHtlm(html){
    var template = document.createElement('template');
    template.innerHTML = html.trim()
    return template.content.firstElementChild;
}

