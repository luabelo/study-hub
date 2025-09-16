require('dotenv').config()
const axios = require('axios')
const {
    APPID,
    PROTOCOL,
    BASE_URL,
    Q,
    CNT,
    UNITS,
    IDIOM: LANG 
} = process.env

const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&q=${Q}&cnt=${CNT}&units=${UNITS}&lang=${LANG}`

async function comAsyncAwait(){
    try{
        const result = await axios.get(url)
        for(let previsao of result.data.list){
            console.log(`Sensação Térmica: ${previsao.main.feels_like}`)
            console.log(`Nível do Mar: ${previsao.main.sea_level}`)
        }
    }
    catch(e){
        console.log(e)
    }
}
comAsyncAwait()

// const teste = async() => {
//     return 1
// }
// teste().then(res => console.log(res))

// axios.get(url)
// .then((res) => {
//     console.log('Exibindo o corpo da resposta...')
//     console.log(res.data)
//     console.log('*******************************')
//     return res.data.list
// })
// .then((res) => {
//     console.log('Exibindo a lista inteira')
//     console.log(res)
//     console.log('*******************************')
//     return res
// })
// .then((res) => {
//     console.log('Iterando sobre a lista')
//     for(let previsao of res){
//         console.log(`dt: ${new Date(previsao.dt * 1000).toLocaleString()}`)
//         console.log(`Temp min: ${previsao.main.temp_min}`)
//         console.log(`Temp min: ${previsao.weather[0].description}`)
//     }
// })