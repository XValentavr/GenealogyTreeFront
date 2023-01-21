import classes from './styles/TreeRootElement.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getInitialTree } from "../../common/selectors/treeSelectors/treeSelectors";
import TreeInput from "./UI/TreeInput";
import TreeButton from "./UI/TreeButton";
import { useEffect, useRef, useState } from "react";
import TreeShowMore from "./TreeShowMore";
import TreeChangeDataButton from "./UI/TreeChangeDataButton";
import patchTreeDataHandler from "../../common/handlers/treeHandlers/patchTreeDataHandler";
import treeInitialHandler from "../../common/handlers/treeHandlers/treeInitialHandler";
import { useParams } from "react-router-dom";

const TreeRootElement = ({ style }) => {
  const [showMore, setShowMore] = useState(false)
  const [addMore, setAddMore] = useState(false)
  const [readOnly, setReadOnly] = useState(true)
  const [isChanged, setIsChanged] = useState(false)
  const dispatch = useDispatch()

  const rootTree = useSelector(getInitialTree)
  const getName = useRef()
  const getSurname = useRef()
  const getLastname = useRef()

  const params = useParams()


  const onShowHandler = () => {
    setShowMore(!showMore)
  }

  const onAddHandler = () => {
    setAddMore(!addMore)
  }
  const closeHandler = () => {
    setShowMore(!showMore)
    setAddMore(!addMore)
  }

  const onChangeDataHandler = event => {
    event.preventDefault()
    setReadOnly(false)
  }

  const formTreeSubmitHandler = async event => {
    event.preventDefault()
    event.stopPropagation();

    const body = {
      firstName: (getName.current && getName.current.value) ? getName.current.value : null,
      surname: (getSurname.current && getSurname.current.value) ? getSurname.current.value : null,
      lastName: (getLastname.current && getLastname.current.value) ? getLastname.current.value : null,
    }

    await dispatch(patchTreeDataHandler(params.treeId, body))
    setReadOnly(true)
    setIsChanged(true)
  }

  useEffect(() => {
    dispatch(treeInitialHandler(params.treeId))
  }, [dispatch, isChanged])


  return (
    <div className={classes.outer} style={style}>
      <TreeButton onClickHandler={onShowHandler} type="button" id="ShowMore" text="Показати більше інформації"/>
      <form onSubmit={formTreeSubmitHandler}>
        <div className={classes.inner}>
          <TreeInput readOnly={readOnly} type="text" id={rootTree.firstName} text="Ім'я"
                     value={readOnly ? rootTree.firstName : ''} ref={getName}/>
          <TreeChangeDataButton onChangeData={onChangeDataHandler}/>
        </div>
        <div className={classes.inner}>
          <TreeInput readOnly={readOnly} type="text" id={rootTree.surname} text={"Фамілія"}
                     value={readOnly ? rootTree.surname : ''}
                     ref={getSurname}/>
          <TreeChangeDataButton onChangeData={onChangeDataHandler}/>
        </div>
        <div className={classes.inner}>
          <TreeInput readOnly={readOnly} type="text" id={rootTree.lastName} text={"По-батькові"}
                     value={readOnly ? rootTree.lastName : ''} ref={getLastname}/>
          <TreeChangeDataButton onChangeData={onChangeDataHandler}/>
        </div>
        {readOnly && <TreeButton onClickHandler={onAddHandler} type="button" id="add" text="Додати"/>}
        {!readOnly &&
          <>
            <button type="submit">Підтвердити</button>
            <button type="reset" onReset={onChangeDataHandler}>Відмінити</button>
          </>}
      </form>
      {showMore && <TreeShowMore onClose={closeHandler} entireData={rootTree}/>}
      {addMore && <>
      </>}
    </div>
  );
}
export default TreeRootElement