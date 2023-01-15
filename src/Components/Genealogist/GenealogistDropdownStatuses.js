import {
  StatusesOfBuildingTreeHelper,
  StatusesOfBuildingTreeHelperCyrillic
} from "../../common/helpers/statusesOfBuildingTreeHelper";
import classes from './styles/GenealogistDropdownMenu.module.css'
import { useDispatch } from "react-redux";
import { fetchGettingOrdering } from "../../common/slices/orderingSlices/thunks/fetchGettingOrdering";

const GenealogistDropdownStatuses = ({ onClickHandler, text, statusId }) => {
  return (
    <div className={classes.dropdown} id={statusId}>
      <button className={classes.dropbtn}>{text}</button>
      <div className={classes["dropdown-content"]}>
        <button onClick={(event) => onClickHandler(event, statusId)} value={StatusesOfBuildingTreeHelper.IN_PROCESS}
                type="button"> {StatusesOfBuildingTreeHelper.IN_PROCESS}</button>
        <button onClick={(event) => onClickHandler(event, statusId)} value={StatusesOfBuildingTreeHelper.IN_CHECKING}
                type="button">{StatusesOfBuildingTreeHelper.IN_CHECKING}</button>
        <button onClick={(event) => onClickHandler(event, statusId)} value={StatusesOfBuildingTreeHelper.IS_DONE}
                type="button">{StatusesOfBuildingTreeHelper.IS_DONE}</button>
      </div>
    </div>
  );
}
export default GenealogistDropdownStatuses