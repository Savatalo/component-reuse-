import Retable from "./Retable" 

const cene = [199, 234, 345, 343, 123, 453, 999, 123, 86, 158]

export default function Prices() {
    const panic = cene.map((c) => (
        <tr>
          <td>{c}$</td> 
        </tr>
      ));

    return (
        <Retable data={panic}/>
    )
}