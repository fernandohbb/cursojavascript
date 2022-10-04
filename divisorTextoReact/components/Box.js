import Table from 'react-bootstrap/Table';
import {MdContentCopy} from "react-icons/md";

export const Box = () => {
    return (
        <Table striped bordered hover variant="dark" id="tab">
        <thead>
          <tr>
            <th id="qnt">#</th>
            <th id="texto-dividido" >Texto Dividido</th>
            <th id="copiar-texto"><MdContentCopy  className='icone-copiar'/></th>
          </tr>
        </thead>
        <tbody id='tbody'>
        <tr> 
         
        </tr>
       
        </tbody>
      </Table>
      
    )
}