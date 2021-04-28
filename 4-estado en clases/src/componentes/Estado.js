/*El estado no es mas que al conjunto de variables que va a tener nuestros componentes, es decir, el estado
no es mas que las variables que intervienen en la modificacion de nuestro componente como un <p>,<h1>,etc
y que valores tiene en el momento que se esta ejecutando.
el estado tiene tres caracteristicas importantes:
    1-es inmutable: es decir cuando se modifica el estado se genera una copia y luego se le agrega lo nuevo
    a esa copia y se genera un nuevo estado.
    2-No se puede modificar directamente:
    3-es asincrono
    
para hacer cambios hay que hacer uso del metodo setState()

State VS Props
Props- 
1-Se declaran al intanciar el componente
2-son atributo del componente,son inmutables
3-una vez renderizado el componente sus props no se pueden alterar

State-
1-se declara dentro del componente es decir no se le instancia como las props 
2-guarda la informacion del componente en un momento concreto 
3-puede cambiar setState()
4-el componente tiene el coontrol de su propio estado
*/
import React,{Component} from 'react';

//se puede pasar estados de padres a hijos osea a este  componente y le pasaremos el contador ya que todavia
//no vimos hooks y no podemos pasarl estado a las funciones entonces le pasamos el estado como propiedad
//a este componente
const EstadoAHijo=(props)=>{
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    );
}
//mas adelante con las hucks podremos usar funciones con estados y descartar las clases
class Estado extends Component{
    //si newcesitamos que este componente tenga un estado lo hacemos mediante el constructor super()
    constructor(props){
        super(props)//llamamos el constructo del meto que hereda Estado que es Component
        this.state={
            contador:0
        }

        //2-no se puede modificar directamente
        setInterval(()=>{
            //no se puede modificar directamente la propiedad contador el objeto state hay que hacerlo mediante
            //el metodo setState()
            // this.state.contador+1
            this.setState({
              contador:this.state.contador+1
            })
        },1000)
    }
    render(){
        return(
            <div>
                <h2>El state</h2>
                {/*al modificar un elemento como este P que cada tanto se modificara su contenido por el 
                setInterval por detras react se encarga de renderizar solo que se modifica y no todo de nuevo*/}
                <p>{this.state.contador}</p>
                {/*le pasamos el estado contador a un componente hijo llamado contadorHijo*/}
                <EstadoAHijo contadorHijo={this.state.contador}></EstadoAHijo>
            </div>
        );
    }
}

export default Estado