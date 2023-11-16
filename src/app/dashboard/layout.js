import SideNavBar from "../components/SideNavBar";

export default function Layout({ children }) {
  return (
  
  <div className="flex flex-col lg:flex-row h-screen">
    <SideNavBar childern={children}/>
  </div> 
  )
}
