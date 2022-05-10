const array=["parola","parola1","parola2","parola3","parola4","parola5"];
    const sottoarray=["pinco","pallino"];
    for(let i = 0; i < array.length; i++){
    const node = document.createElement("li");

    const textnode = document.createTextNode(array[i]);

    node.appendChild(textnode);

    document.getElementById("lista").appendChild(node);

    for (let i = 0; i < sottoarray.length; i++) {

        const provaul = document.createElement("ul");
        const node2 = document.createElement("li");
        const textnode2 = document.createTextNode(sottoarray[i]);

        node2.appendChild(provaul);
        provaul.appendChild(textnode2);

        document.getElementById("lista").appendChild(node2);

    };

}