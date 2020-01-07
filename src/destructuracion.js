const user1 = {
    name: 'Luis Gallegos',
    username: 'luxtro',
    country: 'Mexico',
    social: {
        facebook: 'https://fb...',
        twitter:'https://tw...'
    }
}

const saluda = (user) => {
    /*const name = user.name
    const country = user.country*/

    // destructuracion
    const {name, country, social }= user
    const { twitter } = social


    console.log(`hola soy ${name} y vivo en ${country}, mi twitter es ${twitter}`)
    

}

saluda(user1);