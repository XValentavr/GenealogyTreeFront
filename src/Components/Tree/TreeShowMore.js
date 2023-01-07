import TreeModal from "./UI/TreeModal";
import TreeFormCard from "./UI/TreeFormCard";
import TreeInput from "./UI/TreeInput";
import { useState } from "react";
import TreeAddMore from "./TreeAddMore";


const TreeShowMore = ({ onClose, entireData }) => {
  const isDead = +(new Date().getFullYear()) - new Date(entireData.date_of_birth).getFullYear() > 120 && !entireData.date_of_death
  let hasMore = !!(entireData.date_of_birth || entireData.date_of_death || entireData.date_of_marry ||
    entireData.mother_surname || entireData.place_of_birth)
  const [isOnAddMore, setIsOnAddMore] = useState(false)

  const setIsOnAddMoreHandler = () => {
    setIsOnAddMore(!isOnAddMore)
  }
  return (
    <TreeModal onClose={onClose}>
      <TreeFormCard>
        {!isOnAddMore &&<>
          <button type="button" onClick={onClose}>Закрити</button>
          {entireData.date_of_birth &&
            <TreeInput readOnly={true} type="text" id={entireData.date_of_birth} text="Дата народження"
                       value={entireData.date_of_birth}/>}
          {entireData.date_of_marry &&
            <TreeInput readOnly={true} type="text" id={entireData.date_of_marry} text="Дата шлюбу"
                       value={entireData.date_of_marry}/>}
          {entireData.mother_surname &&
            <TreeInput readOnly={true} type="text" id={entireData.mother_surname} text="Прізвище по материнській лінії"
                       value={entireData.mother_surname}/>}
          {entireData.place_of_birth &&
            <TreeInput readOnly={true} type="text" id={entireData.place_of_birth} text="Місце народження"
                       value={entireData.place_of_birth}/>}
          {entireData.date_of_death &&
            <TreeInput readOnly={false} type="text" id={entireData.date_of_death} text="Дата смерті"
                       value={entireData.date_of_death}/>}
          {isDead && <TreeInput readOnly={true} type="checkbox" id="isDead" text="Помер" checked={isDead}/>}
          <button type="button" onClick={setIsOnAddMoreHandler}>Додати інформацію</button>
        </>}
        {(isOnAddMore || !hasMore) &&
          <TreeAddMore setIsOnAddMore={setIsOnAddMoreHandler} hasMore={hasMore} onClose={setIsOnAddMore}
                       entireData={entireData} closeAddMore={setIsOnAddMore}/>}
      </TreeFormCard>
    </TreeModal>
  )
}
export default TreeShowMore