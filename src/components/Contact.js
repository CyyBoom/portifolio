import React from 'react';

function Contact() {

    return (    
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <a name="Contato">
                        <h3 class="contato">Contato</h3>
                    </a>
                </div>
            <div class="col-12">
                <p class="juntos">Vamos trabalhar juntos!?</p>
            </div>
        </div>
  
            <form>
                <div class="form-group">
                    <input type="nome" class="form-control" id="nome" placeholder="Nome"/>
                </div>

                <div class="form-group">
                    <input type="email" class="form-control" id="email" placeholder="E-mail"/>
                </div>

                <div class="form-group">
                    <textarea class="form-control" id="mensagem" rows="3" placeholder="Mensagem">
                    </textarea>
                </div>

                <input class="btn btn-light" type="submit" value="ENVIAR"/>
                <div class="clearfix">
                </div>
            </form>
        </div>

  
    );
  }
  
export default Contact;

  