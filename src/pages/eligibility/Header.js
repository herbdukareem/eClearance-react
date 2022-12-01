import { Divider} from "@mui/material";
import logo from "../../assets/images/logo_text.png";
export const Header = () => {
    return (
        <div>
             <p className="text-center">
                <img src={logo} alt="" width="35%" />
                    <br/><u class="appTitle">e-Clearance</u><Divider />
            </p> 
        </div>
    );
};