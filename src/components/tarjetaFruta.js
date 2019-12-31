import  React  from 'react'

const name = 'Cituk Caamal'
const user = {
    name: 'San',
    age: 28,
    country: 'mexico'
}
// Este es un componente funcional con arrow functions
// const TarjetaFruta = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h3> {props.name} </h3>
//             <hr/>
//             <p> $ {props.price}</p>
//         </div>
//     )
// }

class TarjetaFruta extends React.Component {
    constructor() {
        super()
        // this.agregar = this.agregar.bind(this)
        // this.quitar = this.quitar.bind(this)

        //inicializadores de propiedad
        const METHODS = [
            'agregar',
            'quitar',
            'limpiar'
        ]
        // igual a lo hecho anterior con bind pero este recorre un array y hace el bind
        METHODS.forEach((method) => {
            this[method] = this[method].bind(this)
        })

        this.state = {
            cantidad: 25
        }
    }

    // state = {
    //     cantidad: 25
    // };
    agregar() {
        this.setState({
            cantidad: this.state.cantidad + 1
        })
    }
    quitar() {
        this.setState({
            cantidad: this.state.cantidad - 1
        })
    }

    limpiar() {
        this.setState({
            cantidad: 0
        })
    }

    //inicializadores de funciones, obliga a sacar el state del constructor y transforma las funciones de la clase en arrow functions
    // agregar = () => {
    //     this.setState({
    //         cantidad: this.state.cantidad + 1
    //     })
    // }
    // quitar = () => {
    //     this.setState({
    //         cantidad: this.state.cantidad - 1
    //     })
    // }

    // limpiar = () => {
    //     this.setState({
    //         cantidad: 0
    //     })
    // }

    render() {
        const hasItems = this.state.cantidad > 0
        const styles = {
            border: '1px solid black',
            marginBottom: '1em',
            borderRadius: '0.5em',
            padding: '1em',
            background: hasItems ? 'linear-gradient(45deg, black, #4a02f7)' : 'white',
            color: hasItems ? '#FFF' : '#000',
            transition: 'all 400ms ease-out'
        }
        return (
            <div style={styles}>
                <h3> {this.props.name} </h3>
                <hr />
                <div> Cantidad: {this.state.cantidad} </div>
                <button
                    onClick={this.agregar //() =>{
                        // this.state.cantidad = 100
                        // this.forceUpdate()
                        // this.setState({ cantidad: this.state.cantidad + 1 })
                    } //} 
                >+ </button>
                <button onClick={this.quitar} > - </button>
                <button onClick={this.limpiar} > Limpiar </button>

                <p> $ {this.props.price}</p>
                <p>
                    Total ${this.props.price * this.state.cantidad}
                </p>
            </div>
        )
    }
}

export default TarjetaFruta