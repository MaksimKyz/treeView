export const list_to_tree = (list) => {
    let map = {}, node, roots = [], i;
    let copy = [...list]
    for (i = 0; i < copy.length; i += 1) {
        map[copy[i].key] = i;
        copy[i].nodes = [];
    }
    for (i = 0; i < copy.length; i += 1) {
        node = copy[i];
        if (node.parentId !== "0") {
            copy[map[node.parentId]].nodes.push(node);
        } else {
            roots.push(node);
        }
    }
    return roots;
}


export function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}


