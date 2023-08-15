
  
    let Articulos = []
    class articulo {
      constructor(Articulo, Categoria, Cantidad) {
        this.Articulo = Articulo;
        this.Categoria = Categoria;
        this.Cantidad = Cantidad;
      }
    }
    let miFormulario = document.getElementById("formulario")
    miFormulario.onsubmit = (e) => {
    e.preventDefault();
    const Articulo = e.target.children[1].value;
    const Categoria = e.target.children[3].value;
    const Cantidad = e.target.children[7].value;
    const nuevoArticulo = new articulo(Articulo,Categoria,Cantidad)

    Articulos.push(nuevoArticulo)

    localStorage.setItem("nuevoArticulo", JSON.stringify(nuevoArticulo));
    console.log(JSON.parse(localStorage.getItem("Articulos")));


    let container = document.createElement("div");
    container.innerHTML = `<h3>Articulo: ${e.target.children[1].value}</h3>
    <p> Categoria: ${e.target.children[3].value}</p>
    <p>Cantidad ${e.target.children[5].value}</p>
    `;
    document.body.append(container);
    const containerCreado = container
    localStorage.setItem("containerCreado", JSON.stringify(containerCreado));






  }
