import {useParams} from "react-router-dom";

function Survey() {
  const { housingNumber } = useParams()

  return (
    <div>
      <h1>Logement 🏢</h1>
      <h2>Logement numéro : {housingNumber}</h2>
    </div>
  )
}

export default Survey;