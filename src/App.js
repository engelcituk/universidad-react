import  React, {Component } from 'react'
import './global.css'
// import TarjetaFruta from './components/TarjetaFruta';

// const App = () => (
//     <div>
//         {/* props vienen como atributos */}
//         <TarjetaFruta name='sandia' price={2.00} />
//         <TarjetaFruta name='naranja' price={5.00} />
//         <TarjetaFruta name='melon' price={1.00} />
//         <TarjetaFruta name='mango' price={3.00} />
//     </div>
// )

// export default App

// class Contador extends Component {
//     state = {
//         video: {
//             title: 'super video',
//             likes: 0
//         }
//     }

//     add = () => {
//         this.setState( (state) => ({
//             video:{
//                 ...state.video,
//                 likes: state.video.likes + 1
//             }
//         }))
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{ this.state.video.title}</h1>
//                 <button onClick={ this.add}>
//                     Clicks: ({this.state.video.likes})
//                 </button>
//             </div>
//         )
//     }
// }
// const App = () => (
//     <div>
//         <Contador/>
//     </div>
// )

/**uso de operador spread para pasar props */
// const Gato = (props) => (
//     <div>
//         <h1>Gato </h1>
//         <pre>
//             {
//              JSON.stringify(props, null, 4)  
//             }
//         </pre>
//     </div>
// )

// class App extends Component {
//     state = {
//         fueza: 100,
//         vidasRestantes:1000
//     }
//     render() {
//         const otrosDatos = {
//             raza: 'tropical',
//             peleasNocturnas: 300
//         }
//         return (
//             <div>
//                 <Gato
//                 name='Garfield'
//                 age='2 años'
//                 {...otrosDatos}
//                 {...this.state}
//                 />
//             </div>
//         )
//     }
// }
/**Manejando eventos de mouse*/
// const styles = {
//     height: '200px',
//     background: 'gold',
//     padding: '1em',
//     boxSizing: 'border-box'
// }
// class App extends Component {
//     state = {
//         x: 0,
//         y:0
//     }
//     manejador = (evento) => {
//         this.setState({
//             x : evento.clientX,
//             y: evento.clientY
//         })
//     }
//     render(){
//         return (
//             <div style={styles}
//                 onMouseMove = { this.manejador}            
//             >
//                 <div>
//                     x: { this.state.x}                    
//                 </div>
//                 <div>                    
//                     y: {this.state.y}
//                 </div>
//                 {/* <button
//                 onDoubleClick={this.manejador}
//                 >
//                     Dispara
//                 </button> */}
//             </div>
//         )
//     }
// }

/**Ejemplo de Eventos de Input*/
// class App extends Component {
//     state = {
//         text: '',
//         evento: ''
//     }
//     manejador = (evento) => {
//         console.log(evento.target.value)
//         this.setState({
//             text: evento.target.value,
//             evento : evento.type
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <input
//                 type='text'
//                 onChange={this.manejador}
//                 onCopy={this.manejador}
//                 onPaste={this.manejador}

//                 />
//                 <h1> { this.state.text} </h1>   
//                 <h2> {this.state.evento} </h2>                

//             </div>
//         )
//     }    
// }
/**Hay una diferencia entre Evento nativo DOM y Evento Sintético de React
 * en html todo es en minuscula, en react se usa camelCase
 */


// class PersistenciaEventos extends Component { // conservar eventos con react
//     state = {
//         color : 'blue'
//     }
//     handlerChange = (evento) => {
//         // evento.persist()
//         const color = evento.target.value

//         console.log(evento.target.value)

//         this.setState( state => ({
//             // color: evento.target.value
//             color
//         }))
//     }
//     render() {
//         return (
//             <div>
//                 <input
//                     type='text'
//                     onChange={this.handlerChange}                
//                 />
//                 <h1
//                 style = {{
//                     color: this.state.color
//                 }}
//                 > {this.state.color} </h1> 
//             </div>
//         )
//     }
// }
// const App = () => (
//     <div> 
//         <PersistenciaEventos/>       
//     </div>
// )
/**Crear Eventos personalizados con react
 */
class App extends Component {
    state = {
        name: ''
    }
    manejador = (name) => {
        // alert(name)
        this.setState({ name })
    }
    render() {
        return (
            <div className="box red">
                <Hijo
                    onSaluda={this.manejador}
                />
                <h2> {this.state.name} </h2>

            </div>
        )
    }
}
class Hijo extends Component { // conservar eventos con react
    manejadorClick = () => {
        this.props.onSaluda('Mensaje del hijo para el padre')
    }
    render() {
        return (
            <div className="box blue">
                <h2> hijo </h2>
                <button 
                    onClick= { 
                        this.manejadorClick
                    
                }
                >
                    Saluda
                </button>
            </div>
        )
    }
}

// Crear Eventos personalizados con React
export default App