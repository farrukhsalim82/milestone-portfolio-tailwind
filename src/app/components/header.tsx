import Link from "next/link"


export function Header(){
return (

<div className="header"> 
 
 
 <div className="header-links ">
 <ul className="header-buttons">
        
 <Link className="link" href={"/"}>
        <li >main</li>
        </Link>
        <Link href={"/about-me"} className="link">
        <li >About Me</li>
        </Link>
        <Link href={"/projects"} className="link">
        <li >Projects</li>
        </Link>
        <Link href={"/skills"} className="link">
        <li >Skills</li>
        </Link>
        <Link href={"/contacts"} className="link">
        <li >Contacts</li>
        </Link>        
    </ul>    
    </div>  
    
</div>
)
}