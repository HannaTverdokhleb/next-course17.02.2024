import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
 
    return (
        <MainContainer keywords={"пользователи"} pageTitle={"Пользователи"}>
            <section>
                <h1>Пользователи</h1>
                <ul>
                    {users.map(user =>
                        <li key={user.id}>
                            <Link href={`/user/${user.id}`}>{user.name}</Link>
                        </li>
                        )}
                </ul>
            </section>
        </MainContainer>
    )
}


export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await res.json();

    return {
        props: {users},
    }
}

export default Users;