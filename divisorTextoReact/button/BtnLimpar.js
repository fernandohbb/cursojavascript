import { Button } from 'react-bootstrap';
export const BtnLimpar = () => {

    function limpar(){
        var limpar = document.querySelector("#dividir")
        limpar.value = '';
        location.reload();
    }

    return (
     <div>
      <Button variant="primary" className='btn-limpar' onClick={limpar}>Limpar</Button>
         </div>
    )
}