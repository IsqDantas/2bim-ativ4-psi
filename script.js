document.addEventListener('DOMContentLoaded', () => {
    // QUESTÃO 1
    ["livro", "paginas"].forEach(labelColuna => {
        const celulas = document.querySelectorAll(`td.${labelColuna}`)

        document.querySelector(`#header_${labelColuna}`).addEventListener("click", () => {
            celulas.forEach(celula => {
                celula.classList.add("bg-ativo")
            })
        })

        celulas.forEach((celula) => {
            celula.addEventListener("click", () => {
                celulas.forEach(celula => {
                    celula.classList.remove("bg-ativo")
                })
            })
        })
    })

    // QUESTÃO 2
    const btn = document.querySelector("button#criar_campos")
    const container = document.querySelector("#container_campos_de_texto")
    const select = document.querySelector("select#qtd_campos")
    btn.addEventListener("click", () => {
        const inputElement = document.createElement('input')
        inputElement.type = 'text'
        inputElement.className = "form-control"

        while (container.firstChild) {
            container.removeChild(container.firstChild)
        }

        for (let i = 0; i < select.value; i++) {
            container.appendChild(inputElement.cloneNode(true))
        }
    })

    // QUESTÃO 3
    const zoomIn = document.querySelector("button#zoom_in")
    const zoomOut = document.querySelector("button#zoom_out")

    const images = document.querySelectorAll("ul#animals img")

    zoomIn.addEventListener("click", () => {
        images.forEach(image => {
            image.classList.add("with-zoom")
        })
    })

    zoomOut.addEventListener("click", () => {
        images.forEach(image => {
            image.classList.remove("with-zoom")
        })
    })
})