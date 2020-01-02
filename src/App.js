import  React, {Component } from 'react'
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
const Gato = (props) => (
    <div>
        <h1>Gato </h1>
        <pre>
            {
             JSON.stringify(props, null, 4)  
            }
        </pre>
    </div>
)

class App extends Component {
    state = {
        fueza: 100,
        vidasRestantes:1000
    }
    render() {
        const otrosDatos = {
            raza: 'tropical',
            peleasNocturnas: 300
        }
        return (
            <div>
                <Gato
                name='Garfield'
                age='2 años'
                {...otrosDatos}
                {...this.state}
                />
            </div>
        )
    }
}

export default App