
const axios = require('axios').default;

class Api
{
    //metodo estatico
    static async getAddress(cep)            //trato a promisse com o async await:
    {
        //o cep abaixo vem do argumento que vem na funcao estatica;
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);          //await para o processo e aguarda o processamento desta requisicao;
        console.log("response: ", response);
    }

}

/*
- para chamar ele (como ele eh estatico, nao precisa instanciar):
nomeDaClasse.NomeDoMetodo("CEP");
*/

Api.getAddress("96030080");