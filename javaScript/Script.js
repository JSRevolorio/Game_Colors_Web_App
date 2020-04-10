
//Selectores 
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');
const btnInput =  document.getElementById('caja');
const bntNav = document.getElementById('icono');
const bntEnla = document.getElementById('enlaces');
const ULTIMO_NIVEL = 7;

let contador = 0;


//Eventos 
function mostrarAbout(){
    swal('Juego creado por JSCode');
}

//mostrar instrucciones
function mostrarInstrucciones(){
    swal('El juego muestra una secuencia de colores\n' +
          'que el jugador debe memorizar para luego\n' +
          'seleccionar.');
}

//Mostras
bntNav.addEventListener('click', ()=>{
    if(contador == 0){
        bntEnla.className = ('enlaces dos');
        contador = 1;
    }
    else{
        bntEnla.className = ('enlaces uno');
        contador = 0;
    }
})




//Clase Juego
class Juego {

    constructor() {
        this.inicializar();
        this.generarSecuencia();
        setTimeout(() => this.siguienteNivel(), 1000);
    }
    
    inicializar() {
      this.seleccionDeColor = this.seleccionDeColor.bind(this);
      this.toggleBtnEmpezar();

      this.nivel = 1;
      this.colores = {
          celeste,
          violeta,
          naranja,
          verde
      }
    }

    toggleBtnEmpezar(){
        if(btnEmpezar.classList.contains('hide')){
            btnEmpezar.classList.remove('hide');
        }
        else{
            btnEmpezar.classList.add('hide');
        }
    }

    generarSecuencia(){
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    siguienteNivel(){
        this.subNivel = 0;
        this.iluminarSecuencia();
        this.agregarEventoClick();
    }

    transformarNumeroAColor(num){
        switch (num) {
            case 0: return 'celeste';
            case 1: return 'violeta';
            case 2: return 'naranja';
            case 3: return 'verde';
        }
    }

    transformarColorANumero(color){
        switch (color) {
            case 'celeste': return 0;
            case 'violeta': return 1;
            case 'naranja': return 2;
            case 'verde':   return 3;
        }
    }

    iluminarSecuencia(){
        for (let i = 0; i < this.nivel; i++) {
            const color = this.transformarNumeroAColor(this.secuencia[i]);
            setTimeout(() => this.iluminarColor(color), 1000 * i);
        }
    }

    iluminarColor(color){
        this.colores[color].classList.add('light');
        setTimeout(() => this.apagarColor(color), 350);
    }

    apagarColor(color){
        this.colores[color].classList.remove('light');
    }

    agregarEventoClick(){
        this.colores.celeste.addEventListener('click', this.seleccionDeColor);
        this.colores.verde.addEventListener('click', this.seleccionDeColor);
        this.colores.violeta.addEventListener('click', this.seleccionDeColor);
        this.colores.naranja.addEventListener('click', this.seleccionDeColor);
    }

    elminarEventosClick(){
        this.colores.celeste.removeEventListener('click', this.seleccionDeColor);
        this.colores.verde.removeEventListener('click', this.seleccionDeColor);
        this.colores.violeta.removeEventListener('click', this.seleccionDeColor);
        this.colores.naranja.removeEventListener('click', this.seleccionDeColor);
    }

    seleccionDeColor(ev){
        const nombreColor = ev.target.dataset.color;
        const numeroColor = this.transformarColorANumero(nombreColor);
        this.iluminarColor(nombreColor);
        
        if(numeroColor === this.secuencia[this.subNivel]){
            this.subNivel++;

            if(this.subNivel === this.nivel){
               this.nivel++;
               this.elminarEventosClick();
               if(this.nivel === (ULTIMO_NIVEL +1 )){
                   this.ganoElJuego();
               }else{
                this.mostrarNiver(this.nivel);

                setTimeout(() => {
                    this.siguienteNivel();
                }, 2500);
               }
            }
        }
        else{
            this.perdioElJuego()
        }
    }

    perdioElJuego(){
        swal('Loser', 'Lo lamentamos, Perdido', 'error')
        .then(() => {
            this.inicializar();
         })
    }

    ganoElJuego(){
        swal('winner','Felicidades, Ganado', 'success')
        .then(() => {
            this.inicializar();
         })
    }

    mostrarNiver(nivel){
        document.form.caja.value = `Nivel #${nivel}`;
        btnInput.classList.add('ilumBtn');

        setTimeout(() => {
            btnInput.classList.remove('ilumBtn');
        }, 1500);

    }
}
  
  
  function empezarJuego() {
    window.juego = new Juego()
  }



