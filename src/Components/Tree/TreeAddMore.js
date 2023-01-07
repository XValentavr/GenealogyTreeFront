import TreeInput from "./UI/TreeInput";
import { useDispatch, useSelector } from "react-redux";
import patchTreeDataHandler from "../../common/handlers/treeHandlers/patchTreeDataHandler";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import { getUser } from "../../common/selectors/userSelectors/userDataSelector";
import treeInitialHandler from "../../common/handlers/treeHandlers/treeInitialHandler";

const createPatchBody = data => {
  return Object.fromEntries(Object.entries(data).filter(([_, data]) => data != null))
}
const TreeAddMore = ({ setIsOnAddMore, entireData, onClose, hasMore, closeAddMore }) => {
  const dispatch = useDispatch()
  const params = useParams()
  const getDateBirth = useRef()
  const getDateMarry = useRef()
  const getMotherSurname = useRef()
  const getPlaceOfBirth = useRef()
  const getDateOfBirth = useRef()
  const getDocuments = useRef()
  const currentUser = useSelector(getUser)

  const onSubmit = async event => {
    event.preventDefault()
    const newInfo = {
      date_of_birth: (getDateBirth.current && getDateBirth.current.value) ? getDateBirth.current.value : null,
      date_of_marry: (getDateMarry.current && getDateMarry.current.value) ? getDateMarry.current.value : null,
      mother_surname: (getMotherSurname.current && getMotherSurname.current.value) ? getMotherSurname.current.value : null,
      place_of_birth: (getPlaceOfBirth.current && getPlaceOfBirth.current.value) ? getPlaceOfBirth.current.value : null,
      date_of_death: (getDateOfBirth.current && getDateOfBirth.current.value) ? getDateOfBirth.current.value : null,
      document: (getDocuments.current && getDocuments.current.value) ? getDocuments.current.value : null
    }
    const body = createPatchBody(newInfo)

    await dispatch(patchTreeDataHandler(params.treeId, body))
    await dispatch(treeInitialHandler(currentUser.id))
    closeAddMore(false)
  }
  return (
    <form onSubmit={onSubmit}>
      {hasMore && <button onClick={setIsOnAddMore}>Назад</button>}
      {!entireData.date_of_birth &&
        <TreeInput readOnly={false} type="date" id={entireData.date_of_birth} text="Дата народження"
                   value={entireData.date_of_birth} ref={getDateBirth}/>}
      {!entireData.date_of_marry &&
        <TreeInput readOnly={false} type="date" id={entireData.date_of_marry} text="Дата шлюбу"
                   value={entireData.date_of_marry} ref={getDateMarry}/>}
      {!entireData.mother_surname &&
        <TreeInput readOnly={false} type="text" id={entireData.mother_surname} text="Прізвище по материнській лінії"
                   value={entireData.mother_surname} ref={getMotherSurname}/>}
      {!entireData.place_of_birth &&
        <TreeInput readOnly={false} type="text" id={entireData.place_of_birth} text="Місце народження"
                   value={entireData.place_of_birth} ref={getPlaceOfBirth}/>}
      {!entireData.date_of_death &&
        <TreeInput readOnly={false} type="date" id={entireData.date_of_death} text="Дата смерті"
                   value={entireData.date_of_death} ref={getDateOfBirth}/>}
      <TreeInput readOnly={false} type="file" id="documentOfRoot" text="Додати документ" ref={getDocuments}/>
      <button type="submit">Підтвердити</button>
    </form>
  )
}
export default TreeAddMore