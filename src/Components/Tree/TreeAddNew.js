import TreeModal from "./UI/TreeModal";
import TreeFormCard from "./UI/TreeFormCard";
import TreeInput from "./UI/TreeInput";
import {useRef} from "react";
import classes from "./styles/TreeRootElement.module.css";
import {createPatchOrPostBodyAddMore} from "../../common/helpers/getPatchDataForTree";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getUser} from "../../common/selectors/userSelectors/userDataSelector";
import postTreeLines from "../../common/handlers/treeHandlers/postTreeLines";

const TreeAddNew = ({onClose, sex}) => {

    const dispatch = useDispatch()
    const params = useParams()

    const getNewName = useRef()
    const getNewSurname = useRef()
    const getNewLastname = useRef()
    const getNewDateBirth = useRef()
    const getNewDateMarry = useRef()
    const getNewMotherSurname = useRef()
    const getNewPlaceOfBirth = useRef()
    const getNewDateOfDeath = useRef()
    const getNewDocuments = useRef()
    const getNewPlaceOfDeath = useRef()
    const getNewReasonOfDeath = useRef()
    const getIsDead = useRef()

    const onSubmitHandler = async event => {
        event.preventDefault()

        let body = createPatchOrPostBodyAddMore(
            getNewName,
            getNewSurname,
            getNewLastname,
            getNewDateBirth,
            getNewDateMarry,
            getNewMotherSurname,
            getNewPlaceOfBirth,
            getNewDateOfDeath,
            getNewPlaceOfDeath,
            getNewReasonOfDeath,
            getNewDocuments, getIsDead)
        body['sex'] = sex

        await dispatch(postTreeLines(params.treeId, body))
    }
    return (
        <TreeModal onClose={onClose}>
            <TreeFormCard>
                <form onSubmit={onSubmitHandler}>
                    <button type="button" onClick={onClose}>Закрити</button>
                    <div className={classes.inner}>
                        <TreeInput type="text" id="newFirstname" text="Ім'я"
                                   ref={getNewName}/>
                    </div>
                    <div className={classes.inner}>
                        <TreeInput type="text" id="newSurname" text={"Фамілія"}
                                   ref={getNewSurname}/>
                    </div>
                    <div className={classes.inner}>
                        <TreeInput type="text" id="newLastname" ext={"По-батькові"}
                                   ref={getNewLastname}/>
                    </div>
                    <div className={classes.inner}>
                        <TreeInput type="date" id="newDateOfBirth" text="Дата народження"
                                   ref={getNewDateBirth}/>
                    </div>
                    <div className={classes.inner}>
                        <TreeInput type="date" id={"newDateOfMarry"} text="Дата шлюбу"
                                   v ref={getNewDateMarry}/>
                    </div>
                    <div className={classes.inner}>
                        <TreeInput type="text" id="newMotherSurname"
                                   text="Прізвище по материнській лінії"
                                   ref={getNewMotherSurname}/>
                    </div>
                    <div className={classes.inner}>
                        <TreeInput type="text" id="newPlaceOfBirth"
                                   text="Місце народження"
                                   ref={getNewPlaceOfBirth}/>
                    </div>
                    <div className={classes.inner}>
                        <TreeInput type="date" id="newDateOfDeath"
                                   text="Дата смерті" ref={getNewDateOfDeath}/>
                    </div>
                    <div className={classes.inner}>
                        <TreeInput type="text" id="newPlaceOfDeath"
                                   text="Місце смерті"
                                   ref={getNewPlaceOfDeath}/>
                    </div>
                    <div className={classes.inner}>
                        <TreeInput type="text" id="newReasonOfDeath" text="Причина смерті"
                                   ref={getNewReasonOfDeath}/>
                    </div>
                    <TreeInput type="checkbox" id="isDeadCurrent" text="Помер" ref={getIsDead}/>
                    <button type="submit">Підтвердити</button>
                </form>
            </TreeFormCard>
        </TreeModal>
    )
}
export default TreeAddNew