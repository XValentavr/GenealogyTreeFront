import {
  StatusesOfBuildingTreeHelper,
  StatusesOfBuildingTreeHelperCyrillic
} from "../../common/helpers/statusesOfBuildingTreeHelper";
import classes from './styles/GenealogistDropdownMenu.module.css'
import { useDispatch } from "react-redux";
import { fetchGettingOrdering } from "../../common/slices/orderingSlices/thunks/fetchGettingOrdering";

const GenealogistDropdownStatuses = props => {
  const dispatch = useDispatch()
  const onClickHandler = event => {
    const status = event.target.value
    dispatch(fetchGettingOrdering({ status }))
  }
  return (
    <div className={classes.dropdown}>
      <button className={classes.dropbtn}>Dropdown</button>
      <div className={classes["dropdown-content"]}>
        <button onClick={onClickHandler} value={StatusesOfBuildingTreeHelper.IN_PROCESS}
                type="button"> {StatusesOfBuildingTreeHelperCyrillic.IN_PROCESS}</button>
        <button onClick={onClickHandler} value={StatusesOfBuildingTreeHelper.IN_CHECKING}
                type="button">{StatusesOfBuildingTreeHelperCyrillic.IN_CHECKING}</button>
        <button onClick={onClickHandler} value={StatusesOfBuildingTreeHelper.IS_DONE}
                type="button">{StatusesOfBuildingTreeHelperCyrillic.IS_DONE}</button>
      </div>
    </div>
  );
}
export default GenealogistDropdownStatuses