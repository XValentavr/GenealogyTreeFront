import TreeModal from "./UI/TreeModal";
import TreeFormCard from "./UI/TreeFormCard";
import TreeInput from "./UI/TreeInput";
import { useRef, useState } from "react";
import TreeAddMore from "./TreeAddMore";
import classes from "./styles/TreeRootElement.module.css";
import TreeChangeDataButton from "./UI/TreeChangeDataButton";
import { createPatchBodyAddMore } from "../../common/helpers/getPatchDataForTree";
import patchTreeDataHandler from "../../common/handlers/treeHandlers/patchTreeDataHandler";
import treeInitialHandler from "../../common/handlers/treeHandlers/treeInitialHandler";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../../common/selectors/userSelectors/userDataSelector";

const isDead = entireData => {
  if (!entireData.dateOfDeath) {
    return +(new Date().getFullYear()) - new Date(entireData.dateOfBirth).getFullYear() > 120
  }
  return new Date(entireData.dateOfDeath).getFullYear() - new Date(entireData.dateOfBirth).getFullYear() > 0
}
const TreeShowMore = ({ onClose, entireData }) => {
  const [readOnly, setReadOnly] = useState(true)

  const isDeadCurrent = isDead(entireData)

  let hasMore = !!(entireData.dateOfBirth || entireData.dateOfDeath || entireData.dateOfMarry ||
    entireData.motherSurname || entireData.placeOfBirth)
  const [isOnAddMore, setIsOnAddMore] = useState(false)

  const setIsOnAddMoreHandler = () => {
    setIsOnAddMore(!isOnAddMore)
  }
  const onChangeDataHandler = event => {
    event.preventDefault()
    setReadOnly(false)
  }
  const dispatch = useDispatch()
  const params = useParams()
  const getDateBirth = useRef()
  const getDateMarry = useRef()
  const getMotherSurname = useRef()
  const getPlaceOfBirth = useRef()
  const getDateOfDeath = useRef()
  const getDocuments = useRef()
  const currentUser = useSelector(getUser)
  const getPlaceOfDeath = useRef()
  const getReasonOfDeath = useRef()

  const onSubmitHandler = async event => {
    event.preventDefault()

    const body = createPatchBodyAddMore(getDateBirth,
      getDateMarry,
      getMotherSurname,
      getPlaceOfBirth,
      getDateOfDeath,
      getPlaceOfDeath,
      getReasonOfDeath)

    await dispatch(patchTreeDataHandler(params.treeId, body))
    dispatch(treeInitialHandler(currentUser.id))
    setIsOnAddMore(false)
    setReadOnly(true)
  }
  return (
    <TreeModal onClose={onClose}>
      <TreeFormCard>
        <form onSubmit={onSubmitHandler}>
          {!isOnAddMore && <>
            <button type="button" onClick={onClose}>Закрити</button>
            <div className={classes.inner}>
              {entireData.dateOfBirth &&
                <>
                  <TreeInput readOnly={readOnly} type="date" id={entireData.dateOfBirth} text="Дата народження"
                             value={readOnly ? entireData.dateOfBirth : ''} ref={getDateBirth}/>
                  <TreeChangeDataButton onChangeData={onChangeDataHandler}/>
                </>
              }
            </div>
            <div className={classes.inner}>
              {entireData.dateOfMarry &&
                <>
                  <TreeInput readOnly={readOnly} type="date" id={entireData.dateOfMarry} text="Дата шлюбу"
                             value={readOnly ? entireData.dateOfMarry : ''} ref={getDateMarry}/>
                  <TreeChangeDataButton onChangeData={onChangeDataHandler}/>
                </>
              }
            </div>
            <div className={classes.inner}>
              {entireData.motherSurname &&
                <>
                  <TreeInput readOnly={readOnly} type="text" id={entireData.motherSurname}
                             text="Прізвище по материнській лінії"
                             value={readOnly ? entireData.motherSurname : ''} ref={getMotherSurname}/>
                  <TreeChangeDataButton onChangeData={onChangeDataHandler}/>
                </>
              }
            </div>
            <div className={classes.inner}>
              {entireData.placeOfBirth &&
                <>
                  <TreeInput readOnly={readOnly} type="text" id={entireData.placeOfBirth} text="Місце народження"
                             value={readOnly ? entireData.placeOfBirth : ''} ref={getPlaceOfBirth}/>
                  <TreeChangeDataButton onChangeData={onChangeDataHandler}/>
                </>
              }
            </div>
            <div className={classes.inner}>
              {entireData.dateOfDeath &&
                <>
                  <TreeInput readOnly={readOnly} type="date" id={entireData.dateOfDeath} text="Дата смерті"
                             value={readOnly ? entireData.dateOfDeath : ''} ref={getDateOfDeath}/>
                  <TreeChangeDataButton onChangeData={onChangeDataHandler}/>
                </>
              }
            </div>
            {isDeadCurrent && <div className={classes.inner}>
              {entireData.placeOfDeath &&
                <>
                  <TreeInput readOnly={readOnly} type="text" id={entireData.placeOfDeath} text="Місце смерті"
                             value={readOnly ? entireData.placeOfDeath : ''} ref={getPlaceOfDeath}/>
                  <TreeChangeDataButton onChangeData={onChangeDataHandler}/>
                </>
              }
            </div>
            }
            {isDeadCurrent && <div className={classes.inner}>
              {entireData.reasonOfDeath &&
                <>
                  <TreeInput readOnly={readOnly} type="text" id={entireData.reasonOfDeath} text="Причина смерті"
                             value={readOnly ? entireData.reasonOfDeath : ''} ref={getReasonOfDeath}/>
                  <TreeChangeDataButton onChangeData={onChangeDataHandler}/>
                </>
              }
            </div>}
            {readOnly && hasMore &&
              <TreeInput readOnly={readOnly} type="checkbox" id="isDeadCurrent" text="Помер" checked={isDeadCurrent}/>}
            {readOnly && hasMore && <button type="button" onClick={setIsOnAddMoreHandler}>Додати інформацію</button>}
            {!readOnly &&
              <>
                <button type="submit">Підтвердити</button>
                <button type="reset" onReset={onChangeDataHandler}>Відмінити</button>
              </>}
          </>}
        </form>
        {(isOnAddMore || !hasMore) &&
          <TreeAddMore setIsOnAddMore={setIsOnAddMoreHandler}
                       hasMore={hasMore}
                       submitFormHandler={onSubmitHandler}
                       onClose={setIsOnAddMore}
                       entireData={entireData}
                       getDateMarry={getDateMarry}
                       getDateOfDeath={getDateOfDeath}
                       getDateBirth={getDateBirth}
                       getPlaceOfBirth={getPlaceOfBirth}
                       getMotherSurname={getMotherSurname}
                       getDocuments={getDocuments}
                       getPlaceOfDeath={getPlaceOfDeath}
                       getReasonOfDeath={getReasonOfDeath}
                       isDead={isDeadCurrent}
          />}
      </TreeFormCard>
    </TreeModal>
  )
}
export default TreeShowMore