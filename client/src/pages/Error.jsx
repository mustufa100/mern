import { NavLink } from "react-router-dom"
export const Error = ()=>{
    return(
        <>
        <section id="error-page">
            <div className="content">
                <h2 className="header">404</h2>
                <h4>sorry! page not found</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam illo laboriosam sapiente aspernatur minus doloremque id quisquam quae aut commodi modi vero, suscipit consectetur a. Quaerat illo esse inventore laborum!</p>
                <div className="btns">
                    <NavLink to="/">return home</NavLink>
                    <NavLink to="/contact">report problem</NavLink>
                </div>
            </div>
        </section>
        </>
    )
}