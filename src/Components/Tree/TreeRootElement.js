import classes from './styles/TreeRootElement.module.css'
import { useSelector } from "react-redux";
import { getInitialTree } from "../../common/selectors/treeSelectors/treeSelectors";
import TreeInput from "./UI/TreeInput";
import TreeButton from "./UI/TreeButton";
import { useState } from "react";
import TreeShowMore from "./TreeShowMore";

const TreeRootElement = props => {
  const [showMore, setShowMore] = useState(false)
  const [addMore, setAddMore] = useState(false)
  const rootTree = useSelector(getInitialTree)
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
  return (
    <div className={classes.outer}>
      <TreeButton onClickHandler={onShowHandler} type="button" id="ShowMore" text="Показати більше інформації"/>
      <TreeInput readOnly={true} type="text" id={rootTree.userName} text="Ім'я" value={rootTree.firstName}/>
      <TreeInput readOnly={true} type={"text"} id={rootTree.surname} text={"Фамілія"} value={rootTree.surname}/>
      <TreeInput readOnly={true} type={"text"} id={rootTree.last_name} text={"По-батькові"} value={rootTree.lastName}/>
      <TreeButton onClickHandler={onAddHandler} type="button" id="add" text="Додати"/>
      {showMore && <TreeShowMore onClose={closeHandler} entireData={rootTree}/>}
      {addMore && <>
      </>}
    </div>
  );
}
export default TreeRootElement