import Head from 'next/head';
import A from '../components/A';

const MainContainer = ({children, keywords, pageTitle}) => {

    return (
        <>
            <Head>
                <meta keywords={"ulbi_tv nextjs " + keywords}></meta>
                <title>{pageTitle}</title>
            </Head>
            <div className="navBar">
                <A href={'/'} text={'Главная'} />
                <A href={'/users'} text={'Пользователи'} />
            </div>
            <style jsx>
                {`
                    .navBar {
                        background: orange;
                        padding: 15px;
                    }
                `}
            </style>
            <div>{children}</div>
        </>
    );
};


export default MainContainer;