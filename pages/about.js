import User from '../components/user.js'

export default function AboutPage(user){
    return (`
        <section id="about">
            <h1>ABOUT PAGE<h1> 
            ${User(user)}
        </section>
    `)
}