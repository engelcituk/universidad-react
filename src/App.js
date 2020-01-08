import  React, {Component } from 'react'
import './global.css'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

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
// class App extends Component {
//     state = {
//         name: ''
//     }
//     manejador = (name) => {
//         // alert(name)
//         this.setState({ name })
//     }
//     render() {
//         return (
//             <div className="box red">
//                 <Hijo
//                     onSaluda={this.manejador}
//                 />
//                 <h2> {this.state.name} </h2>

//             </div>
//         )
//     }
// }
// class Hijo extends Component { 
//     manejadorClick = () => {
//         this.props.onSaluda('Mensaje del hijo para el padre')
//     }
//     render() {
//         return (
//             <div className="box blue">
//                 <h2> hijo </h2>
//                 <button 
//                     onClick= { 
//                         this.manejadorClick
                    
//                 }
//                 >
//                     Saluda
//                 </button>
//             </div>
//         )
//     }
// }

//  Renderizados condicionales con React
// class App extends Component {
   
//     render() {
//         return (
//             <div>    
//                 <Saludo saluda={true} name='Soy el nombre'/>
//             </div>
//         )
//     }
// }
// const Saludo = (props) => {
//     return(
//        <div >
//         <div>
//             { props.name && <strong>{props.name}</strong>}
//         </div>
//         {/* con ternario */}
//         { props.saluda 
//            ? (
//             <h1> Muchos saludos para ti</h1>
//            )
//            : (
//             <p> Woops, no saludos para ti</p>
//            )
//         }
//        </div>
//     )
//     /*if (props.saluda) {
//         return (
//             <h1> Muchos saludos para ti</h1>
//         )
//     }
//     return (
//         <p> Woops, no saludos para ti</p>
//     )*/
// }
/** Inyectando HTML en marcado de componente con React */
// class App extends Component {
//     estado = {
//         marcadoHtml: `
//             <h1> Muchos saludos para ti</h1>
//             <br>
//             <hr>
//             <a href="#">Algun link</a>
//         `
//     }
//     render() {
//         return (
//             <div>
//                 <div
//                     dangerouslySetInnerHTML = {{
//                         __html: this.estado.marcadoHtml
//                     }}
//                 >
//                 </div>
//                 {/* { this.estado.marcadoHtml}  */}
//             </div>
//         )
//     }
// }

// Introducción a la prop especial children
// const Title = (props) => {
//     const styles = {
//         padding: '0.3em',
//         color: '#FFF',
//         background: props.uiColor,
//         borderRadius:'0.3em',
//         textAlign: 'center',
//         fontSize: '50px'
//     }
//     return (
//         <h1 style={styles}>
//             {props.children}
//         </h1>
//     )
// }

// class App extends React.Component {
//     estado = {
//         uiColor: 'tomato'
//     }
    
//     render() {
//         const { uiColor } = this.estado
//         return (
//             <div>
//                 <Title
//                     uiColor={ uiColor}
//                     >
//                     Super <em>coder</em>
//                 </Title>
//             </div>
//         )
//     }
// }
// Elementos sin etiquetas con fragments
// const Computacion = () => (
//     <React.Fragment>
//         <li>Monitor</li>
//         <li>Teclado</li>
//         <li>Mouse</li>
//     </React.Fragment>
// )

// const Ropa = () => (
//     <React.Fragment>
//         <li>playera</li>
//         <li>Jeans</li>
//         <li>Shorts</li>
//     </React.Fragment>
// )

// class App extends React.Component {
   
//     render() {
//         return (
//             <div>
//                 <Computacion/>
//                 <Ropa/>
//             </div>
//         )
//     }
// }
// Entendiendo los portals de React

// class App extends Component {
//     state = {
//         visible: false,
//         num: 0
//     }
//     componentDidMount(){
//         setInterval(() => {
//             this.setState ( state => ({
//                 num: state.num + 1
//             }))            
//         }, 1000);
//     }
//     mostrar = () => {
//         this.setState({ visible:true})
//     }
//     cerrar = () => {
//         this.setState({ visible: false })
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.mostrar}>
//                     Mostrar
//                 </button>
//                 <Portalmodal visible={ this.state.visible }>
//                     <button onClick={this.cerrar}>
//                         Cerrar
//                     </button>
//                     <h1>
//                         Hola desde un modal {this.state.num}
//                     </h1>
//                 </Portalmodal>
//             </div>
//         )
//     }
// }
// class Portalmodal extends Component {

//     render() {
//         if(!this.props.visible) {
//             return null
//         }
//         const styles = {
//             width: '100%',
//             height: '100%',
//             position:'absolute',
//             top:'0',
//             left:'0',
//             background: 'linear-gradient(to top right, #667eea, #764ba2)',
//             opacity:'0.95',
//             color:'#FFF'
//         }
//         return ReactDOM.createPortal( (
//             <div style={styles}>
//                 {this.props.children}
//             </div>
//         ), document.getElementById('modal-root'))
    
//     }
// }

//  Controlar los datos de entrada con prop-types

class App extends Component {
    
    render() {
        return (
            <div>
                <Profile
                name= 'Luis Grte'
                bio= 'holi soy un desarrolador fullstack'
                email= 'emai@email.com'
                />
            </div>
        )
    }
}
class Profile extends Component {
    static propTypes = {
        name: PropTypes.string,
        bio: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number

    }
    render() {
        const { name, bio, email } = this.props
        return (
            <div>
                <h1>
                    {name}
                </h1>
                <p>
                    {bio}
                </p>
                <a href={`mailto:${email}`}>
                    {email}
                </a>
            </div>
        )
    }
}

export default App