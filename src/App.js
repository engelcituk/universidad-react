import  React  from 'react'
import TarjetaFruta from './components/TarjetaFruta';

const App = () => (
    <div>
        {/* props vienen como atributos */}
        <TarjetaFruta name='sandia' price={2.00} />
        <TarjetaFruta name='naranja' price={5.00} />
        <TarjetaFruta name='melon' price={1.00} />
        <TarjetaFruta name='mango' price={3.00} />
    </div>
)

export default App