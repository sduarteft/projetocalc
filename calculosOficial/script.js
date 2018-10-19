


    var total;
    var somaTotalDeGramas;
    var somaGeral;



        // FUNÇÃO QUE EXECUTA APOS O CLIQUE

        function clica(){

            //SOMA POR PESSOA
            var homens = document.querySelector(".numero1").value;
            var mulheres = document.querySelector(".numero2").value;
            
             var resultado = parseInt(homens) + parseInt(mulheres);
             document.querySelector(".box-convidados").innerHTML = "São " + resultado + " convidados, " + homens + " Homens, " + mulheres + " Mulheres.";
            //DIVISÃO POR PESSOA
            

             //GRAMAS POR INDIVIDUO
             var gramaHomem = 550/1000;
             var gramaMulher = 550/1000;
            
 
            var multiplicaGramaHomem = parseInt(homens) * parseFloat(gramaHomem);
            var multiplicaGramaMulher = parseInt(mulheres) * parseFloat(gramaMulher);
            somaTotalDeGramas = multiplicaGramaHomem + multiplicaGramaMulher;
     
            document.querySelector(".somagramas").innerHTML  = somaTotalDeGramas.toFixed(2).replace('.',',') + " Kg";
           
      
     
             // PREÇO TOTAL 
          

        }
    



function operadorGlobal(){
  // Calculo Gato
  var gato = document.querySelector(".gato").value;
  var x = 200/1000;
  var totalGato = gato * x;

  // Calculo Cachorro
  var cachorro = document.querySelector(".cachorro").value;
  var y = 300/1000;
  var totalCachorro = cachorro * y;


  var leao = document.querySelector(".leao").value;
  var z = 500/1000;
  var totalleao = leao * z;




   somaGeral = totalCachorro + totalGato + totalleao;
  document.querySelector(".total-grama-carnes").innerHTML = somaGeral.toFixed(2);
    console.log(somaTotalDeGramas)
    console.log(somaGeral)

    if(somaGeral >= somaTotalDeGramas){
        $(".hide-span").show();
    }
    else{
        $(".hide-span").hide();
    }

}








 
   



   
 



   
       
    

        



 
    
    
        
   
   
  





    
    