class DadosRequest {

    
  responseDataTest(){
    cy.request('https://run.mocky.io/v3/6ad7980e-5fc1-425e-a8a3-28f10358e270')
      .its('body')
      .then((dados) => {
        // Acesse os dados do JSON
        const name = dados.name;
        const email = dados.email;
        const phone = dados.phone;

        // Faça asserções nos dados
        expect(name).to.eq('Doug Caval');
        expect(email).to.eq('dougcavale.reis@gmail.com');
        expect(phone).to.eq('998360023');
      });
  }
   
  
    
    
  
    
  }
  
  export default DadosRequest
  