import TreeModal from "./UI/TreeModal";
import TreeFormCard from "./UI/TreeFormCard";
import classes from './styles/TreeAddSomeone.module.css'
import {useEffect, useState} from "react";
import {SomeoneHelper} from "../../common/helpers/SomeoneHelper";
import TreeAddNew from "./TreeAddNew";

const TreeAddSomeone = ({onClose}) => {
    const [who, setWho] = useState('')
    const setWhoHandler = event => setWho(event.target.value)

    useEffect(() => {
    }, [who])

    if (!Object.values(SomeoneHelper).includes(who)) {
        return (
            <TreeModal onClose={onClose}>
                <TreeFormCard>
                    <button value={SomeoneHelper.MALE} className={classes.who} onClick={setWhoHandler}>
                        Чоловіка
                    </button>
                    <button value={SomeoneHelper.FEMALE} className={classes.who} onClick={setWhoHandler}>
                        Жінку
                    </button>
                    <button value={SomeoneHelper.BROTHER} className={classes.who} onClick={setWhoHandler}>
                        Брата
                    </button>
                    <button value={SomeoneHelper.SISTER} className={classes.who} onClick={setWhoHandler}>
                        Сестру
                    </button>
                </TreeFormCard>
            </TreeModal>)
    }
    return (
        <TreeAddNew onClose={onClose} sex={who}/>
    );
}
export default TreeAddSomeone