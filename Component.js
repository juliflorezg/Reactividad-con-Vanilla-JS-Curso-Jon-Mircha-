const Component = (function (){
  // Crear el constructor del componente
  const Constructor = function (options){
    this.el = options.el // elemento en el DOM
    this.data = options.data // estado local del componente
    this.template = options.template 
  }

  // Agregar los metodos al prototipo del constructor del componente

  // Render UI
  Constructor.prototype.render = function (){
    const $el = document.querySelector(this.el)
    if(!$el) return
    $el.innerHTML = this.template(this.data)

    console.log(this.data)
  }

  // Actualizar el state de forma reactiva
  Constructor.prototype.setState = function (obj){
    for(let key in obj) {
      if(this.data.hasOwnProperty(key)){
        this.data[key] = obj[key]
      }
    }

    this.render()
  }

  // Obtenemos una copia inmutable del state
  Constructor.prototype.getState = function (){
    return JSON.parse(JSON.stringify(this.data))
  }
  return Constructor
})()