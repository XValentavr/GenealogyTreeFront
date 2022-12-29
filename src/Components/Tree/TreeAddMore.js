import TreeInput from "./UI/TreeInput";
import { useDispatch } from "react-redux";
import patchTreeDataHandler from "../../common/handlers/treeHandlers/patchTreeDataHandler";
import { useParams } from "react-router-dom";

const TreeAddMore = ({ setIsOnAddMore, entireData, onClose }) => {
  const dispatch = useDispatch()
  const params = useParams()
  const onSubmit = async event => {
    event.preventDefault()
    const newInfo = {
      date_of_marry: event.target.date_of_marry.value,
      date_of_death: event.target.date_of_death.value,
      mother_surname: event.target.mother_surname.value,
      document: event.target.documentOfRoot.value
    }
    await dispatch(patchTreeDataHandler(params.treeId, newInfo))
    onClose()
  }
  return (
    <form onSubmit={onSubmit}>
      <button onClick={setIsOnAddMore}>Назад</button>
      <TreeInput readOnly={false} type="date" id="date_of_marry" text="Дата шлюбу"
                 value={entireData.date_of_marry}/>
      <TreeInput readOnly={false} type="date" id="date_of_death" text="Дата смерті"
                 value={entireData.date_of_death}/>
      <TreeInput readOnly={false} type="text" id="mother_surname" text="Прізвище по материнській лінії"
                 value={entireData.mother_surname}/>
      <TreeInput readOnly={false} type="file" id="documentOfRoot" text="Додати документ"/>
      <button type="submit">Підтвердити</button>
    </form>
  )
}
export default TreeAddMore