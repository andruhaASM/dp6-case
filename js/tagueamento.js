// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
    
(function (jQuery) {
	var submittedForm = false;
	var onceTelefone = false;
	var onceNome = false;
	var onceEmail = false;

    jQuery(document).ready(
    	function () {
    		  document.getElementById("entre_em_contato").addEventListener("click", function() {
    		  ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
    		  return true;
	
}
)
    		   document.getElementById("download_pdf").addEventListener("click", function() {
    		   ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
    		   return true;
    		  	
    		  }
    		  )
    		   if (location.pathname == "/analise.html")
    		   {

    		   	 document.getElementById("lorem").addEventListener("click", function() {
    		   	 ga('send', 'event', 'analise', 'ver_mais', 'lorem');
    		   	 return true;
    		   		
    		   	}
    		   	)

    		   	  document.getElementById("ipsum").addEventListener("click", function() {
    		   	  ga('send', 'event', 'analise', 'ver_mais', 'ipsum');
    		   	  return true;
    		   	 	
    		   	 }
    		   	 )

    		   	   document.getElementById("dolor").addEventListener("click", function() {
    		   	   ga('send', 'event', 'analise', 'ver_mais', 'dolor');
    		   	   return true;
    		   	  	
    		   	  }
    		   	  )


    		   }else if(location.pathname == "/sobre.html")
    		   {
    		   	 document.getElementById("nome").addEventListener("change", function() {
    		   	 var nome = document.getElementById("nome").value;
    		   	 if(nome != "" && nome.length > 5 && onceNome == false)
    		   	 {
    		   	 	ga('send', 'event', 'contato', 'nome', 'preencheu');
    		   	 	onceNome = true; // caso pessoa quiser modificar alguma informação e o evento não ser disparado em duplicidade.
    		   	 	return true;
    		   	 }

    		   		
    		   	}
    		   	)

    		   	  document.getElementById("email").addEventListener("change", function() {
    		   	  var email = document.getElementById("email").value;
    		   	  if( email != "" && email.length >5 && email.includes("@") && onceEmail == false)
    		   	  {
    		   	  	ga('send', 'event', 'contato', 'email', 'preencheu');
    		   	  	onceEmail = true;
    		   	  	return true;
    		   	  }
    		   	 	
    		   	 }
    		   	 )
    		   	   document.getElementById("telefone").addEventListener("change", function() {
    		   	   var telefone = document.getElementById("telefone").value;

    		   	   if (telefone != "" && onceTelefone == false) 
    		   	   {
    		   	   	ga('send', 'event', 'contato', 'telefone', 'preencheu');
    		   	   	onceTelefone = true; 
    		   	   	return true;

    		   	   }
    		   	  	
    		   	  }
    		   	  )

    		   	    document.getElementById("aceito").addEventListener("change", function() {
    		   	    ga('send', 'event', 'contato', 'aceito', 'preencheu');
    		   	    return true;
    		   	   	
    		   	   }
    		   	   )

    		   	    var mut = new MutationObserver(function(mutations, mut){
    		   	      if(submittedForm == false)
    		   	      {
    		   	      	ga('send', 'event', 'contato', 'enviado', 'enviado');
    		   	      	submittedForm = true; // registra apenas 1 envio por pessoa. 

    		   	      }

    		   	    });
    		   	    mut.observe(document.querySelector(".sobre"),{
    		   	      'attributes': true
    		   	    });

    		   }

}
)
    })(jQuery);

