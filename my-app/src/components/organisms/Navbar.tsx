import { NavLink } from "react-router-dom";
type Navbar_TP = {
    nav_id ?: string ,
    className?: string,
}
export default function Navbar({nav_id,className}:Navbar_TP) {
    return (
        <div className={`h-[40px] navbar flex gap-[10px] border-b border-[#EAEBF0] text-[14px] text-[#4A4646] ${className}`}>
            <NavLink className='' to={`/projects/${nav_id}/overview`}>Overview</NavLink>
            <NavLink className='' to={`/projects/${nav_id}/statistics`}>Statistics</NavLink>
            <NavLink className='' to={`/projects/${nav_id}/wbs`}>WBS</NavLink>
            <NavLink className='' to={`/projects/${nav_id}/milestones`}>MileStones</NavLink>
            <NavLink className='' to={`/projects/${nav_id}/inspections`}>Inspections</NavLink>
            <NavLink className='' to={`/projects/${nav_id}/reports`}>Reports</NavLink>
            <NavLink className='' to={`/projects/${nav_id}/reconcile`}>Reconcile</NavLink>
            <NavLink className='' to={`/projects/${nav_id}/materials`}>Materials</NavLink>
            <NavLink className='' to={`/projects/${nav_id}/services`}>Services</NavLink>
            <NavLink className='' to={`/projects/${nav_id}/members`}>Members</NavLink>
        </div>
    )
}
