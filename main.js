
const axios = require('axios').default;

class Api
{
    //metodo estatico
    static async getAddress(cep)            //trato a promisse com o async await:
    {
        //o cep abaixo vem do argumento que vem na funcao estatica;
        const response = (await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data;          //await para o processo e aguarda o processamento desta requisicao, estou pedindo pra ele soh o parametro .data na requisicao ou .data.cep ou o atributo que eu quiser;
        return response;
    }

}

/*
- para chamar ele (como ele eh estatico, nao precisa instanciar):
nomeDaClasse.NomeDoMetodo("CEP");
*/

//na promisse eu posso executar um .then, ou um trycatch;
Api.getAddress("96030080").then(v => {console.log(v)});           //vou pegar o valor que esta vindo da minha promisse e dar um console.log;