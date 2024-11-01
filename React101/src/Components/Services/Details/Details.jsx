import './details.css'
import BlockChain from '../../Topics/BlockChain/BlockChain'
import DataAnalysis from '../../Topics/Data Analysis/DataAnalysis'
import Design from '../../Topics/Design/Design'
import { useParams } from 'react-router-dom'



const Details = () => {

  const { services } = useParams()

  let details;
  if (services === "BlockChain Developments") {
    details = <BlockChain />;
  } else if (services === "Data Analysis") {
    details = <DataAnalysis />
  } else {
    details = <Design />
  }

  return (
    <>
      {details}
    </>
  );
}

export default Details