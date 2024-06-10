
import { IoHomeSharp } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { MdOutlinePending,  MdPeople } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { GiHelp } from "react-icons/gi";
import { SlOrganization } from "react-icons/sl";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineSettings } from "react-icons/md";

export const Menus=[
    {   "id":1,
        "title":"Dashboard",
        "icon":<IoHomeSharp />,
        "path":'/dashboard'
    },
    {   "id":2,
        "title":"Create Leave",
        "icon":<VscAccount />,
        "path":'/CreateLeave' 
    },
    {
        "id":3,
        "title":"My leaves",
        "icon":<FaHistory />,
        "path":'/Myleaves'
    },
    {   "id":4,
        "title":"Leave History",
        "icon":<MdOutlinePending />,
        "path":'/LeaveHistory'
    },
    {
        "id":5,
        "title":"Employees",
        "icon":<MdPeople />,
        "path":'/employees'
    },
    {   "id":6,
        "title":"Reports",
        "icon":<IoMdStats />,
        "path":"/reports"
    },
    {   "id":7,
        "title":"Support",
        "icon":<GiHelp />,
        "path":'/support'
    },
    {   "id":8,
        "title":"Company",
        "icon":<SlOrganization />,
        "path":'/company'
    },
    {   "id":9,
    "title":"Settings",
    "icon":<MdOutlineSettings />,
    "path":'/Settings' 
},
    {   "id":10,
        "title":"My Account",
        "icon":<VscAccount />,
        "path":'/MyAccount' 
    },
    

]