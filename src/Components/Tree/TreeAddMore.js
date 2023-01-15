import TreeInput from "./UI/TreeInput";

const TreeAddMore = ({
                       setIsOnAddMore,
                       entireData,
                       hasMore,
                       submitFormHandler,
                       getDateBirth,
                       getDateMarry,
                       getMotherSurname,
                       getPlaceOfBirth,
                       getDateOfDeath,
                       getPlaceOfDeath,
                       getDocuments,
                       getReasonOfDeath,
                       isDead
                     }) => {


  return (
    <form onSubmit={submitFormHandler}>
      {hasMore && <button onClick={setIsOnAddMore}>Назад</button>}
      {!entireData.dateOfBirth &&
        <TreeInput readOnly={false} type="date" id={entireData.dateOfBirth} text="Дата народження"
                   value={entireData.dateOfBirth} ref={getDateBirth}/>}
      {!entireData.dateOfMarry &&
        <TreeInput readOnly={false} type="date" id={entireData.date_of_marry} text="Дата шлюбу"
                   value={entireData.dateOfMarry} ref={getDateMarry}/>}
      {!entireData.motherSurname &&
        <TreeInput readOnly={false} type="text" id={entireData.motherSurname} text="Прізвище по материнській лінії"
                   value={entireData.motherSurname} ref={getMotherSurname}/>}
      {!entireData.placeOfBirth &&
        <TreeInput readOnly={false} type="text" id={entireData.placeOfBirth} text="Місце народження"
                   value={entireData.placeOfBirth} ref={getPlaceOfBirth}/>}
      {!entireData.dateOfDeath &&
        <TreeInput readOnly={false} type="date" id={entireData.dateOfDeath} text="Дата смерті"
                   value={entireData.dateOfDeath} ref={getDateOfDeath}/>}
      {!entireData.placeOfDeath && isDead &&
        <TreeInput readOnly={false} type="text" id={entireData.dateOfDeath} text="Місце смерті"
                   value={entireData.placeOfDeath} ref={getPlaceOfDeath}/>}
      {!entireData.reasonOfDeath && isDead &&
        <TreeInput readOnly={false} type="text" id={entireData.reasonOfDeath} text="Причина смерті"
                   value={entireData.reasonOfDeath} ref={getReasonOfDeath}/>}
      <TreeInput readOnly={false} type="file" id="documentOfRoot" text="Додати документ" ref={getDocuments}/>
      <button type="submit">Підтвердити</button>
    </form>
  )
}
export default TreeAddMore