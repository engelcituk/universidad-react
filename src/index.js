import  React  from 'react'
import  ReactDOM from 'react-dom'

const name = 'Cituk Caamal'
const user = {
    name : 'San',
    age: 28,
    country: 'mexico'
}

const TarjetaFruta = (props) => {
    console.log(props)
    return (
        <div>
            <h3> {props.name} </h3>
            <hr/>
            <p> $ {props.price}</p>
        </div>
    )
}
// const App = <h1>Hola react *** {name} tengo { user.age} </h1>
const App = () => (
    <div>
        {/* props vienen como atributos */}
       <TarjetaFruta name='sandia'  price={2.00}/> 
        <TarjetaFruta name='naranja' price={5.00}/>
        <TarjetaFruta name='melon' price={1.00}/>
        <TarjetaFruta name='mango' price={3.00}/>
    </div>
)

const root = document.getElementById('root')

ReactDOM.render(<App/>, root)